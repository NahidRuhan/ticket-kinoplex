# 🎟️ Ticket Kinoplex

> A next-generation, high-concurrency cinema ticketing platform engineered for zero downtime, heavy traffic spikes, and an ultra-premium booking experience.

[![Next.js](https://img.shields.io/badge/Next.js-16-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-blue?style=flat-square&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5%2B-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Express](https://img.shields.io/badge/Express-5-lightgrey?style=flat-square&logo=express)](https://expressjs.com/)
[![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-v4-38bdf8?style=flat-square&logo=tailwindcss)](https://tailwindcss.com/)

---

## 📌 Problem & Motivation

In many regions—such as Bangladesh with major chains like Star Cineplex—cinema ticketing infrastructures suffer from severe vulnerabilities:
- **Catastrophic Crashes Under Load:** Whenever a blockbuster movie or advance ticket sale drops, platforms buckle under traffic spikes, causing timeouts, transaction failures, and server crashes.
- **Outdated, Frustrating UI/UX:** Clunky multi-step flows, slow and unresponsive seat selection maps, and poor mobile experiences.
- **Race Conditions & Double Bookings:** Inadequate concurrency control leads to seats being locked or sold simultaneously to multiple buyers.

**Ticket Kinoplex** is built from the ground up to solve these problems by providing an enterprise-grade ticketing platform inspired by battle-tested systems (like Ticketmaster), combining crash-resistant infrastructure with an intuitive, world-class user interface.

---

## ✨ Key Features & Goals

### 1. ⚡ High-Concurrency & Crash-Resistant Engine
- **Traffic Surge Resiliency:** Designed to handle sudden thousands-of-users-per-minute spikes without breaking the backend.
- **Virtual Waiting Room & Queue System:** Gracefully throttles inbound demand during blockbuster ticket releases, preventing backend overload.
- **Rate Limiting & Bot Deterrence:** Comprehensive rate limiting across API endpoints to mitigate scrapers, DDoS attempts, and scalper bots.

### 2. 💺 Real-Time Seat Locking (Zero Double-Bookings)
- **Atomic Seat Reservation:** Distributed locking ensures that when a user selects a seat, it is temporarily held with instant state propagation across active sessions.
- **Automatic Expiration:** Seats unlock automatically if payment is not completed within a reserved countdown window.

### 3. 🎨 Ultra-Premium Booking Experience
- **Fluid, Modern UI:** Sleek aesthetic with clean dark mode styling, micro-animations, and fast page loads.
- **Interactive Seat Map:** Intuitive layout selection with real-time seat availability indicators.
- **Frictionless Checkout:** Streamlined booking flow from movie discovery to e-ticket issuance.

---

## 🏗️ Architecture & Project Structure

The project is structured as a modular workspace separating concerns between the frontend presentation layer and the backend API services:

```text
ticket-kinoplex/
├── backend/                  # Express 5 + TypeScript modular backend
│   ├── src/
│   │   ├── config/           # Environment and server configuration
│   │   ├── modules/          # Domain-driven feature modules
│   │   │   ├── health/       # Health check & system diagnostics
│   │   │   └── movies/       # Movie catalog services and controllers
│   │   ├── shared/           # Shared utilities, middlewares, and errors
│   │   ├── app.ts            # Express app assembly & middleware setup
│   │   ├── routes.ts         # Central API route aggregator
│   │   └── index.ts          # Server entry point & graceful shutdown
│   └── tsconfig.json
│
├── frontend/                 # Next.js 16 (App Router) + React 19 + Tailwind v4
│   ├── app/                  # Next.js app directory (pages and layouts)
│   ├── features/             # Feature-sliced domain components
│   │   ├── movies/           # Movie cards, listings, and API clients
│   │   └── tickets/          # Seat maps, booking drawer, and ticket state
│   ├── shared/               # Shared UI components, types, and API client
│   └── next.config.ts
│
└── README.md
```

---

## 🛠️ Tech Stack

| Layer | Technologies |
| :--- | :--- |
| **Frontend** | [Next.js 16](https://nextjs.org/) (App Router), [React 19](https://react.dev/), [Tailwind CSS v4](https://tailwindcss.com/), TypeScript |
| **Backend** | [Node.js](https://nodejs.org/) (ESM), [Express 5](https://expressjs.com/), TypeScript |
| **Concurrency & Caching (Planned)** | [Redis](https://redis.io/) (Distributed locks, session store, virtual queue) |
| **Database (Planned)** | [PostgreSQL](https://www.postgresql.org/) / Prisma ORM |
| **Security & Rate Limiting** | Token-bucket / Sliding-window rate limiters, CORS, Helmet |

---

## 🚀 Getting Started

### Prerequisites
- **Node.js**: `v20.x` or higher
- **npm**: `v10.x` or higher

---

### 1. Backend Setup

```bash
# Navigate to the backend directory
cd backend

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env

# Run the development server (with watch mode)
npm run dev
```

The backend server will run at `http://localhost:5000` with the API available at `http://localhost:5000/api`.

---

### 2. Frontend Setup

```bash
# In a new terminal, navigate to the frontend directory
cd frontend

# Install dependencies
npm install

# Set up environment variables
cp .env.local.example .env.local

# Run the Next.js development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

---

## 🗺️ Roadmap

- [x] **Phase 1: Foundation & Modular Architecture**
  - [x] Next.js 16 App Router setup with feature-sliced structure
  - [x] Express 5 TypeScript server setup with health monitoring
  - [x] End-to-end API client integration
- [ ] **Phase 2: Seat Selection & Concurrency Engine**
  - [ ] Interactive hall seat layout renderer
  - [ ] Distributed seat locking with expiration timers
  - [ ] WebSockets / SSE for real-time seat status updates
- [ ] **Phase 3: High-Load & Surge Protection**
  - [ ] Virtual queue / waiting room for blockbuster drops
  - [ ] Multi-tiered rate limiting (IP + user based)
  - [ ] Load testing suite (k6 / Artillery) simulating high-volume drops
- [ ] **Phase 4: Payments & Ticketing**
  - [ ] Secure payment gateway integration
  - [ ] Dynamic QR code / Apple & Google Wallet e-ticket generation
  - [ ] Automated SMS & Email receipt delivery
- [ ] **Phase 5: Cinema Chain Management**
  - [ ] Multi-multiplex and screen configuration
  - [ ] Box office analytics and live occupancy dashboard

---

## 📄 License

This project is licensed under the [ISC License](LICENSE).