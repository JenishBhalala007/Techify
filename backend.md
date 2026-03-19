# Techify E-Commerce Backend Blueprint

## 1. Project Overview & Tech Stack
**Objective:** Build a robust, scalable RESTful API for a multi-page e-commerce platform named "Techify" specializing in electronic hardware (keyboards, mice, etc.).
**Tech Stack:** Node.js, Express.js, MongoDB (Mongoose for ODM).
**Authentication:** JSON Web Tokens (JWT) with role-based access control (Admin vs. User).

---

## 2. Core Functionalities Required
The backend must support the following specific features:
* **Authentication:** User registration, login, and JWT middleware protection.
* **Profile CRUD:** Users can view, update, and delete their profile data.
* **Product CRUD:** Admins can create, read, update, and delete products. 
* **Show All Products:** Public endpoint to list products with optional filtering/searching.
* **Add to Cart:** Users can add/remove products and adjust quantities. The cart must be embedded within the User document for fast querying.
* **Discount Logic:** The product schema must store a base `price` and a `discountPercentage`. The final price must be calculated dynamically (e.g., via a Mongoose virtual field).
* **Product Comparison:** An endpoint that accepts an array of Product IDs and returns their full details (including dynamic hardware specs) so the frontend can build a side-by-side comparison table.
* **Contact Us:** Endpoint to receive contact form submissions (Name, Email, WhatsApp number, Message) and save them to the database.
* **Order Processing:** Endpoint to convert a user's cart into a final Order document, tracking payment status and shipping details.

---

## 3. Database Schema Definitions (MongoDB Collections)
Please define Mongoose models for the following collections:

### A. Users Collection (`User`)
* **Fields:** `name` (String), `email` (String, unique), `password` (String, hashed), `role` (Enum: 'user', 'admin'), `phone` (String), `address` (Object with street, city, state, zipCode, country).
* **Embedded Cart:** `cart` (Array of objects containing `productId` referencing the Product model, and `quantity` as a Number).
* **Options:** Include `timestamps`.

### B. Products Collection (`Product`)
* **Fields:** `title` (String), `description` (String), `category` (String), `brand` (String), `images` (Array of Strings/URLs), `price` (Number), `discountPercentage` (Number, default 0), `stockQuantity` (Number).
* **Dynamic Specs:** `features` (Map of Strings) - Used to store key-value pairs of hardware specifications (e.g., "Switch Type": "Tactile") for the Product Comparison feature.
* **Virtuals:** Create a virtual `finalPrice` field calculating the price after `discountPercentage`.
* **Options:** Include `timestamps`, enable `toJSON: { virtuals: true }`.

### C. Orders Collection (`Order`)
* **Fields:** `userId` (ObjectId referencing User), `orderItems` (Array of objects storing `productId`, `title`, `quantity`, and `priceAtPurchase`), `shippingAddress` (Object), `paymentMethod` (String), `itemsPrice` (Number), `totalPrice` (Number), `isPaid` (Boolean), `orderStatus` (Enum: 'Processing', 'Shipped', 'Delivered').
* **Options:** Include `timestamps`.

### D. Messages Collection (`Message`) - For Contact Us
* **Fields:** `name` (String), `email` (String), `whatsappNumber` (String), `subject` (String), `message` (String), `status` (Enum: 'unread', 'read', 'replied').
* **Options:** Include `timestamps`.

---

## 4. API Routes Architecture
Implement the following Express routes using MVC architecture (Routes -> Controllers -> Models).

**Auth & Users (`/api/users`)**
* `POST /register` - Hash password and create user.
* `POST /login` - Verify password and return JWT.
* `GET /profile` - Get logged-in user details (Protected).
* `PUT /profile` - Update profile (Protected).
* `POST /cart` - Add item or update quantity in user's cart (Protected).

**Products (`/api/products`)**
* `GET /` - Fetch all products.
* `GET /:id` - Fetch single product.
* `POST /compare` - Expects array of `productIds` in body, returns matched products.
* `POST /` - Create product (Admin Protected).
* `PUT /:id` - Update product (Admin Protected).
* `DELETE /:id` - Delete product (Admin Protected).

**Orders (`/api/orders`)**
* `POST /` - Create a new order from cart details (Protected).
* `GET /myorders` - Fetch logged-in user's orders (Protected).
* `GET /` - Fetch all orders (Admin Protected).

**Contact (`/api/contact`)**
* `POST /` - Save contact form submission to `messages` collection.

---

## 5. Instructions for the AI Generator
1.  **Initialize Project:** Create the directory structure (`controllers/`, `models/`, `routes/`, `middleware/`, `config/`).
2.  **Database Connection:** Write the `db.js` file to connect to MongoDB using Mongoose.
3.  **Middleware:** Write an `authMiddleware.js` file to verify JWTs and check for Admin roles.
4.  **Controllers & Routes:** Generate the code for all controllers and link them in the router files. Use `async/await` and `try/catch` for error handling.
5.  **Entry Point:** Create a clean `server.js` file that mounts the routes and handles global errors.