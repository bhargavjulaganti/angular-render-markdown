import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideHttpClient } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
import { MarkdownModule, MARKED_OPTIONS } from 'ngx-markdown';
import mermaid from 'mermaid';
import { markedMermaidOptionsFactory } from './marked-mermaid-options';

mermaid.initialize({ startOnLoad: false });

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),
    importProvidersFrom(
      MarkdownModule.forRoot()
    ),
    {
      provide: MARKED_OPTIONS,
      useFactory: markedMermaidOptionsFactory
    }
  ]
}).then(() => {
  // Observe changes to DOM and trigger mermaid
  const observer = new MutationObserver(() => {
    const mermaidBlocks = document.querySelectorAll('.mermaid');
    if (mermaidBlocks.length > 0) {
      mermaid.run();
    }
  });

  observer.observe(document.body, { childList: true, subtree: true });
});