import React from 'react';
import { Link } from 'react-router-dom';

export default function AdminDashboard() {
  return (
    <div className="admin-dashboard">
      <h1>Portfolio CMS</h1>
      <nav>
        <Link to="/admin/home">Home</Link>
        <Link to="/admin/projects">Projects</Link>
        <Link to="/admin/contact">Contact</Link>
      </nav>
    </div>
  );
}
