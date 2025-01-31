import { motion } from "framer-motion";

export const Footer = () => {
  return (
    <footer className="py-16 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-white"
        >
          <h3 className="text-xl font-bold mb-4">¿hablamos?</h3>
          <p className="opacity-90">
          <a href="mailto:rcrear.com@gmail.com.com" className="hover:underline">rcrear.com@gmail.com.com</a>
            <br />
            Barcelona, España</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-white"
        >
          <h3 className="text-xl font-bold mb-4">secciones</h3>
          <ul className="space-y-2 opacity-90">
            <li><a href="#Hero" className="hover:underline">inicio</a></li>
            <li><a href="#Portfolio" className="hover:underline">trabajos</a></li>
            <li><a href="#Team" className="hover:underline">nosotros</a></li>
            <li><a href="#Partners" className="hover:underline">hemos trabajado con</a></li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-white"
        >
          <h3 className="text-xl font-bold mb-4">¿conectamos?</h3>
          <ul className="space-y-2 opacity-90">
            <li><a href="https://www.instagram.com/rcrear.estudio/" className="hover:underline">instagram</a></li>
            <li><a href="https://www.linkedin.com/company/105742337/" className="hover:underline">linkedin</a></li>
          </ul>
        </motion.div>
      </div>
    </footer>
  );
};