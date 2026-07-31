import { motion } from "framer-motion";

function LoadingScreen() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed inset-0 z-[99999] bg-[#030712] flex items-center justify-center"
    >
      <div className="text-center">

        <motion.img
          src="/logo.png"
          alt="White Core"
          className="w-32 mx-auto"
          animate={{
            scale: [0.9, 1.05, 1],
          }}
          transition={{
            repeat: Infinity,
            duration: 2,
          }}
        />

        <h1 className="text-white text-5xl font-black mt-8 tracking-[8px]">
          WHITE CORE
        </h1>

        <p className="text-blue-400 mt-4 text-xl">
          Tecnología Premium
        </p>

        <div className="w-72 h-2 bg-[#111827] rounded-full overflow-hidden mx-auto mt-10">

          <motion.div
            className="h-full bg-blue-500"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{
              duration: 1.8,
            }}
          />

        </div>

      </div>
    </motion.div>
  );
}

export default LoadingScreen;