---
layout: home
title: Home
nav_order: 1
description: Ruby-native AI framework for production apps in Ruby and Rails.
permalink: /
redirect_from:
  - /guides/
hero:
  logo:
    light: /assets/images/logotype.svg
    dark: /assets/images/logotype_dark.svg
    alt: RubyLLM
    width: 238
    height: 82
  text: "Build production AI features<br><span>the Ruby way</span>"
  tagline: "RubyLLM is a Ruby-native AI framework for chats, tools, agents, structured outputs, files, and Rails apps - one beautiful mental model across providers and models."
  actions:
    - theme: brand
      text: Get started
      link: /getting-started/
    - theme: alt
      text: Github
      link: https://github.com/crmne/ruby_llm
---

<section id="demo" class="home-section home-demo-section">
  <div class="home-section-inner">
    <h2 class="home-heading home-heading--dark">From zero to AI app in about<br>a minute</h2>
    <div class="home-down-icon" aria-hidden="true">
      <span></span>
    </div>
    <div class="home-demo-video-frame home-demo-terminal-frame" data-demo-video>
      <video class="home-demo-video" preload="metadata" playsinline>
        <source src="{{ '/assets/videos/rubyllm-demo.mp4' | relative_url }}" type="video/mp4">
      </video>
      <pre class="home-terminal-demo" aria-hidden="true"><code><span class="term-muted">Compile initial Tailwind build</span>
      <span class="term-green">run</span>   rails tailwindcss:build from "."
<span class="term-blue">~ tailwindcss v4.2.0</span>

Done in <span class="term-green">30ms</span>

      <span class="term-green">run</span>   bundle install --quiet
      <span class="term-green">run</span>   bundle binstubs kamal
      <span class="term-green">run</span>   bundle exec kamal init
Created configuration file in config/deploy.yml
Created .kamal/secrets file
Created sample hooks in .kamal/hooks
     <span class="term-orange">force</span> .kamal/secrets
     <span class="term-orange">force</span> config/deploy.yml
      <span class="term-green">rails</span> solid_cache:install solid_queue:install solid_cable:install
     <span class="term-green">create</span> config/cache.yml
     <span class="term-green">create</span> db/cache_schema.rb
       <span class="term-green">gsub</span> config/environments/production.rb
     <span class="term-green">create</span> config/queue.yml
     <span class="term-green">create</span> config/recurring.yml
     <span class="term-green">create</span> db/queue_schema.rb
     <span class="term-green">create</span> bin/jobs
       <span class="term-green">gsub</span> config/environments/production.rb
     <span class="term-green">create</span> db/cable_schema.rb
     <span class="term-orange">force</span> config/cable.yml
<span class="term-prompt">~ ></span> <span class="term-cursor"></span></code></pre>
      <button class="home-demo-play-button" type="button" aria-label="Play RubyLLM demo">
        <span aria-hidden="true"></span>
      </button>
      <span class="home-terminal-avatar" aria-hidden="true"></span>
    </div>
  </div>
</section>

<section class="home-section home-band home-community-section">
  <div class="home-section-inner">
    <h2 class="home-heading">Proven by the community</h2>
    <p class="home-lead">
      RubyLLM is not an experiment. It is already used by Rubyists building real AI features in production apps.
    </p>

    <div class="home-stats">
      <div class="home-stat-card">
        <strong>3.9k+</strong>
        <span>GitHub stars from<br>Ruby developers</span>
      </div>
      <div class="home-stat-card">
        <strong>6.1M+</strong>
        <span>gem downloads across<br>Ruby applications</span>
      </div>
      <div class="home-stat-card">
        <strong>13+</strong>
        <span>supported providers<br>plus compatible APIs</span>
      </div>
    </div>
  </div>
</section>

<section class="home-section home-companies-section">
  <div class="home-section-inner">
    <h2 class="home-heading">Already shipping in production</h2>
    <p class="home-lead">
      Support bots, internal copilots, document pipelines, customer-facing AI features, and agentic workflows are already being built with RubyLLM.
    </p>

    <div class="home-company-logos">
      {% for company in site.data.company_logos %}
        <div class="home-company-logo" data-company="{{ company.name | slugify }}"><img src="{{ company.src | relative_url }}" alt="{{ company.name }}"></div>
      {% endfor %}
    </div>

    <p class="home-small-note">
      Using RubyLLM in production? <a href="https://tally.so/r/3Na02p" target="_blank" rel="noreferrer">Get featured</a>
    </p>
  </div>
</section>

<section class="home-section home-framework-section">
  <div class="home-section-inner">
    <h2 class="home-heading home-heading--dark">The AI framework Ruby was missing</h2>
    <p class="home-lead">
      RubyLLM gives you one beautiful interface for models, providers, chats, streaming, agents, tools, files, structured outputs, Rails persistence, usage, costs, and model capabilities.
    </p>

    <div class="home-framework-grid">
      <article class="home-framework-card">
        <h3>Ruby-native first</h3>
        <p>Plain Ruby objects, expressive method names, block-based streaming, and APIs that feel like they belong in the language.</p>
      </article>
      <article class="home-framework-card">
        <h3>Rails-native when you want Rails</h3>
        <p>Persist conversations, stream with Hotwire, attach files, track tokens, and build product features inside normal Rails apps.</p>
      </article>
      <article class="home-framework-card">
        <h3>Production-ready by design</h3>
        <p>Tools, agents, schemas, multimodal inputs, model switching, costs, errors, and provider differences are handled through one mental model.</p>
      </article>
    </div>

    <div class="home-capability-cloud" aria-label="RubyLLM capabilities">
      <span>chat</span>
      <span>streaming</span>
      <span>tools</span>
      <span>agents</span>
      <span>structured outputs</span>
      <span>files</span>
      <span>vision</span>
      <span>audio</span>
      <span>documents</span>
      <span>image generation</span>
      <span>image editing</span>
      <span>embeddings</span>
      <span>moderation</span>
      <span>transcription</span>
      <span>Rails persistence</span>
      <span>Hotwire streaming</span>
      <span>async workflows</span>
      <span>multi-agent workflows</span>
      <span>model registry</span>
      <span>usage and cost tracking</span>
      <span>provider switching</span>
      <span>OpenAI-compatible APIs</span>
    </div>
  </div>
</section>

<section class="home-section home-founder-section">
  <div class="home-section-inner home-founder-inner">
    <div class="home-founder-note">
      <h2 class="home-heading home-heading--dark">Why I built RubyLLM</h2>
      <p>
        When I started building Chat with Work in Ruby in 2025, I could not find the framework I wanted.
      </p>
      <p>
        Everything felt too fragmented, too low-level, ugly, broken, or too far from the Ruby way of doing things.
      </p>
      <p>
        So I built RubyLLM: one beautiful AI framework for Ruby and Rails.
      </p>
      <p>
        Chats, tools, agents, files, structured outputs, models, costs, and Rails integration - all designed to feel like one thing.
      </p>
      <div class="home-letter-footer">
        <div class="home-letter-author">
          <img src="{{ '/assets/images/founder/carmine.jpg' | relative_url }}" alt="Carmine Paolino">
          <span>
            <strong>Carmine Paolino</strong>
            <small>Creator of RubyLLM</small>
          </span>
        </div>
        <img class="home-signature-image" src="{{ '/assets/images/founder/carmine-signature.png' | relative_url }}" alt="Carmine Paolino signature">
      </div>
    </div>
  </div>
</section>

<section class="home-section home-code-section">
  <div class="home-section-inner">
    <h2 class="home-heading">Everything you need, with Ruby's elegance</h2>
    <p class="home-lead">
      Start with one line. Grow into tools, agents, structured outputs, Rails persistence, multimodal workflows, and cost-aware production apps - without changing mental models.
    </p>
  </div>

  <div class="home-code-grid">
<article class="home-code-card" markdown="1">

### [Ask anything]({{ '/chat/' | relative_url }})
One call when that is all you need.

```ruby
RubyLLM.chat.ask "Explain Ruby blocks"
```
<button class="home-run-button" type="button">Run</button>
<div class="home-code-result" hidden>Ruby blocks are chunks of code passed to methods. Methods call them with yield, which is why each, map, and Rails DSLs feel natural.</div>
</article>

<article class="home-code-card" markdown="1">

### [Have a conversation]({{ '/chat/' | relative_url }})
RubyLLM keeps track of context for you.

```ruby
chat = RubyLLM.chat

chat.ask "Explain Ruby blocks"
chat.ask "Show me one with map"
```
<button class="home-run-button" type="button">Run</button>
<div class="home-code-result" hidden>A block is code passed to a method.
[1, 2, 3].map { |n| n * 2 } # => [2, 4, 6]</div>
</article>

<article class="home-code-card" markdown="1">

### [Stream responses]({{ '/streaming/' | relative_url }})
Chunks arrive as the model generates them.

```ruby
chat = RubyLLM.chat

chat.ask "A Ruby story" do |chunk|
  print chunk.content
end
```
<button class="home-run-button" type="button">Run</button>
<div class="home-code-result" data-stream-result hidden>Ruby lived in a small console window, where every block had a purpose. It yielded, composed, and returned with a quiet little smile.</div>
</article>

<article class="home-code-card" markdown="1">

### [Attach files]({{ '/chat/' | relative_url }})
Documents, images, audio, and more.

```ruby
chat = RubyLLM.chat

chat.ask "Summarize this", with: "contract.pdf"
chat.ask "What changed?",
  with: ["before.png", "after.png"]
```
<button class="home-run-button" type="button">Run</button>
<div class="home-code-result" hidden>The contract renews yearly and includes a 30-day termination clause.
The liability cap changed from $25k to $50k.</div>
</article>

<article class="home-code-card" markdown="1">

### [Let AI call your code]({{ '/tools/' | relative_url }})
Native tool calling with plain Ruby classes.

```ruby
class Weather < RubyLLM::Tool
  description "Get current weather"
  param :city

  def execute(city:)
    WeatherAPI.lookup(city)
  end
end

RubyLLM.chat.with_tool(Weather)
  .ask "Do I need an umbrella in Berlin?"
```
<button class="home-run-button" type="button">Run</button>
<div class="home-code-result" hidden>Yes. It is raining in Berlin right now, so take an umbrella.</div>
</article>

<article class="home-code-card" markdown="1">

### [Build agents]({{ '/agents/' | relative_url }})
Instructions, tools, and model choice in one class.

```ruby
class SupportAgent < RubyLLM::Agent
  model "gpt-5-nano"
  instructions "Be concise."
  tools SearchDocs, LookupAccount
end

SupportAgent.new
  .ask "How do I reset my API key?"
```
<button class="home-run-button" type="button">Run</button>
<div class="home-code-result" hidden>Open Settings -> API keys, click Regenerate, then update the key in your environment variables before restarting the app.</div>
</article>

<article class="home-code-card" markdown="1">

### [Get structured output]({{ '/chat/' | relative_url }}#structured-output)
Ask for a shape. Get data back typed.

```ruby
class ProductSchema < RubyLLM::Schema
  string :name
  number :price
  array :features, of: :string
end

RubyLLM.chat.with_schema(ProductSchema)
  .ask "Extract product details",
    with: "product.txt"
```
<button class="home-run-button" type="button">Run</button>
<div class="home-code-result" hidden>{"name":"RubyLLM Pro","price":49,"features":["tools","agents","files"]}</div>
</article>

<article class="home-code-card" markdown="1">

### [Persist chats in Rails]({{ '/rails/' | relative_url }})
Conversations become normal ActiveRecord models.

```ruby
class Chat < ApplicationRecord
  acts_as_chat
end

chat = Chat.create!(model: "claude-sonnet-4-6")
chat.ask "Summarize", with: "report.pdf"
```
<button class="home-run-button" type="button">Run</button>
<div class="home-code-result" hidden>#<Message role="assistant", content="Revenue grew 18%, churn fell to 2.1%, and expansion revenue drove most of the quarter."></div>
</article>

<article class="home-code-card" markdown="1">

### [Track usage and cost]({{ '/chat/' | relative_url }})
Production apps need to know what AI costs.

```ruby
response = chat.ask "Explain embeddings"

response.tokens.input
response.tokens.output
response.model_id

model = RubyLLM.models
  .find(response.model_id)
model.input_price_per_million
```
<button class="home-run-button" type="button">Run</button>
<div class="home-code-result" hidden>384
112
"gpt-5.4"
2.5</div>
</article>

<article class="home-code-card" markdown="1">

### [Inspect model capabilities]({{ '/models/' | relative_url }})
Use the registry instead of guessing.

```ruby
model = RubyLLM.models.find "gpt-5.4"

model.context_window
model.supports_vision?
model.supports_functions?
model.output_price_per_million
```
<button class="home-run-button" type="button">Run</button>
<div class="home-code-result" hidden>1050000
true
true
15</div>
</article>

<article class="home-code-card" markdown="1">

### [Generate and edit images]({{ '/image-generation/' | relative_url }})
The image API follows the same Ruby shape.

```ruby
RubyLLM.paint "A red panda writing Ruby"

RubyLLM.paint "Make the logo green",
  model: "gpt-image-1",
  with: "logo.png"
```
<button class="home-run-button" type="button">Run</button>
<div class="home-code-result" hidden>#<RubyLLM::Image url="https://..." model_id="gpt-image-1">
#<RubyLLM::Image url="https://..." model_id="gpt-image-1"></div>
</article>

<article class="home-code-card" markdown="1">

### [Embed, moderate, transcribe]({{ '/embeddings/' | relative_url }})
Not everything is chat.

```ruby
RubyLLM.embed "Ruby is elegant"
RubyLLM.moderate "Check this text"
RubyLLM.transcribe "meeting.wav"
```
<button class="home-run-button" type="button">Run</button>
<div class="home-code-result" hidden>#<RubyLLM::Embedding vectors=[[0.012, -0.034, ...]]>
#<RubyLLM::Moderation flagged=false>
#<RubyLLM::Transcription text="Let's start with the roadmap."></div>
</article>

<article class="home-code-card" markdown="1">

### [Compose workflows]({{ '/agentic-workflows/' | relative_url }})
Coordinate agents with plain Ruby objects.

```ruby
answers = [
  ResearchAgent,
  CriticAgent,
  WriterAgent
].map { |agent| agent.new.ask brief }

EditorAgent.new.ask answers.map(&:content)
```
<button class="home-run-button" type="button">Run</button>
<div class="home-code-result" hidden>Draft ready: "RubyLLM gives Rails teams one clean API for models, tools, agents, files, and costs."</div>
</article>
  </div>
</section>

<section class="home-section home-registry-section">
  <div class="home-section-inner">
    <h2 class="home-heading home-heading--dark">Know your models. Price your app.</h2>
    <p class="home-lead">
      RubyLLM ships with a refreshable model registry, so production apps can compare capabilities, understand context windows, choose the right model, and price usage correctly.
    </p>
  </div>

  <div class="home-model-table-wrap">
    <table class="home-model-table">
      <thead>
        <tr>
          <th>Model</th>
          <th>Context</th>
          <th>Input</th>
          <th>Output</th>
          <th>Capabilities</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>GPT-5.4</strong><span>openai / gpt-5.4</span></td>
          <td>1.05M</td>
          <td>$2.50</td>
          <td>$15.00</td>
          <td>tools, structured output, reasoning, vision</td>
        </tr>
        <tr>
          <td><strong>Claude Sonnet 4.6</strong><span>anthropic / claude-sonnet-4-6</span></td>
          <td>1M</td>
          <td>$3.00</td>
          <td>$15.00</td>
          <td>tools, reasoning, vision, PDFs</td>
        </tr>
        <tr>
          <td><strong>Gemini 3 Pro Preview</strong><span>gemini / gemini-3-pro-preview</span></td>
          <td>1M</td>
          <td>$2.00</td>
          <td>$12.00</td>
          <td>tools, structured output, audio, video, PDFs</td>
        </tr>
        <tr>
          <td><strong>Claude Opus 4.5</strong><span>anthropic / claude-opus-4-5</span></td>
          <td>200k</td>
          <td>$5.00</td>
          <td>$25.00</td>
          <td>tools, reasoning, vision, PDFs</td>
        </tr>
        <tr>
          <td><strong>Mistral Large</strong><span>mistral / mistral-large-latest</span></td>
          <td>262k</td>
          <td>$0.50</td>
          <td>$1.50</td>
          <td>tools, structured output, batch, vision</td>
        </tr>
        <tr>
          <td><strong>DeepSeek Chat</strong><span>deepseek / deepseek-chat</span></td>
          <td>131k</td>
          <td>$0.28</td>
          <td>$0.42</td>
          <td>tools, cached input pricing</td>
        </tr>
        <tr>
          <td><strong>Sonar Pro</strong><span>perplexity / sonar-pro</span></td>
          <td>200k</td>
          <td>$3.00</td>
          <td>$15.00</td>
          <td>vision, search</td>
        </tr>
      </tbody>
    </table>
    <p class="home-model-table-note">Pricing is per 1M tokens. The registry currently tracks 1171 models across 11 providers.</p>
  </div>
</section>

<section class="home-section home-band home-models-section">
  <div class="home-section-inner">
    <h2 class="home-heading">Change models, not your code</h2>
    <p class="home-lead">
      RubyLLM tracks 1171 models across 11 providers. Try new models, compare them, and switch providers without rewriting your application.
    </p>

    <div class="provider-icons">
      <a href="https://openai.com" target="_blank" rel="noreferrer" class="provider-logo"><img src="{{ '/assets/images/providers/openai.svg' | relative_url }}" alt="OpenAI" class="logo-medium"><img src="{{ '/assets/images/providers/openai-text.svg' | relative_url }}" alt="OpenAI" class="logo-medium"></a>
      <a href="https://anthropic.com" target="_blank" rel="noreferrer" class="provider-logo"><img src="{{ '/assets/images/providers/anthropic-text.svg' | relative_url }}" alt="Anthropic" class="logo-small"></a>
      <a href="https://ai.google.dev" target="_blank" rel="noreferrer" class="provider-logo"><img src="{{ '/assets/images/providers/gemini-color.svg' | relative_url }}" alt="Gemini" class="logo-medium"><img src="{{ '/assets/images/providers/gemini-text.svg' | relative_url }}" alt="Gemini" class="logo-small"></a>
      <a href="https://cloud.google.com/vertex-ai" target="_blank" rel="noreferrer" class="provider-logo"><img src="{{ '/assets/images/providers/vertexai-color.svg' | relative_url }}" alt="Vertex AI" class="logo-medium"><img src="{{ '/assets/images/providers/vertexai-text.svg' | relative_url }}" alt="Vertex AI" class="logo-small"></a>
      <a href="https://aws.amazon.com/bedrock/" target="_blank" rel="noreferrer" class="provider-logo"><img src="{{ '/assets/images/providers/bedrock-text.svg' | relative_url }}" alt="Amazon Bedrock" class="logo-small"></a>
      <a href="https://mistral.ai" target="_blank" rel="noreferrer" class="provider-logo"><img src="{{ '/assets/images/providers/mistral-color.svg' | relative_url }}" alt="Mistral AI" class="logo-medium"><img src="{{ '/assets/images/providers/mistral-text.svg' | relative_url }}" alt="Mistral AI" class="logo-small"></a>
      <a href="https://deepseek.com" target="_blank" rel="noreferrer" class="provider-logo"><img src="{{ '/assets/images/providers/deepseek-color.svg' | relative_url }}" alt="DeepSeek" class="logo-medium"><img src="{{ '/assets/images/providers/deepseek-text.svg' | relative_url }}" alt="DeepSeek" class="logo-small"></a>
      <a href="https://ollama.com" target="_blank" rel="noreferrer" class="provider-logo"><img src="{{ '/assets/images/providers/ollama.svg' | relative_url }}" alt="Ollama" class="logo-medium"><img src="{{ '/assets/images/providers/ollama-text.svg' | relative_url }}" alt="Ollama" class="logo-medium"></a>
      <a href="https://openrouter.ai" target="_blank" rel="noreferrer" class="provider-logo"><img src="{{ '/assets/images/providers/openrouter.svg' | relative_url }}" alt="OpenRouter" class="logo-medium"><img src="{{ '/assets/images/providers/openrouter-text.svg' | relative_url }}" alt="OpenRouter" class="logo-small"></a>
      <a href="https://perplexity.ai" target="_blank" rel="noreferrer" class="provider-logo"><img src="{{ '/assets/images/providers/perplexity-color.svg' | relative_url }}" alt="Perplexity" class="logo-medium"><img src="{{ '/assets/images/providers/perplexity-text.svg' | relative_url }}" alt="Perplexity" class="logo-small"></a>
      <a href="https://x.ai" target="_blank" rel="noreferrer" class="provider-logo"><img src="{{ '/assets/images/providers/xai.svg' | relative_url }}" alt="xAI" class="logo-medium"><img src="{{ '/assets/images/providers/xai-text.svg' | relative_url }}" alt="xAI" class="logo-small"></a>
      <a href="https://gpustack.ai" target="_blank" rel="noreferrer" class="provider-logo"><img src="{{ '/assets/images/providers/gpustack-logo.png' | relative_url }}" alt="GPUStack" class="logo-medium"></a>
    </div>

    <div class="home-model-grid">
      <article>
        <h3>One framework across providers</h3>
        <p>Use OpenAI, Anthropic, Gemini, Bedrock, Mistral, DeepSeek, Ollama, OpenRouter, Perplexity, GPUStack, xAI, Vertex AI, and OpenAI-compatible APIs through the same Ruby interface.</p>
      </article>
      <article>
        <h3>Know what your AI costs</h3>
        <p>RubyLLM tracks usage and includes model pricing and capability data, so apps can understand tokens, costs, context windows, supported modalities, and model features.</p>
      </article>
    </div>
  </div>
</section>

<section class="home-section home-love-section">
  <div class="home-section-inner">
    <h2 class="home-heading home-heading--dark">Wall of Love</h2>
    <p class="home-lead">
      RubyLLM has become the AI layer people wish they had when they started building with Ruby.
    </p>
  </div>

  <div class="home-love-grid">
    <blockquote>
      <p>It feels natural. At Yuma, serving over 100,000 end users, our unified AI interface had accumulated so much cruft. RubyLLM is so much nicer than all of that.</p>
      <cite>Build Canada (formerly Yuma.ai)</cite>
    </blockquote>
    <blockquote>
      <p>We built our own quick and dirty wrapper, then your project came up and rocked it.</p>
      <cite>BCA LTD</cite>
    </blockquote>
    <blockquote>
      <p>A very clean and beautiful abstraction for working with multiple LLM providers.</p>
      <cite>Edrupt</cite>
    </blockquote>
    <blockquote>
      <p>Our Langgraph agent was failing. I took a gamble and rebuilt it using RubyLLM. Not only was it far simpler, it performed better.</p>
      <cite>Nodal Networks</cite>
    </blockquote>
    <blockquote>
      <p>RubyLLM is pretty much the devise of this generation. Adding it to any application is pretty much a no-brainer.</p>
      <cite>Primevise</cite>
    </blockquote>
    <blockquote>
      <p>Just having a framework to structure all our LLM processes is gigantic value. Tool integration works like a charm.</p>
      <cite>OpenRegulatory</cite>
    </blockquote>
    <blockquote>
      <p>I delivered a lot of value to my customers because of your work.</p>
      <cite>Hadrien Blanc Innovation</cite>
    </blockquote>
    <blockquote>
      <p>We got our proof of concept up in one day and the first beta in about a week. Really impressive.</p>
      <cite>Corepilot</cite>
    </blockquote>
    <blockquote>
      <p>The speed of development and the closest thing to the AI SDK in JavaScript land. Easiest Rails integration.</p>
      <cite>dScribe AI</cite>
    </blockquote>
    <blockquote>
      <p>Super easy way to start adding magic to our app. Love the speed of improvements.</p>
      <cite>Bunny Inc</cite>
    </blockquote>
    <blockquote>
      <p>As project requirements grow, RubyLLM always seems one step ahead.</p>
      <cite>LiteChat AI</cite>
    </blockquote>
    <blockquote>
      <p>Love how Ruby-like it feels. The DSL is incredibly intuitive and follows all the conventions I would expect.</p>
      <cite>Crevio</cite>
    </blockquote>
    <blockquote>
      <p>I could not be happier for making this decision. I am very excited with the API the gem provides and the surrounding community.</p>
      <cite>Fracta</cite>
    </blockquote>
    <blockquote>
      <p>Ruby-esque DSL and the right level of abstraction: composable, flexible on architecture, opinionated on lower-level implementation.</p>
      <cite>Startup Jobs</cite>
    </blockquote>
    <blockquote>
      <p>Love deleting code when adding a library, and love the thought that goes into the gem.</p>
      <cite>Cora</cite>
    </blockquote>
    <blockquote>
      <p>I replaced my internal provider implementation with RubyLLM and it just worked nicely. Deleted a lot of code.</p>
      <cite>ReelMoney</cite>
    </blockquote>
    <blockquote>
      <p>Letting someone else manage the fast-moving infrastructure of the LLM API landscape allowed me to focus on applications.</p>
      <cite>MadBomber Software</cite>
    </blockquote>
    <blockquote>
      <p>Seamless integration within the applications, and the ability to switch models and providers.</p>
      <cite>Intuition Education</cite>
    </blockquote>
    <blockquote>
      <p>Simple Ruby idiomatic interface.</p>
      <cite>Akira</cite>
    </blockquote>
    <blockquote>
      <p>Great examples, and I love the changelog.</p>
      <cite>OpenSource Connections</cite>
    </blockquote>
    <blockquote>
      <p>It just works. I do not want to keep dealing with wrappers and fast-moving provider changes.</p>
      <cite>GTM Delta</cite>
    </blockquote>
    <blockquote>
      <p>My clients and my clients' clients are very happy because we can iterate and improve our system quickly.</p>
      <cite>Yato</cite>
    </blockquote>
    <blockquote>
      <p>Simple API and welcoming developer community.</p>
      <cite>INLOOP.STUDIO</cite>
    </blockquote>
    <blockquote>
      <p>The DSL is fantastic. Very easy to use.</p>
      <cite>Cleary</cite>
    </blockquote>
    <blockquote>
      <p>Just wanted to give a quick shout-out to the RubyLLM team - the work they have done is seriously impressive.</p>
      <cite>Reddit / r/rails</cite>
    </blockquote>
    <blockquote>
      <p>It is genuinely useful and makes life a lot easier when dealing with various AI providers.</p>
      <cite>Reddit / r/rails</cite>
    </blockquote>
    <blockquote>
      <p>Glad you called this out - I love this gem. Perfect encapsulation of Rails ethos too.</p>
      <cite>Reddit / r/rails</cite>
    </blockquote>
    <blockquote>
      <p>We are using it almost exclusively for one of our projects. Generally, it is really well designed. We love it.</p>
      <cite>Reddit / r/rails</cite>
    </blockquote>
    <blockquote>
      <p>Love RubyLLM. The abstraction is beautiful and a work of art.</p>
      <cite>Reddit / r/ruby</cite>
    </blockquote>
    <blockquote>
      <p>It is a fantastic abstraction. Switching models or even providers is a string swap.</p>
      <cite>Reddit / r/rails</cite>
    </blockquote>
    <blockquote>
      <p>If I make any kind of real money with Homechorus I will sponsor your beautiful gem.</p>
      <cite>Reddit / r/rails</cite>
    </blockquote>
    <blockquote>
      <p>So ridiculously beautiful.</p>
      <cite>Reddit / r/rails</cite>
    </blockquote>
    <blockquote>
      <p>Such a solid gem. Loving it - thank you.</p>
      <cite>Reddit / r/rails</cite>
    </blockquote>
    <blockquote>
      <p>All of this a year ago was a nightmare to even imagine; now it is as easy as any other Rails feature.</p>
      <cite>Giovapanasiti / X</cite>
    </blockquote>
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
        <span class="home-card-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" role="img"><path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H11v15H6.5A2.5 2.5 0 0 0 4 20.5v-15Zm9-2.5h4.5A2.5 2.5 0 0 1 20 5.5v15a2.5 2.5 0 0 0-2.5-2.5H13V3Z"/></svg>
        </span>
        <h3>Read the guides</h3>
        <span>Get started</span>
      </a>

      <a class="home-ready-card" href="{{ '/rails/' | relative_url }}">
        <span class="home-card-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" role="img"><path d="M12 2c3.6 2.7 5.4 5.7 5.4 9 0 2-.6 3.8-1.9 5.4l2.5 2.5-1.4 1.4-2.5-2.5c-.7.3-1.4.5-2.1.5s-1.4-.2-2.1-.5l-2.5 2.5L6 18.9l2.5-2.5A8.3 8.3 0 0 1 6.6 11C6.6 7.7 8.4 4.7 12 2Z"/></svg>
        </span>
        <h3>Build with Rails</h3>
        <span>See examples</span>
      </a>

      <a class="home-ready-card" href="{{ '/available-models/' | relative_url }}">
        <span class="home-card-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" role="img"><path d="M7 4h10v4h-2V6H9v12h6v-2h2v4H7V4Zm10.6 5.2L21 12l-3.4 2.8-1.3-1.5 1.6-1.3-1.6-1.3 1.3-1.5Zm-11.2 0 1.3 1.5L6.1 12l1.6 1.3-1.3 1.5L3 12l3.4-2.8Z"/></svg>
        </span>
        <h3>Compare models</h3>
        <span>Open reference</span>
      </a>
    </div>
  </div>
</section>

<footer class="home-footer">
  <div class="home-footer-inner">
    <a class="home-footer-logo" href="{{ '/' | relative_url }}" aria-label="RubyLLM home">
      <img src="{{ '/assets/images/logotype.svg' | relative_url }}" alt="RubyLLM">
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

<script>
  document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll("[data-demo-video]").forEach(function (frame) {
      var video = frame.querySelector(".home-demo-video");
      var button = frame.querySelector(".home-demo-play-button");
      if (!video || !button) return;

      button.addEventListener("click", function () {
        frame.classList.add("is-playing");
        video.controls = true;
        video.play();
      });

      video.addEventListener("pause", function () {
        if (!video.ended) return;
        frame.classList.remove("is-playing");
        video.controls = false;
      });
    });

    document.querySelectorAll(".home-run-button").forEach(function (button) {
      function resultFor(button) {
        var parent = button.parentElement;
        if (parent && parent.nextElementSibling && parent.nextElementSibling.classList.contains("home-code-result")) {
          return parent.nextElementSibling;
        }

        if (button.nextElementSibling && button.nextElementSibling.classList.contains("home-code-result")) {
          return button.nextElementSibling;
        }
      }

      function codeFor(button) {
        var card = button.closest(".home-code-card");
        return card && card.querySelector("pre code");
      }

      function resetRun(button, result) {
        var code = codeFor(button);
        if (result && result._homeTimer) {
          window.clearTimeout(result._homeTimer);
          result._homeTimer = null;
        }

        if (code && code.dataset.originalHtml) {
          code.innerHTML = code.dataset.originalHtml;
        }

        if (result) result.classList.remove("is-running");
        button.textContent = "Run";
        button.dataset.state = "";
      }

      function appendCommentLine(code, text) {
        var span = document.createElement("span");
        span.className = "c1 home-irb-result";
        span.textContent = text;
        code.appendChild(document.createTextNode("\n"));
        code.appendChild(span);
        return span;
      }

      function runSnippet(result, button) {
        var code = codeFor(button);
        if (!code) return;

        var fullText = result.dataset.fullText || result.textContent.trim();
        result.dataset.fullText = fullText;
        if (!code.dataset.originalHtml) code.dataset.originalHtml = code.innerHTML;
        code.innerHTML = code.dataset.originalHtml;

        button.textContent = "Running...";
        button.dataset.state = "running";

        if (!result.hasAttribute("data-stream-result")) {
          fullText.split("\n").forEach(function (line) {
            appendCommentLine(code, "# => " + line);
          });
          button.textContent = "Reset";
          button.dataset.state = "done";
          return;
        }

        var output = appendCommentLine(code, "# => ");
        var parts = fullText.split(/(\s+)/);
        var index = 0;
        result.classList.add("is-running");

        function tick() {
          output.textContent += parts[index] || "";
          index += 1;

          if (index < parts.length) {
            result._homeTimer = window.setTimeout(tick, 46);
          } else {
            result.classList.remove("is-running");
            result._homeTimer = null;
            button.textContent = "Reset";
            button.dataset.state = "done";
          }
        }

        tick();
      }

      button.addEventListener("click", function () {
        var result = resultFor(button);
        if (!result) return;

        if (button.dataset.state) {
          resetRun(button, result);
          return;
        }

        runSnippet(result, button);
      });
    });
  });
</script>
