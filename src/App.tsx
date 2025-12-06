import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Education from './pages/Education';
import WorkExperience from './pages/WorkExperience';
import MyJourney from './pages/MyJourney';
import Projects from './pages/Projects';
import ProjectDetails from './pages/ProjectDetails';
import Blog from './pages/Blog';
import BlogDetails from './pages/BlogDetails';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CareerGrowthCaseStudy from './pages/CareerGrowthCaseStudy';
import UxCaseStudies from './pages/UxCaseStudies';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow bg-[#100001] text-white">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/education" element={<Education />} />
            <Route path="/work" element={<WorkExperience />} />
            <Route path="/myjourney" element={<MyJourney />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/case-studies" element={<UxCaseStudies />} />
            <Route path="/case-study/career-growth-platform" element={<CareerGrowthCaseStudy />} />
            <Route path="/projects/:id" element={<ProjectDetails />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogDetails />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
