"use client";
import { motion } from "framer-motion";

function TextAnimate() {
    let content = "At Addifico Consulting, we use human creativity and the latest technologies to help business leaders, investors, and entrepreneurs enhance their market positioning, discover the next winning trend, and optimize their chances for success."
    const words = content.split("")
    
  return (
    <p className="text-[1.7rem] leading-[2.5rem] text-left text-balance font-medium md:font-normal md:text-[3.2em] md:leading-[4rem] tracking-tighter text-[#39413D]">
        {words.map((word,index) => (
            <motion.span 
                key={index}
                initial={{opacity:0.5 , color:"#39413D" }}
                animate={{ opacity:1, color:"#A6B5A3" }}
                transition={{
                    duration: 0.4,
                    delay: index * 0.05,
                }}
            >
                {word}
            </motion.span>
        ))}
    </p>
  )
}

export default TextAnimate