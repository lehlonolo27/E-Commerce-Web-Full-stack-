
# Ecommerce Platform (Full-Stack Project) – Spring Boot 3, Angular 18, Tailwind CSS, PostgreSQL, Kinde Authentication
## Overview

This is a full-stack **e-commerce platform** designed to showcase expertise in modern web development, using **Spring Boot 3** for the backend and **Angular 18** for the frontend. The project adheres to **best practices in software architecture**, including **Hexagonal Architecture** and **server-side rendering (SSR) with Angular**, ensuring scalability, maintainability, and performance.

## Features

- **🛠️ Admin Dashboard** – Manage products and categories efficiently.
- **🔍✨ Advanced Filtering System** – Users can filter and search products dynamically.
- **🌐⚡ Angular SSR (Server-Side Rendering)** – Improved SEO and faster initial load times.
- **💳 Stripe Integration** – Secure payment processing.
- **🏢 Hexagonal Architecture** – Clean, maintainable backend structure.
- **🔑 Authentication with Kinde** – Secure and scalable authentication.

---

## Installation & Setup

### Prerequisites

Ensure you have the following installed:

- [NodeJS 20.17 LTS](https://nodejs.org/dist/v20.17.0/node-v20.17.0.pkg)
- [Angular CLI v18](https://www.npmjs.com/package/@angular/cli)
- IDE: [VSCode](https://code.visualstudio.com/download) / [IntelliJ IDEA](https://www.jetbrains.com/idea/download/)
- [JDK 21](https://adoptium.net/temurin/releases/)


### Environment Variables

Create an `.env` file inside the `ecom-backend` folder and configure the following:
KINDE_CLIENT_ID=<client-id> KINDE_CLIENT_SECRET=<client-secret> STRIPE_API_KEY=<stripe-api-key> STRIPE_WEBHOOK_SECRET=<stripe-webhook-secret>


---

## Running the Project

### Frontend and Backend

To start **Use the following commands**:

```sh
npx nx serve ecom-frontend
npx nx build ecom-frontend
npx nx show project ecom-frontend
npx nx serve ecom-backend
npx nx build ecom-backend
npx nx show project ecom-backend
