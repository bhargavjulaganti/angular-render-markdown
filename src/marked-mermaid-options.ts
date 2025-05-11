import { MarkedOptions } from 'ngx-markdown';
import { RendererObject, Tokens } from 'marked';

export function markedMermaidOptionsFactory(): MarkedOptions {
  const renderer: RendererObject = {
    code({ text, lang }: Tokens.Code): string {
      if (lang === 'mermaid') {
        return `<div class="mermaid">${text}</div>`;
      }
      return `<pre><code>${text}</code></pre>`;
    }
  };

  return {
    renderer: renderer as any // force cast to avoid strict type mismatch due to internal `_Renderer` details
  };
}