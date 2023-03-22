import React from "react";
import { motion } from "framer-motion";

function nom() {
    return (
        <motion.div class="content"
        initial={{ opacity: 1, scale: 0}}
        animate={{ opacity: 1, scale:1 }}
        transition={{ duration: 1}}
        >
      <div class="shrink">
        <h1 class="texto">Luis Eduardo Ontiveros dávila</h1>
      </div>
      </motion.div>
    );
  }
  
  export default nom;