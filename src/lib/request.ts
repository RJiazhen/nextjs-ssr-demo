const isClient = typeof window !== 'undefined';
const isProduction = process.env.NODE_ENV === 'production';
const port = process.env.PORT;

export async function request<T>(
  path: string,
  options: RequestInit = {},
): Promise<T> {
  console.log('env', process.env.NODE_ENV, process.env.PORT);
  // Determine the base URL based on environment
  const baseUrl = isClient
    ? '' // Client-side: use relative URL
    : isProduction
    ? `https://localhost:${port}` // Production server
    : `http://localhost:${port}`; // Development server

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
