# Wanderlust - Travel Agency Website

A modern, responsive travel agency website built with React.js, featuring comprehensive travel packages, booking management, and customer reviews.

## 🚀 Features

### ✈️ Core Features
- **5+ Navigation Pages**: Home, About, Services, Contact, Packages (Gallery)
- **Responsive Design**: Fully responsive on desktop, tablet, and mobile devices
- **Modern UI/UX**: Clean, professional design with smooth animations and transitions
- **State Management**: React Context API for centralized state management
- **Form Validation**: Client-side validation on contact forms with error handling
- **Dynamic Content**: Mock data with ability to integrate real APIs

### 📱 Pages Included

1. **Home Page** (`/`)
   - Hero section with call-to-action
   - Featured packages showcase
   - Why choose us section with benefits
   - Customer reviews carousel
   - CTA section

2. **About Page** (`/about`)
   - Company story and mission
   - Mission, Vision, Values cards
   - Statistics showcase (500K+ travelers, 100+ destinations)
   - Team member profiles
   - Awards and recognition

3. **Services Page** (`/services`)
   - 6 comprehensive service cards
   - Service details and features
   - How it works timeline
   - Special offers section
   - CTA for expert consultation

4. **Contact Page** (`/contact`)
   - Contact information display
   - Form validation with error messages
   - Contact form with fields:
     - Name, Email, Phone
     - Preferred Destination
     - Travel Date
     - Message
   - Recent messages display (CRUD operations)
   - Multiple contact methods

5. **Packages Page** (`/packages`)
   - Package filtering by category (All, Budget, Mid-Range, Luxury)
   - Price range slider filter
   - 6+ pre-loaded travel packages
   - Popular destinations section
   - Why book with us section
   - Booking confirmation modal

### 🎨 Design Features
- **Color Scheme**: Professional blue and red palette
- **Typography**: Clean, readable fonts with proper hierarchy
- **Spacing**: Consistent padding and margins throughout
- **Animations**: Smooth hover effects and transitions
- **Icons**: Emoji icons for visual appeal
- **Grid Layout**: CSS Grid for responsive layouts
- **Flexbox**: Flexible component arrangement

### 🛠️ Technologies Used

#### Frontend
- **React 19.2.6**: Modern UI framework
- **React Router DOM 7.15.1**: Client-side routing
- **Axios 1.16.1**: HTTP client for API integration
- **CSS3**: Custom styling with CSS Grid and Flexbox

#### Build Tools
- **Vite 8.0.12**: Fast build tool and dev server
- **ESLint**: Code quality and standards
- **Babel**: JavaScript transpilation

### 📂 Project Structure

```
src/
├── components/              # Reusable components
│   ├── Navbar.jsx         # Navigation component
│   ├── Footer.jsx         # Footer component
│   ├── Hero.jsx           # Hero section
│   ├── PackageCard.jsx    # Package card component
│   └── ReviewCard.jsx     # Review card component
├── pages/                  # Page components
│   ├── Home.jsx           # Home page
│   ├── About.jsx          # About page
│   ├── Services.jsx       # Services page
│   ├── Contact.jsx        # Contact page
│   └── Packages.jsx       # Packages page
├── context/               # Context API
│   └── TravelContext.jsx  # Global state management
├── styles/                # Component styles
│   ├── Navbar.css
│   ├── Footer.css
│   ├── Hero.css
│   ├── PackageCard.css
│   ├── ReviewCard.css
│   ├── Home.css
│   ├── About.css
│   ├── Services.css
│   ├── Contact.css
│   └── Packages.css
├── App.jsx                # Main app with routing
├── App.css                # Global styles
├── main.jsx              # React root
└── index.css             # Global CSS

public/                    # Static assets
package.json              # Dependencies
vite.config.js           # Vite configuration
```

### 🔄 State Management

#### Context API - TravelContext.jsx
- **Bookings**: Manage travel package bookings
- **Reviews**: Store and manage customer reviews
- **Packages**: Available travel packages
- **Contact Messages**: Store contact form submissions
- **Form Data**: Contact form state

#### Custom Hook
```javascript
const { bookings, addBooking, removeBooking } = useTravel();
```

### 📋 Form Validation

Contact form includes validation for:
- ✓ Name (required, not empty)
- ✓ Email (required, valid format)
- ✓ Phone (required, valid format)
- ✓ Destination (required, select from list)
- ✓ Travel Date (required, date picker)
- ✓ Message (required, minimum text)

### 🎯 CRUD Operations

The application demonstrates CRUD operations:
- **Create**: Add new bookings and reviews
- **Read**: Display packages, bookings, and reviews
- **Update**: Modify booking details
- **Delete**: Remove bookings from list

### 📱 Responsive Breakpoints

- **Desktop**: 1024px and above
- **Tablet**: 768px - 1023px
- **Mobile**: 480px - 767px
- **Small Mobile**: Below 480px

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone/Navigate to project**
   ```bash
   cd Task_17
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

### Development

The project uses:
- **Hot Module Replacement (HMR)** with Vite for instant updates
- **ESLint** for code quality
- **React Strict Mode** for development warnings

## 🎨 Color Palette

```
Primary Color:    #2c3e50 (Dark Blue)
Accent Color:     #e74c3c (Red)
Secondary Color:  #3498db (Light Blue)
Success Color:    #27ae60 (Green)
Light BG:         #ecf0f1 (Light Gray)
Border Color:     #bdc3c7 (Medium Gray)
```

## 🔌 API Integration Ready

The application is structured to easily integrate with real APIs:

```javascript
// Example API integration in TravelContext.jsx
import axios from 'axios';

// Replace mock data with API calls:
useEffect(() => {
  axios.get('https://api.example.com/packages')
    .then(response => setPackages(response.data))
    .catch(error => console.error(error));
}, []);
```

## 📚 Learning Concepts Implemented

1. **Components**: Functional components with Props
2. **Hooks**: useState, useContext, useCallback
3. **Routing**: React Router DOM with multiple routes
4. **State Management**: Context API with custom hooks
5. **Forms**: Controlled components with validation
6. **CRUD Operations**: Create, Read, Update, Delete bookings
7. **Responsive Design**: Mobile-first CSS Grid approach
8. **API Ready**: Axios configured for API integration

## 🌟 Key Highlights

- ✨ Modern React 19 with latest features
- 📱 Mobile-first responsive design
- 🎨 Professional and clean UI
- ⚡ Fast performance with Vite
- 🔒 Form validation and security
- 🌍 SEO-friendly structure
- ♿ Semantic HTML for accessibility
- 🎯 Smooth animations and transitions

## 📝 License

This project is created for educational purposes as part of React.js training.

## 👨‍💻 Author

Built with React.js following modern web development best practices.

---

**Happy Traveling! ✈️**
