# frozen_string_literal: true

require 'pathname'

module RubyLLMDocs
  module VersionLabel
    module_function

    AUTO_VALUES = %w[auto ruby_llm_auto].freeze
    VERSION_FILE = 'lib/ruby_llm/version.rb'

    def apply(site)
      versions = site.data['versions']
      return unless versions.is_a?(Hash)

      current = versions['current'] || versions[:current]
      return unless auto_value?(current)

      resolved = resolve_rubyllm_version(site)
      return unless resolved

      resolved_label = "v#{resolved}"
      versions['current'] = resolved_label
      versions[:current] = resolved_label if versions.key?(:current)

      items = versions['items'] || versions[:items]
      return unless items.is_a?(Array) && !items.empty?

      first_item = items.first
      return unless first_item.is_a?(Hash)

      first_item['title'] = "#{resolved_label} (current)"
      first_item['url'] = '/' if first_item['url'].to_s.strip.empty?
    rescue StandardError => e
      Jekyll.logger.warn('ruby-llm-version', "Unable to resolve RubyLLM version: #{e.message}")
    end

    def auto_value?(value)
      AUTO_VALUES.include?(value.to_s.strip.downcase)
    end

    def resolve_rubyllm_version(site)
      from_loaded_constant || from_installed_gem || from_version_file(site)
    end

    def from_loaded_constant
      return nil unless defined?(::RubyLLM::VERSION)

      normalize_version(::RubyLLM::VERSION)
    end

    def from_installed_gem
      spec = Gem::Specification.find_all_by_name('ruby_llm').max_by(&:version)
      return nil unless spec

      normalize_version(spec.version.to_s)
    rescue StandardError
      nil
    end

    def from_version_file(site)
      candidate_version_files(site).each do |version_file|
        next unless version_file.file?

        content = version_file.read
        extracted = content[/VERSION\s*=\s*['"]([^'"]+)['"]/, 1]
        normalized = normalize_version(extracted)
        return normalized if normalized
      end

      nil
    rescue StandardError
      nil
    end

    def candidate_version_files(site)
      roots = []
      configured_root = site.config['ruby_llm_root']
      roots << Pathname.new(configured_root) if configured_root && !configured_root.to_s.strip.empty?

      env_root = ENV['RUBY_LLM_ROOT']
      roots << Pathname.new(env_root) if env_root && !env_root.strip.empty?

      roots << Pathname.new(File.expand_path('~/Work/ruby_llm'))

      cursor = Pathname.new(site.source).expand_path
      loop do
        roots << cursor
        break if cursor.root?

        cursor = cursor.parent
      end

      roots.uniq.map { |root| root.join(VERSION_FILE) }
    end

    def normalize_version(value)
      version = value.to_s.strip
      return nil if version.empty?

      version.sub(/\Av/i, '')
    end
  end
end

Jekyll::Hooks.register :site, :pre_render do |site|
  RubyLLMDocs::VersionLabel.apply(site)
end
