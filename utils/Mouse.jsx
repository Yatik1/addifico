"use client";

import { motion } from "framer-motion";

function Mouse() {
  return (
    <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-[5rem] left-1/2 transform -translate-x-1/2 z-10"
        >
          <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center">
            <motion.div
              animate={{
                y: [0, 12, 0],
              }}
              transition={{
                duration:2.3 ,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-1 h-2 bg-white/60 rounded-full mt-2"
            />
          </div>
        </motion.div>
  )
}

export default Mouse