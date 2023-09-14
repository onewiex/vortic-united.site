
import { Routes, Route } from 'react-router-dom';
import { Index } from './pages/Index/index';
import { Technology } from './pages/Technology';
import { Services } from './pages/Services';
import { AboutUs } from './pages/AboutUs';
import { Vision } from './pages/Vision'
import { Faq } from './pages/Faq';
import { ContactUs } from './pages/ContactUs';
import { Terms } from './pages/Terms';
import { Privacy } from './pages/Privacy';

export const RoutesList = () => (
  <Routes>
    <Route path={'/'} element={<Index />} />
    <Route path={'/technology'} element={<Technology />} />
    <Route path={'/services'} element={<Services />} />
    <Route path={'/about_us'} element={<AboutUs />} />
    <Route path={'/vision'} element={<Vision />} />
    <Route path={'/faq'} element={<Faq />} />
    <Route path={'/contact_us'} element={<ContactUs />} />
    <Route path={'/terms'} element={<Terms />} />
    <Route path={'/privacy'} element={<Privacy />} />
  </Routes>
);
