# Primescore

Primescore is a modern, high-performance web application designed to help users track, manage, and rectify their credit profiles. Built with a focus on speed, accessibility, and dynamic user experience, the platform provides a clear and actionable path for credit improvement.

## Features

- **Interactive Case Tracking:** A live, 3D-perspective dashboard preview that visually represents the credit rectification journey.
- **Dynamic Credit Gauge:** Real-time visual representation of credit score spectrums using SVG gradients and fluid animations.
- **Client Management & Inquiries:** Built-in modular forms for capturing user inquiries securely.
- **Fully Responsive Architecture:** Optimized for all screen sizes, from high-density mobile displays to ultrawide desktop monitors.
- **Custom Design System:** Built on top of Tailwind CSS with highly specific brand tokens (Navy, Red, Yellow, Green) replacing generic defaults.

## Tech Stack

This project is built using modern web development standards:

- **Framework:** React 19
- **Build Tool:** Vite
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Routing:** React Router v7

## Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/ReachOutToHardik/primescoredasboard.git
   ```

2. Navigate to the project directory:
   ```bash
   cd primescoredasboard
   ```

3. Install the dependencies:
   ```bash
   npm install
   ```

### Development Server

Run the following command to start the local development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`.

### Production Build

To build the application for production deployment (e.g., to Vercel, Netlify, or an S3 bucket), run:

```bash
npm run build
```

This will generate an optimized build in the `dist` directory.

## Deployment

This project is configured out-of-the-box for zero-configuration deployments on modern platforms like **Vercel**. 
Simply connect the repository to your Vercel account and set the Framework Preset to "Vite".

## License

Copyright © Primescore. All rights reserved.
