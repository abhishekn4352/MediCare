# MediCare Dashboard

A responsive healthcare dashboard interface built with **React, HTML, CSS, and JavaScript**. This application demonstrates modern web development practices with reusable components, state management, and mobile-responsive design.

## 🌐 Live Preview

**[View Live Demo](https://medicare-dashboard-ashen.vercel.app)** - https://medicare-dashboard-ashen.vercel.app

The application is deployed on Vercel and ready to use!

## Features

- **Dashboard Overview** - Statistics and recent activity display
- **Patient Management** - Browse patient records with filterable data
- **Patient Profiles** - Detailed patient information and medical history
- **Appointment Listing** - View and manage appointments
- **Search Functionality** - Real-time search across patients and appointments
- **Responsive Design** - Mobile-first approach with CSS Grid and Flexbox
- **Accessibility** - ARIA labels and semantic HTML for better accessibility

## Project Structure

```
src/
├── components/          # Reusable React components
│   ├── Dashboard.jsx
│   ├── PatientList.jsx
│   ├── PatientProfile.jsx
│   ├── AppointmentList.jsx
│   ├── SearchBar.jsx
│   └── StatCard.jsx
├── styles/             # CSS modules for each component
│   ├── Dashboard.css
│   ├── PatientList.css
│   ├── PatientProfile.css
│   ├── AppointmentList.css
│   ├── SearchBar.css
│   └── StatCard.css
├── App.jsx             # Main application component
├── App.css             # Global styles
├── main.jsx            # React entry point
└── index.css           # Global CSS reset
```

## Technologies Used

- **React** - Component-based UI library
- **Vite** - Fast build tool and development server
- **CSS3** - Responsive layouts with Grid and Flexbox
- **JavaScript ES6+** - Modern JavaScript features

## Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager

### Installation Steps

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Start development server**
   ```bash
   npm run dev
   ```

3. **Open in browser**
   - Navigate to `http://localhost:5173` (default Vite port)

### Build for Production

```bash
npm run build
```

Output files will be in the `dist/` folder.

## Key Components

### Dashboard
- Displays key statistics (Total Patients, Appointments, Doctors, Emergency Cases)
- Shows recent activity feed
- Quick action buttons for common tasks

### Patient List
- Filterable table of patient records
- Search by name or ID
- View patient profiles
- Status indicators

### Patient Profile
- Detailed patient information
- Medical history and medications
- Actions: Edit, Print, Schedule Appointment

### Appointment List
- View all appointments
- Filter by patient name or doctor
- Status badges (Scheduled, Pending, Completed)
- Manage appointments

### Search Bar
- Real-time search across multiple tabs
- Accessible search input with ARIA labels

## Features Implementation

### State Management
- Uses React hooks (`useState`) for component-level state management
- Efficient re-rendering with proper dependency management

### Responsive Design
- **Mobile** (< 480px) - Single column layout, vertical navigation
- **Tablet** (480px - 768px) - Optimized grid layouts
- **Desktop** (> 768px) - Multi-column layouts with full functionality

### UI/UX Principles
- Clean and intuitive navigation
- Consistent color scheme (Purple gradient theme)
- Smooth animations and transitions
- Visual feedback on interactions (hover, active states)
- Clear status indicators with color coding

### Accessibility
- Semantic HTML structure
- ARIA labels for interactive elements
- Keyboard navigation support
- High contrast text for readability

## Browser Compatibility

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Optimizations

- Component-based architecture for code reusability
- CSS modules to prevent style conflicts
- Optimized animations using CSS transforms
- Lazy component loading ready for future expansion

## Future Enhancements

- Backend API integration
- Authentication and authorization
- Data persistence with database
- Advanced filtering and sorting
- Export functionality (PDF, CSV)
- Real-time notifications
- Dark mode toggle
- Role-based access control

## License

This project is part of a healthcare management portfolio demonstration.

## Author

Developed as a responsive healthcare dashboard application showcasing modern React and UI/UX best practices.

## Repository

- **GitHub:** https://github.com/abhishekn4352/MediCare
- **Live Demo:** https://medicare-dashboard-ashen.vercel.app

## Quick Start

1. Clone the repository:
```bash
git clone https://github.com/abhishekn4352/MediCare.git
cd MediCare
```

2. Install dependencies and start:
```bash
npm install
npm run dev
```

3. Open http://localhost:5173 in your browser

## Deployment

The project is automatically deployed to Vercel. Any push to the main branch will trigger a new deployment.

Deploy your own version:
```bash
npm install -g vercel
vercel --prod
```
