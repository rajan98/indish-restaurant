# Mehmaan Restaurant Website

A modern, responsive Next.js website for Mehmaan Modern Indian Cuisine, featuring smooth animations with Framer Motion and beautiful styling with Tailwind CSS.

## 🚀 Features

- **Modern React Architecture**: Built with Next.js 14 and React 18
- **Smooth Animations**: Framer Motion for engaging user interactions
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Semantic HTML**: Proper HTML structure for accessibility and SEO
- **Component-Based**: Modular, maintainable component architecture
- **Performance Optimized**: Fast loading and smooth scrolling
- **SEO Ready**: Meta tags, structured data, and Open Graph support

## 🛠️ Tech Stack

- **Framework**: Next.js 14
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Inter & Playfair Display (Google Fonts)

## 📁 Project Structure

```
mehmaan-restaurant/
├── public/
│   ├── images/          # Static images
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── layout/      # Header, Footer, Navigation
│   │   ├── home/        # Home page sections
│   │   ├── ui/          # Reusable UI components
│   │   └── common/      # Common components
│   ├── pages/           # Next.js pages
│   ├── styles/          # Global styles
│   └── lib/             # Utilities and constants
├── package.json
├── tailwind.config.js
└── next.config.js
```

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd mehmaan-restaurant
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📱 Sections Included

### 🏠 Hero Section
- Full-screen hero with animated text
- Call-to-action buttons
- Smooth scroll indicators
- Floating background elements

### ℹ️ About Section  
- Company story and values
- Feature highlights with icons
- Statistics and testimonials
- Animated content reveals

### 🍽️ Featured Dishes
- Menu highlights with ratings
- Interactive dish cards
- Hover animations and effects
- Price and timing information

### 💬 Testimonials
- Customer reviews carousel
- Star ratings display
- Navigation controls
- Statistics showcase

### 🎉 Events & Catering
- Corporate events information
- Birthday celebration packages
- Private event booking
- Catering services details

### 📞 Footer & Contact
- Complete contact information
- Social media links
- Newsletter signup
- Quick navigation links

## 🎨 Design Features

- **Custom Color Palette**: Primary orange/amber theme with accent colors
- **Typography**: Elegant serif headings with clean sans-serif body text
- **Animations**: Scroll-triggered animations, hover effects, and micro-interactions
- **Responsive Grid**: Mobile-first responsive layout system
- **Loading States**: Smooth transitions and loading animations

## 🔧 Customization

### Colors
Modify the color scheme in `tailwind.config.js`:
```javascript
colors: {
  primary: {
    // Your primary colors
  },
  accent: {
    // Your accent colors
  }
}
```

### Animations
Add new animations in `src/lib/animations.js`:
```javascript
export const customAnimation = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
};
```

### Components
All components are modular and can be easily customized or extended.

## 📈 Performance

- **Lighthouse Score**: Optimized for 90+ scores
- **Core Web Vitals**: Excellent performance metrics
- **Image Optimization**: Next.js automatic image optimization
- **Code Splitting**: Automatic code splitting for faster loads

## 🌐 Deployment

### Vercel (Recommended)
```bash
npm run build
vercel --prod
```

### Other Platforms
```bash
npm run build
npm start
```

## 📝 License

This project is created for educational purposes. Please ensure you have proper rights to use any images or content in production.