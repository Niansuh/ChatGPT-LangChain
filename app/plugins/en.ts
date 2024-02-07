import { BuiltinPlugin } from "./typing";

export const EN_PLUGINS: BuiltinPlugin[] = [
  {
    name: "WebSearch",
    toolName: "web-search",
    lang: "en",
    description: "Web search tool.",
    builtin: true,
    createdAt: 1693744292000,
    enable: true,
    onlyNodeRuntime: false,
  },
  {
    name: "Calculator",
    toolName: "calculator",
    lang: "en",
    description:
      "Evaluates expressions, extends Tool.",
    builtin: true,
    createdAt: 1693744292000,
    enable: true,
    onlyNodeRuntime: false,
  },
  {
    name: "WebBrowser",
    toolName: "web-browser",
    lang: "en",
    description:
      "Extracts info or summarizes content.",
    builtin: true,
    createdAt: 1693744292000,
    enable: true,
    onlyNodeRuntime: false,
  },
  {
    name: "Wikipedia",
    toolName: "WikipediaQueryRun",
    lang: "en",
    description:
      "Wikipedia API interaction tool.",
    builtin: true,
    createdAt: 1694235989000,
    enable: false,
    onlyNodeRuntime: false,
  },
  {
    name: "DALL·E",
    toolName: "dalle_image_generator",
    lang: "en",
    description:
      "Generates images with Cloudflare R2.",
    builtin: true,
    createdAt: 1694703673000,
    enable: false,
    onlyNodeRuntime: false,
  },
  {
    name: "Stable Diffusion",
    toolName: "stable_diffusion_image_generator",
    lang: "en",
    description:
      "Diffusion model with Cloudflare R2.",
    builtin: true,
    createdAt: 1688899480510,
    enable: false,
    onlyNodeRuntime: false,
  },
  {
    name: "Arxiv",
    toolName: "arxiv",
    lang: "en",
    description: "ArXiv article information retrieval.",
    builtin: true,
    createdAt: 1699265115000,
    enable: false,
    onlyNodeRuntime: false,
  },
  {
    name: "PDFBrowser",
    toolName: "pdf-browser",
    lang: "en",
    description:
      "Extracts info, summarizes content.",
    builtin: true,
    createdAt: 1700907315000,
    enable: false,
    onlyNodeRuntime: true,
  },
  {
    name: "WolframAlphaTool",
    toolName: "wolfram_alpha_llm",
    lang: "en",
    description:
      "Answers questions on various topics.",
    builtin: true,
    createdAt: 1703846656000,
    enable: false,
    onlyNodeRuntime: false,
  },
];
