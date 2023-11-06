import { Framework, assets } from "@/data";
import { AnimatePresence, motion } from "framer-motion";

type Props = {
  currentFramework: Framework;
};

function FrameworkRotation({ currentFramework }: Props) {
  return (
    <div className="mx-2 -mt-2 align-middle inline-flex relative h-[80px] w-[80px] overflow-hidden">
      <AnimatePresence>
        <motion.img
          key={currentFramework}
          initial={{ opacity: 0, y: "100%" }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: "-100%" }}
          src={assets[currentFramework]}
          className="w-full h-full object-contain object-center absolute top-0 left-0"
          alt="Framework logo"
          width="80"
          height="80"
        />
      </AnimatePresence>
    </div>
  );
}

export default FrameworkRotation;
