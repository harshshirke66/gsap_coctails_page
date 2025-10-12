<div align="center">

# 🍹 COCKTAIL HOTEL

### *Where Animation Meets Mixology*

**A fully interactive cocktail hotel webpage featuring stunning GSAP animations, modern design, and smooth user experiences**

[![Live Demo](https://img.shields.io/badge/🌐_Live_Demo-Visit_Site-ff6b6b?style=for-the-badge)](https://cocktailgsappage.vercel.app/)
[![GSAP](https://img.shields.io/badge/GSAP-88CE02?style=for-the-badge&logo=greensock&logoColor=white)]()
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)]()
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)]()

---

### ✨ *Smooth animations, dynamic interactions, and a stunning visual experience*

[Features](#-features) • [Tech Stack](#️-tech-stack) • [Demo](#-live-demo) • [Installation](#-getting-started) • [Credits](#-credits)

![Cocktail Banner](https://via.placeholder.com/1200x400/ff6b6b/ffffff?text=Cocktail+Hotel+Experience)

</div>

---

## 🎨 Features

<table>
<tr>
<td width="50%">

### 🎬 **Stunning Animations**
- 🌊 **Smooth Scroll Effects** – GSAP-powered parallax scrolling
- ✨ **Element Transitions** – Fade-in, slide, and scale animations
- 🎭 **Interactive Hover States** – Dynamic menu and card interactions
- 🔄 **Page Load Animations** – Engaging first impressions

</td>
<td width="50%">

### 🎯 **Modern UI/UX**
- 📱 **Fully Responsive** – Perfect on mobile, tablet & desktop
- 🎨 **Figma-Inspired Design** – Professional layout and aesthetics
- 🖼️ **Rich Visual Content** – High-quality images and graphics
- 🎪 **Interactive Sections** – Hero, Menu, Gallery, Contact & more

</td>
</tr>
<tr>
<td width="50%">

### ⚡ **Performance**
- 🚀 **Lightning Fast** – Built with Vite for optimal speed
- 📦 **Optimized Assets** – Compressed images and code
- 🔧 **Modern Build Tools** – ES6+ JavaScript features
- 💨 **Quick Load Times** – Minimal bundle size

</td>
<td width="50%">

### 🛠️ **Developer Friendly**
- 📝 **Clean Code Structure** – Easy to understand and modify
- 🔌 **Modular Components** – Reusable React components
- 🎨 **Tailwind CSS** – Utility-first styling
- 📚 **Well Documented** – Clear setup instructions

</td>
</tr>
</table>

---

## 🏗️ Tech Stack

<div align="center">

### **Frontend Framework**
![React](https://img.shields.io/badge/React.js-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript_ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

### **Animation & Styling**
![GSAP](https://img.shields.io/badge/GSAP-88CE02?style=for-the-badge&logo=greensock&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

### **Design & Assets**
![Figma](https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white)

### **Deployment**
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)

</div>

---

## 🌟 Live Demo

<div align="center">

### 🎥 **Experience it yourself!**

[![Visit Website](https://img.shields.io/badge/🍸_Visit_Cocktail_Hotel-ff6b6b?style=for-the-badge&logoColor=white)](https://cocktailgsappage.vercel.app/)

</div>

---

## 🚀 Getting Started

### Prerequisites

```bash
node >= 18.x
npm >= 9.x
```

### Installation

```bash
# Clone the repository
git clone https://github.com/harshshirke66/cocktail-hotel.git

# Navigate to project directory
cd cocktail-hotel

# Install dependencies
npm install

# Start development server
npm run dev
```

### Build for Production

```bash
# Create optimized production build
npm run build

# Preview production build locally
npm run preview
```

---

## 📂 Project Structure

```
cocktail-hotel/
├── src/
│   ├── components/      # Reusable React components
│   ├── sections/        # Page sections (Hero, Menu, About, etc.)
│   ├── assets/          # Images, icons, and media files
│   ├── animations/      # GSAP animation configurations
│   ├── styles/          # Global styles and Tailwind config
│   └── App.jsx          # Main application component
├── public/              # Static assets
├── index.html           # Entry HTML file
└── package.json         # Project dependencies
```

---

## 🎭 Key Sections

<div align="center">

| Section | Description |
|---------|-------------|
| 🏠 **Hero** | Eye-catching landing with animated cocktail graphics |
| 🍹 **Cocktails** | Interactive menu showcasing signature drinks |
| 📖 **About** | Story and philosophy of the cocktail hotel |
| 🎨 **Art Gallery** | Visual showcase with smooth transitions |
| 📋 **Menu** | Detailed drink list with pricing and descriptions |
| 📞 **Contact** | Reservation form and location details |

</div>

---

## 🎬 Animation Highlights

### GSAP Features Used

- **ScrollTrigger** – Animations triggered on scroll
- **Timeline Animations** – Sequenced element reveals
- **Parallax Effects** – Depth and movement
- **Stagger Animations** – Cascading element entrance
- **Smooth Page Transitions** – Seamless navigation

```javascript
// Example GSAP Animation
gsap.from(".hero-title", {
  duration: 1.5,
  y: 100,
  opacity: 0,
  ease: "power4.out",
  scrollTrigger: {
    trigger: ".hero-section",
    start: "top center"
  }
});
```

---

## 📸 Screenshots

<div align="center">

### Desktop View

![Desktop](https://via.placeholder.com/900x500/ff6b6b/ffffff?text=Desktop+Experience)

### Mobile View

<img src="https://via.placeholder.com/300x600/ff6b6b/ffffff?text=Mobile+View" alt="Mobile View" width="250"/>

</div>

---

## 🎨 Customization Guide

### Change Colors

Edit `tailwind.config.js`:

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#ff6b6b',
        secondary: '#4ecdc4',
        accent: '#ffe66d'
      }
    }
  }
}
```

### Add New Cocktails

Edit `src/data/cocktails.js`:

```javascript
export const cocktails = [
  {
    name: "Mojito Classic",
    description: "Fresh mint, lime, and premium rum",
    price: "$12",
    image: "/assets/mojito.jpg"
  }
  // Add more cocktails...
];
```

---

## 🎯 Roadmap

- [x] Responsive design implementation
- [x] GSAP scroll animations
- [x] Interactive menu section
- [ ] Online reservation system
- [ ] 3D cocktail models
- [ ] Dark/Light theme toggle
- [ ] Multi-language support
- [ ] Admin panel for menu management
- [ ] Virtual tour feature

---

## 🤝 Contributing

Contributions make this project even better! 

```bash
# Fork the repository
# Create your feature branch
git checkout -b feature/AmazingFeature

# Commit your changes
git commit -m 'Add some AmazingFeature'

# Push to the branch
git push origin feature/AmazingFeature

# Open a Pull Request
```

---

## 🙏 Credits

<div align="center">

### 🎓 **Special Thanks**

**A huge shoutout to [JavaScript Mastery](https://www.youtube.com/@javascriptmastery) for the incredible design inspiration and guidance!**

This project was built following their amazing tutorial and Figma design template.

[![JavaScript Mastery](https://img.shields.io/badge/JavaScript_Mastery-Tutorial-red?style=for-the-badge&logo=youtube&logoColor=white)](https://www.youtube.com/@javascriptmastery)

</div>

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 👨‍💻 Author

<div align="center">

**Built with 🍹 for the love of animations**

[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/harshshirke66)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/harsh-shirke)
[![Twitter](https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/harshshirke66)
[![Portfolio](https://img.shields.io/badge/Portfolio-FF6B6B?style=for-the-badge&logo=google-chrome&logoColor=white)](https://yourportfolio.com)

---

### ⭐ If you enjoyed this project, please give it a star!

### 🍸 Resources

[GSAP Documentation](https://greensock.com/docs/) • [React Docs](https://react.dev/) • [Tailwind CSS](https://tailwindcss.com/) • [Vite Guide](https://vitejs.dev/)

**Cheers to Great Design & Smooth Animations! 🥂**

</div>
