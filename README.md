# INDOVIBE EXPLORER

An interactive map landing page for Indonesia tourism discovery, styled with Neo-Brutalism (bold black borders, bright colors, sharp drop shadows).

## Features

- **Interactive Map:** Explore the Indonesian archipelago with custom markers and zoom controls.
- **Neo-Brutalist Design:** Bold aesthetics with high contrast, sharp shadows, and vibrant colors.
- **Destination Details:** View information about top destinations like Bali, Yogyakarta, and Raja Ampat in a stylized sidebar and popup modals.
- **Responsive Layout:** Works on mobile and desktop.
- **Static Deployment Ready:** Can be deployed as a static site (e.g., on Vercel or Netlify).

## Tech Stack

- **Frontend:** React, TypeScript, Vite, Tailwind CSS, Shadcn UI, Framer Motion.
- **Map:** react-simple-maps, d3-geo.
- **Icons:** Lucide React.

## Local Development

### Prerequisites

- Node.js (v18 or higher)
- npm

### Installation

1. Clone the repository or download the source code.
2. Install dependencies:
   ```bash
   npm install
   ```

### Running the Project

To start the development server:
```bash
npm run dev
```
The application will be available at `http://localhost:5173` (or the port specified by Vite).

### Building for Production

To create a production-ready static build:
```bash
npm run build
```
The output will be in the `dist` directory, which can be served by any static web server.

## Project Structure

- `client/src/components`: UI components (Map, Header, Footer, Cards).
- `client/src/pages`: Main page layouts.
- `client/src/lib/static-data.ts`: Central store for destination information.
- `client/src/assets`: Image assets and textures.
