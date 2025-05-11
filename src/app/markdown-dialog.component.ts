import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MarkdownModule } from 'ngx-markdown';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-markdown-dialog',
  standalone: true,
  imports: [CommonModule, MatDialogModule, MarkdownModule],
  template: `
    <mat-dialog-content>
      <markdown [src]="data.src"></markdown>
    </mat-dialog-content>
  `
})
export class MarkdownDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: { src: string }) {}
}