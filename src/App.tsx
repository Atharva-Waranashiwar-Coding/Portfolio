import { useEffect } from 'react';
import { BrowserRouter as Router, Navigate, Route, Routes, useLocation } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import ScrollProgress from './components/ScrollProgress';
import Education from './pages/Education';
import Home from './pages/Home';
import MyJourney from './pages/MyJourney';
import ProjectDetails from './pages/ProjectDetails';
import Projects from './pages/Projects';
import WorkExperience from './pages/WorkExperience';

function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [location.pathname]);

  return null;
}

function AppLayout() {
  const location = useLocation();

  return (
    <div className="flex min-h-screen flex-col text-white">
      <ScrollToTop />
      <ScrollProgress />
      <Navbar />
      <main className="flex-1 pb-8">
        <div key={location.pathname} className="page-transition">
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/education" element={<Education />} />
            <Route path="/work" element={<WorkExperience />} />
            <Route path="/myjourney" element={<MyJourney />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:projectId" element={<ProjectDetails />} />
            <Route path="*" element={<Navigate replace to="/" />} />
          </Routes>
        </div>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppLayout />
    </Router>
  );
}

export default App;
