const isClient = typeof window !== 'undefined';
const isProduction = process.env.NODE_ENV === 'production';

export async function request<T>(
  path: string,
  options: RequestInit = {},
): Promise<T> {
  // Determine the base URL based on environment
  const baseUrl = isClient
    ? '' // Client-side: use relative URL
    : isProduction
    ? 'https://localhost:3000' // Production server
    : 'http://localhost:3000'; // Development server

  const url = `${baseUrl}${path}`;

  const response = await fetch(url, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
  });

  if (!response.ok) {
    throw new Error(`Request failed: ${response.statusText}`);
  }

  return response.json();
}

// Example usage:
// const data = await request<UserData>('/api/user/1');
// const data = await request<UserData>('/api/user/1', { method: 'POST', body: JSON.stringify(userData) });
