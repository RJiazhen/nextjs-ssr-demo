import { NextResponse } from 'next/server';

// Simulated database
const posts = [
  {
    id: 1,
    title: 'Getting Started with Next.js',
    content:
      'Next.js is a powerful framework for building React applications with features like server-side rendering and static site generation.',
    author: 'John Doe',
    createdAt: '2024-03-23',
  },
  {
    id: 2,
    title: 'Understanding React Suspense',
    content:
      'React Suspense is a feature that lets you wrap components that might need to wait for something (like data or images) to load.',
    author: 'Jane Smith',
    createdAt: '2024-03-22',
  },
  {
    id: 3,
    title: 'Server-Side Rendering in Next.js',
    content:
      'Server-side rendering (SSR) is a technique where the server pre-renders the page with data before sending it to the client.',
    author: 'Mike Johnson',
    createdAt: '2024-03-21',
  },
];

export async function GET() {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return NextResponse.json(posts);
}
