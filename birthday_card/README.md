# Digital Birthday Greeting Card for Mouli 🎂

This is a small, multi-page web experience designed to celebrate Mouli's birthday in a dreamy, pastel-themed style.

## 📂 Project Structure

```
birthday_card/
├── index.html   # Main HTML markup
├── style.css    # Pastel styling & animations
├── script.js    # Navigation, confetti, music controls
└── README.md    # This file
```

## 🚀 Quick Start

1. **Download / clone** this folder to your computer.
2. Open `index.html` in your favourite browser (Chrome, Edge, Firefox, Safari…).
3. Enjoy the experience and click through the pages.

> No server or build tools required – it’s just simple HTML/CSS/JS.

## 🖌️ Personalisation Guide

Everything is kept simple and **editable** so you can tailor the message.

| Section | How to edit |
| ------- | ----------- |
| Name | Search for `<span class="name">Mouli</span>` in `index.html` and change the text. |
| Welcome subtitle | Edit the `<p class="subtitle">…</p>` inside *Page 1*. |
| Letter (Page 2) | Modify the `<p class="letter">` content – keep `<br>` tags for line breaks. |
| Photo Gallery (Page 3) | Replace each `<img src="…">` with your own image paths or URLs. |
| Surprise Poem (Page 4) | Edit the `<p class="poem">` stanza or insert your own. |
| “10 Things” List (Page 5) | Update the `<ol class="love-list">` items. |
| Thank-you Note (Page 6) | Edit the `<p class="thankyou">` text. |
| Background Music | Replace `src` in `<audio id="bg-music" …>` with an MP3 of your choice. |
| Theme Colours | Adjust CSS variables (`--primary`, `--secondary`, etc.) in `style.css`. |

## 🎨 Colour & Fonts

* **Colours** come from CSS variables at the top of `style.css`.
* **Fonts** are served by Google Fonts – `Dancing Script` for headings and `Poppins` for body copy.

## ✨ Feature Overview

* **Confetti** burst on the welcome page using [`canvas-confetti`](https://www.npmjs.com/package/canvas-confetti).
* **Smooth transitions** between pages (fade/slide).
* **Dot navigation** or *Back / Next* buttons.
* **Background music** with Play / Pause controls.
* **Fully responsive** and mobile-friendly.

## 🛠️ Dependencies

* No external build steps. Only external file is the CDN for `canvas-confetti`.

## 💡 Tips

* Keep your images under ~1 MB each for quicker load times.
* If music doesn’t autoplay because of browser policies, ask the recipient to click *Play Music*.

## 🪄 Enjoy & Spread the Magic

Feel free to tweak, remix, and reuse. Hope it makes Mouli’s day extra special! ❤️