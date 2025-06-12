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
import NotFound from './pages/NotFound';

import './styles/Admin.css';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Navbar />
        <Routes>
          {/* Public routes */}
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />

          {/* Admin routes */}
          <Route path="/admin" element={<ProtectedRoute><AdminDashboard /></ProtectedRoute>} />
          <Route path="/admin/home" element={<ProtectedRoute><EditHome /></ProtectedRoute>} />
          <Route path="/admin/projects" element={<ProtectedRoute><EditProjects /></ProtectedRoute>} />
          <Route path="/admin/contact" element={<ProtectedRoute><EditContact /></ProtectedRoute>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
