import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// ... other imports
import NotFound from './pages/NotFound'; // Create this component

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

          {/* 404 route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}
export default App;