import { motion } from 'framer-motion';
import '../styles/App.css';

function Home() {
  return (
    <motion.div
      className="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <header>
        <h1>HI!!
           I AM SATHWIKA REDDY REVOORI</h1>
        <p className="subtitle">A Passion Driven, Aspiring Software Engineer</p>
      </header>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5 }}
      >
        <h2>Expertise</h2>
        <p>
          Skilled in C, Java, Python, HTML, CSS, JavaScript, MERN Stack, DBMS & SQL, R Language, Power BI, and more.
        </p>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5 }}
      >
      
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5 }}
      >
        <h2>Experience & Achievements</h2>
        <ul>
          <li>Management Team Member of GDGC VNRVJIET, 2024–present</li>
          <li>Volunteer of ISTE VNRVJIET, 2024–present</li>
          <li>Finalist in ISTE Solution Sprint III</li>
          <li>Achieved 5 stars on Problem Solving Topic in HackerRank</li>
          <li>Finalist of Oratory Olympics by VJ Toastmasters</li>
          <li>Assisted in securing sponsorship for GDGC VNRVJIET Solution Challenge</li>
        </ul>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5 }}
      >
        <h2>Projects</h2>
        <p>
          <motion.a
            href="/projects"
            className="link"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View my projects →
          </motion.a>
        </p>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5 }}
      >
        <h2>Contact</h2>
        <ul>
          <li>Email: sathwikar02@gmail.com</li>
          <li>Phone: (+91) 9030412824</li>
          <li>
            LinkedIn: <motion.a
              href="https://www.linkedin.com/in/revoori-sathwika-reddy/"
              target="_blank"
              rel="noopener noreferrer"
              className="link"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              LinkedIn Profile
            </motion.a>
          </li>
        </ul>
      </motion.section>
    </motion.div>
  );
}

export default Home;
