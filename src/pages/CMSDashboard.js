import { motion } from 'framer-motion';
import '../styles/App.css';

function CMSDashboard() {
  return (
    <motion.div
      className="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1>CMS Dashboard</h1>
      <p>Manage your portfolio content here.</p>
    </motion.div>
  );
}

export default CMSDashboard;
