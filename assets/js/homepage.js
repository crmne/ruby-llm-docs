(function () {
  var compareExamples = {
    ask: {
      title: "Ask anything",
      ruby: 'RubyLLM.chat.ask "Explain Ruby blocks in 3 lines"',
      javascript: 'import OpenAI from "openai";\n\nconst client = new OpenAI();\n\nconst response = await client.responses.create({\n  model: "gpt-5.4",\n  input: "Explain Ruby blocks in 3 lines"\n});\n\nconsole.log(response.output_text);',
      python: 'from openai import OpenAI\n\nclient = OpenAI()\n\nresponse = client.responses.create(\n    model="gpt-5.4",\n    input="Explain Ruby blocks in 3 lines"\n)\n\nprint(response.output_text)'
    },
    stream: {
      title: "Stream responses",
      ruby: 'chat.ask "Tell me a story about Ruby" do |chunk|\n  print chunk.content\nend',
      javascript: 'const stream = await client.responses.create({\n  model: "gpt-5.4",\n  input: "Tell me a story about Ruby",\n  stream: true\n});\n\nfor await (const event of stream) {\n  if (event.type === "response.output_text.delta") {\n    process.stdout.write(event.delta);\n  }\n}',
      python: 'from openai import OpenAI\n\nclient = OpenAI()\n\nwith client.responses.stream(\n    model="gpt-5.4",\n    input="Tell me a story about Ruby"\n) as stream:\n    for event in stream:\n        if event.type == "response.output_text.delta":\n            print(event.delta, end="")',
    },
    files: {
      title: "Attach files",
      ruby: 'chat.ask "Summarize this contract", with: "contract.pdf"\nchat.ask "What changed?", with: ["before.png", "after.png"]',
      javascript: 'import fs from "node:fs";\n\nconst contract = await client.files.create({\n  file: fs.createReadStream("contract.pdf"),\n  purpose: "assistants"\n});\n\nawait client.responses.create({\n  model: "gpt-5.4",\n  input: [{\n    role: "user",\n    content: [\n      { type: "input_text", text: "Summarize this contract" },\n      { type: "input_file", file_id: contract.id }\n    ]\n  }]\n});',
      python: 'from pathlib import Path\nfrom openai import OpenAI\n\nclient = OpenAI()\n\ncontract = client.files.create(\n    file=Path("contract.pdf"),\n    purpose="assistants"\n)\n\nclient.responses.create(\n    model="gpt-5.4",\n    input=[{"role": "user", "content": [\n        {"type": "input_text", "text": "Summarize this contract"},\n        {"type": "input_file", "file_id": contract.id}\n    ]}]\n)',
    },
    tools: {
      title: "Let AI call your code",
      ruby: 'class Weather < RubyLLM::Tool\n  description "Get current weather"\n  param :city\n\n  def execute(city:)\n    WeatherAPI.lookup(city)\n  end\nend\n\nchat.with_tool(Weather).ask "Do I need an umbrella in Berlin?"',
      javascript: 'const weatherTool = {\n  type: "function",\n  name: "weather",\n  description: "Get current weather",\n  parameters: {\n    type: "object",\n    properties: { city: { type: "string" } },\n    required: ["city"]\n  }\n};\n\nconst response = await client.responses.create({\n  model: "gpt-5.4",\n  input: "Do I need an umbrella in Berlin?",\n  tools: [weatherTool]\n});',
      python: 'from pydantic import BaseModel\n\nclass WeatherArgs(BaseModel):\n    city: str\n\ndef weather(city: str):\n    return WeatherAPI.lookup(city)\n\nchat = ChatSession(model="gpt-5.4")\nchat.with_tool(weather, args_schema=WeatherArgs).ask(\n    "Do I need an umbrella in Berlin?"\n)',
    },
    agents: {
      title: "Build agents",
      ruby: 'class SupportAgent < RubyLLM::Agent\n  model "gpt-5-nano"\n  instructions "You are a concise support assistant."\n  tools SearchDocs, LookupAccount\nend\n\nSupportAgent.new.ask "How do I reset my API key?"',
      javascript: 'const supportAgent = new Agent({\n  model: "gpt-5-nano",\n  instructions: "You are a concise support assistant.",\n  tools: [SearchDocs, LookupAccount]\n});\n\nawait supportAgent.ask("How do I reset my API key?");',
      python: 'support_agent = Agent(\n    model="gpt-5-nano",\n    instructions="You are a concise support assistant.",\n    tools=[SearchDocs, LookupAccount]\n)\n\nsupport_agent.ask("How do I reset my API key?")',
    },
    structured: {
      title: "Get structured output",
      ruby: 'class ProductSchema < RubyLLM::Schema\n  string :name\n  number :price\n  array :features, of: :string\nend\n\nchat.with_schema(ProductSchema)\n  .ask "Extract product details", with: "product.txt"',
      javascript: 'const product = await chat.withSchema(ProductSchema).ask(\n  "Extract product details",\n  { files: ["product.txt"] }\n);\n\nproduct.name;\nproduct.price;\nproduct.features;',
      python: 'from pydantic import BaseModel\n\nclass ProductSchema(BaseModel):\n    name: str\n    price: float\n    features: list[str]\n\nproduct = chat.with_schema(ProductSchema).ask(\n    "Extract product details",\n    files=["product.txt"]\n)',
    },
    rails: {
      title: "Use Rails persistence",
      ruby: 'class Chat < ApplicationRecord\n  acts_as_chat\nend\n\nchat = Chat.create!(model: "claude-sonnet-4-6")\nchat.ask "Summarize this report", with: "report.pdf"',
      javascript: 'const chat = await Chat.create({\n  model: "claude-sonnet-4-6"\n});\n\nawait askWithPersistence(\n  chat,\n  "Summarize this report",\n  { files: ["report.pdf"] }\n);',
      python: 'class Chat(SQLModel, table=True):\n    id: int | None = Field(default=None, primary_key=True)\n    model: str\n\nchat = Chat(model="claude-sonnet-4-6")\nsession.add(chat)\nsession.commit()\n\nask_with_persistence(chat, "Summarize this report", files=["report.pdf"])',
    },
    usage: {
      title: "Track usage and cost",
      ruby: 'response = chat.ask "Explain embeddings"\n\nresponse.input_tokens\nresponse.output_tokens\nresponse.model_id\n\nmodel = RubyLLM.models.find(response.model_id)\nmodel.input_price_per_million',
      javascript: 'const response = await chat.ask("Explain embeddings");\n\nresponse.input_tokens;\nresponse.output_tokens;\nresponse.model_id;\n\nconst model = modelRegistry.find(response.model_id);\nmodel.input_price_per_million;',
      python: 'response = chat.ask("Explain embeddings")\n\nresponse.input_tokens\nresponse.output_tokens\nresponse.model_id\n\nmodel = model_registry.find(response.model_id)\nmodel.input_price_per_million',
    }
  };

  function initDemoVideos(root) {
    root.querySelectorAll("[data-demo-video]").forEach(function (frame) {
      if (frame.dataset.homeBound) return;
      frame.dataset.homeBound = "true";

      var video = frame.querySelector(".home-demo-video");
      var button = frame.querySelector(".home-play-button");
      if (!video || !button) return;

      button.addEventListener("click", function () {
        frame.classList.add("is-playing");
        video.controls = true;
        video.play();
      });

      video.addEventListener("ended", function () {
        frame.classList.remove("is-playing");
        video.controls = false;
        video.currentTime = 0;
      });
    });
  }

  function setRunLabel(button, label, showIcon) {
    button.textContent = "";
    if (showIcon) {
      var icon = document.createElement("span");
      icon.setAttribute("aria-hidden", "true");
      button.appendChild(icon);
    }
    button.appendChild(document.createTextNode(label));
  }

  function initCodeCards(root) {
    root.querySelectorAll(".home-code-card").forEach(function (card) {
      if (card.dataset.codeBound) return;
      card.dataset.codeBound = "true";

      var code = card.querySelector("pre code");
      var result = card.querySelector(".home-code-result");
      var runButton = card.querySelector(".home-run-button");
      var copyButton = card.querySelector(".home-copy-button");
      if (code && !code.dataset.originalText) {
        code.dataset.originalText = code.textContent.trim();
      }

      if (runButton && code && result) {
        runButton.addEventListener("click", function () {
          if (runButton.dataset.state) {
            resetSnippet(code, result, runButton);
            return;
          }
          runSnippet(code, result, runButton);
        });
      }

      if (copyButton && code) {
        copyButton.addEventListener("click", function () {
          var text = code.dataset.originalText || code.textContent.trim();
          writeClipboard(text).then(function () {
            copyButton.classList.add("is-copied");
            window.setTimeout(function () {
              copyButton.classList.remove("is-copied");
            }, 1200);
          });
        });
      }
    });
  }

  function writeClipboard(text) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      return navigator.clipboard.writeText(text);
    }

    var textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.setAttribute("readonly", "");
    textarea.style.position = "fixed";
    textarea.style.opacity = "0";
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    textarea.remove();
    return Promise.resolve();
  }

  function resetSnippet(code, result, button) {
    if (result._homeTimer) {
      window.clearTimeout(result._homeTimer);
      result._homeTimer = null;
    }

    if (code.dataset.originalHtml) {
      code.innerHTML = code.dataset.originalHtml;
    }

    button.dataset.state = "";
    setRunLabel(button, "Run", true);
  }

  function appendCommentLine(code, text) {
    var span = document.createElement("span");
    span.className = "c1 home-irb-result";
    span.textContent = text;
    code.appendChild(document.createTextNode("\n"));
    code.appendChild(span);
    return span;
  }

  function runSnippet(code, result, button) {
    var fullText = result.dataset.fullText || result.textContent.trim();
    result.dataset.fullText = fullText;

    if (!code.dataset.originalHtml) code.dataset.originalHtml = code.innerHTML;
    if (!code.dataset.originalText) code.dataset.originalText = code.textContent.trim();
    code.innerHTML = code.dataset.originalHtml;

    button.dataset.state = "running";
    setRunLabel(button, "Running...", false);

    if (!result.hasAttribute("data-stream-result")) {
      fullText.split("\n").forEach(function (line) {
        appendCommentLine(code, "# => " + line);
      });
      button.dataset.state = "done";
      setRunLabel(button, "Reset", false);
      return;
    }

    var output = appendCommentLine(code, "# => ");
    var parts = fullText.split(/(\s+)/);
    var index = 0;

    function tick() {
      output.textContent += parts[index] || "";
      index += 1;

      if (index < parts.length) {
        result._homeTimer = window.setTimeout(tick, 46);
      } else {
        result._homeTimer = null;
        button.dataset.state = "done";
        setRunLabel(button, "Reset", false);
      }
    }

    tick();
  }

  function initCompareModal(root) {
    var modal = root.querySelector("[data-compare-modal]");
    if (!modal || modal.dataset.compareBound) return;
    modal.dataset.compareBound = "true";

    var title = modal.querySelector("#home-compare-title");
    var rubyCode = modal.querySelector("[data-compare-ruby]");
    var otherCode = modal.querySelector("[data-compare-other]");
    var languageButtons = modal.querySelectorAll("[data-compare-language]");
    var activeExample = null;
    var activeLanguage = "javascript";
    var previousFocus = null;
    var previousOverflow = "";
    var keywordMap = {
      ruby: "class def end do module if else elsif return require with true false nil self".split(" "),
      javascript: "import from const let var await async function return class new for of if else true false null undefined".split(" "),
      python: "from import class def return with for in if else elif as True False None".split(" ")
    };
    var builtinMap = {
      ruby: "RubyLLM Tool Agent Schema ApplicationRecord WeatherAPI ProductSchema SupportAgent Chat".split(" "),
      javascript: "OpenAI Agent Chat ProductSchema SearchDocs LookupAccount WeatherAPI console process".split(" "),
      python: "OpenAI Path BaseModel ChatSession WeatherAPI WeatherArgs ProductSchema Agent SQLModel Field".split(" ")
    };

    function escapeHtml(text) {
      return text
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;");
    }

    function wrapToken(className, value) {
      return '<span class="' + className + '">' + escapeHtml(value) + '</span>';
    }

    function isWordStart(character) {
      return /[A-Za-z_]/.test(character);
    }

    function isWordPart(character) {
      return /[A-Za-z0-9_]/.test(character);
    }

    function readWord(text, start) {
      var end = start + 1;
      while (end < text.length && isWordPart(text.charAt(end))) end += 1;
      return text.slice(start, end);
    }

    function readNumber(text, start) {
      var match = text.slice(start).match(/^\d+(?:\.\d+)?/);
      return match ? match[0] : null;
    }

    function readString(text, start) {
      var quote = text.charAt(start);
      var end = start + 1;
      var escaped = false;

      while (end < text.length) {
        var character = text.charAt(end);
        end += 1;
        if (escaped) {
          escaped = false;
        } else if (character === "\\") {
          escaped = true;
        } else if (character === quote) {
          break;
        }
      }

      return text.slice(start, end);
    }

    function includesToken(list, word) {
      return list.indexOf(word) !== -1;
    }

    function highlightCompareCode(language, text) {
      var html = "";
      var index = 0;
      var keywords = keywordMap[language] || [];
      var builtins = builtinMap[language] || [];

      while (index < text.length) {
        var character = text.charAt(index);
        var next = text.charAt(index + 1);

        if ((language === "ruby" || language === "python") && character === "#") {
          var hashEnd = text.indexOf("\n", index);
          if (hashEnd === -1) hashEnd = text.length;
          html += wrapToken("c1", text.slice(index, hashEnd));
          index = hashEnd;
          continue;
        }

        if (language === "javascript" && character === "/" && next === "/") {
          var slashEnd = text.indexOf("\n", index);
          if (slashEnd === -1) slashEnd = text.length;
          html += wrapToken("c1", text.slice(index, slashEnd));
          index = slashEnd;
          continue;
        }

        if (character === '"' || character === "'" || (language === "javascript" && character === "`")) {
          var stringToken = readString(text, index);
          html += wrapToken(character === "'" ? "s1" : "s2", stringToken);
          index += stringToken.length;
          continue;
        }

        if (/\d/.test(character)) {
          var number = readNumber(text, index);
          if (number) {
            html += wrapToken("m", number);
            index += number.length;
            continue;
          }
        }

        if (language === "ruby" && character === ":" && isWordStart(next)) {
          var symbol = ":" + readWord(text, index + 1);
          html += wrapToken("ss", symbol);
          index += symbol.length;
          continue;
        }

        if (isWordStart(character)) {
          var word = readWord(text, index);
          var following = text.charAt(index + word.length);
          var previous = index > 0 ? text.charAt(index - 1) : "";

          if (language === "ruby" && following === ":") {
            html += wrapToken("ss", word + ":");
            index += word.length + 1;
          } else if (includesToken(keywords, word)) {
            html += wrapToken("k", word);
            index += word.length;
          } else if (includesToken(builtins, word) || /^[A-Z]/.test(word)) {
            html += wrapToken("nc", word);
            index += word.length;
          } else if (previous === ".") {
            html += wrapToken("nf", word);
            index += word.length;
          } else {
            html += escapeHtml(word);
            index += word.length;
          }
          continue;
        }

        html += escapeHtml(character);
        index += 1;
      }

      return html;
    }

    function render() {
      if (!activeExample) return;
      title.textContent = activeExample.title;
      rubyCode.innerHTML = highlightCompareCode("ruby", activeExample.ruby);
      otherCode.innerHTML = highlightCompareCode(activeLanguage, activeExample[activeLanguage]);

      languageButtons.forEach(function (button) {
        var active = button.dataset.compareLanguage === activeLanguage;
        button.classList.toggle("is-active", active);
        button.setAttribute("aria-selected", active ? "true" : "false");
      });
    }

    function open(exampleKey, opener) {
      activeExample = compareExamples[exampleKey];
      if (!activeExample) return;

      activeLanguage = "javascript";
      previousFocus = opener || document.activeElement;
      previousOverflow = document.body.style.overflow;
      render();
      modal.hidden = false;
      document.body.style.overflow = "hidden";

      var closeButton = modal.querySelector("[data-compare-close]");
      if (closeButton) closeButton.focus({ preventScroll: true });
    }

    function close() {
      modal.hidden = true;
      document.body.style.overflow = previousOverflow;
      if (previousFocus && previousFocus.focus) {
        previousFocus.focus({ preventScroll: true });
      }
    }

    root.querySelectorAll("[data-compare-example]").forEach(function (button) {
      button.addEventListener("click", function () {
        open(button.dataset.compareExample, button);
      });
    });

    languageButtons.forEach(function (button) {
      button.addEventListener("click", function () {
        activeLanguage = button.dataset.compareLanguage;
        render();
      });
    });

    modal.querySelectorAll("[data-compare-close]").forEach(function (button) {
      button.addEventListener("click", close);
    });

    document.addEventListener("keydown", function (event) {
      if (!modal.hidden && event.key === "Escape") close();
    });
  }

  function smoothstep(edge0, edge1, value) {
    var x = Math.min(Math.max((value - edge0) / (edge1 - edge0), 0), 1);
    return x * x * (3 - 2 * x);
  }

  function initLoveWall(root) {
    var wall = root.querySelector("[data-love-wall]");
    if (!wall || wall.dataset.loveBound) return;
    wall.dataset.loveBound = "true";

    var cards = Array.prototype.slice.call(wall.querySelectorAll("[data-love-card]"));
    var ticking = false;

    function update() {
      ticking = false;
      var viewport = window.innerHeight || document.documentElement.clientHeight;
      var wallRect = wall.getBoundingClientRect();
      if (viewport > 1600 || wallRect.top > viewport || wallRect.bottom < 0) {
        cards.forEach(function (card) {
          card.style.opacity = "";
          card.style.transform = "";
        });
        return;
      }

      cards.forEach(function (card, index) {
        var cardRect = card.getBoundingClientRect();
        var total = viewport + cardRect.height;
        var progress = total > 0 ? (viewport - cardRect.top) / total : 0;
        progress = Math.min(Math.max(progress, 0), 1);

        var column = index % 3;
        var direction = column === 0 ? -1 : column === 2 ? 1 : index % 2 ? -1 : 1;
        var enter = smoothstep(0.04, 0.38, progress);
        var leave = smoothstep(0.74, 1, progress);
        var visible = Math.max(0, Math.min(enter, 1 - leave));
        var startX = direction * (80 + (index % 3) * 26);
        var startY = 96 + (index % 4) * 14;
        var endX = direction * -1 * (70 + (index % 4) * 22);
        var endY = -82 - (index % 3) * 18;
        var baseRotate = ((index % 5) - 2) * 0.35;
        var x = (1 - enter) * startX + leave * endX;
        var y = (1 - enter) * startY + leave * endY;
        var rotate = baseRotate + (1 - enter) * direction * 3 + leave * direction * -4;

        card.style.opacity = visible.toFixed(3);
        card.style.transform = "translate3d(" + x.toFixed(1) + "px, " + y.toFixed(1) + "px, 0) rotate(" + rotate.toFixed(2) + "deg)";
      });
    }

    function requestUpdate() {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(update);
    }

    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);
    update();
  }

  function initHomepage() {
    var root = document.querySelector(".VPHome");
    if (!root) return;

    initDemoVideos(root);
    initCodeCards(root);
    initCompareModal(root);
    initLoveWall(root);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initHomepage);
  } else {
    initHomepage();
  }

  document.addEventListener("turbo:load", initHomepage);
})();
