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
  tagline: 'A single, <em class="home-hero-tagline-highlight">beautiful</em> Ruby framework for all major AI models. Easily build chatbots, AI agents, RAG applications, content generators, and every AI workflow you can think of.'
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

    <p class="home-small-note home-models-note">
      All with a comprehensive, refreshable
      <a href="{{ '/available-models/' | relative_url }}">model registry</a>,
      so you can
      <a href="{{ '/chat/' | relative_url }}#tracking-token-usage">price your app</a>
      before it reaches production.
    </p>
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
{: .home-code-card data-title="Just ask questions" data-href="{% link _core_features/chat.md %}#starting-a-conversation" data-doc-title="Starting a Conversation" }

```ruby
chat = RubyLLM.chat
chat.ask "What's in this image?", with: "ruby_conf.jpg"
chat.ask "What's happening in this video?", with: "video.mp4"
chat.ask "Describe this meeting", with: "meeting.wav"
chat.ask "Summarize this document", with: "contract.pdf"
chat.ask "Explain this code", with: "app.rb"
```
{: .home-code-card data-title="Analyze any file type" data-href="{% link _core_features/chat.md %}#multi-modal-conversations" data-doc-title="Multi-modal Conversations" }

```ruby
chat = RubyLLM.chat
chat.ask "Analyze these files", with: ["diagram.png", "report.pdf", "notes.txt"]
```
{: .home-code-card data-title="Multiple files at once" data-href="{% link _core_features/chat.md %}#automatic-file-type-detection" data-doc-title="Automatic File Type Detection" }

```ruby
chat = RubyLLM.chat
chat.ask "Tell me a story about Ruby" do |chunk|
  print chunk.content
end
```
{: .home-code-card data-title="Stream responses" data-href="{% link _core_features/streaming.md %}" data-doc-title="Stream responses" }

```ruby
RubyLLM.paint "a sunset over mountains in watercolor style"
```
{: .home-code-card data-title="Generate images" data-href="{% link _core_features/image-generation.md %}" data-doc-title="Image generation" }

```ruby
RubyLLM.embed "Ruby is elegant and expressive"
```
{: .home-code-card data-title="Create embeddings" data-href="{% link _core_features/embeddings.md %}" data-doc-title="Embeddings" }

```ruby
RubyLLM.transcribe "meeting.wav"
```
{: .home-code-card data-title="Transcribe audio to text" data-href="{% link _core_features/audio-transcription.md %}" data-doc-title="Audio transcription" }

```ruby
RubyLLM.moderate "Check if this text is safe"
```
{: .home-code-card data-title="Moderate content for safety" data-href="{% link _core_features/moderation.md %}" data-doc-title="Moderation" }

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
{: .home-code-card data-title="Let AI use your code" data-href="{% link _core_features/tools.md %}" data-doc-title="Tools" }

```ruby
class WeatherAssistant < RubyLLM::Agent
  model "gpt-5-nano"
  instructions "Be concise and always use tools for weather."
  tools Weather
end

WeatherAssistant.new.ask "What's the weather in Berlin?"
```
{: .home-code-card data-title="Define an agent with instructions + tools" data-href="{% link _core_features/agents.md %}#defining-an-agent" data-doc-title="Defining an Agent" }

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
{: .home-code-card data-title="Get structured output" data-href="{% link _core_features/chat.md %}#getting-structured-output" data-doc-title="Getting Structured Output" }

  </div>

  <div class="home-code-cta">
    <p>… and much more. <a href="{% link _introduction/getting-started.md %}">Read the guides</a></p>
  </div>
</section>

<section class="home-section home-band home-companies-section">
  <div class="home-section-inner">
    <h2 class="home-heading">Join them</h2>
    <p class="home-lead">
      Companies using RubyLLM today
    </p>

    <div class="home-company-logos" aria-label="Companies using RubyLLM">
      {% for company in site.data.company_logos_featured %}
        <div class="home-company-logo" data-company="{{ company.name | slugify }}">
          <img src="{{ company.src | relative_url }}" alt="{{ company.name }}">
        </div>
      {% endfor %}
    </div>

    <p class="home-small-note">
      Using RubyLLM?
      <a href="https://tally.so/r/3Na02p" target="_blank" rel="noreferrer">Get featured</a>
      and/or
      <a href="https://github.com/sponsors/crmne" target="_blank" rel="noreferrer">sponsor us</a>
    </p>
  </div>
</section>

<section class="home-section home-band home-love-section" data-love-carousel>
  <div class="home-section-inner">
    <h2 class="home-heading">Wall of Love</h2>
    <p class="home-lead">
      RubyLLM has become the AI layer people wish they had when they started building with Ruby.
    </p>
  </div>

  <div class="home-love-stage">
    <div class="home-love-grid">
    <article class="home-love-card" data-love-card>
      <header><img src="{{ '/assets/images/home/testimonials/people/marc-kohlbrugge.webp' | relative_url }}" alt="Marc Köhlbrugge"><strong>Marc Köhlbrugge</strong><small>Founder/CEO, Startup Jobs</small></header>
      <p>Ruby-esque DSL and the right level of abstraction: composable, flexible on architecture, opinionated on lower-level implementation.</p>
    </article>
    <article class="home-love-card" data-love-card>
      <header><img src="{{ '/assets/images/home/testimonials/people/jorge-manrubia.webp' | relative_url }}" alt="Jorge Manrubia"><strong>Jorge Manrubia</strong><small>Principal Programmer, 37signals</small></header>
      <p>We are using OpenAI API using the fantastic RubyLLM gem from @paolino.</p>
    </article>
    <article class="home-love-card" data-love-card>
      <header><img src="{{ '/assets/images/home/testimonials/people/kieran-klaassen.webp' | relative_url }}" alt="Kieran Klaassen"><strong>Kieran Klaassen</strong><small>Founder, Cora</small></header>
      <p>Love deleting code when adding a library, and love the thought that goes into the gem.</p>
    </article>
    <article class="home-love-card" data-love-card>
      <header><img src="{{ '/assets/images/home/testimonials/people/elvinas-predkelis.webp' | relative_url }}" alt="Elvinas Predkelis"><strong>Elvinas Predkelis</strong><small>CEO, Primevise</small></header>
      <p>RubyLLM is pretty much the devise of this generation. Adding it to any application is pretty much a no-brainer.</p>
    </article>
    <article class="home-love-card" data-love-card>
      <header><img src="{{ '/assets/images/home/testimonials/people/nick-warwick.webp' | relative_url }}" alt="Nick Warwick"><strong>Nick Warwick</strong><small>Founding Engineer, Nodal Networks</small></header>
      <p>Our Langgraph agent was failing. I took a gamble and rebuilt it using RubyLLM. Not only was it far simpler, it performed better.</p>
    </article>
    <article class="home-love-card" data-love-card>
      <header><img src="{{ '/assets/images/home/testimonials/people/brendan-samek.webp' | relative_url }}" alt="Brendan Samek"><strong>Brendan Samek</strong><small>Founding Software Engineer, Build Canada</small></header>
      <p>It feels natural. At Yuma, serving over 100,000 end users, our unified AI interface had accumulated so much cruft. RubyLLM is so much nicer than all of that.</p>
    </article>
    <article class="home-love-card" data-love-card>
      <header><img src="{{ '/assets/images/home/testimonials/people/axel-grubba.webp' | relative_url }}" alt="Axel Grubba"><strong>Axel Grubba</strong><small>Founder, Crevio</small></header>
      <p>Love how Ruby-like it feels. The DSL is incredibly intuitive and follows all the conventions I would expect.</p>
    </article>
    <article class="home-love-card" data-love-card>
      <header><img src="{{ '/assets/images/home/testimonials/people/luis-ezcurdia.webp' | relative_url }}" alt="Luis Ezcurdia"><strong>Luis Ezcurdia</strong><small>Software Engineer</small></header>
      <p>RubyLLM is awesome, easy and intuitive. You should try it, even if you don’t work with Ruby.</p>
    </article>
    <article class="home-love-card" data-love-card>
      <header><img src="{{ '/assets/images/home/testimonials/people/chris-sonnier.webp' | relative_url }}" alt="Chris Sonnier"><strong>Chris Sonnier</strong><small>Ruby/Rails Engineer</small></header>
      <p>If you can find a better Ruby AI library than RubyLLM, I will only write JavaScript for the rest of the year!</p>
    </article>
    <article class="home-love-card" data-love-card hidden>
      <header><img src="{{ '/assets/images/home/testimonials/people/joe-leo.webp' | relative_url }}" alt="Joe Leo"><strong>Joe Leo</strong><small>Founder/CEO, Def Method</small></header>
      <p>Most tools add layers. This one removes them. It keeps the mental load low.</p>
    </article>
    <article class="home-love-card" data-love-card hidden>
      <header><img src="{{ '/assets/images/home/testimonials/people/mauro-eldritch.webp' | relative_url }}" alt="Mauro Eldritch"><strong>Mauro Eldritch</strong><small>Founder, BCA LTD</small></header>
      <p>We built our own quick and dirty wrapper, then your project came up and rocked it.</p>
    </article>
    <article class="home-love-card" data-love-card hidden>
      <header><img src="{{ '/assets/images/home/testimonials/people/hamid-siddiqui.webp' | relative_url }}" alt="Hamid Siddiqui"><strong>Hamid Siddiqui</strong><small>Founder, ReelMoney</small></header>
      <p>I replaced my internal provider implementation with RubyLLM and it just worked nicely. Deleted a lot of code.</p>
    </article>
    <article class="home-love-card" data-love-card hidden>
      <header><img src="{{ '/assets/images/home/testimonials/people/philippe-lehoux.webp' | relative_url }}" alt="Philippe Lehoux"><strong>Philippe Lehoux</strong><small>CEO, Missive</small></header>
      <p>Multi-provider support. Agentic loop support. Can we sponsor?</p>
    </article>
    <article class="home-love-card" data-love-card hidden>
      <header><img src="{{ '/assets/images/home/testimonials/people/ruslan-leteyski.webp' | relative_url }}" alt="Ruslan Leteyski"><strong>Ruslan Leteyski</strong><small>CEO, Zipchat</small></header>
      <p>Implementation-agnostic access to models helps us simplify our flow and experiment with agentic systems.</p>
    </article>
    <article class="home-love-card" data-love-card hidden>
      <header><img src="{{ '/assets/images/home/testimonials/people/jonathan-satovsky.webp' | relative_url }}" alt="Jonathan Satovsky"><strong>Jonathan Satovsky</strong><small>CEO, FinDash</small></header>
      <p>When a tool removes noise instead of adding it, you get to stay focused on the real work.</p>
    </article>
    <article class="home-love-card" data-love-card hidden>
      <header><img src="{{ '/assets/images/home/testimonials/people/aaron-snyder.webp' | relative_url }}" alt="Aaron Snyder"><strong>Aaron Snyder</strong><small>CTO / Co-founder, Corepilot</small></header>
      <p>We got our proof of concept up in one day and the first beta in about a week. Really impressive.</p>
    </article>
    <article class="home-love-card" data-love-card hidden>
      <header><img src="{{ '/assets/images/home/testimonials/people/cole-robertson.webp' | relative_url }}" alt="Cole Robertson"><strong>Cole Robertson</strong><small>Co-founder and CTO, dScribe AI</small></header>
      <p>The speed of development and the closest thing to the AI SDK in JavaScript land. Easiest Rails integration.</p>
    </article>
    <article class="home-love-card" data-love-card hidden>
      <header><img src="{{ '/assets/images/home/testimonials/people/rich-chetwynd.webp' | relative_url }}" alt="Rich Chetwynd"><strong>Rich Chetwynd</strong><small>Generalist, Bunny Inc</small></header>
      <p>Super easy way to start adding magic to our app. Love the speed of improvements.</p>
    </article>
    <article class="home-love-card" data-love-card hidden>
      <header><img src="{{ '/assets/images/home/testimonials/people/ale-solano.webp' | relative_url }}" alt="Ale Solano"><strong>Ale Solano</strong><small>Software Engineer, OpenRegulatory</small></header>
      <p>Just having a framework to structure all our LLM processes is gigantic value. Tool integration works like a charm.</p>
    </article>
    <article class="home-love-card" data-love-card hidden>
      <header><img src="{{ '/assets/images/home/testimonials/people/eric-wright.webp' | relative_url }}" alt="Eric Wright"><strong>Eric Wright</strong><small>Chief Content Officer, GTM Delta</small></header>
      <p>It just works. I do not want to keep dealing with wrappers and fast-moving provider changes.</p>
    </article>
    <article class="home-love-card" data-love-card hidden>
      <header><img src="{{ '/assets/images/home/testimonials/people/hadrien-blanc.webp' | relative_url }}" alt="Hadrien Blanc"><strong>Hadrien Blanc</strong><small>Freelancer, Hadrien Blanc Innovation</small></header>
      <p>I delivered a lot of value to my customers because of your work.</p>
    </article>
    <article class="home-love-card" data-love-card hidden>
      <header><img src="{{ '/assets/images/home/testimonials/people/dewayne-vanhoozer.webp' | relative_url }}" alt="Dewayne VanHoozer"><strong>Dewayne VanHoozer</strong><small>The MadBomber, MadBomber Software</small></header>
      <p>Letting someone else manage the fast-moving infrastructure of the LLM API landscape allowed me to focus on applications.</p>
    </article>
    <article class="home-love-card" data-love-card hidden>
      <header><img src="{{ '/assets/images/home/testimonials/people/john-desilva.webp' | relative_url }}" alt="John DeSilva"><strong>John DeSilva</strong><small>Chief Architect, Revela</small></header>
      <p>Really solid overall, well thought out, and seamless across Rails model-backed chats and one-off chats.</p>
    </article>
    <article class="home-love-card" data-love-card hidden>
      <header><img src="{{ '/assets/images/home/testimonials/people/angel-mendez.webp' | relative_url }}" alt="Angel Mendez"><strong>Angel Mendez</strong><small>CEO, Yato</small></header>
      <p>My clients and my clients&#39; clients are very happy because we can iterate and improve our system quickly.</p>
    </article>
    <article class="home-love-card" data-love-card hidden>
      <header><img src="{{ '/assets/images/home/testimonials/people/nina-revko.webp' | relative_url }}" alt="Nina Revko"><strong>Nina Revko</strong><small>Senior Software Engineer, Instrumentl</small></header>
      <p>RubyLLM made the future of Ruby and AI feel easier, more accessible, and completely within reach.</p>
    </article>
    <article class="home-love-card" data-love-card hidden>
      <header><img src="{{ '/assets/images/home/testimonials/people/daniel-friis.webp' | relative_url }}" alt="Daniel Friis"><strong>Daniel Friis</strong><small>Creator, RubyLLM::Schema</small></header>
      <p>Foundational tooling for working with AI in Ruby and Rails applications.</p>
    </article>
    <article class="home-love-card" data-love-card hidden>
      <header><img src="{{ '/assets/images/home/testimonials/people/giovapanasiti.webp' | relative_url }}" alt="Giovanni Panasiti"><strong>Giovanni Panasiti</strong><small>Co-founder, Consultala</small></header>
      <p>I’m kinda fitting RubyLLM into all of my projects.</p>
    </article>
    </div>
    <nav class="home-love-controls" aria-label="Wall of Love quotes">
      <button class="home-love-nav home-love-nav--prev" type="button" data-love-prev aria-label="Previous quotes"><span aria-hidden="true"></span></button>
      <button class="home-love-nav home-love-nav--next" type="button" data-love-next aria-label="Next quotes"><span aria-hidden="true"></span></button>
    </nav>
  </div>
</section>

<section class="home-section home-ready-section">
  <div class="home-section-inner">
    <h2 class="home-heading">Ready to try it?</h2>

    <div class="home-ready-actions">
      <a class="home-button home-button--solid home-button--gem" href="{{ '/getting-started/' | relative_url }}#installation">Install the gem</a>
      <a class="home-button home-button--outline home-button--examples" href="#code-examples">See examples</a>
      <a class="home-button home-button--ghost" href="https://github.com/crmne/ruby_llm" target="_blank" rel="noreferrer">Star the repo</a>
    </div>
  </div>
</section>

<footer class="home-footer">
  <div class="home-footer-inner">
    <a class="home-footer-logo" href="{{ '/' | relative_url }}" aria-label="RubyLLM home">
      <img class="home-footer-logo-light" src="{{ '/assets/images/logotype.svg' | relative_url }}" alt="RubyLLM">
      <img class="home-footer-logo-dark" src="{{ '/assets/images/logotype_dark.svg' | relative_url }}" alt="RubyLLM">
    </a>

    <p class="home-footer-credit">
      Brought to you by <a href="https://paolino.me" target="_blank" rel="noreferrer">Carmine Paolino</a><br>
      maker of
      <a class="home-footer-chat-with-work" href="https://chatwithwork.com" target="_blank" rel="noreferrer" aria-label="Chat with Work">
        <img src="{{ '/assets/images/chat-with-work/logotype.png' | relative_url }}" alt="Chat with Work">
      </a>
      <small>Fully private work AI</small>
    </p>

    <nav class="home-footer-nav" aria-label="Footer">
      <a href="{{ '/' | relative_url }}">Home</a>
      <a href="{{ '/getting-started/' | relative_url }}">Guide</a>
      <a href="https://github.com/crmne/ruby_llm" target="_blank" rel="noreferrer">GitHub</a>
      <a href="https://paolino.me" target="_blank" rel="noreferrer">Blog</a>
    </nav>
  </div>
</footer>
