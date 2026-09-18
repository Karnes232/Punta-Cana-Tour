import React from "react";
import { motion } from "framer-motion";
const TextComponent = ({ title, paragraph, className, pClassName, heading = "h2" }) => {
  const Heading = /^h[2-6]$/.test(heading) ? heading : "h2";
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
        className="flex flex-col justify-center max-w-6xl xl:mx-auto"
      >
        {title ? (
          <Heading
            className={`font-lato tracking-wider font-semibold  ${className}`}
          >
            {title}
          </Heading>
        ) : (
          <></>
        )}
        {paragraph ? (
          <p
            className={`font-montserrat lg:text-lg text-gray-700 ${pClassName}`}
            // dangerouslySetInnerHTML={{ __html: paragraph }}
          >
            {paragraph}
          </p>
        ) : (
          <></>
        )}
      </motion.div>
    </div>
  );
};

export default TextComponent;
