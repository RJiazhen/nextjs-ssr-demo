/**
 * Returns routes shown on the home page.
 * Uses a static list so the home page does not rely on `fs` (unavailable for
 * arbitrary paths on Cloudflare Workers).
 */
export function getPages() {
  return [
    { path: '/full-server-render/[id]', name: 'Full Server Render / [id]' },
    { path: '/streaming-render/[id]', name: 'Streaming Render / [id]' },
    { path: '/client-render/[id]', name: 'Client Render / [id]' },
  ];
}
