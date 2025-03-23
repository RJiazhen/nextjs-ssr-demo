import { Suspense } from 'react';
import styles from '../page.module.css';

interface Post {
  id: number;
  title: string;
  content: string;
  author: string;
  createdAt: string;
}

// API call to fetch posts
async function getPosts(): Promise<Post[]> {
  const response = await fetch('http://localhost:3001/api/posts', {
    // Ensure we get fresh data on each request
    cache: 'no-store',
  });

  if (!response.ok) {
    throw new Error('Failed to fetch posts');
  }

  return response.json();
}

// Loading component
function LoadingPosts() {
  return (
    <div className={styles.loading}>
      <div className={styles.loadingSpinner}></div>
      <p>Loading posts...</p>
    </div>
  );
}

// Posts component
async function Posts() {
  const posts = await getPosts();

  return (
    <div className={styles.posts}>
      {posts.map((post) => (
        <div
          key={post.id}
          className={styles.post}
        >
          <h3>{post.title}</h3>
          <p>{post.content}</p>
          <div className={styles.postMeta}>
            <span>By {post.author}</span>
            <span>{new Date(post.createdAt).toLocaleDateString()}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function SSRDemo() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>SSR Demo with Suspense</h1>
        <p>This page demonstrates server-side rendering with React Suspense</p>

        <div className={styles.demoSection}>
          <h2>Posts</h2>
          <Suspense fallback={<LoadingPosts />}>
            <Posts />
          </Suspense>
        </div>
      </main>
    </div>
  );
}
