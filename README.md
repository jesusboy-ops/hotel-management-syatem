# 🏨 Paradise Hotel - Luxury Hotel Management System

A professional, fully responsive React frontend application for a luxury hotel ecosystem with comprehensive booking, dining, and dashboard management features.

## ✨ Features

### Public-Facing Website
- **Landing Page**: Full-width hero banner with animations, about section, highlights, and testimonials carousel
- **Booking System**: Room cards with filters, booking form, and glassmorphism effects
- **Restaurant & Lounge**: Interactive menu grid with floating order cart
- **Static Pages**: Policies, FAQ (accordion), Contact form

### Dashboards
- **Admin Dashboard**: Overview stats, bookings management, orders, dynamic pricing, predictive staffing, analytics, audit logs, settings with theme toggle and 2FA UI
- **Orders Team Dashboard**: Active orders with drag-and-drop, past orders, menu management
- **Reception Dashboard**: Booking calendar, check-ins/check-outs, guest requests panel
- **User Dashboard**: My bookings, online check-in wizard, digital room control panel, orders, profile, loyalty rewards

### UI/UX Features
- **Glassmorphism Effects**: Translucent panels with backdrop blur
- **Responsive Design**: Mobile, tablet, and desktop optimized
- **Theme System**: Light mode (default) and Dark mode toggle
- **Animations**: Smooth transitions, hover effects, and fade-in animations
- **Color Palette**:
  - Light Mode: Cream backgrounds, Deep Navy text, Gold accents, Emerald Green highlights
  - Dark Mode: Dark backgrounds, Cream text, Gold primary, Emerald accents

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Navigate to the project directory:
```bash
cd "hotel app"
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit: `http://localhost:5173`

## 📁 Project Structure

```
src/
├── components/
│   ├── HeroBanner/
│   ├── RoomCard/
│   ├── TestimonialsCarousel/
│   ├── Navbar/
│   ├── Footer/
│   ├── BookingForm/
│   └── Sidebar/
├── pages/
│   ├── Home.jsx
│   ├── Booking.jsx
│   ├── Lounge.jsx
│   ├── Contact.jsx
│   ├── FAQ.jsx
│   ├── Policies.jsx
│   └── dashboard/
│       ├── AdminDashboard.jsx
│       ├── OrdersDashboard.jsx
│       ├── ReceptionDashboard.jsx
│       └── UserDashboard.jsx
├── context/
│   └── ThemeContext.jsx
├── utils/
│   └── mockData.js
├── App.jsx
├── main.jsx
└── index.css
```

## 🎨 Tech Stack

- **React 19** - UI library
- **React Router DOM** - Routing
- **Tailwind CSS** - Styling
- **Vite** - Build tool
- **Context API** - State management (Theme)

## 🌐 Routes

### Public Routes
- `/` - Home page
- `/booking` - Room booking
- `/order` - Food & beverage ordering
- `/contact` - Contact page
- `/faq` - Frequently asked questions
- `/policies` - Hotel policies
- `/login` - Login page

### Dashboard Routes
- `/dashboard/admin` - Admin dashboard
- `/dashboard/orders` - Orders management
- `/dashboard/reception` - Reception desk
- `/dashboard/user` - User dashboard

## 🔐 Access Credentials

### Dashboard Login Credentials

**User Dashboard:**
- Email: `user@paradisehotel.com`
- Password: `user2024`

**Admin Dashboard:**
- Email: `admin@paradisehotel.com`
- Password: `admin@2024`

**Orders Dashboard:**
- Email: `kitchen@paradisehotel.com`
- Password: `kitchen2024`

**Reception Dashboard:**
- Email: `reception@paradisehotel.com`
- Password: `reception2024`

**Demo Account (All Access):**
- Email: `demo@paradisehotel.com`
- Password: `demo123`

📄 **Full credentials documentation:** See `CREDENTIALS.md` for detailed access information.

## 🎯 Key Features Implementation

### Theme System
The app uses a custom ThemeContext that provides:
- Light/Dark mode toggle
- Persistent theme selection (localStorage)
- Dynamic color schemes
- Glassmorphism effects

### Responsive Design
- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Flexible grid layouts
- Touch-friendly interfaces

### Mock Data
All data is mocked in `src/utils/mockData.js`:
- Rooms and suites
- Menu items
- Bookings
- Orders
- Analytics data
- Staffing needs
- Audit logs
- Testimonials

## 🛠️ Available Scripts

```bash
# Development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

## 🚀 Deployment

This app is ready for deployment on Vercel. See `DEPLOYMENT.md` for detailed instructions.

### Quick Deploy to Vercel

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Deploy**
   ```bash
   cd "hotel app"
   vercel
   ```

3. **Deploy to Production**
   ```bash
   vercel --prod
   ```

Or simply connect your GitHub repository to Vercel for automatic deployments.

**Build Output**: `dist/` folder  
**Framework**: Vite  
**Build Command**: `npm run build`  
**Output Directory**: `dist`

## 🎨 Customization

### Colors
Edit `tailwind.config.js` to customize the color palette:
```javascript
colors: {
  'cream': '#faf8f3',
  'navy': '#1a2332',
  'gold': '#d4af37',
  'emerald': '#2d5f4f',
  // Add your custom colors
}
```

### Theme
Modify `src/context/ThemeContext.jsx` to adjust theme settings.

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🔐 Future Enhancements

- Backend API integration
- Real-time booking system
- Payment gateway integration
- Email notifications
- Advanced analytics with charts
- Multi-language support
- Progressive Web App (PWA)

## 📄 License

This project is created for demonstration purposes.

## 👨‍💻 Development

Built with ❤️ using React and Tailwind CSS

---

**Note**: This is a frontend-only application with mock data. For production use, integrate with a backend API and database.
