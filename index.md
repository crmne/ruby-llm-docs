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

<section class="home-section home-definition-section">
  <div class="home-section-inner">
    <h2 class="home-heading">What is RubyLLM?</h2>
    <p class="home-lead">
      RubyLLM is a complete AI framework which gives you one beautiful interface for models, providers, chats, streaming, agents, tools, files, structured outputs, Rails persistence, usage, costs and model capabilities
    </p>

    <div class="home-feature-grid">
      <article class="home-feature-card">
        <span class="home-card-icon home-card-icon--ruby" aria-hidden="true"></span>
        <h3>Ruby-native first</h3>
        <p>Fully optimized for the Ruby stack and patterns</p>
      </article>
      <article class="home-feature-card">
        <span class="home-card-icon home-card-icon--rails" aria-hidden="true"></span>
        <h3>Rails-native as well</h3>
        <p>Fits into Rails projects with minimal setup</p>
      </article>
      <article class="home-feature-card">
        <span class="home-card-icon home-card-icon--rocket" aria-hidden="true"></span>
        <h3>Plain Ruby support</h3>
        <p>It's built to feel like a core part of the Rails ecosystem</p>
      </article>
      <article class="home-feature-card">
        <span class="home-card-icon home-card-icon--ready" aria-hidden="true"></span>
        <h3>Production-ready</h3>
        <p>Tools, agents, structured outputs and cost tracking</p>
      </article>
      <article class="home-feature-card">
        <span class="home-card-icon home-card-icon--open" aria-hidden="true"></span>
        <h3>Open source</h3>
        <p>Built in public with transparent development</p>
      </article>
    </div>

    <div class="home-actions home-actions--center">
      <a class="home-button home-button--ghost" href="https://github.com/crmne/ruby_llm" target="_blank" rel="noreferrer">Github</a>
      <a class="home-button home-button--solid" href="{{ '/getting-started/' | relative_url }}">Start coding</a>
    </div>
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

<section id="code-examples" class="home-section home-code-section">
  <div class="home-section-inner">
    <h2 class="home-heading">Everything you need, with Ruby's elegance</h2>
    <p class="home-lead">
      Start with one line. Grow into tools, agents, structured outputs, Rails persistence, multimodal workflows,<br>
      and cost-aware production apps &mdash; without changing mental models
    </p>
  </div>

  <div class="home-code-grid">
<article class="home-code-card" data-code-example="ask" markdown="1">

### Ask anything

```ruby
RubyLLM.chat.ask "Explain Ruby blocks in 3 lines"
```

<div class="home-code-actions">
  <button class="home-run-button" type="button" aria-label="Run Ask anything example"><span aria-hidden="true"></span>Run</button>
  <button class="home-compare-button" type="button" data-compare-example="ask">Compare</button>
  <button class="home-copy-button" type="button" aria-label="Copy Ask anything example"></button>
</div>
<div class="home-code-result" hidden>Ruby blocks are chunks of code passed to methods. They let APIs yield work to callers, making each, map, callbacks, and DSLs feel natural.</div>
</article>

<article class="home-code-card" data-code-example="stream" markdown="1">

### Stream responses

```ruby
chat.ask "Tell me a story about Ruby" do |chunk|
  print chunk.content
end
```

<div class="home-code-actions">
  <button class="home-run-button" type="button" aria-label="Run Stream responses example"><span aria-hidden="true"></span>Run</button>
  <button class="home-compare-button" type="button" data-compare-example="stream">Compare</button>
  <button class="home-copy-button" type="button" aria-label="Copy Stream responses example"></button>
</div>
<div class="home-code-result" data-stream-result hidden>Ruby yielded each word as it arrived, and the interface stayed responsive from the first token to the final line.</div>
</article>

<article class="home-code-card" data-code-example="files" markdown="1">

### Attach files

```ruby
chat.ask "Summarize this contract", with: "contract.pdf"
chat.ask "What changed?", with: ["before.png", "after.png"]
```

<div class="home-code-actions">
  <button class="home-run-button" type="button" aria-label="Run Attach files example"><span aria-hidden="true"></span>Run</button>
  <button class="home-compare-button" type="button" data-compare-example="files">Compare</button>
  <button class="home-copy-button" type="button" aria-label="Copy Attach files example"></button>
</div>
<div class="home-code-result" hidden>The contract renews yearly and includes a 30-day termination clause. The liability cap changed from $25k to $50k.</div>
</article>

<article class="home-code-card" data-code-example="tools" markdown="1">

### Let AI call your code

```ruby
class Weather < RubyLLM::Tool
  description "Get current weather"
  param :city

  def execute(city:)
    WeatherAPI.lookup(city)
  end
end

chat.with_tool(Weather).ask "Do I need an umbrella in Berlin?"
```

<div class="home-code-actions">
  <button class="home-run-button" type="button" aria-label="Run Tool calling example"><span aria-hidden="true"></span>Run</button>
  <button class="home-compare-button" type="button" data-compare-example="tools">Compare</button>
  <button class="home-copy-button" type="button" aria-label="Copy Tool calling example"></button>
</div>
<div class="home-code-result" hidden>Yes. It is raining in Berlin right now, so take an umbrella.</div>
</article>

<article class="home-code-card" data-code-example="agents" markdown="1">

### Build agents

```ruby
class SupportAgent < RubyLLM::Agent
  model "gpt-5-nano"
  instructions "You are a concise support assistant."
  tools SearchDocs, LookupAccount
end

SupportAgent.new.ask "How do I reset my API key?"
```

<div class="home-code-actions">
  <button class="home-run-button" type="button" aria-label="Run Build agents example"><span aria-hidden="true"></span>Run</button>
  <button class="home-compare-button" type="button" data-compare-example="agents">Compare</button>
  <button class="home-copy-button" type="button" aria-label="Copy Build agents example"></button>
</div>
<div class="home-code-result" hidden>Open Settings, choose API keys, click Regenerate, then update the key in your environment before restarting the app.</div>
</article>

<article class="home-code-card" data-code-example="structured" markdown="1">

### Get structured output

```ruby
class ProductSchema < RubyLLM::Schema
  string :name
  number :price
  array :features, of: :string
end

chat.with_schema(ProductSchema)
  .ask "Extract product details", with: "product.txt"
```

<div class="home-code-actions">
  <button class="home-run-button" type="button" aria-label="Run Structured output example"><span aria-hidden="true"></span>Run</button>
  <button class="home-compare-button" type="button" data-compare-example="structured">Compare</button>
  <button class="home-copy-button" type="button" aria-label="Copy Structured output example"></button>
</div>
<div class="home-code-result" hidden>{"name":"RubyLLM Pro","price":49,"features":["tools","agents","files"]}</div>
</article>

<article class="home-code-card" data-code-example="rails" markdown="1">

### Use Rails persistence

```ruby
class Chat < ApplicationRecord
  acts_as_chat
end

chat = Chat.create!(model: "claude-sonnet-4-6")
chat.ask "Summarize this report", with: "report.pdf"
```

<div class="home-code-actions">
  <button class="home-run-button" type="button" aria-label="Run Rails persistence example"><span aria-hidden="true"></span>Run</button>
  <button class="home-compare-button" type="button" data-compare-example="rails">Compare</button>
  <button class="home-copy-button" type="button" aria-label="Copy Rails persistence example"></button>
</div>
<div class="home-code-result" hidden>&lt;Message role="assistant" content="Revenue grew 18%, churn fell to 2.1%, and expansion revenue drove most of the quarter."&gt;</div>
</article>

<article class="home-code-card" data-code-example="usage" markdown="1">

### Track usage and cost

```ruby
response = chat.ask "Explain embeddings"

response.input_tokens
response.output_tokens
response.model_id

model = RubyLLM.models.find(response.model_id)
model.input_price_per_million
```

<div class="home-code-actions">
  <button class="home-run-button" type="button" aria-label="Run Usage and cost example"><span aria-hidden="true"></span>Run</button>
  <button class="home-compare-button" type="button" data-compare-example="usage">Compare</button>
  <button class="home-copy-button" type="button" aria-label="Copy Usage and cost example"></button>
</div>
<div class="home-code-result" hidden>384
112
"gpt-5.4"
2.5</div>
</article>
  </div>

  <a class="home-code-more" href="{{ '/getting-started/' | relative_url }}">See all code examples</a>

  <div class="home-section-inner home-code-cta">
    <p>Start with a few lines of ruby and build production-ready features<br>with a rails-native AI framework now</p>
    <div class="home-actions home-actions--center">
      <a class="home-button home-button--ghost" href="https://github.com/crmne/ruby_llm" target="_blank" rel="noreferrer">Github</a>
      <a class="home-button home-button--solid" href="{{ '/getting-started/' | relative_url }}">Start coding</a>
    </div>
  </div>

  <div class="home-compare-modal" data-compare-modal hidden>
    <div class="home-compare-backdrop" data-compare-close></div>
    <div class="home-compare-dialog" role="dialog" aria-modal="true" aria-labelledby="home-compare-title">
      <button class="home-compare-close" type="button" data-compare-close aria-label="Close comparison"></button>
      <h3 id="home-compare-title">Ask anything</h3>
      <div class="home-compare-layout">
        <section class="home-compare-pane">
          <div class="home-compare-tab is-active">
            <img src="{{ '/assets/images/file-icons/ruby.svg' | relative_url }}" alt="" aria-hidden="true">
            Ruby
          </div>
          <pre><code data-compare-ruby></code></pre>
        </section>
        <section class="home-compare-pane">
          <div class="home-compare-tabs" role="tablist" aria-label="Comparison language">
            <button type="button" class="is-active" data-compare-language="javascript" role="tab" aria-selected="true"><img src="{{ '/assets/images/file-icons/javascript.svg' | relative_url }}" alt="" aria-hidden="true">JavaScript</button>
            <button type="button" data-compare-language="python" role="tab" aria-selected="false"><img src="{{ '/assets/images/file-icons/python.svg' | relative_url }}" alt="" aria-hidden="true">Python</button>
          </div>
          <pre><code data-compare-other></code></pre>
        </section>
      </div>
    </div>
  </div>
</section>

<section class="home-section home-models-section">
  <div class="home-section-inner">
    <h2 class="home-heading">Change models, not your code</h2>
    <p class="home-lead">
      New models come out constantly. RubyLLM lets you try them, compare them and switch providers without rewriting your application
    </p>

    <div class="provider-icons" aria-label="Supported AI providers">
      <a href="https://openai.com" target="_blank" rel="noreferrer" class="provider-logo"><img src="{{ '/assets/images/providers/openai.svg' | relative_url }}" alt="OpenAI" class="logo-mark"><img src="{{ '/assets/images/providers/openai-text.svg' | relative_url }}" alt="" class="logo-text"></a>
      <a href="https://anthropic.com" target="_blank" rel="noreferrer" class="provider-logo"><img src="{{ '/assets/images/providers/anthropic-text.svg' | relative_url }}" alt="Anthropic" class="logo-wide"></a>
      <a href="https://ai.google.dev" target="_blank" rel="noreferrer" class="provider-logo"><img src="{{ '/assets/images/providers/gemini-color.svg' | relative_url }}" alt="Gemini" class="logo-mark"><img src="{{ '/assets/images/providers/gemini-text.svg' | relative_url }}" alt="" class="logo-text"></a>
      <a href="https://cloud.google.com/vertex-ai" target="_blank" rel="noreferrer" class="provider-logo"><img src="{{ '/assets/images/providers/vertexai-text.svg' | relative_url }}" alt="Vertex AI" class="logo-wide"></a>
      <span class="provider-break" aria-hidden="true"></span>
      <a href="https://mistral.ai" target="_blank" rel="noreferrer" class="provider-logo"><img src="{{ '/assets/images/providers/mistral-color.svg' | relative_url }}" alt="Mistral AI" class="logo-mark"><img src="{{ '/assets/images/providers/mistral-text.svg' | relative_url }}" alt="" class="logo-text"></a>
      <a href="https://perplexity.ai" target="_blank" rel="noreferrer" class="provider-logo"><img src="{{ '/assets/images/providers/perplexity-color.svg' | relative_url }}" alt="Perplexity" class="logo-mark"><img src="{{ '/assets/images/providers/perplexity-text.svg' | relative_url }}" alt="" class="logo-text"></a>
      <a href="https://x.ai" target="_blank" rel="noreferrer" class="provider-logo"><img src="{{ '/assets/images/providers/xai.svg' | relative_url }}" alt="xAI" class="logo-wide"></a>
      <a href="https://ollama.com" target="_blank" rel="noreferrer" class="provider-logo"><img src="{{ '/assets/images/providers/ollama.svg' | relative_url }}" alt="Ollama" class="logo-mark"><img src="{{ '/assets/images/providers/ollama-text.svg' | relative_url }}" alt="" class="logo-text"></a>
      <a href="https://openrouter.ai" target="_blank" rel="noreferrer" class="provider-logo"><img src="{{ '/assets/images/providers/openrouter-text.svg' | relative_url }}" alt="OpenRouter" class="logo-wide"></a>
      <span class="provider-break" aria-hidden="true"></span>
      <a href="https://aws.amazon.com/bedrock/" target="_blank" rel="noreferrer" class="provider-logo"><img src="{{ '/assets/images/providers/bedrock-text.svg' | relative_url }}" alt="Amazon Bedrock" class="logo-wide"></a>
      <a href="https://gpustack.ai" target="_blank" rel="noreferrer" class="provider-logo"><img src="{{ '/assets/images/providers/gpustack-logo.png' | relative_url }}" alt="GPUStack" class="logo-wide"></a>
      <a href="https://deepseek.com" target="_blank" rel="noreferrer" class="provider-logo"><img src="{{ '/assets/images/providers/deepseek-color.svg' | relative_url }}" alt="DeepSeek" class="logo-mark"><img src="{{ '/assets/images/providers/deepseek-text.svg' | relative_url }}" alt="" class="logo-text"></a>
    </div>

    <p class="home-models-note">
      RubyLLM supports anything OpenAI-compatible. With GPUStack, you also get access to every model on ModelScope and Hugging Face
    </p>
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
