import React from "react";
import { AnimatePresence, delay, motion } from "framer-motion";
import { useState } from "react";
import { useEffect } from "react";

const Loader = () => {
  const [out, SetOut] = useState(true);
  const [end, SetEnd] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      SetOut(false);
    }, 5000);
  });
  useEffect(() => {
    setTimeout(() => {
      SetEnd(false);
    }, 7000);
  });
  return (
    <AnimatePresence>
      {end && (
        <motion.div
          exit={{
            zIndex: -100,
          }}
          className="loader"
        >
          <motion.div
            animate={{ x: "100vw", transition: { delay: 5, duration: 1.4 } }}
            className="bloc1"
          ></motion.div>
          <motion.div
            animate={{ x: "-100vw", transition: { delay: 5, duration: 1.4 } }}
            className="bloc2"
          ></motion.div>
          <motion.div
            animate={{ x: "100vw", transition: { delay: 5, duration: 1.4 } }}
            className="bloc3"
          ></motion.div>
          <motion.div
            animate={{ x: "-100vw", transition: { delay: 5, duration: 1.4 } }}
            className="bloc4"
          ></motion.div>
          <motion.div
            animate={{ x: "100vw", transition: { delay: 5, duration: 1.4 } }}
            className="bloc5"
          ></motion.div>{" "}
          <motion.div
            animate={{ x: "100vw", transition: { delay: 5, duration: 1.4 } }}
            className="bloc6"
          ></motion.div>
          <AnimatePresence>
            {out && (
              <>
                <h2>Loading...</h2>
                <motion.div
                  animate={{
                    rotate: -8000,
                    transition: { duration: 30, type: "linear" },
                  }}
                  exit={{ opacity: 0 }}
                  className="circle"
                >
                  <motion.div
                    className="box"
                    id="box1"
                    animate={{
                      scale: [1, 2, 2, 1, 1],
                      rotate: [0, 0, 180, 180, 0],
                      borderRadius: ["0%", "0%", "50%", "50%", "0%"],
                    }}
                    transition={{
                      duration: 5,
                      ease: "easeInOut",
                      times: [0, 0.2, 0.5, 0.8, 1],
                      repeat: Infinity,
                      delay: 1.2,
                    }}
                  ></motion.div>{" "}
                  <motion.div
                    className="box"
                    id="box2"
                    animate={{
                      scale: [1, 2, 2, 1, 1],
                      rotate: [0, 0, 180, 180, 0],
                      borderRadius: ["0%", "0%", "50%", "50%", "0%"],
                    }}
                    transition={{
                      duration: 5,
                      ease: "easeInOut",
                      times: [0, 0.2, 0.5, 0.8, 1],
                      repeat: Infinity,
                      delay: 0.8,
                    }}
                  ></motion.div>{" "}
                  <motion.div
                    className="box"
                    id="box3"
                    animate={{
                      scale: [1, 2, 2, 1, 1],
                      rotate: [0, 0, 180, 180, 0],
                      borderRadius: ["0%", "0%", "50%", "50%", "0%"],
                    }}
                    transition={{
                      duration: 5,
                      ease: "easeInOut",
                      times: [0, 0.2, 0.5, 0.8, 1],
                      repeat: Infinity,
                      delay: 1.6,
                    }}
                  ></motion.div>{" "}
                  <motion.div
                    className="box"
                    id="box4"
                    animate={{
                      scale: [1, 2, 2, 1, 1],
                      rotate: [0, 0, 180, 180, 0],
                      borderRadius: ["0%", "0%", "50%", "50%", "0%"],
                    }}
                    transition={{
                      duration: 5,
                      ease: "easeInOut",
                      times: [0, 0.2, 0.5, 0.8, 1],
                      repeat: Infinity,
                      delay: 0.4,
                    }}
                  ></motion.div>
                  <motion.div
                    className="box"
                    id="box5"
                    animate={{
                      scale: [1, 2, 2, 1, 1],
                      rotate: [0, 0, 180, 180, 0],
                      borderRadius: ["0%", "0%", "50%", "50%", "0%"],
                    }}
                    transition={{
                      duration: 5,
                      ease: "easeInOut",
                      times: [0, 0.2, 0.5, 0.8, 1],
                      repeat: Infinity,
                      delay: 0.6,
                    }}
                  ></motion.div>
                  <motion.div
                    className="box"
                    id="box6"
                    animate={{
                      scale: [1, 2, 2, 1, 1],
                      rotate: [0, 0, 180, 180, 0],
                      borderRadius: ["0%", "0%", "50%", "50%", "0%"],
                    }}
                    transition={{
                      duration: 5,
                      ease: "easeInOut",
                      times: [0, 0.2, 0.5, 0.8, 1],
                      repeat: Infinity,
                      delay: 1.4,
                    }}
                  ></motion.div>{" "}
                  <motion.div
                    className="box"
                    id="box7"
                    animate={{
                      scale: [1, 2, 2, 1, 1],
                      rotate: [0, 0, 180, 180, 0],
                      borderRadius: ["0%", "0%", "50%", "50%", "0%"],
                    }}
                    transition={{
                      duration: 5,
                      ease: "easeInOut",
                      times: [0, 0.2, 0.5, 0.8, 1],
                      repeat: Infinity,
                      delay: 1,
                    }}
                  ></motion.div>{" "}
                  <motion.div
                    className="box"
                    id="box8"
                    animate={{
                      scale: [1, 2, 2, 1, 1],
                      rotate: [0, 0, 180, 180, 0],
                      borderRadius: ["0%", "0%", "50%", "50%", "0%"],
                    }}
                    transition={{
                      duration: 5,
                      ease: "easeInOut",
                      times: [0, 0.2, 0.5, 0.8, 1],
                      repeat: Infinity,
                      delay: 0.2,
                    }}
                  ></motion.div>
                </motion.div>
                <h1 className="initial">GC</h1>
              </>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loader;
