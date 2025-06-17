// Currently I'm just re-exporting the same routes from the app.routes.ts because I don't yet see value in a
// separate set of routes. Nothing in my setup has unique client vs. server features, pretty much everything
// is static.
import { ServerRoute } from '@angular/ssr';
import { routes } from './app.routes';

// TODO: Investigate if "renderMode: RenderMode.Prerender" attribute
// for each route could provide gains to performance.
export const serverRoutes = routes as ServerRoute[];
