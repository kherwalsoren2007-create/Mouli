# Dreamy Birthday Card for Mouli

A warm, romantic, and dreamy multi-page digital birthday card. Built as a simple static website—easy to edit and share.

## Quick start

- Open a terminal in this folder and run a local server:
  
  ```bash
  cd /workspace/birthday-card
  python3 -m http.server 5050
  ```
  
- Open `http://localhost:5050` in your browser.

## Customize

- Name/title: edit the headline in `index.html` on page 1 ("Happy Birthday Mouli !").
- Letter: edit the content under page 2 (the `section.page-2`).
- Gallery photos: 
  - Add images to `assets/photos/` (create the folder if needed).
  - Replace placeholders in the gallery (page 3) with `<img src="assets/photos/your-photo.jpg" alt="..." />` inside each `.photo` item. You can duplicate/remove `.photo` items as needed.
- Surprise poem: edit page 4's poem text.
- "10 things I love about you": edit the `<ol>` list items on page 5.
- Music (page 6):
  - Place a soft track at `assets/soft-melody.mp3` (or change the `src` of `#bg-music` in `index.html`).
  - Due to browser autoplay rules, music starts only after a user gesture (the "Play a soft melody" button).

## Styling

- Global theme colors and glass effect live in `styles.css` at the top (`:root`).
- Headings use `Dancing Script` and `Playfair Display`; body uses `Poppins`. Update the Google Fonts link in `index.html` if you want different fonts.
- Page transitions are controlled by `.page` styles in `styles.css`.

## Effects

- Confetti is powered by `canvas-confetti` via CDN.
- Gentle confetti bursts appear on page 1 and page 4 by default. You can tweak this in `script.js`.

## Sharing

- You can host these files anywhere (GitHub Pages, Netlify, Vercel, etc.).
- To deep-link to a page, use `?p=N` (e.g., `/?p=3` opens the gallery).

## Notes

- Everything is plain HTML/CSS/JS, so it’s easy to edit.
- Keep the tone romantic, charming, and respectful when customizing the text.