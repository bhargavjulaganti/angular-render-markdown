import { Component } from '@angular/core';
import { MarkdownModule } from 'ngx-markdown';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MarkdownModule],
 template: `
    <markdown src="assets/example.md"></markdown>
  `
})
export class AppComponent {}