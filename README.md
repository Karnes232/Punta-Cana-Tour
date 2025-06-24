# Punta Cana Tour Company Website

A comprehensive, modern tour booking website built with GatsbyJS for a Punta Cana tour company. This platform offers a complete booking experience with PayPal integration, Firebase backend, and automated email notifications.

## 🌟 Features

### 🏠 **Homepage**
- **Hero Section**: Eye-catching banner with call-to-action buttons
- **Company Overview**: Professional introduction and value propositions
- **Tour Highlights**: Featured tours with stunning imagery
- **Interactive Carousel**: Showcasing tour destinations and experiences
- **Responsive Design**: Optimized for all devices and screen sizes

### 🎯 **Tour Management**
- **Comprehensive Tour Catalog**: Detailed tour listings with rich content
- **Individual Tour Pages**: Dedicated pages for each tour with:
  - High-quality images and photo galleries
  - Detailed descriptions and itineraries
  - Pricing information and availability
  - Customer reviews and ratings
  - Booking forms and pickup location selection
- **Tour Categories**: Organized by type (adventure, cultural, water activities, etc.)
- **Search and Filter**: Easy tour discovery and comparison

### 🛒 **Shopping Cart System**
- **React Context API**: State management for cart functionality
- **Local Storage**: Persistent cart data across browser sessions
- **Add/Remove Items**: Intuitive cart management
- **Quantity Controls**: Adjust tour quantities and guest counts
- **Real-time Total Calculation**: Dynamic pricing updates
- **Maximum 4 Tours**: Limit per cart to ensure quality service

### 💳 **Payment Processing**
- **PayPal Integration**: Secure payment processing with `@paypal/react-paypal-js`
- **Multiple Payment Flows**:
  - Standard customer bookings
  - Travel agent bookings with special pricing
  - Transfer service payments
- **Deposit System**: Flexible payment options with deposit requirements
- **Payment Confirmation**: Automated receipts and confirmations

### 📧 **Email Automation**
- **Nodemailer Integration**: Automated email notifications
- **Custom Email Templates**: Professional HTML email designs
- **Booking Confirmations**: Detailed tour information and pickup details
- **Payment Receipts**: Transaction confirmations with booking details
- **Travel Agent Notifications**: Specialized communications for agents

### 🔥 **Firebase Backend**
- **Firestore Database**: Cloud-based data storage
- **Authentication System**: Google and Facebook sign-in options
- **User Management**: Customer and travel agent accounts
- **Data Collections**:
  - `reservationsClientes`: Customer bookings
  - `paidClientes`: Completed payments
  - `travelAgent`: Travel agent bookings
  - `transferClientes`: Transfer service bookings
  - `reviews-{tourUrl}`: Tour-specific reviews
  - `users`: User account management

### 👥 **Travel Agent Portal**
- **Secure Authentication**: Protected admin area
- **Booking Management**: View and manage all bookings
- **Client Database**: Access to customer information
- **Commission Tracking**: Special pricing and commission structures
- **Dashboard Analytics**: Booking statistics and reports

### 📱 **Additional Services**
- **Hotel Bookings**: Accommodation reservations
- **Car Rentals**: Vehicle rental services
- **Transfer Services**: Airport and hotel transfers
- **Property Rentals**: Vacation property bookings
- **Blog Section**: Travel tips and destination guides

## 🛠️ Technology Stack

### **Frontend Framework**
- **GatsbyJS 5.11.0**: Static site generator with React
- **React 18.2.0**: Modern UI library
- **TailwindCSS 3.3.3**: Utility-first CSS framework

### **Backend & Database**
- **Firebase 10.4.0**: Backend-as-a-Service
  - Firestore: NoSQL database
  - Authentication: User management
  - Storage: File uploads and images
- **Firebase Admin 12.6.0**: Server-side Firebase operations

### **Payment Processing**
- **PayPal React SDK 8.1.3**: Payment integration
- **Secure Payment Flows**: Multiple payment scenarios

### **Content Management**
- **Contentful**: Headless CMS for content management
- **Rich Text Rendering**: Dynamic content display

### **UI/UX Libraries**
- **Framer Motion 10.15.0**: Smooth animations
- **React Icons 4.10.1**: Icon library
- **Swiper 10.0.4**: Touch slider
- **React Photo Album 2.3.0**: Image galleries
- **Yet Another React Lightbox 3.21.4**: Image lightbox

### **Form Handling & Validation**
- **React Select 5.7.5**: Advanced select components
- **React Phone Number Input 3.4.4**: Phone number formatting
- **React Stars 2.2.5**: Rating components
- **React TailwindCSS Datepicker 1.6.6**: Date selection

### **Analytics & SEO**
- **Google Analytics**: Website analytics
- **Google Tag Manager**: Marketing tags
- **Gatsby SEO Plugins**: Search engine optimization
- **Sitemap Generation**: Automatic sitemap creation

### **Development Tools**
- **Prettier**: Code formatting
- **PostCSS**: CSS processing
- **Autoprefixer**: CSS vendor prefixes

## 📁 Project Structure

```
punta-cana-tour-company/
├── src/
│   ├── components/           # Reusable React components
│   │   ├── auth/            # Authentication components
│   │   ├── CartComponent/   # Shopping cart functionality
│   │   ├── TourCardComponent/ # Tour display cards
│   │   ├── PayPalButtonWrapper/ # Payment integration
│   │   └── ...              # Other component directories
│   ├── pages/               # Gatsby pages and routes
│   │   ├── tours/           # Tour listing and detail pages
│   │   ├── cart.js          # Shopping cart page
│   │   ├── payment/         # Payment processing pages
│   │   ├── travelagent/     # Travel agent portal
│   │   └── ...              # Other page directories
│   ├── context/             # React Context providers
│   │   ├── cart.js          # Cart state management
│   │   └── travelAgentCart.js # Travel agent cart
│   ├── api/                 # API routes and handlers
│   │   ├── tour.js          # Tour booking API
│   │   ├── transfer.js      # Transfer booking API
│   │   └── ...              # Other API endpoints
│   ├── config/              # Configuration files
│   │   └── firebase.js      # Firebase configuration
│   ├── customHooks/         # Custom React hooks
│   ├── data/                # Static data and content
│   ├── images/              # Static images
│   ├── styles/              # Global styles
│   └── views/               # Page view components
├── public/                  # Static assets
├── gatsby-config.js         # Gatsby configuration
├── gatsby-node.js           # Gatsby build configuration
├── tailwind.config.js       # TailwindCSS configuration
└── package.json             # Dependencies and scripts
```

## 🚀 Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager
- Firebase project setup
- PayPal developer account
- Contentful account (for CMS)

### 1. Clone the Repository
```bash
git clone <repository-url>
cd punta-cana-tour-company
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Environment Variables
Create a `.env` file in the root directory with the following variables:

```env
# Firebase Configuration
FIREBASE_PROJECT_ID=your-project-id
FIREBASE_PRIVATE_KEY=your-private-key
FIREBASE_CLIENT_EMAIL=your-client-email

# Contentful CMS
CONTENTFUL_SPACE_ID=your-space-id
CONTENTFUL_ACCESS_TOKEN=your-access-token

# Email Configuration
EMAIL_USER_NEW=your-email@gmail.com
EMAIL_PASSWORD_NEW=your-app-password

# PayPal Configuration
PAYPAL_CLIENT_ID=your-paypal-client-id
PAYPAL_CLIENT_SECRET=your-paypal-secret

# Google Analytics
GOOGLE_ANALYTICS_ID=your-ga-id
```

### 4. Firebase Setup
1. Create a Firebase project at [Firebase Console](https://console.firebase.google.com/)
2. Enable Firestore Database
3. Enable Authentication (Google, Facebook providers)
4. Enable Storage for file uploads
5. Download service account key and configure environment variables

### 5. PayPal Setup
1. Create a PayPal developer account
2. Set up PayPal app credentials
3. Configure sandbox/live environment
4. Add credentials to environment variables

### 6. Contentful Setup
1. Create a Contentful account
2. Set up content models for tours, layouts, etc.
3. Configure space ID and access token

## 🏃‍♂️ Development

### Start Development Server
```bash
npm run develop
# or
npm run dev  # With increased memory allocation
```

### Available Scripts
- `npm run develop`: Start development server
- `npm run build`: Build for production
- `npm run serve`: Serve production build
- `npm run clean`: Clear Gatsby cache
- `npm run format`: Format code with Prettier
- `npm run kill`: Kill port 8000 if needed

### Development Features
- **Hot Reloading**: Automatic page refresh on changes
- **GraphQL Playground**: Available at `http://localhost:8000/___graphql`
- **Error Overlay**: In-browser error display
- **Performance Monitoring**: Built-in performance insights

## 🏗️ Architecture Overview

### **State Management**
- **React Context API**: Global state for cart and user data
- **Local Storage**: Persistent data across sessions
- **Firebase Real-time Updates**: Live data synchronization

### **Data Flow**
1. **Content Management**: Contentful → Gatsby → Static Pages
2. **User Interactions**: React Components → Context → Local Storage
3. **Payment Processing**: PayPal → API Routes → Firebase → Email
4. **Booking Management**: Forms → Validation → Firebase → Notifications

### **Security Features**
- **Environment Variables**: Sensitive data protection
- **Firebase Security Rules**: Database access control
- **PayPal Security**: PCI-compliant payment processing
- **Input Validation**: Form data sanitization

## 📊 Performance Optimizations

- **Static Site Generation**: Pre-built pages for fast loading
- **Image Optimization**: Gatsby Image plugin for responsive images
- **Code Splitting**: Automatic bundle optimization
- **Lazy Loading**: Components loaded on demand
- **CDN Integration**: Global content delivery
- **SEO Optimization**: Meta tags, sitemaps, and structured data

## 🔧 Customization

### **Styling**
- **TailwindCSS**: Utility-first CSS framework
- **Custom Components**: Reusable UI components
- **Responsive Design**: Mobile-first approach
- **Theme Configuration**: Customizable color schemes

### **Content Management**
- **Contentful Integration**: Headless CMS for easy content updates
- **Rich Text Support**: Dynamic content rendering
- **Image Management**: Optimized image handling
- **Multi-language Support**: Internationalization ready

### **Functionality Extensions**
- **Plugin System**: Gatsby plugin architecture
- **Custom Hooks**: Reusable logic components
- **API Routes**: Serverless functions
- **Third-party Integrations**: Expandable ecosystem

## 🚀 Deployment

### **Build for Production**
```bash
npm run build
```

### **Deployment Options**
- **Netlify**: Recommended for static hosting
- **Vercel**: Alternative deployment platform
- **AWS S3 + CloudFront**: Enterprise hosting
- **Firebase Hosting**: Google Cloud integration

### **Environment Configuration**
- **Production Variables**: Secure environment setup
- **Domain Configuration**: Custom domain setup
- **SSL Certificates**: HTTPS enforcement
- **CDN Setup**: Global content delivery

## 📈 Analytics & Monitoring

### **Google Analytics**
- **Page Views**: Track user navigation
- **Conversion Tracking**: Booking completion rates
- **User Behavior**: Session analysis
- **Performance Metrics**: Core Web Vitals

### **Error Monitoring**
- **Console Logging**: Development debugging
- **Error Boundaries**: React error handling
- **Performance Monitoring**: Real user metrics

## 🤝 Contributing

### **Development Workflow**
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

### **Code Standards**
- **ESLint**: Code linting and formatting
- **Prettier**: Consistent code style
- **TypeScript**: Type safety (optional)
- **Testing**: Unit and integration tests

## 📄 License

This project is licensed under the [MIT License](LICENSE).

## 🙏 Acknowledgements

- **GatsbyJS**: Static site generation framework
- **Firebase**: Backend services and authentication
- **PayPal**: Payment processing integration
- **Contentful**: Content management system
- **TailwindCSS**: Utility-first CSS framework
- **React Community**: Open-source contributions

## 📞 Support

For technical support or questions about the website:
- **Email**: karnes.james@gmail.com


---

**Built with ❤️ for the Punta Cana Tour Company**
