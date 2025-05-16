# TorchLens Chrome Extension

This prototype Chrome extension augments browsing the PyTorch GitHub
repository with helpful tooling:

1. **Smart Code Summaries** – Hover over files, functions, or classes to
   retrieve cached GPT powered summaries from a backend API.
2. **Semantic Navigation** – Ctrl+Click a symbol to jump to its definition
   across the repo using a static analysis index.
3. **Live Trace Visualizer** – For traced model files (e.g. from `torch.fx`)
   a `Visualize Graph` button renders an interactive graph using D3.js.
4. **PR Intelligence Panel** – Pull request pages show diff summaries,
   suggested tests, and review questions from an LLM agent.
5. **Doc ↔ Code Bridge** – Links from API docs lead directly to
   implementation and code pages surface their related docs.

This directory only contains a simplified prototype for experimentation.
