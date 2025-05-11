import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarkdownModule } from 'ngx-markdown';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, MarkdownModule],
  template: `
    <a href="#" (click)="loadMarkdown($event)">Click here to see documentation</a>

    <div *ngIf="showMarkdown">
      <markdown [src]="markdownPath"></markdown>
    </div>
  `
})
export class AppComponent {
  showMarkdown = false;
  markdownPath = 'assets/example.md';

  loadMarkdown(event: Event) {
    event.preventDefault(); // Prevent page reload
    this.showMarkdown = true;
  }
}