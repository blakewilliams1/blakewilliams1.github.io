import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: '',
    renderMode: RenderMode.Prerender,
  },
  {
    path: 'career',
    renderMode: RenderMode.Prerender,
  },
  {
    path: 'projects',
    renderMode: RenderMode.Prerender,
  },
  {
    path: 'fursuit',
    renderMode: RenderMode.Prerender,
  },
  {
    path: 'neon-sign',
    renderMode: RenderMode.Prerender,
  },
  {
    path: 'mountainboard',
    renderMode: RenderMode.Prerender,
  },
  {
    path: 'smart-pay-watch',
    renderMode: RenderMode.Prerender,
  },
  {
    path: 'dot-matrix-watch',
    renderMode: RenderMode.Prerender,
  },
  {
    path: 'altimeter',
    renderMode: RenderMode.Prerender,
  },
  {
    path: 'flip-dot-display',
    renderMode: RenderMode.Prerender,
  },
  {
    path: 'nixie-watch',
    renderMode: RenderMode.Prerender,
  },
  {
    path: 'travels',
    renderMode: RenderMode.Prerender,
  },
  {
    path: 'css-injection',
    renderMode: RenderMode.Prerender,
  },
  {
    path: 'burning-man-2023',
    renderMode: RenderMode.Prerender,
  },
  {
    path: 'mauritania-trip',
    renderMode: RenderMode.Prerender,
  },
  {
    path: 'road-to-ushuaia',
    renderMode: RenderMode.Prerender,
  },
  {
    path: 'shasta',
    renderMode: RenderMode.Prerender,
  },
  {
    path: 'half-dome',
    renderMode: RenderMode.Prerender,
  },
  {
    path: 'indonesia-2019',
    renderMode: RenderMode.Prerender,
  },
  {
    path: 'euro-trip-2023',
    renderMode: RenderMode.Prerender,
  },
  {
    path: 'qr',
    renderMode: RenderMode.Prerender,
  },
  {
    path: 'qr/about',
    renderMode: RenderMode.Prerender,
  },
  {
    path: 'contact',
    renderMode: RenderMode.Client,
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender
  }
];
