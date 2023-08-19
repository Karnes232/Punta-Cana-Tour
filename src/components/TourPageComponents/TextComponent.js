import React from "react";
import { motion } from "framer-motion";
const TextComponent = ({ title, paragraph }) => {
  return (
    <div className="relative">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 3,
          delay: 0.3,
        }}
        className=""
      >
        <h4 className="font-light inline-block text-2xl md:text-3xl tracking-wide border-b-2 pb-2 border-[#F14935]">
          {title}
        </h4>
        <p
          className="md:text-xl mt-2"
          dangerouslySetInnerHTML={{ __html: paragraph }}
        ></p>
      </motion.div>
    </div>
  );
};

export default TextComponent;
