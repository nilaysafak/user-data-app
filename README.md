# User Data App

A modern Next.js application that fetches user data from the JSONPlaceholder API and updates the state when a button is clicked. The app is designed with a sleek dark mode theme using Tailwind CSS.

## Features

- Fetches user data from JSONPlaceholder API
- Updates state with useState hook
- Styled with Tailwind CSS for a dark mode aesthetic
- Displays user's name, email, and address
- "Fetch New User" button to update displayed data
- Responsive and visually appealing layout
- Smooth animations with Framer Motion
- useEffect to fetch user data on component mount

## Technologies Used

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- Framer Motion
- Axios

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

- `src/app/page.tsx`: Main page component with user data fetching logic
- `src/components/UserCard.tsx`: Component to display user information
- `src/app/globals.css`: Global styles with Tailwind CSS directives
- `src/app/layout.tsx`: Root layout with dark mode configuration

## API

The application uses the JSONPlaceholder API to fetch user data:
- Endpoint: `https://jsonplaceholder.typicode.com/users/{id}`
- The app cycles through users 1-10