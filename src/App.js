import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import { ThemeProvider } from './context/ThemeContext';
import AdminDashboard from './pages/AdminDashboard';
import EditHome from './pages/EditHome';
import EditProjects from './pages/EditProjects';
import EditContact from './pages/EditContact';
import ProtectedRoute from './components/ProtectedRoute';
import './styles/Admin.css';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          {/* Single admin route with nested paths */}
          <Route path="/admin" element={<ProtectedRoute><AdminDashboard /></ProtectedRoute>}>
  <Route path="home" element={<EditHome />} />
  <Route path="projects" element={<EditProjects />} />
  <Route path="contact" element={<EditContact />} />


          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
