# 🔴 Nothing Store - Futuristic 3D E-Commerce

A premium, industrial 3D e-commerce experience featuring glass-refraction effects, dot-matrix typography, and minimalist design inspired by the "Nothing" brand aesthetic.

## 🎨 Design Philosophy

- **Brand**: Nothing (Industrial, Transparent, Minimalist)
- **Aesthetic**: Glassmorphism + Raw Engineering
- **Color Palette**: Black (#000), White (#fff), Red (#D71921)
- **Typography**: DotGothic16 for headers, Share Tech Mono for tech specs, Inter for body

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS 3.4
- **3D Graphics**: React Three Fiber + Drei
- **Animations**: Framer Motion
- **Glass Shader**: MeshTransmissionMaterial (realistic refraction)

## 📋 Features

### ✨ Hero Section
- Full-screen 3D canvas with glass box
- Floating TorusKnot object with red emissive material
- Realistic glass refraction with transmission material
- Smooth animations and orbit controls

### 🎯 Product Grid (Bento Layout)
- CSS Grid with responsive column spanning
- Glassmorphism cards with hover effects
- Technical specs in dot-matrix font
- SKU and price information
- Decorative corner elements with red accents

### 🧭 Floating Navigation
- Dock-style navbar at bottom center
- Glass pill design with backdrop blur
- Active state indicators
- Badge system for notifications
- Smooth animations with Framer Motion

### 🔧 Global Features
- Dark industrial background
- Custom glass-panel utility classes
- Tech-style text utilities
- Responsive breakpoints
- Smooth scrolling and transitions

## 🚀 Installation & Setup

### Prerequisites
- Node.js 18+ 
- npm or yarn package manager

### Steps

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run development server**:
   ```bash
   npm run dev
   ```

3. **Open browser**:
   Navigate to `http://localhost:3000`

4. **Build for production**:
   ```bash
   npm run build
   npm start
   ```

## 📁 Project Structure

```
nothing-store/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main page composing all sections
│   └── globals.css         # Global styles, fonts, utilities
├── components/
│   ├── HeroStage.tsx       # 3D glass box hero section
│   ├── ProductGrid.tsx     # Bento grid with products
│   ├── GlassCard.tsx       # Product card component
│   └── Navbar.tsx          # Floating navigation dock
├── package.json            # Dependencies
├── tailwind.config.ts      # Tailwind configuration
├── postcss.config.js       # PostCSS configuration
├── next.config.ts          # Next.js configuration
├── tsconfig.json           # TypeScript configuration
└── .gitignore              # Git ignore rules
```

## 🎨 Customization Guide

### Change Colors
Edit [globals.css](app/globals.css) to modify:
```css
.nothing-red { color: #d71921; }
.glass-panel { background-color: rgba(255, 255, 255, 0.05); }
```

### Add Products
Modify `products` array in [ProductGrid.tsx](components/ProductGrid.tsx):
```typescript
const products = [
  {
    title: "Your Product",
    category: "Category",
    colSpan: 1,
    rowSpan: 1,
    specs: [
      { label: "Spec 1", value: "Value 1" },
      // ...
    ],
  },
];
```

### Adjust 3D Parameters
In [HeroStage.tsx](components/HeroStage.tsx), modify MeshTransmissionMaterial:
```tsx
<MeshTransmissionMaterial
  transmission={1}      // Glass opacity
  thickness={2}         // Physical thickness
  chromaticAberration={0.05}  // Color distortion
/>
```

### Customize Fonts
In [globals.css](app/globals.css), import different fonts:
```css
@import url("https://fonts.googleapis.com/css2?family=YourFont");
```

## 🎯 Key Components Explained

### HeroStage Component
- Renders a Canvas from @react-three/fiber
- GlassBox: 3D box mesh with transmission material for realism
- FloatingObject: TorusKnot inside glass (placeholder for products)
- Environment: Studio lighting for professional reflections
- Controls: OrbitControls for interactive rotation

### GlassCard Component
- Glassmorphism design using backdrop-blur
- Corner decorative elements (red accents)
- Spec grid layout for technical details
- Hover glow effect with smooth transitions
- SKU generation and price display

### Navbar Component
- Fixed bottom-center positioning
- Framer Motion animations
- Active state with layout animation
- Badge notifications (e.g., cart count)
- Tooltips on hover

## 📱 Responsive Design

The site is fully responsive with:
- Mobile: Single column layout
- Tablet (md): 2-column grid
- Desktop (lg): 4-column Bento grid
- Custom breakpoints via Tailwind

## ⚡ Performance Tips

1. **3D Optimization**: Reduce canvas geometry complexity for lower-end devices
2. **Image Loading**: Implement lazy loading for product images
3. **Animation Throttling**: Use `willChange` CSS for heavy animations
4. **Bundle Size**: Tree-shake unused Three.js features

## 🐛 Troubleshooting

### Glass Effect Not Showing
- Ensure Environment is loaded correctly
- Check MeshTransmissionMaterial parameters
- Verify lighting is sufficient

### Navbar Not Appearing
- Check `pointer-events-auto` class
- Verify z-index (z-50) is not overridden
- Ensure Framer Motion is installed

### Responsive Grid Issues
- Use `md:col-span-2` for Tailwind responsive
- Check grid auto-rows settings
- Inspect with DevTools grid overlay

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Three Fiber Docs](https://docs.pmnd.rs/react-three-fiber/)
- [Drei Components](https://github.com/pmndrs/drei)
- [Tailwind CSS](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion/)
- [Nothing Brand](https://nothing.tech)

## 📄 License

MIT License - Feel free to use this as a template for your projects.

## 🎯 Next Steps

1. **Add Real Products**: Replace placeholder product data
2. **Implement Backend**: Connect to your e-commerce API
3. **3D Models**: Import custom GLTF/GLB models
4. **Payment Integration**: Add Stripe or similar
5. **Analytics**: Integrate tracking (Posthog, Segment, etc.)

---

Built with ❤️ for the future of e-commerce. Transparent engineering, premium design.
