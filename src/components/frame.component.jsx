import { motion } from "framer-motion";
import { styles } from "./styles";

const Framer = () => {
  return (
    <motion.div
      style={styles}
      animate={{
        scale: [1, 2, 1, 2, 1],
        rotate: [0, 270, 0, 270, 90],
        borderRadius: ["20px", "50%", "0px", "50%", "20px"],
      }}
      transition={{ duration: 5 }}
    />
  );
};

export default Framer;
