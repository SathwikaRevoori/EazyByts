import { motion } from 'framer-motion';
import '../styles/App.css';
import '../styles/ContactForm.css';

function Contact() {
  return (
    <motion.div
      className="contact"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1>Contact</h1>
      <form className="contact-form">
        <label>Name</label>
        <input type="text" />
        <label>Email</label>
        <input type="email" />
        <label>Message</label>
        <textarea></textarea>
        <motion.button
          type="submit"
          className="fun-button"
          whileHover={{ scale: 1.05, backgroundColor: '#3182ce' }}
          whileTap={{ scale: 0.95 }}
        >
          Send Message
        </motion.button>
      </form>
    </motion.div>
  );
}
export default Contact;
