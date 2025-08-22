# ShopHub - Ecommerce App

A modern, responsive ecommerce application built with React, TypeScript, and Tailwind CSS. Features include product browsing, shopping cart functionality, user authentication, and admin management.

## Features

### 🛍️ User Features
- **Product Browsing**: Browse products with search, filtering, and sorting
- **Shopping Cart**: Add/remove items, update quantities, view cart total
- **User Authentication**: Login/logout with demo credentials
- **Responsive Design**: Mobile-first design that works on all devices

### 🔧 Admin Features
- **Dashboard**: Overview of sales, products, customers, and orders
- **Product Management**: Add, edit, and delete products
- **Order Management**: View order details, update status, track shipments
- **Inventory Tracking**: Monitor stock levels and low stock alerts

### 🎨 Design Features
- **Modern UI**: Clean, professional design with smooth animations
- **Mode Toggle**: Switch between User and Admin modes
- **Responsive Layout**: Optimized for desktop, tablet, and mobile
- **Interactive Elements**: Hover effects, transitions, and micro-interactions

## Demo Credentials

### Admin User
- **Email**: admin@example.com
- **Password**: admin123

### Regular User
- **Email**: user@example.com
- **Password**: user123

## Tech Stack

- **Frontend**: React 19 + TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Routing**: React Router DOM
- **State Management**: React Context API
- **Build Tool**: Vite

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd ReactQueryRedux
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Project Structure

```
src/
├── components/          # Reusable UI components
│   └── Navbar.tsx     # Navigation with mode toggle
├── context/            # React Context providers
│   ├── AuthContext.tsx # Authentication state
│   └── CartContext.tsx # Shopping cart state
├── data/               # Dummy data and mock APIs
│   └── dummyData.ts   # Sample products, orders, users
├── pages/              # Application pages
│   ├── Home.tsx       # Landing page
│   ├── Products.tsx   # Product catalog
│   ├── Cart.tsx       # Shopping cart
│   ├── Login.tsx      # Authentication
│   ├── AdminDashboard.tsx    # Admin overview
│   ├── AdminProducts.tsx     # Product management
│   └── AdminOrders.tsx       # Order management
├── App.tsx            # Main application component
├── main.tsx          # Application entry point
└── index.css         # Global styles and Tailwind
```

## Key Components

### Mode Toggle
The app features a prominent toggle button in the navbar that switches between:
- **User Mode**: Standard ecommerce experience
- **Admin Mode**: Administrative dashboard and management tools

### Authentication System
- Context-based state management
- Protected routes for admin functionality
- Demo login with predefined credentials
- User role management (user/admin)

### Shopping Cart
- Add/remove products
- Quantity management
- Real-time total calculation
- Persistent cart state

### Admin Dashboard
- Revenue and sales statistics
- Product and customer overview
- Recent orders with status tracking
- Low stock alerts

## Customization

### Adding New Products
1. Navigate to Admin Mode
2. Go to "Manage Products"
3. Click "Add Product"
4. Fill in product details
5. Save the product

### Modifying Order Status
1. Navigate to Admin Mode
2. Go to "Orders"
3. Use the status dropdown to update order status
4. Changes are reflected immediately

### Styling
The app uses Tailwind CSS with custom CSS variables. Modify `src/index.css` to customize:
- Color schemes
- Typography
- Spacing
- Animations

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

For questions or support, please open an issue in the repository.

---

**Note**: This is a demo application with dummy data. No real API calls or database operations are performed.
