import config from '~/config';

//Pages
import Home from '~/pages/Home';
import About from '~/pages/About';
import Services from '~/pages/Services';
import Contact from '~/pages/Contact';

// Public routes
const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.about, component: About },
    { path: config.routes.services, component: Services },
    { path: config.routes.contact, component: Contact },
];
// Private routes
const privateRoutes = [];

export { publicRoutes, privateRoutes };
