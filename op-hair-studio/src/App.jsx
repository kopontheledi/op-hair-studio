import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from './components/layouts';
import ScrollToTop from './components/scrollToTop';

import Home from './pages/home';
import Services from './pages/services';
import About from './pages/about';
import Booking from './pages/booking';
import Contact from './pages/contact';
import Terms from './pages/terms';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />

      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/terms" element={<Terms />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;