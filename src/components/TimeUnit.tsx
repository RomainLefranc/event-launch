"use client";
import { cn } from "@/utils/tailwind";
import { AnimatePresence, motion } from "framer-motion";

type Props = {
  label: string;
  value: number;
  currentFramework: string;
};

function TimeUnit({ currentFramework, label, value }: Props) {
  return (
    <div className="flex flex-col">
      <div className="text-white text-3xl font-semibold">
        <div className="relative h-32 w-48 overflow-hidden">
          <AnimatePresence initial={false}>
            <motion.div
              key={value}
              initial={{
                y: "-100%",
              }}
              animate={{
                y: 0,
              }}
              exit={{
                y: "100%",
              }}
              className="w-full h-full absolute text-9xl">
              {value}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
      <div
        className={cn("text-[16px] font-medium", {
          "text-purple-300": currentFramework === "qwik",
          "text-sky-300": currentFramework === "safari",
          "text-yellow-300": currentFramework === "chrome",
          "text-teal-300": currentFramework === "tailwind",
          "text-blue-300": currentFramework === "react",
          "text-green-300": currentFramework === "vue",
          "text-orange-400": currentFramework === "svelte",
          "text-red-300": currentFramework === "mobile",
          "text-neutral-300": currentFramework === "desktop",
        })}>
        {label}
      </div>
    </div>
  );
}

export default TimeUnit;
