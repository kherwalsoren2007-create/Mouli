# 🎂💕 Digital Birthday Card for Mouli

A beautiful, romantic multi-page digital birthday greeting card with smooth animations, interactive features, and customizable content.

## ✨ Features

- **6 Gorgeous Pages**: Welcome, Letter, Photo Gallery, Surprise, Love List, and Thank You
- **Stunning Animations**: Confetti, floating hearts, smooth page transitions
- **Interactive Elements**: Photo upload, music controls, touch/swipe navigation
- **Romantic Design**: Pastel colors, elegant fonts, dreamy gradients
- **Mobile Responsive**: Works perfectly on all devices
- **Easy Customization**: Simple to edit text and add personal touches

## 🚀 Quick Start

1. **Open the card**: Simply open `index.html` in any modern web browser
2. **Navigate**: Use arrow keys, click the dots, or swipe on mobile
3. **Add photos**: Click on photo placeholders in the gallery section
4. **Play music**: Click the music button on the final page

## 📝 Customization Guide

### Editing the Letter (Page 2)
Edit the letter content in `index.html` around line 40-50:

```html
<div class="letter-content">
    <p>Your personalized message here...</p>
    <!-- Add or modify paragraphs as needed -->
</div>
```

### Modifying the "10 Things I Love" List (Page 5)
Update the love list items in `index.html` around line 120-160:

```html
<div class="love-item">
    <span class="number">1.</span>
    <span class="text">Your custom reason here</span>
</div>
```

### Customizing the Poem (Page 4)
Edit the surprise poem in `index.html` around line 100-110:

```html
<div class="poem">
    <p><em>Your custom poem lines here...</em></p>
</div>
```

### Personalizing Colors
Modify the color scheme in `styles.css`:

```css
/* Main color variables - change these for different themes */
:root {
    --primary-pink: #ff69b4;
    --soft-purple: #dda0dd;
    --light-pink: #ffb6c1;
    --text-purple: #5d4e75;
}
```

### Adding Your Own Music
Replace the demo music with your own audio file:

1. Add your music file (e.g., `birthday-song.mp3`) to the project folder
2. Update the audio source in `index.html`:

```html
<audio id="backgroundMusic" loop>
    <source src="birthday-song.mp3" type="audio/mpeg">
</audio>
```

### Changing the Name
Search and replace "Mouli" throughout the HTML file with your desired name.

## 📸 Adding Photos

### Method 1: Click to Upload
- Navigate to Page 3 (Photo Gallery)
- Click any photo placeholder
- Select images from your device

### Method 2: Drag & Drop
- Navigate to Page 3 (Photo Gallery)
- Drag image files directly onto the placeholders

**Supported formats**: JPG, PNG, GIF, WebP

## 🎮 Navigation

- **Keyboard**: Arrow Left/Right, Home, End
- **Mouse**: Click navigation dots or arrow buttons
- **Touch**: Swipe left/right on mobile devices
- **Auto-advance**: Uncomment the last line in `script.js` to enable

## 🎨 Design Elements

- **Fonts**: Dancing Script (headings), Poppins (body text)
- **Color Palette**: Soft pinks, purples, and pastels
- **Animations**: CSS transitions, keyframe animations
- **Layout**: Flexbox and CSS Grid for responsive design

## 🛠️ Technical Details

### Files Structure
```
birthday-card/
├── index.html      # Main HTML structure
├── styles.css      # All styling and animations
├── script.js       # Interactive functionality
└── README.md       # This file
```

### Browser Support
- Chrome 70+
- Firefox 65+
- Safari 12+
- Edge 79+

### Performance Features
- Optimized animations with CSS transforms
- Lazy loading of page content
- Efficient confetti particle system
- Responsive images and media queries

## 💡 Customization Ideas

### Theme Variations
1. **Elegant Gold**: Replace pinks with golds and creams
2. **Ocean Blue**: Use blues and teals for a calmer feel
3. **Sunset Orange**: Warm oranges and yellows
4. **Galaxy Purple**: Deep purples with star animations

### Additional Features to Add
- Background video support
- More animation effects
- Social sharing buttons
- Print-friendly version
- Multiple language support

### Content Suggestions
- Add more photo gallery pages
- Include a timeline of memories
- Create interactive games or quizzes
- Add voice message recordings
- Include a digital guest book

## 🎁 Special Interactions

- **Heart Burst**: Click on hearts to trigger floating heart animation
- **Image Zoom**: Click uploaded photos to view them larger
- **Keyboard Shortcuts**: Use arrow keys for quick navigation
- **Touch Gestures**: Swipe on mobile for intuitive navigation

## 📱 Mobile Optimization

The card is fully responsive and includes:
- Touch-friendly navigation
- Optimized font sizes for mobile
- Swipe gestures
- Responsive grid layouts
- Mobile-specific animations

## 🎵 Music Notes

The demo includes a simple birthday tune created with Web Audio API. For the best experience:
- Add a real audio file in MP3 format
- Keep file size under 5MB for quick loading
- Choose instrumental or soft vocal tracks
- Ensure you have rights to use the music

## 💝 Final Tips

1. **Preview First**: Always test the card before presenting it
2. **Backup Photos**: Keep copies of uploaded images
3. **Personal Touch**: Add specific memories and inside jokes
4. **Timing**: Present it at the perfect moment for maximum impact
5. **Share**: The card works great for sharing via link or on social media

---

**Made with 💕 for someone special**

*Remember: The most important part is the thought and love you put into personalizing this for your crush. Good luck! 🍀*