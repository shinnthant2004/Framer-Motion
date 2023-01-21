import { motion } from "framer-motion";

const Motion = () => {
  return (
    <motion.div
      style={{
        width: `${50}px`,
        height: `${50}px`,
        borderRadius: "50%",
        backgroundColor: "red",
      }}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    />
  );
};

export default Motion;
