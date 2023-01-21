import { motion } from "framer-motion";
import { styles } from "./styles";

const Motion = () => {
  return (
    <motion.div
      style={styles}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    />
  );
};

export default Motion;
