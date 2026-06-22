---
layout: default
title: Available models
nav_order: 1
description: Browse 1184 AI models across 11 providers (not including local providers). Updated 2026-03-16.
redirect_from:
  - /guides/available-models
---

# {{ page.title }}

{{ page.description }}
{: .fs-6 .fw-300 }

<h2 id="find-new-models" class="models-outline-only">Find new models</h2>

Model information enriched by [models.dev](https://models.dev) and our custom code.

Can’t find a newly released model? Refresh your registry:

```ruby
# Plain Ruby
RubyLLM.models.refresh!

# Rails
Model.refresh!
```

See [model registry: refreshing the registry]({% link _reference/models.md %}#refreshing-the-registry)

<div class="models-showcase">
  <section class="models-section" aria-labelledby="models-by-provider">
    <h2 id="models-by-provider">Models by provider</h2>
    <div class="models-filter-row" aria-label="Provider filters">
      <span class="models-chip is-active">Anthropic (23)</span>
      <span class="models-chip">Azure (280)</span>
      <span class="models-chip">Bedrock (165)</span>
      <span class="models-chip">DeepSeek (2)</span>
      <span class="models-chip">Gemini (57)</span>
      <span class="models-chip">Mistral (68)</span>
      <span class="models-chip">OpenAI (129)</span>
      <span class="models-chip models-chip--more">+4 providers</span>
    </div>
    <div class="models-table-scroll">
      <table class="models-table">
        <colgroup>
          <col class="models-col-model">
          <col class="models-col-provider">
          <col class="models-col-io">
          <col class="models-col-capabilities">
        </colgroup>
        <thead>
          <tr>
            <th>Model <span class="models-sort" aria-hidden="true"></span></th>
            <th>Provider <span class="models-sort" aria-hidden="true"></span></th>
            <th>I/O</th>
            <th>Capabilities</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>claude-3-haiku-20240307</td><td>Anthropic</td><td><strong>In:</strong> text, image, pdf;<br><strong>Out:</strong> text</td><td>function_calling, vision, streaming, batch</td></tr>
          <tr><td>claude-3-5-haiku-20241022</td><td>Anthropic</td><td><strong>In:</strong> text, image, pdf;<br><strong>Out:</strong> text</td><td>function_calling, vision</td></tr>
          <tr><td>claude-3-5-haiku-latest</td><td>Anthropic</td><td><strong>In:</strong> text, image, pdf;<br><strong>Out:</strong> text</td><td>function_calling, vision</td></tr>
          <tr><td>claude-haiku-4-5-20251001</td><td>Anthropic</td><td><strong>In:</strong> text, image, pdf;<br><strong>Out:</strong> text</td><td>function_calling, reasoning, vision, streaming, batch, structured_output</td></tr>
          <tr><td>claude-haiku-4-5</td><td>Anthropic</td><td><strong>In:</strong> text, image, pdf;<br><strong>Out:</strong> text</td><td>function_calling, reasoning, vision</td></tr>
          <tr><td>claude-3-opus-20240229</td><td>Anthropic</td><td><strong>In:</strong> text, image, pdf;<br><strong>Out:</strong> text</td><td>function_calling, vision</td></tr>
          <tr><td>claude-opus-4-20250514</td><td>Anthropic</td><td><strong>In:</strong> text, image, pdf;<br><strong>Out:</strong> text</td><td>function_calling, reasoning, vision, streaming, batch, structured_output</td></tr>
          <tr><td>claude-opus-4-0</td><td>Anthropic</td><td><strong>In:</strong> text, image, pdf;<br><strong>Out:</strong> text</td><td>function_calling, reasoning, vision</td></tr>
          <tr><td>claude-opus-4-1-20250805</td><td>Anthropic</td><td><strong>In:</strong> text, image, pdf;<br><strong>Out:</strong> text</td><td>function_calling, reasoning, vision, streaming, batch</td></tr>
          <tr><td>claude-opus-4-1</td><td>Anthropic</td><td><strong>In:</strong> text, image, pdf;<br><strong>Out:</strong> text</td><td>function_calling, reasoning, vision</td></tr>
        </tbody>
      </table>
    </div>
    <nav class="models-pagination" aria-label="Provider table pagination">
      <span class="models-page models-page--arrow models-page--muted">←</span>
      <span class="models-page">1</span>
      <span class="models-page is-current">2</span>
      <span class="models-page models-page--arrow">→</span>
    </nav>
  </section>

  <section class="models-section" aria-labelledby="models-by-capability">
    <h2 id="models-by-capability">Models by capability</h2>
    <div class="models-filter-row" aria-label="Capability filters">
      <span class="models-chip is-active">Function calling (721)</span>
      <span class="models-chip">Structured output (491)</span>
      <span class="models-chip">Streaming (986)</span>
      <span class="models-chip">Batch processing (76)</span>
    </div>
    <div class="models-table-scroll">
      <table class="models-table">
        <colgroup>
          <col class="models-col-model">
          <col class="models-col-provider">
          <col class="models-col-io">
          <col class="models-col-capabilities">
        </colgroup>
        <thead>
          <tr>
            <th>Model <span class="models-sort" aria-hidden="true"></span></th>
            <th>Provider <span class="models-sort" aria-hidden="true"></span></th>
            <th>I/O</th>
            <th>Capabilities</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>claude-3-haiku-20240307</td><td>Anthropic</td><td><strong>In:</strong> text, image, pdf;<br><strong>Out:</strong> text</td><td>function_calling, vision, streaming, batch</td></tr>
          <tr><td>claude-3-5-haiku-20241022</td><td>Anthropic</td><td><strong>In:</strong> text, image, pdf;<br><strong>Out:</strong> text</td><td>function_calling, vision</td></tr>
          <tr><td>claude-3-5-haiku-latest</td><td>Anthropic</td><td><strong>In:</strong> text, image, pdf;<br><strong>Out:</strong> text</td><td>function_calling, vision</td></tr>
          <tr><td>claude-haiku-4-5-20251001</td><td>Anthropic</td><td><strong>In:</strong> text, image, pdf;<br><strong>Out:</strong> text</td><td>function_calling, reasoning, vision, streaming, batch, structured_output</td></tr>
          <tr><td>claude-haiku-4-5</td><td>Anthropic</td><td><strong>In:</strong> text, image, pdf;<br><strong>Out:</strong> text</td><td>function_calling, reasoning, vision</td></tr>
          <tr><td>claude-3-opus-20240229</td><td>Anthropic</td><td><strong>In:</strong> text, image, pdf;<br><strong>Out:</strong> text</td><td>function_calling, vision</td></tr>
          <tr><td>claude-opus-4-20250514</td><td>Anthropic</td><td><strong>In:</strong> text, image, pdf;<br><strong>Out:</strong> text</td><td>function_calling, reasoning, vision, streaming, batch, structured_output</td></tr>
          <tr><td>claude-opus-4-0</td><td>Anthropic</td><td><strong>In:</strong> text, image, pdf;<br><strong>Out:</strong> text</td><td>function_calling, reasoning, vision</td></tr>
          <tr><td>claude-opus-4-1-20250805</td><td>Anthropic</td><td><strong>In:</strong> text, image, pdf;<br><strong>Out:</strong> text</td><td>function_calling, reasoning, vision, streaming, batch</td></tr>
          <tr><td>claude-opus-4-1</td><td>Anthropic</td><td><strong>In:</strong> text, image, pdf;<br><strong>Out:</strong> text</td><td>function_calling, reasoning, vision</td></tr>
        </tbody>
      </table>
    </div>
    <nav class="models-pagination" aria-label="Capability table pagination">
      <span class="models-page models-page--arrow models-page--muted">←</span>
      <span class="models-page">1</span>
      <span class="models-page is-current">2</span>
      <span class="models-page models-page--ellipsis">...</span>
      <span class="models-page is-current">73</span>
      <span class="models-page models-page--arrow">→</span>
    </nav>
  </section>

  <section class="models-section" aria-labelledby="models-by-modality">
    <h2 id="models-by-modality">Models by modality</h2>
    <div class="models-filter-row" aria-label="Modality filters">
      <span class="models-chip is-active">Vision (458)</span>
      <span class="models-chip">Audio (116)</span>
      <span class="models-chip">PDF (214)</span>
      <span class="models-chip">Embedding (24)</span>
    </div>
    <div class="models-table-scroll">
      <table class="models-table">
        <colgroup>
          <col class="models-col-model">
          <col class="models-col-provider">
          <col class="models-col-io">
          <col class="models-col-capabilities">
        </colgroup>
        <thead>
          <tr>
            <th>Model <span class="models-sort" aria-hidden="true"></span></th>
            <th>Provider <span class="models-sort" aria-hidden="true"></span></th>
            <th>I/O</th>
            <th>Capabilities</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>claude-3-haiku-20240307</td><td>Anthropic</td><td><strong>In:</strong> text, image, pdf;<br><strong>Out:</strong> text</td><td>function_calling, vision, streaming, batch</td></tr>
          <tr><td>claude-3-5-haiku-20241022</td><td>Anthropic</td><td><strong>In:</strong> text, image, pdf;<br><strong>Out:</strong> text</td><td>function_calling, vision</td></tr>
          <tr><td>claude-3-5-haiku-latest</td><td>Anthropic</td><td><strong>In:</strong> text, image, pdf;<br><strong>Out:</strong> text</td><td>function_calling, vision</td></tr>
          <tr><td>claude-haiku-4-5-20251001</td><td>Anthropic</td><td><strong>In:</strong> text, image, pdf;<br><strong>Out:</strong> text</td><td>function_calling, reasoning, vision, streaming, batch, structured_output</td></tr>
          <tr><td>claude-haiku-4-5</td><td>Anthropic</td><td><strong>In:</strong> text, image, pdf;<br><strong>Out:</strong> text</td><td>function_calling, reasoning, vision</td></tr>
          <tr><td>claude-3-opus-20240229</td><td>Anthropic</td><td><strong>In:</strong> text, image, pdf;<br><strong>Out:</strong> text</td><td>function_calling, vision</td></tr>
          <tr><td>claude-opus-4-20250514</td><td>Anthropic</td><td><strong>In:</strong> text, image, pdf;<br><strong>Out:</strong> text</td><td>function_calling, reasoning, vision, streaming, batch, structured_output</td></tr>
          <tr><td>claude-opus-4-0</td><td>Anthropic</td><td><strong>In:</strong> text, image, pdf;<br><strong>Out:</strong> text</td><td>function_calling, reasoning, vision</td></tr>
          <tr><td>claude-opus-4-1-20250805</td><td>Anthropic</td><td><strong>In:</strong> text, image, pdf;<br><strong>Out:</strong> text</td><td>function_calling, reasoning, vision, streaming, batch</td></tr>
          <tr><td>claude-opus-4-1</td><td>Anthropic</td><td><strong>In:</strong> text, image, pdf;<br><strong>Out:</strong> text</td><td>function_calling, reasoning, vision</td></tr>
        </tbody>
      </table>
    </div>
    <nav class="models-pagination" aria-label="Modality table pagination">
      <span class="models-page models-page--arrow models-page--muted">←</span>
      <span class="models-page">1</span>
      <span class="models-page is-current">2</span>
      <span class="models-page models-page--ellipsis">...</span>
      <span class="models-page is-current">46</span>
      <span class="models-page models-page--arrow">→</span>
    </nav>
  </section>
</div>
