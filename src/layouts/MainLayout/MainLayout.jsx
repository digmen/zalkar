import React from "react";
import Navbar from "./navbar/Navbar";
import Footer from "./footer/Footer";
import "../../styles/MainLayout.scss";
import { motion } from "framer-motion";

const MainLayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 40 },
          visibil: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate="visibil"
        transition={{ duration: 0.5, delay: 0.25 }}>
        {children}
      </motion.div>
      <Footer />
    </div>
  );
};

export default MainLayout;
