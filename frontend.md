# Techify E-Commerce Frontend Blueprint

## 1. Project Overview & Tech Stack

**Objective:** Complete UI/UX redesign and frontend rebuild for "Techify," an e-commerce platform selling premium tech hardware (keyboards, mice, audio).
**Tech Stack:** Angular (TypeScript), SCSS for styling, and `ngx-toastr` for notifications. (If utilizing a utility CSS framework, Tailwind CSS is preferred).
**Aesthetic Theme:** "Nordic Lifestyle" - Premium, warm, minimalistic, and highly accessible.

---

## 2. The "Nordic Lifestyle" Design System

Do not use dark mode or harsh neon colors. Adhere strictly to this palette and styling:

### Color Palette

- **Background (Global):** `#F9F8F6` (Warm Cream / Off-White).
- **Surface/Cards:** `#FFFFFF` (Pure White). Used for floating panels, product cards, and forms.
- **Text (Primary/Headings):** `#2C363F` (Deep Slate Blue-Gray). Never use pure black `#000000`.
- **Text (Muted/Secondary):** `#8B95A1` (Cool Muted Gray). Used for specifications and placeholders.
- **Primary Accent (Action):** `#8E9B90` (Soft Sage Green). Used for 'Buy Now', 'Save', or 'Create Account' buttons.
- **Secondary Accent (Highlight):** `#B8860B` (Muted Amber). Used for prices, 'Sale' tags, and notification indicators.

### Typography & UI Elements

- **Font Family:** `Inter`, `Satoshi`, or `Plus Jakarta Sans` (Geometric Sans-Serif).
- **Font Weights:** Heavy/Bold for headers; Regular/Thin for descriptions. Extreme negative space between sections.
- **Borders & Shadows:** No harsh borders. Use soft, wide, blurred box-shadows on white cards (e.g., `box-shadow: 0 10px 40px rgba(44, 54, 63, 0.05)`).
- **Buttons:** \* _Primary:_ Solid Sage Green with white text.
  - _Secondary:_ "Ghost" buttons (transparent background, 1px solid Slate Blue-Gray border, Slate text).

### Animation & Motion (Crucial)

- **Page Loads:** Staggered vertical fade-ins for grids and lists.
- **Hover States:** Product cards should lift slightly (translateY: -4px) and increase shadow depth. Buttons should feature smooth color-fill transitions.
- **Image Loading:** Use graceful cross-dissolves or blur-up techniques.

---

## 3. Global Components

- **Navbar:** Sticky, transparent to white background on scroll. Minimalist logo left, centered text links, right-aligned minimalist icons (Cart, User, Search) with Muted Amber notification dots.
- **Footer:** Clean Warm Cream background. Slate Blue-Gray text. Minimalist social icons and a simple email newsletter input with a Sage Green submit arrow.
- **Product Card:** Pure White background, soft shadow. Top 60% is a high-quality product image on a natural texture (wood/marble) background. Bottom 40% contains Slate Blue-Gray Title, Muted Amber Price, and a minimalist Ghost button for 'Add to Cart'.

---

## 4. Page Requirements & Routing

### A. Public Pages

- **Home (`/`):** Massive lifestyle hero image with bold typography. Floating category cards (Keyboards, Mice, Audio) and a 'Curated Favorites' 4-column product grid.
- **Product Details (`/product/:id`):** Split screen. Left: Large interactive image gallery. Right: Slate text specs, Muted Amber price, Sage Green 'Buy Now' button, Ghost 'Add to Cart' button.
- **About Us (`/about`):** 'Our Journey' hero section. Grid of floating white cards for team members.
- **Contact Us (`/contact`):** Minimalist white form panel. Glowing inputs on focus. Floating icons for Email, Phone, and WhatsApp.
- **Log In (`/login`):** Split screen. Left: Lifestyle tech photography. Right: Centered, floating white login form panel.
- **Sign Up (`/register`):** Similar to Login. Multi-input form (Name, Email, Password) with sequential fade-in animations.

### B. User Dashboard (`/user`)

- **Dashboard Overview (`/user/dashboard`):** Grid of white modules showing quick stats (Cart Items, Reward Points). Mini-table of recent orders.
- **Order History (`/user/orders`):** Expandable data table. Rows show Order ID, Date, Amount (Amber), and Status pills (Sage Green). Expands to show invoice details.
- **Wishlist (`/user/wishlist`):** Product card grid. Heart icons fill with Amber on hover.
- **Account Settings (`/user/settings`):** Left sidebar navigation. Right side form panel for updating profile, password, and addresses.

### C. Admin Panel (`/admin`)

- **Admin Dashboard (`/admin/dashboard`):** Data-rich but airy. Modules for Revenue and New Users. Minimalist bar charts (Sage Green) and pie charts (Amber/Gray). Real-time activity feed.
- **Product Management (`/admin/products`):** Full CRUD data table. Columns for Image, Title, Stock, Price. Sage Green '+ Add Product' button opens a clean slide-out form panel.
- **Order Management (`/admin/orders`):** View-all data table for orders. Rows expand to show shipping and item details. Status update dropdowns.
- **Customer Management (`/admin/customers`):** List of all users. Columns for Avatar, Name, Email, Join Date.
- **Messages (`/admin/messages`):** Split view. Left: List of contact form submissions. Right: Reading pane for the selected message with reply functionality.

---

## 5. Execution Instructions for AI Agent

To prevent memory overloads, build this frontend in the following phases:

1. **Phase 1 (Setup & Shared):** Initialize Angular project, set up SCSS variables/mixins matching the Design System, and build the Global Components (Navbar, Footer, Product Card).
2. **Phase 2 (Public Pages):** Generate components and routing for Home, Product Details, About, Contact, Login, and Register. Apply animations.
3. **Phase 3 (Dashboards):** Build the User Dashboard and Admin Panel layouts, including the nested routing and data tables.
