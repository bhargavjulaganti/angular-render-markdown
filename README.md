# My Markdown App

This project is a minimal Angular 19+ application that demonstrates how to render Markdown content using [`ngx-markdown`](https://github.com/jfcere/ngx-markdown). It includes support for:

- Rendering Markdown from a file or string.
- Displaying Mermaid diagrams embedded in Markdown.
- Opening Markdown content in a popup dialog.
- Utilizing Angular standalone components (no `AppModule`).

---

## 🚀 Features

1. **Markdown Rendering**: Render Markdown content directly from files or strings using `ngx-markdown`.
2. **Mermaid Diagrams**: Display flowcharts and diagrams using Mermaid syntax embedded in Markdown.
3. **Popup Dialog**: Open Markdown content in a Material Design dialog.
4. **Angular Standalone Components**: Built with Angular's standalone component architecture.

---

## 🛠️ Project Setup

### Prerequisites

- Node.js (v18 or higher)
- Angular CLI (v19 or higher)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-repo/my-markdown-app.git
   cd my-markdown-app
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm start
   ```

   The app will be available at `http://localhost:4200`.

---

## 📂 Project Structure

- **`src/assets/example.md`**: Example Markdown file with Mermaid diagrams.
- **`src/app/markdown-dialog.component.ts`**: Component for rendering Markdown in a Material Design dialog.
- **`src/main.ts`**: Application bootstrap file with Mermaid and Markdown configuration.
- **`src/app/app.component.html`**: Main component template for rendering Markdown content.

---

