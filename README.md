# 🎨 Glassmorphism Color Palette Generator

A modern, responsive web-based application built with **HTML5, CSS3, and JavaScript (ES6)** that dynamically generates random color palettes. The tool features a **Glassmorphism UI** complete with translucent cards, ambient glow effects, locking mechanisms, clipboard copying, and keyboard shortcuts.

## ✨ Features

- **⚡ Dynamic Palette Generation**: Generates 5 distinct hex color codes instantly at the click of a button or keypress.
- **🔒 Color Locking System**: Lock individual color cards to preserve specific shades while regenerating the rest of the palette.
- **📋 One-Click Clipboard Copy**: Click on any hex code block to automatically copy the color code to your clipboard with visual toast notifications.
- **⌨️ Keyboard Navigation**: Press the **Spacebar** to rapidly randomize unlocked colors.
- **💎 Glassmorphism UI**: Designed with modern frosted-glass cards (`backdrop-filter: blur`), subtle ambient background blur orbs, and neon gradient accents.
- **📱 Responsive Layout**: Seamlessly adapts from desktop row layouts to stacked mobile card views.

---

Deployment - https://akshithaanagireddy.github.io/Color_Palette_Generator/

## 📁 File Structure

```text
glassmorphism-color-palette/
│
├── index.html   # Main application markup & DOM structure
├── style.css    # Glassmorphism design tokens, CSS blur filters & layout rules
└── script.js    # State management, color generator, copy events & keydown listeners
