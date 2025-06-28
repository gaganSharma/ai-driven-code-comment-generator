# AI-Driven Code Comment Generator

## Objective

The AI-Driven Code Comment Generator is a full-stack web application designed to enhance code readability by automatically generating clear, concise comments for code snippets. Leveraging the power of Google's Gemini 2.5 Flash AI model, the application processes user-submitted code in languages like JavaScript and Python, producing commented code that improves documentation and maintainability. This project showcases the integration of AI with a modern web stack, demonstrating skills in frontend development, backend API design, and AI model integration.

## Description

This web app allows users to paste code into a syntax-highlighted editor, select the programming language, and generate human-readable comments using the Gemini 2.5 Flash model. The interface displays the original and commented code side-by-side, with options to copy or download the commented version. Built with React for a dynamic frontend, Node.js/Express for the backend, and CodeMirror for a robust code editor, the app serves both the frontend and backend from a single server, simplifying deployment and usage.

### Features

- **Code Input**: Users can input code snippets in JavaScript or Python via a CodeMirror editor with syntax highlighting.
- **AI-Generated Comments**: The Gemini 2.5 Flash model adds clear, context-aware comments to the code, enhancing readability.
- **Side-by-Side Display**: View original and commented code simultaneously in separate editors.
- **Language Support**: Supports JavaScript and Python, with potential for additional languages.
- **Copy/Download Options**: Easily copy the commented code to the clipboard or download it as a `.js` or `.py` file.
- **Responsive Design**: Built with Tailwind CSS for a clean, mobile-friendly UI.

### Tech Stack

- **Frontend**: React, CodeMirror, Tailwind CSS
- **Backend**: Node.js, Express
- **AI Model**: Google Gemini 2.5 Flash (via `@google/generative-ai` API)
- **Dependencies**: `express`, `cors`, `@google/generative-ai`

## Setup Instructions

### Prerequisites

- **Node.js** (v16 or higher)
- **Google Gemini API Key** (get one from [Google AI Studio](https://aistudio.google.com/app/apikey))
- Basic knowledge of JavaScript and Node.js

### Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/your-username/comment-generator.git
   cd comment-generator
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Configure Environment Variables**

   - Copy `.env.example` to `.env`:

     ```bash
     cp .env.example .env
     ```

   - Open `.env` and add your actual Gemini API key:

     ```
     GEMINI_API_KEY=your_gemini_api_key_here
     ```

4. **Start the Application**

   ```bash
   npm start
   ```

   The app will be available at [http://localhost:3000](http://localhost:3000).

---

## Usage

1. **Select Language:** Choose JavaScript or Python from the dropdown.
2. **Paste Code:** Enter your code in the left input area.
3. **Generate Comments:** Click "Generate Comments" to let the AI process your code.
4. **View & Export:** The commented code appears on the right. Use "Copy" or "Download" to export your results.
5. **Switch Theme:** Use the moon/sun button to toggle between light and dark mode.

---

## Deployment

To deploy on platforms like Render, Vercel, or Heroku:

1. Push your code to a Git repository.
2. Set the `GEMINI_API_KEY` environment variable in your deployment platform's dashboard.
3. Deploy the app. Make sure `index.html`, `style.css`, and `script.js` are in the root directory.
4. Access your deployed app via the provided URL.

---

## Notes

- **API Key:** Ensure your Gemini API key is valid and has access to the `gemini-1.5-flash` model.
- **Environment Variables:** Never commit your real `.env` file. Use `.env.example` for sharing configuration.
- **Extending Languages:** To add more languages, update the frontend dropdown and backend prompt logic.
- **Troubleshooting:** If you encounter errors, check your Node.js version, dependency installation, and API key
