const inputCode = document.getElementById("inputCode");
const outputCode = document.getElementById("outputCode");
const language = document.getElementById("language");
const generateBtn = document.getElementById("generateBtn");
const copyBtn = document.getElementById("copyBtn");
const downloadBtn = document.getElementById("downloadBtn");

// Theme toggle logic
const themeToggle = document.getElementById("themeToggle");
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
if (
  localStorage.getItem("theme") === "dark" ||
  (!localStorage.getItem("theme") && prefersDark)
) {
  document.body.classList.add("dark");
  themeToggle.textContent = "☀️";
}
themeToggle.onclick = function () {
  document.body.classList.toggle("dark");
  if (document.body.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
    themeToggle.textContent = "☀️";
  } else {
    localStorage.setItem("theme", "light");
    themeToggle.textContent = "🌙";
  }
};

generateBtn.onclick = async function () {
  outputCode.value = "Generating comments...";
  generateBtn.disabled = true;
  try {
    const res = await fetch("/api/generate-comments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ code: inputCode.value, language: language.value }),
    });
    const data = await res.json();
    outputCode.value = data.commentedCode || "Error: No comments generated.";
    copyBtn.disabled = !data.commentedCode;
    downloadBtn.disabled = !data.commentedCode;
  } catch (e) {
    outputCode.value = "Error: Failed to generate comments.";
    copyBtn.disabled = true;
    downloadBtn.disabled = true;
  }
  generateBtn.disabled = false;
};

copyBtn.onclick = function () {
  outputCode.select();
  document.execCommand("copy");
  alert("Commented code copied to clipboard!");
};

downloadBtn.onclick = function () {
  const blob = new Blob([outputCode.value], { type: "text/plain" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `commented_code.${
    language.value === "javascript" ? "js" : "py"
  }`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
};
