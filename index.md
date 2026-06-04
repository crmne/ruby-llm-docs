---
layout: home
title: Home
nav_order: 1
description: Build AI features the Ruby way
permalink: /
redirect_from:
  - /guides/
hero:
  logo:
    light: /assets/images/logotype.svg
    dark: /assets/images/logotype_dark.svg
    alt: RubyLLM
    width: 320
    height: 110
  text: 'Build AI features <span class="home-hero-highlight">the Ruby way<span class="home-hero-caret" aria-hidden="true"></span></span>'
  tagline: 'One <em class="home-hero-tagline-highlight">beautiful</em> Ruby framework for all major AI providers. Easily build chatbots, AI agents, RAG applications, content generators, and every AI workflow in between.'
  actions:
    - theme: brand
      text: Start coding
      link: /getting-started/
---

<section id="demo" class="home-section home-demo-section">
  <div class="home-section-inner">
    <div class="home-demo-frame" data-demo-video>
      <img class="home-demo-poster" src="{{ '/assets/images/home/demo-poster-figma.png' | relative_url }}" alt="" aria-hidden="true">
      <pre class="home-demo-terminal" aria-hidden="true"><code>Compile initial Tailwind build
        run rails tailwindcss:build from "."
=> tailwindcss v4.2.0

Done in 30ms
        <span class="term-green">run</span> bundle install --quiet
        <span class="term-green">run</span> bundle binstubs kamal
        <span class="term-green">run</span> bundle exec kamal init
Created configuration file in config/deploy.yml
Created .kamal/secrets file
Created sample hooks in .kamal/hooks
        <span class="term-red">force</span> .kamal/secrets
        <span class="term-red">force</span> config/deploy.yml
        <span class="term-green">rails</span> solid_cache:install solid_queue:install solid_cable:install
        <span class="term-green">create</span> config/cache.yml
        <span class="term-green">create</span> db/cache_schema.rb
        <span class="term-green">gsub</span> config/environments/production.rb
        <span class="term-green">create</span> config/queue.yml
        <span class="term-green">create</span> config/recurring.yml
        <span class="term-green">create</span> db/queue_schema.rb
        <span class="term-green">create</span> bin/jobs
        <span class="term-green">create</span> config/environments/production.rb
        <span class="term-green">create</span> db/cable_schema.rb
        <span class="term-red">force</span> config/cable.yml
~ <span class="term-cursor"></span></code></pre>
      <video class="home-demo-video" preload="metadata" playsinline>
        <source src="https://talks.paolino.me/rucoco-2026/demo.mp4" type="video/mp4">
      </video>
      <button class="home-play-button" type="button" aria-label="Play RubyLLM demo">
        <span aria-hidden="true"></span>
      </button>
      <img class="home-demo-avatar" src="{{ '/assets/images/founder/carmine.jpg' | relative_url }}" alt="" aria-hidden="true">
    </div>
  </div>
</section>

<section class="home-section home-band home-models-section">
  <div class="home-section-inner">
    <h2 class="home-heading">Change models, not your code</h2>
    <p class="home-lead">
      12 providers in core. More through supporting gems. Every OpenAI-compatible API. Thousands of local models through Ollama and GPUStack. Same code.
    </p>

    <div class="provider-icons" aria-label="Supported AI providers">
      <a href="https://anthropic.com" target="_blank" rel="noreferrer" class="provider-logo"><img src="{{ '/assets/images/providers/anthropic-text.svg' | relative_url }}" alt="Anthropic" class="logo-wide"></a>
      <a href="https://azure.microsoft.com/products/ai-services/openai-service" target="_blank" rel="noreferrer" class="provider-logo"><img src="{{ '/assets/images/providers/azureai-color.svg' | relative_url }}" alt="Azure AI" class="logo-mark"><img src="{{ '/assets/images/providers/azureai-text.svg' | relative_url }}" alt="" class="logo-text"></a>
      <a href="https://aws.amazon.com/bedrock/" target="_blank" rel="noreferrer" class="provider-logo"><img src="{{ '/assets/images/providers/bedrock-color.svg' | relative_url }}" alt="Amazon Bedrock" class="logo-mark"><img src="{{ '/assets/images/providers/bedrock-text.svg' | relative_url }}" alt="" class="logo-text"></a>
      <a href="https://deepseek.com" target="_blank" rel="noreferrer" class="provider-logo"><img src="{{ '/assets/images/providers/deepseek-color.svg' | relative_url }}" alt="DeepSeek" class="logo-mark"><img src="{{ '/assets/images/providers/deepseek-text.svg' | relative_url }}" alt="" class="logo-text"></a>
      <a href="https://ai.google.dev" target="_blank" rel="noreferrer" class="provider-logo"><img src="{{ '/assets/images/providers/gemini-color.svg' | relative_url }}" alt="Gemini" class="logo-mark"><img src="{{ '/assets/images/providers/gemini-text.svg' | relative_url }}" alt="" class="logo-text"></a>
      <a href="https://gpustack.ai" target="_blank" rel="noreferrer" class="provider-logo"><img src="{{ '/assets/images/providers/gpustack-logo.png' | relative_url }}" alt="GPUStack" class="logo-wide"></a>
      <a href="https://mistral.ai" target="_blank" rel="noreferrer" class="provider-logo"><img src="{{ '/assets/images/providers/mistral-color.svg' | relative_url }}" alt="Mistral AI" class="logo-mark"><img src="{{ '/assets/images/providers/mistral-text.svg' | relative_url }}" alt="" class="logo-text"></a>
      <a href="https://ollama.com" target="_blank" rel="noreferrer" class="provider-logo"><img src="{{ '/assets/images/providers/ollama.svg' | relative_url }}" alt="Ollama" class="logo-mark"><img src="{{ '/assets/images/providers/ollama-text.svg' | relative_url }}" alt="" class="logo-text"></a>
      <a href="https://openai.com" target="_blank" rel="noreferrer" class="provider-logo"><img src="{{ '/assets/images/providers/openai.svg' | relative_url }}" alt="OpenAI" class="logo-mark"><img src="{{ '/assets/images/providers/openai-text.svg' | relative_url }}" alt="" class="logo-text"></a>
      <a href="https://openrouter.ai" target="_blank" rel="noreferrer" class="provider-logo"><img src="{{ '/assets/images/providers/openrouter.svg' | relative_url }}" alt="OpenRouter" class="logo-mark"><img src="{{ '/assets/images/providers/openrouter-text.svg' | relative_url }}" alt="" class="logo-text"></a>
      <a href="https://perplexity.ai" target="_blank" rel="noreferrer" class="provider-logo"><img src="{{ '/assets/images/providers/perplexity-color.svg' | relative_url }}" alt="Perplexity" class="logo-mark"><img src="{{ '/assets/images/providers/perplexity-text.svg' | relative_url }}" alt="" class="logo-text"></a>
      <a href="https://cloud.google.com/vertex-ai" target="_blank" rel="noreferrer" class="provider-logo"><img src="{{ '/assets/images/providers/vertexai-color.svg' | relative_url }}" alt="Vertex AI" class="logo-mark"><img src="{{ '/assets/images/providers/vertexai-text.svg' | relative_url }}" alt="" class="logo-text"></a>
      <a href="https://x.ai" target="_blank" rel="noreferrer" class="provider-logo"><img src="{{ '/assets/images/providers/xai.svg' | relative_url }}" alt="xAI" class="logo-mark"><img src="{{ '/assets/images/providers/xai-text.svg' | relative_url }}" alt="" class="logo-text"></a>
    </div>
  </div>
</section>

<section id="code-examples" class="home-section home-code-section">
  <div class="home-section-inner">
    <h2 class="home-heading">Show me the code</h2>
  </div>

  <div class="home-code-grid" markdown="1">

```ruby
chat = RubyLLM.chat
chat.ask "What's the best way to learn Ruby?"
```
{: .home-code-card data-title="Just ask questions" }

```ruby
chat = RubyLLM.chat
chat.ask "What's in this image?", with: "ruby_conf.jpg"
chat.ask "What's happening in this video?", with: "video.mp4"
chat.ask "Describe this meeting", with: "meeting.wav"
chat.ask "Summarize this document", with: "contract.pdf"
chat.ask "Explain this code", with: "app.rb"
```
{: .home-code-card data-title="Analyze any file type" }

```ruby
chat = RubyLLM.chat
chat.ask "Analyze these files", with: ["diagram.png", "report.pdf", "notes.txt"]
```
{: .home-code-card data-title="Multiple files at once" }

```ruby
chat = RubyLLM.chat
chat.ask "Tell me a story about Ruby" do |chunk|
  print chunk.content
end
```
{: .home-code-card data-title="Stream responses" }

```ruby
RubyLLM.paint "a sunset over mountains in watercolor style"
```
{: .home-code-card data-title="Generate images" }

```ruby
RubyLLM.embed "Ruby is elegant and expressive"
```
{: .home-code-card data-title="Create embeddings" }

```ruby
RubyLLM.transcribe "meeting.wav"
```
{: .home-code-card data-title="Transcribe audio to text" }

```ruby
RubyLLM.moderate "Check if this text is safe"
```
{: .home-code-card data-title="Moderate content for safety" }

```ruby
chat = RubyLLM.chat
class Weather < RubyLLM::Tool
  desc "Get current weather"

  def execute(latitude:, longitude:)
    url = "https://api.open-meteo.com/v1/forecast?latitude=#{latitude}&longitude=#{longitude}&current=temperature_2m,wind_speed_10m"
    JSON.parse(Faraday.get(url).body)
  end
end

chat.with_tool(Weather).ask "What's the weather in Berlin?"
```
{: .home-code-card data-title="Let AI use your code" }

```ruby
class WeatherAssistant < RubyLLM::Agent
  model "gpt-5-nano"
  instructions "Be concise and always use tools for weather."
  tools Weather
end

WeatherAssistant.new.ask "What's the weather in Berlin?"
```
{: .home-code-card data-title="Define an agent with instructions + tools" }

```ruby
class ProductSchema < RubyLLM::Schema
  string :name
  number :price
  array :features do
    string
  end
end

chat = RubyLLM.chat
response = chat.with_schema(ProductSchema).ask "Analyze this product", with: "product.txt"
```
{: .home-code-card data-title="Get structured output" }

  </div>
</section>

<section class="home-section home-band home-community-section">
  <div class="home-section-inner">
    <h2 class="home-heading">Proven by the community</h2>
    <p class="home-lead">
      RubyLLM used in production, backed by a growing community and designed for real-world applications
    </p>

    <div class="home-stats" aria-label="RubyLLM community stats">
      <div class="home-stat-card">
        <strong>3.9K+</strong>
        <span>GitHub stars from Ruby developers</span>
      </div>
      <div class="home-stat-card">
        <strong>6.1M+</strong>
        <span>gem downloads across Ruby applications</span>
      </div>
      <div class="home-stat-card">
        <strong>13+</strong>
        <span>supported providers plus compatible APIs</span>
      </div>
    </div>
  </div>
</section>

<section class="home-section home-companies-section">
  <div class="home-section-inner">
    <h2 class="home-heading">Already shipping in production</h2>
    <p class="home-lead">
      Support bots, internal copilots, document pipelines, and customer-facing AI features are already being built with RubyLLM
    </p>

    <div class="home-company-logos" aria-label="Companies using RubyLLM">
      {% for company in site.data.company_logos_featured %}
        <div class="home-company-logo" data-company="{{ company.name | slugify }}">
          <img src="{{ company.src | relative_url }}" alt="{{ company.name }}">
        </div>
      {% endfor %}
    </div>

    <p class="home-small-note">
      RubyLLM rails-native AI framework is used by teams shipping AI in production<br>
      <a href="https://tally.so/r/3Na02p" target="_blank" rel="noreferrer">Get featured</a>
    </p>
  </div>
</section>

<section class="home-section home-band home-stack-section">
  <div class="home-section-inner">
    <h2 class="home-heading">The full stack for Ruby AI</h2>
    <p class="home-lead">
      A consistent way to build, scale, and ship AI features within the ruby ecosystem.<br>
      From support bots, internal tools, copilots to complex document pipelines
    </p>

    <div class="home-stack-links" aria-label="RubyLLM documentation areas">
      <a href="{{ '/chat/' | relative_url }}">chat</a>
      <a href="{{ '/streaming/' | relative_url }}">streaming</a>
      <a href="{{ '/tools/' | relative_url }}">tools</a>
      <a href="{{ '/agents/' | relative_url }}">agents</a>
      <a href="{{ '/chat/' | relative_url }}#getting-structured-output">structured outputs</a>
      <a href="{{ '/chat/' | relative_url }}#working-with-text-files">file attachments</a>
      <a href="{{ '/chat/' | relative_url }}#working-with-images">vision</a>
      <span class="home-stack-break" aria-hidden="true"></span>
      <a href="{{ '/chat/' | relative_url }}#working-with-audio">audio</a>
      <a href="{{ '/chat/' | relative_url }}#working-with-pdfs">documents</a>
      <a href="{{ '/image-generation/' | relative_url }}">image generation</a>
      <a href="{{ '/image-generation/' | relative_url }}#working-with-generated-images">image editing</a>
      <a href="{{ '/embeddings/' | relative_url }}">embeddings</a>
      <a href="{{ '/moderation/' | relative_url }}">moderation</a>
      <span class="home-stack-break" aria-hidden="true"></span>
      <a href="{{ '/audio-transcription/' | relative_url }}">transcription</a>
      <a href="{{ '/rails/' | relative_url }}">rails persistence</a>
      <a href="{{ '/rails/' | relative_url }}#streaming-responses-with-hotwireturbo">hotwire/turbo streaming</a>
      <a href="{{ '/rails/' | relative_url }}#setting-up-models-with-acts_as-helpers">activerecord integration</a>
      <a href="{{ '/async/' | relative_url }}">async workflows</a>
      <span class="home-stack-break" aria-hidden="true"></span>
      <a href="{{ '/agentic-workflows/' | relative_url }}">multi-agent workflows</a>
      <a href="{{ '/models/' | relative_url }}">model registry</a>
      <a href="{{ '/chat/' | relative_url }}#tracking-token-usage">usage and cost tracking</a>
      <a href="{{ '/models/' | relative_url }}#provider-specific-resolution">provider switching</a>
      <span class="home-stack-break" aria-hidden="true"></span>
      <a href="{{ '/configuration/' | relative_url }}#custom-openai-compatible-endpoints">openai-compatible apis</a>
    </div>
  </div>
</section>

<section class="home-section home-founder-section">
  <div class="home-section-inner">
    <h2 class="home-heading">Why RubyLLM exists?</h2>

    <article class="home-founder-card">
      <div class="home-founder-copy">
        <span class="home-quote-mark" aria-hidden="true">"</span>
        <p>
          I came back to Ruby in 2024 to build AI applications, and I could not find the framework I wanted. Everything felt too fragmented, too low-level, or too far from the Ruby way of doing things.
        </p>
        <p>
          So I built <strong>RubyLLM</strong>: one beautiful mental model for building AI features in Ruby and Rails. Chats, tools, agents, files, structured outputs, models, costs, and Rails integration - all designed to feel like they belong together.
        </p>
        <div class="home-founder-signoff">
          <strong>Carmine Paolino</strong>
          <span>Founder of RubyLLM</span>
        </div>
      </div>

      <div class="home-founder-media">
        <img src="{{ '/assets/images/founder/carmine.jpg' | relative_url }}" alt="Carmine Paolino">
        <img class="home-signature-image" src="{{ '/assets/images/founder/carmine-signature.png' | relative_url }}" alt="Carmine Paolino signature">
      </div>
    </article>
  </div>
</section>

<section class="home-section home-registry-section">
  <div class="home-section-inner">
    <h2 class="home-heading">Know your models, price your app</h2>
    <p class="home-lead">
      RubyLLM ships with a refreshable model registry, so production apps can compare capabilities, understand context windows, choose the right model, and price usage correctly
    </p>
  </div>

  <div class="home-model-table-wrap">
    <table class="home-model-table">
      <thead>
        <tr>
          <th>Model</th>
          <th>I/O</th>
          <th>Capabilities</th>
          <th>Context</th>
          <th>Standard pricing (1M tokens)</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>GPT-5.4</td>
          <td><strong>In:</strong> text, image, pdf;<br><strong>Out:</strong> text</td>
          <td>tools, structured output, reasoning, vision</td>
          <td>1.05M</td>
          <td><strong>In:</strong> $2.50, <strong>Out:</strong> $15.00,<br><strong>Cache:</strong> $0.25</td>
        </tr>
        <tr>
          <td>Claude Sonnet 4.6</td>
          <td><strong>In:</strong> text, image, pdf;<br><strong>Out:</strong> text</td>
          <td>tools, reasoning, vision, PDFs</td>
          <td>1M</td>
          <td><strong>In:</strong> $3.00, <strong>Out:</strong> $15.00,<br><strong>Cache:</strong> $0.30</td>
        </tr>
        <tr>
          <td>Gemini 3 Pro Preview</td>
          <td><strong>In:</strong> text, image, video, audio, pdf;<br><strong>Out:</strong> text</td>
          <td>tools, structured output, audio, video, PDFs</td>
          <td>1M</td>
          <td><strong>In:</strong> $2.00, <strong>Out:</strong> $12.00,<br><strong>Cache:</strong> $0.20</td>
        </tr>
        <tr>
          <td>Claude Opus 4.5</td>
          <td><strong>In:</strong> text, image, pdf;<br><strong>Out:</strong> text</td>
          <td>tools, reasoning, vision, PDFs</td>
          <td>200K</td>
          <td><strong>In:</strong> $5.00, <strong>Out:</strong> $25.00,<br><strong>Cache:</strong> $0.50</td>
        </tr>
        <tr>
          <td>Mistral Large</td>
          <td><strong>In:</strong> text, image;<br><strong>Out:</strong> text</td>
          <td>tools, structured output, batch, vision</td>
          <td>262K</td>
          <td><strong>In:</strong> $0.50, <strong>Out:</strong> $1.50,<br><strong>Cache:</strong> -</td>
        </tr>
        <tr>
          <td>DeepSeek Chat</td>
          <td><strong>In:</strong> text;<br><strong>Out:</strong> text</td>
          <td>tools, cached input pricing</td>
          <td>131K</td>
          <td><strong>In:</strong> $0.28, <strong>Out:</strong> $0.42,<br><strong>Cache:</strong> $0.03</td>
        </tr>
        <tr>
          <td>Sonar Pro</td>
          <td><strong>In:</strong> text, image;<br><strong>Out:</strong> text</td>
          <td>vision, search</td>
          <td>200K</td>
          <td><strong>In:</strong> $3.00, <strong>Out:</strong> $15.00,<br><strong>Cache:</strong> -</td>
        </tr>
      </tbody>
    </table>
  </div>

  <p class="home-model-table-note">
    The registry currently tracks <a href="{{ '/available-models/' | relative_url }}">1171 models</a> across 11 providers
  </p>
</section>

<section class="home-section home-band home-love-section" data-love-wall>
  <div class="home-section-inner">
    <h2 class="home-heading">Wall of Love</h2>
    <p class="home-lead">
      RubyLLM has become the AI layer people wish they had when they started building with Ruby.
    </p>
  </div>

  <div class="home-love-grid">
    <article class="home-love-card" data-love-card>
      <header><span aria-hidden="true">BC</span><strong>Build Canada (formerly Yuma.ai)</strong><small>Usage Survey</small></header>
      <p>It feels natural. At Yuma, serving over 100,000 end users, our unified AI interface had accumulated so much cruft. RubyLLM is so much nicer than all of that.</p>
      <cite>Build Canada (formerly Yuma.ai)</cite>
    </article>
    <article class="home-love-card" data-love-card>
      <header><span aria-hidden="true">BL</span><strong>BCA LTD</strong><small>Usage Survey</small></header>
      <p>We built our own quick and dirty wrapper, then your project came up and rocked it.</p>
      <cite>BCA LTD</cite>
    </article>
    <article class="home-love-card" data-love-card>
      <header><span aria-hidden="true">E</span><strong>Edrupt</strong><small>Usage Survey</small></header>
      <p>A very clean and beautiful abstraction for working with multiple LLM providers.</p>
      <cite>Edrupt</cite>
    </article>
    <article class="home-love-card" data-love-card>
      <header><span aria-hidden="true">NN</span><strong>Nodal Networks</strong><small>Usage Survey</small></header>
      <p>Our Langgraph agent was failing. I took a gamble and rebuilt it using RubyLLM. Not only was it far simpler, it performed better.</p>
      <cite>Nodal Networks</cite>
    </article>
    <article class="home-love-card" data-love-card>
      <header><span aria-hidden="true">P</span><strong>Primevise</strong><small>Usage Survey</small></header>
      <p>RubyLLM is pretty much the devise of this generation. Adding it to any application is pretty much a no-brainer.</p>
      <cite>Primevise</cite>
    </article>
    <article class="home-love-card" data-love-card>
      <header><span aria-hidden="true">O</span><strong>OpenRegulatory</strong><small>Usage Survey</small></header>
      <p>Just having a framework to structure all our LLM processes is gigantic value. Tool integration works like a charm.</p>
      <cite>OpenRegulatory</cite>
    </article>
    <article class="home-love-card" data-love-card>
      <header><span aria-hidden="true">HB</span><strong>Hadrien Blanc Innovation</strong><small>Usage Survey</small></header>
      <p>I delivered a lot of value to my customers because of your work.</p>
      <cite>Hadrien Blanc Innovation</cite>
    </article>
    <article class="home-love-card" data-love-card>
      <header><span aria-hidden="true">C</span><strong>Corepilot</strong><small>Usage Survey</small></header>
      <p>We got our proof of concept up in one day and the first beta in about a week. Really impressive.</p>
      <cite>Corepilot</cite>
    </article>
    <article class="home-love-card" data-love-card>
      <header><span aria-hidden="true">DA</span><strong>dScribe AI</strong><small>Usage Survey</small></header>
      <p>The speed of development and the closest thing to the AI SDK in JavaScript land. Easiest Rails integration.</p>
      <cite>dScribe AI</cite>
    </article>
    <article class="home-love-card" data-love-card>
      <header><span aria-hidden="true">BI</span><strong>Bunny Inc</strong><small>Usage Survey</small></header>
      <p>Super easy way to start adding magic to our app. Love the speed of improvements.</p>
      <cite>Bunny Inc</cite>
    </article>
    <article class="home-love-card" data-love-card>
      <header><span aria-hidden="true">LA</span><strong>LiteChat AI</strong><small>Usage Survey</small></header>
      <p>As project requirements grow, RubyLLM always seems one step ahead.</p>
      <cite>LiteChat AI</cite>
    </article>
    <article class="home-love-card" data-love-card>
      <header><span aria-hidden="true">C</span><strong>Crevio</strong><small>Usage Survey</small></header>
      <p>Love how Ruby-like it feels. The DSL is incredibly intuitive and follows all the conventions I would expect.</p>
      <cite>Crevio</cite>
    </article>
    <article class="home-love-card" data-love-card>
      <header><span aria-hidden="true">F</span><strong>Fracta</strong><small>Usage Survey</small></header>
      <p>I could not be happier for making this decision. I am very excited with the API the gem provides and the surrounding community.</p>
      <cite>Fracta</cite>
    </article>
    <article class="home-love-card" data-love-card>
      <header><span aria-hidden="true">SJ</span><strong>Startup Jobs</strong><small>Usage Survey</small></header>
      <p>Ruby-esque DSL and the right level of abstraction: composable, flexible on architecture, opinionated on lower-level implementation.</p>
      <cite>Startup Jobs</cite>
    </article>
    <article class="home-love-card" data-love-card>
      <header><span aria-hidden="true">C</span><strong>Cora</strong><small>Usage Survey</small></header>
      <p>Love deleting code when adding a library, and love the thought that goes into the gem.</p>
      <cite>Cora</cite>
    </article>
    <article class="home-love-card" data-love-card>
      <header><span aria-hidden="true">R</span><strong>ReelMoney</strong><small>Usage Survey</small></header>
      <p>I replaced my internal provider implementation with RubyLLM and it just worked nicely. Deleted a lot of code.</p>
      <cite>ReelMoney</cite>
    </article>
    <article class="home-love-card" data-love-card>
      <header><span aria-hidden="true">MS</span><strong>MadBomber Software</strong><small>Usage Survey</small></header>
      <p>Letting someone else manage the fast-moving infrastructure of the LLM API landscape allowed me to focus on applications.</p>
      <cite>MadBomber Software</cite>
    </article>
    <article class="home-love-card" data-love-card>
      <header><span aria-hidden="true">IE</span><strong>Intuition Education</strong><small>Usage Survey</small></header>
      <p>Seamless integration within the applications, and the ability to switch models and providers.</p>
      <cite>Intuition Education</cite>
    </article>
    <article class="home-love-card" data-love-card>
      <header><span aria-hidden="true">A</span><strong>Akira</strong><small>Usage Survey</small></header>
      <p>Simple Ruby idiomatic interface.</p>
      <cite>Akira</cite>
    </article>
    <article class="home-love-card" data-love-card>
      <header><span aria-hidden="true">OC</span><strong>OpenSource Connections</strong><small>Usage Survey</small></header>
      <p>Great examples, and I love the changelog.</p>
      <cite>OpenSource Connections</cite>
    </article>
    <article class="home-love-card" data-love-card>
      <header><span aria-hidden="true">GD</span><strong>GTM Delta</strong><small>Usage Survey</small></header>
      <p>It just works. I do not want to keep dealing with wrappers and fast-moving provider changes.</p>
      <cite>GTM Delta</cite>
    </article>
    <article class="home-love-card" data-love-card>
      <header><span aria-hidden="true">Y</span><strong>Yato</strong><small>Usage Survey</small></header>
      <p>My clients and my clients&#39; clients are very happy because we can iterate and improve our system quickly.</p>
      <cite>Yato</cite>
    </article>
    <article class="home-love-card" data-love-card>
      <header><span aria-hidden="true">IS</span><strong>INLOOP.STUDIO</strong><small>Usage Survey</small></header>
      <p>Simple API and welcoming developer community.</p>
      <cite>INLOOP.STUDIO</cite>
    </article>
    <article class="home-love-card" data-love-card>
      <header><span aria-hidden="true">C</span><strong>Cleary</strong><small>Usage Survey</small></header>
      <p>The DSL is fantastic. Very easy to use.</p>
      <cite>Cleary</cite>
    </article>
    <article class="home-love-card" data-love-card>
      <header><span aria-hidden="true">R</span><strong>Reddit / r/rails</strong><small>Community Post</small></header>
      <p>Just wanted to give a quick shout-out to the RubyLLM team - the work they have done is seriously impressive.</p>
      <cite>Reddit / r/rails</cite>
    </article>
    <article class="home-love-card" data-love-card>
      <header><span aria-hidden="true">R</span><strong>Reddit / r/rails</strong><small>Community Post</small></header>
      <p>It is genuinely useful and makes life a lot easier when dealing with various AI providers.</p>
      <cite>Reddit / r/rails</cite>
    </article>
    <article class="home-love-card" data-love-card>
      <header><span aria-hidden="true">R</span><strong>Reddit / r/rails</strong><small>Community Post</small></header>
      <p>Glad you called this out - I love this gem. Perfect encapsulation of Rails ethos too.</p>
      <cite>Reddit / r/rails</cite>
    </article>
    <article class="home-love-card" data-love-card>
      <header><span aria-hidden="true">R</span><strong>Reddit / r/rails</strong><small>Community Post</small></header>
      <p>We are using it almost exclusively for one of our projects. Generally, it is really well designed. We love it.</p>
      <cite>Reddit / r/rails</cite>
    </article>
    <article class="home-love-card" data-love-card>
      <header><span aria-hidden="true">R</span><strong>Reddit / r/ruby</strong><small>Community Post</small></header>
      <p>Love RubyLLM. The abstraction is beautiful and a work of art.</p>
      <cite>Reddit / r/ruby</cite>
    </article>
    <article class="home-love-card" data-love-card>
      <header><span aria-hidden="true">R</span><strong>Reddit / r/rails</strong><small>Community Post</small></header>
      <p>It is a fantastic abstraction. Switching models or even providers is a string swap.</p>
      <cite>Reddit / r/rails</cite>
    </article>
    <article class="home-love-card" data-love-card>
      <header><span aria-hidden="true">R</span><strong>Reddit / r/rails</strong><small>Community Post</small></header>
      <p>If I make any kind of real money with Homechorus I will sponsor your beautiful gem.</p>
      <cite>Reddit / r/rails</cite>
    </article>
    <article class="home-love-card" data-love-card>
      <header><span aria-hidden="true">R</span><strong>Reddit / r/rails</strong><small>Community Post</small></header>
      <p>So ridiculously beautiful.</p>
      <cite>Reddit / r/rails</cite>
    </article>
    <article class="home-love-card" data-love-card>
      <header><span aria-hidden="true">R</span><strong>Reddit / r/rails</strong><small>Community Post</small></header>
      <p>Such a solid gem. Loving it - thank you.</p>
      <cite>Reddit / r/rails</cite>
    </article>
    <article class="home-love-card" data-love-card>
      <header><span aria-hidden="true">G</span><strong>Giovapanasiti / X</strong><small>Community Post</small></header>
      <p>All of this a year ago was a nightmare to even imagine; now it is as easy as any other Rails feature.</p>
      <cite>Giovapanasiti / X</cite>
    </article>
  </div>

  <p class="home-small-note">
    RubyLLM Usage Survey and public community posts<br>
    Using RubyLLM in production? <a href="https://tally.so/r/3Na02p" target="_blank" rel="noreferrer">Share your story</a>
  </p>
</section>

<section class="home-section home-ready-section">
  <div class="home-section-inner">
    <h2 class="home-heading">Ready to try it?</h2>

    <div class="home-ready-grid">
      <a class="home-ready-card" href="{{ '/getting-started/' | relative_url }}">
        <span class="home-card-icon home-card-icon--book" aria-hidden="true"></span>
        <h3>Learn how to build with RubyLLM</h3>
        <span>Read the guides</span>
      </a>

      <a class="home-ready-card" href="{{ '/getting-started/' | relative_url }}">
        <span class="home-card-icon home-card-icon--rocket" aria-hidden="true"></span>
        <h3>Start building in minutes</h3>
        <span>Start coding</span>
      </a>

      <a class="home-ready-card" href="{{ '/rails/' | relative_url }}">
        <span class="home-card-icon home-card-icon--open" aria-hidden="true"></span>
        <h3>Explore real-world use cases</h3>
        <span>See examples</span>
      </a>
    </div>
  </div>
</section>

<footer class="home-footer">
  <div class="home-footer-inner">
    <a class="home-footer-logo" href="{{ '/' | relative_url }}" aria-label="RubyLLM home">
      <img class="home-footer-logo-light" src="{{ '/assets/images/logotype.svg' | relative_url }}" alt="RubyLLM">
      <img class="home-footer-logo-dark" src="{{ '/assets/images/logotype_dark.svg' | relative_url }}" alt="RubyLLM">
    </a>

    <p>
      Brought to you by <a href="https://paolino.me" target="_blank" rel="noreferrer">Carmine Paolino</a><br>
      maker of <a href="https://chatwithwork.com" target="_blank" rel="noreferrer">Chat with Work</a> - Your AI coworker
    </p>

    <nav class="home-footer-nav" aria-label="Footer">
      <a href="{{ '/' | relative_url }}">Home</a>
      <a href="{{ '/getting-started/' | relative_url }}">Guide</a>
      <a href="https://github.com/crmne/ruby_llm" target="_blank" rel="noreferrer">GitHub</a>
      <a href="https://paolino.me" target="_blank" rel="noreferrer">Blog</a>
    </nav>
  </div>
</footer>
