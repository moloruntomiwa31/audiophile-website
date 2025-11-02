# Audiophile - Premium Audio Equipment E-commerce

A modern, responsive e-commerce website for premium audio equipment built with Next.js, featuring a complete shopping experience with cart functionality, checkout process, and email confirmations.

## 🚀 Features

### Core Functionality
- **Product Catalog**: Browse headphones, speakers, and earphones
- **Dynamic Product Pages**: Detailed product information with image galleries
- **Shopping Cart**: Add/remove items with quantity management using Zustand
- **Checkout Process**: Complete form validation with React Hook Form & Zod
- **Order Management**: Store orders in Convex database
- **Email Confirmations**: Automated order confirmations via Resend API

### Technical Features
- **State Management**: Zustand for cart and application state
- **Database**: Convex for real-time data storage
- **Email Service**: Resend for transactional emails
- **Type Safety**: TypeScript throughout the application
- **Modern UI**: Custom components with Tailwind CSS

## 🛠️ Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **State Management**: Zustand
- **Database**: Convex
- **Form Handling**: React Hook Form + Zod
- **Email Service**: Resend
- **Deployment**: Vercel

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd audiophile-website
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Update `.env.local` with your values:
   ```
   NEXT_PUBLIC_CONVEX_URL=your_convex_deployment_url
   NEXT_PUBLIC_BASE_URL=http://localhost:3000
   RESEND_API_KEY=your_resend_api_key
   ```

4. **Start Convex development server**
   ```bash
   npx convex dev
   ```

5. **Run the development server**
   ```bash
   pnpm dev
   ```

6. **Open [http://localhost:3000](http://localhost:3000)**

## 🔗 Links

- **Live Demo**: [https://audiophile-31.vercel.app](https://audiophile-31.vercel.app)
