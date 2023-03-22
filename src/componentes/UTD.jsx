import React from "react";
import { motion } from "framer-motion";


function utd() {
  return (
    <motion.div class="content"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 0 }}
      transition={{ duration: 0 }}
    >
      <div class="shrink">
        <h1 class="texto">Universidad Tecnologica de Durango</h1>
      </div>
    </motion.div>

  );
}

export default utd;