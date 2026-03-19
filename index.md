---
layout: home
title: Home
nav_order: 1
description: Building AI apps got way too complicated. RubyLLM is one interface for all of it.
permalink: /
redirect_from:
  - /guides/
hero:
  logo:
    light: /assets/images/logotype.svg
    dark: /assets/images/logotype_dark.svg
    alt: RubyLLM
    width: 620
    height: 188
  text: "Building AI apps got way too complicated.<br><a href='#demo' class='hero-resolve'>It doesn't have to be.</a>"
  actions:
    - theme: brand
      text: Get Started
      link: /getting-started/
    - theme: alt
      text: GitHub
      link: https://github.com/crmne/ruby_llm
---

<div class="home-brought-to-you">
  Brought to you by
  <a href="https://chatwithwork.com" target="_blank" rel="noreferrer">
    <img src="https://chatwithwork.com/logotype.svg" alt="Chat with Work" class="home-brought-to-you-logo">
  </a>
</div>

<section id="demo" class="home-rail-section home-demo-section">
  <h2 id="from-zero-to-chat-app" class="home-rail-heading">Go from zero to AI chat app in about a minute.</h2>
  <div class="home-demo-video-frame" style="--home-demo-poster: url('{{ '/assets/images/home/demo-poster.jpg' | relative_url }}');">
    <video class="home-demo-video" muted loop playsinline controls preload="metadata" poster="{{ '/assets/images/home/demo-poster.jpg' | relative_url }}">
      <source src="https://talks.paolino.me/rucoco-2026/demo.mp4" type="video/mp4">
    </video>
  </div>
</section>

<script>
  document.addEventListener("DOMContentLoaded", function () {
    var demoLink = document.querySelector(".hero-resolve[href='#demo']");
    var demoSection = document.getElementById("demo");

    function getScrollOffset() {
      var bodyScrollOffset = document.body ? document.body.getAttribute("data-vp-scroll-offset") : null;
      var offset = bodyScrollOffset ? parseFloat(bodyScrollOffset) : NaN;
      if (!Number.isNaN(offset)) return offset;
      return 134;
    }

    function scrollToDemo(smooth) {
      if (!demoSection) return;

      var targetTop =
        window.scrollY +
        demoSection.getBoundingClientRect().top -
        getScrollOffset() +
        (parseInt(window.getComputedStyle(demoSection).paddingTop, 10) || 0);

      var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      var behavior = !reduceMotion && smooth ? "smooth" : "auto";
      window.scrollTo({ left: 0, top: targetTop, behavior: behavior });
    }

    if (demoLink && demoSection) {
      demoLink.addEventListener("click", function (event) {
        event.preventDefault();

        if (window.history && typeof window.history.pushState === "function") {
          window.history.pushState(null, "", "#demo");
        } else {
          window.location.hash = "#demo";
        }

        scrollToDemo(true);
      });
    }

    var video = document.querySelector(".home-demo-video");
    if (!video || !("IntersectionObserver" in window)) return;

    video.muted = true;
    video.playsInline = true;

    var visibleEnough = false;

    function syncPlayback() {
      if (document.visibilityState !== "visible" || !visibleEnough) {
        video.pause();
        return;
      }

      var playPromise = video.play();
      if (playPromise && typeof playPromise.catch === "function") {
        playPromise.catch(function () {});
      }
    }

    var observer = new IntersectionObserver(
      function (entries) {
        visibleEnough = entries.some(function (entry) {
          return entry.isIntersecting && entry.intersectionRatio >= 0.5;
        });
        syncPlayback();
      },
      { threshold: [0, 0.5, 1] }
    );

    observer.observe(video);
    document.addEventListener("visibilitychange", syncPlayback);
    window.addEventListener("pagehide", function () {
      video.pause();
      observer.disconnect();
    });
  });
</script>

<section class="home-rail-section">
  <h2 id="why-rubyllm" class="home-rail-heading">Why RubyLLM?</h2>
  <div class="home-alt-surface">
    <div class="home-explanation">
      <p>Every AI provider ships their own bloated client. Different APIs. Different response formats. Different conventions. It's exhausting.</p>
      <p><strong>Not RubyLLM.</strong> One beautiful interface for all of them. Same code whether you're using GPT, Claude, or your local Ollama. Three dependencies. Works with Rails out of the box. Gets you from simple chats to advanced agentic workflows, RAG apps, chatbots, AI agents, content generators, and more.</p>
    </div>
  </div>
</section>

## Here's what it looks like.

<div class="home-code-grid">
  <div class="home-example" markdown="1">

### Just ask questions

One line. That's it.

```ruby
RubyLLM.chat.ask "What's the best way to learn Ruby?"
# => "Start with the basics, then build small projects..."
```
{: data-title="chat.rb"}
  </div>

  <div class="home-example" markdown="1">

### Stream responses in real time

Pass a block. Chunks arrive as they're generated.

```ruby
chat = RubyLLM.chat

chat.ask "Tell me a story about Ruby" do |chunk|
  print chunk.content
end
# Ruby lived in a little house at the edge of a bright green forest...
```
{: data-title="streaming.rb"}
  </div>

  <div class="home-example" markdown="1">

### Let AI call your code

Define tools with plain Ruby classes. No JSON schemas. No ceremony.

```ruby
class Weather < RubyLLM::Tool
  description "Get current weather"
  param :city

  def execute(city:)
    "It's sunny in #{city}"
  end
end

chat = RubyLLM.chat.with_tool Weather
chat.ask "What's the weather in Berlin?"
# => "It's sunny in Berlin."
```
{: data-title="tool.rb"}
  </div>

  <div class="home-example" markdown="1">

### Build agents

Give them tools and instructions. They'll handle the rest.

```ruby
class WeatherAgent < RubyLLM::Agent
  model "gpt-5-nano"
  instructions "You are a helpful weather agent."
  tools Weather
end

WeatherAgent.new.ask "Weather in Berlin?"
# => "Currently in Berlin: it's sunny. Want a forecast?"
```
{: data-title="agent.rb"}
  </div>

  <div class="home-example" markdown="1">

### Get structured output

Ask for a shape. Get it back typed.

```ruby
class ProductSchema < RubyLLM::Schema
  string :name
  number :price
end

chat = RubyLLM.chat.with_schema ProductSchema
chat.ask "Analyze this product", with: "product.txt"
# => {"name" => "RTX 3090 24GB", "price" => 800}
```
{: data-title="product_schema.rb"}
  </div>

  <div class="home-example" markdown="1">

### Attach anything

PDFs, images, audio, you name it. Just pass them in. We handle filenames, URLs, and Active Storage attachments.

```ruby
chat = RubyLLM.chat
chat.ask "What's in this file?", with: "report.pdf"
# => "A quarterly earnings report — revenue grew 23% to $4.2M..."
chat.ask "Describe this image", with: "photo.jpg"
# => "A golden retriever on a park bench, wearing sunglasses."
```
{: data-title="attachments.rb"}
  </div>

  <div class="home-example" markdown="1">

### Paint, embed, moderate, transcribe

Not just chat.

```ruby
RubyLLM.paint "sunset over mountains"
# => #<RubyLLM::Image url="https://...">

RubyLLM.embed "Ruby is elegant"
# => #<RubyLLM::Embedding dimensions=1536>

RubyLLM.moderate "Please review this text"
# => #<RubyLLM::ModerationResult ...>

RubyLLM.transcribe "meeting.wav"
# => "Let's circle back on the Q4 roadmap..."
```
{: data-title="beyond_chat.rb"}
  </div>

  <div class="home-example" markdown="1">

### Rails integration

One line in your model. Conversations persist automatically.

```ruby
class Chat < ApplicationRecord
  acts_as_chat
end

chat = Chat.create! model: "claude-sonnet-4-6"
chat.ask "Summarize this report", with: "report.pdf"
# Messages, tool calls, and tokens are all persisted automatically.
```
{: data-title="chat.rb"}
  </div>

  <div class="home-example" markdown="1">

### Chat with any model. Same interface.

Same interface across providers. And when needed, switch models mid-conversation.

```ruby
chat = RubyLLM.chat model: "gemini-3-pro"
chat.ask "What's the capital of France?"
# => "The capital of France is Paris."

chat.with_model "claude-sonnet-4-6"
chat.ask "And what's its population?"
# => "About 2.1 million in the city, 12 million metro."

chat.with_model "gpt-5.4", provider: :openrouter
chat.ask "Summarize this conversation"
# => "We discussed Paris — capital of France, 2.1M city / 12M metro."

chat.with_model "llama3", provider: :ollama
chat.ask "Say that in French"
# => "Paris, capitale de la France — 2,1M en ville, 12M en métropole."
```
{: data-title="switch_models.rb"}
  </div>

  <div class="home-example" markdown="1">

### Track usage and cost

Every response gives you tokens, cost, and model details.

```ruby
response = RubyLLM.chat.ask "Explain quantum computing"

puts "Model: #{response.model_id}"
puts "Tokens: #{response.input_tokens} in / #{response.output_tokens} out"

model_info = RubyLLM.models.find(response.model_id)
if model_info&.input_price_per_million && model_info&.output_price_per_million
  input_cost = response.input_tokens * model_info.input_price_per_million / 1_000_000
  output_cost = response.output_tokens * model_info.output_price_per_million / 1_000_000
  puts "Estimated cost: $#{format('%.6f', input_cost + output_cost)}"
end
```
{: data-title="cost_tracking.rb"}
  </div>
</div>

There is a lot more.
{: .home-small-note }

<section class="home-rail-section">
  <h2 id="same-code-any-provider" class="home-rail-heading">Same code. Any provider.</h2>
  <div class="home-alt-surface">
    <p class="home-section-lead home-centered">
      <a href="{{ '/available-models/' | relative_url }}">Thousands of models across 13 providers.</a> Switch whenever you want. Your code stays the same. Massive model registry with pricing and capabilities data.
    </p>

    <div class="provider-icons">
      <a href="https://openai.com" target="_blank" rel="noreferrer" class="provider-logo"><img src="/assets/images/providers/openai.svg" alt="OpenAI" class="logo-medium"><img src="/assets/images/providers/openai-text.svg" alt="OpenAI" class="logo-medium"></a>
      <a href="https://anthropic.com" target="_blank" rel="noreferrer" class="provider-logo"><img src="/assets/images/providers/anthropic-text.svg" alt="Anthropic" class="logo-small"></a>
      <a href="https://ai.google.dev" target="_blank" rel="noreferrer" class="provider-logo"><img src="/assets/images/providers/gemini-color.svg" alt="Gemini" class="logo-medium"><img src="/assets/images/providers/gemini-text.svg" alt="Gemini" class="logo-small"></a>
      <a href="https://cloud.google.com/vertex-ai" target="_blank" rel="noreferrer" class="provider-logo"><img src="/assets/images/providers/vertexai-color.svg" alt="VertexAI" class="logo-medium"><img src="/assets/images/providers/vertexai-text.svg" alt="VertexAI" class="logo-small"></a>
      <a href="https://aws.amazon.com/bedrock/" target="_blank" rel="noreferrer" class="provider-logo"><img src="/assets/images/providers/bedrock-color.svg" alt="Bedrock" class="logo-medium"><img src="/assets/images/providers/bedrock-text.svg" alt="Bedrock" class="logo-small"></a>
      <a href="https://deepseek.com" target="_blank" rel="noreferrer" class="provider-logo"><img src="/assets/images/providers/deepseek-color.svg" alt="DeepSeek" class="logo-medium"><img src="/assets/images/providers/deepseek-text.svg" alt="DeepSeek" class="logo-small"></a>
      <a href="https://mistral.ai" target="_blank" rel="noreferrer" class="provider-logo"><img src="/assets/images/providers/mistral-color.svg" alt="Mistral" class="logo-medium"><img src="/assets/images/providers/mistral-text.svg" alt="Mistral" class="logo-small"></a>
      <a href="https://ollama.com" target="_blank" rel="noreferrer" class="provider-logo"><img src="/assets/images/providers/ollama.svg" alt="Ollama" class="logo-medium"><img src="/assets/images/providers/ollama-text.svg" alt="Ollama" class="logo-medium"></a>
      <a href="https://openrouter.ai" target="_blank" rel="noreferrer" class="provider-logo"><img src="/assets/images/providers/openrouter.svg" alt="OpenRouter" class="logo-medium"><img src="/assets/images/providers/openrouter-text.svg" alt="OpenRouter" class="logo-small"></a>
      <a href="https://perplexity.ai" target="_blank" rel="noreferrer" class="provider-logo"><img src="/assets/images/providers/perplexity-color.svg" alt="Perplexity" class="logo-medium"><img src="/assets/images/providers/perplexity-text.svg" alt="Perplexity" class="logo-small"></a>
      <a href="https://x.ai" target="_blank" rel="noreferrer" class="provider-logo"><img src="/assets/images/providers/xai.svg" alt="xAI" class="logo-medium"><img src="/assets/images/providers/xai-text.svg" alt="xAI" class="logo-medium"></a>
      <a href="https://gpustack.ai" target="_blank" rel="noreferrer" class="provider-logo"><img src="/assets/images/providers/gpustack-logo.png" alt="GPUStack" class="logo-medium"></a>
    </div>

    <p class="home-small-note">
      Plus anything OpenAI-compatible. With GPUStack, you also get access to every model on ModelScope and Hugging Face.
    </p>
  </div>
</section>

<section class="home-rail-section">
  <h2 id="used-by-real-teams" class="home-rail-heading">Used by real teams.</h2>
  <div class="home-alt-surface">
    <p class="home-section-lead home-centered">
      Support bots. Internal copilots. Document pipelines. Customer-facing AI. All shipped with RubyLLM.
    </p>

    <div class="home-company-logos">
      <div class="home-company-logo"><img src="https://chatwithwork.com/logotype.svg" alt="Chat with Work"></div>
      {% for company in site.data.company_logos_featured %}
        <div class="home-company-logo" data-company="{{ company.name | slugify }}"><img src="{{ company.src | relative_url }}" alt="{{ company.name }}"></div>
      {% endfor %}
    </div>

    <p class="home-small-note">This is a very small sample of the teams using RubyLLM in production. <a href="https://tally.so/r/3Na02p" target="_blank" rel="noreferrer">Get featured.</a></p>
  </div>
</section>

<section class="home-rail-section">
  <h2 id="what-teams-are-saying" class="home-rail-heading">What teams are saying.</h2>
  <div class="home-alt-surface">
    <div class="home-quotes">
      <blockquote>
        "RubyLLM is pretty much the devise of this generation. Adding it to any application is pretty much a no-brainer."
        <cite>Primevise</cite>
      </blockquote>
      <blockquote>
        "We got our proof of concept up in one day and the first beta in about a week. Really impressive."
        <cite>Corepilot</cite>
      </blockquote>
      <blockquote>
        "Our Langgraph agent was failing. I took a gamble and rebuilt it using RubyLLM. Not only was it far simpler, it performed better."
        <cite>Nodal Networks</cite>
      </blockquote>
      <blockquote>
        "It feels natural. At Yuma, serving over 100,000 end users, our unified AI interface had accumulated so much cruft. RubyLLM is so much nicer than all of that."
        <cite>Build Canada (formerly Yuma.ai)</cite>
      </blockquote>
      <blockquote>
        "We built our own quick and dirty wrapper, then your project came up and rocked it."
        <cite>BCA LTD</cite>
      </blockquote>
      <blockquote>
        "I delivered a lot of value to my customers because of your work."
        <cite>Hadrien Blanc Innovation</cite>
      </blockquote>
      <blockquote>
        "A very clean and beautiful abstraction for working with multiple LLM providers."
        <cite>Edrupt</cite>
      </blockquote>
      <blockquote>
        "Just having a framework to structure all our LLM processes is gigantic value. Tool integration works like a charm."
        <cite>OpenRegulatory</cite>
      </blockquote>
    </div>

    <p class="home-small-note">From the RubyLLM Usage Survey, March 2026.</p>
    <p class="home-small-note home-small-note-tight">
      Using RubyLLM in production? <a href="https://tally.so/r/3Na02p" target="_blank" rel="noreferrer">Share your story.</a>
    </p>
  </div>
</section>

## Ready to try it?

<div class="home-big-cards">
  <a class="home-big-card" href="{{ '/getting-started/' | relative_url }}">
    <p class="home-big-card-label">Learning</p>
    <h3>Read the guides</h3>
    <p>Start simple. Build up from there.</p>
  </a>
  <a class="home-big-card" href="https://github.com/crmne/ruby_llm" target="_blank" rel="noreferrer">
    <p class="home-big-card-label">Contributing</p>
    <h3>Contribute on GitHub</h3>
    <p>Found a bug? Got an idea? Jump in.</p>
  </a>
  <a class="home-big-card" href="https://github.com/crmne/ruby_llm/releases" target="_blank" rel="noreferrer">
    <p class="home-big-card-label">Keeping up</p>
    <h3>See what's new</h3>
    <p>What changed and when.</p>
  </a>
</div>
