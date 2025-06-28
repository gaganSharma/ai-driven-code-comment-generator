require("dotenv").config(); // Add this line at the very top

const express = require("express");
const cors = require("cors");
const path = require("path");
const { GoogleGenerativeAI } = require("@google/generative-ai");

const app = express();
app.use(cors());
app.use(express.json());

// Serve static files (HTML, CSS, JS)
app.use(express.static(path.join(__dirname)));

// Initialize Gemini API
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

app.post("/api/generate-comments", async (req, res) => {
  const { code, language } = req.body;
  if (!code) {
    return res.status(400).json({ error: "Code is required" });
  }

  try {
    const prompt = `Add clear, concise comments to the following ${language} code. Return only the commented code:\n\n${code}`;
    const result = await model.generateContent(prompt);
    const commentedCode = result.response.text().trim();
    res.json({ commentedCode });
  } catch (error) {
    console.error("Gemini API Error:", error);
    res.status(500).json({ error: "Failed to generate comments" });
  }
});

// Serve index.html for root
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
