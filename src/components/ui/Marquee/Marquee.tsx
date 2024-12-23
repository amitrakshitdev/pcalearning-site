"use client";

import { motion } from "framer-motion";
import clsx from "clsx";
import { useRef, useEffect, useState } from "react";
import useScreenSize from "@/hooks/screen-size.hook";

interface MarqueeProps {
  children: React.ReactNode; // Accepts any JSX content
  duration?: number; // Control the speed of the animation (default: 50)
  className?: string; // Optional additional styling for the container
}

const Marquee: React.FC<MarqueeProps> = ({ children, duration = 50, className }) => {
	const refChildWrapper = useRef<HTMLDivElement>(null);
	const refMotionDiv = useRef<HTMLDivElement>(null);
	const screenSize = useScreenSize();
	const [animationPositions, setAnimationPositions] = useState<{start: number, end: number}|null>({start: 100, end: -100});
	useEffect(() => {
		const childWrapper = refChildWrapper.current;
		const motionDiv = refMotionDiv.current;
		if (childWrapper && motionDiv) {
			const childWrapperWidth = childWrapper.getBoundingClientRect().width;
			const motionDivWidth = motionDiv.getBoundingClientRect().width;
			if (childWrapperWidth < motionDivWidth) {
				const animationStartPositon = 100;
				const childWrapperWidthPercentage = (childWrapperWidth / motionDivWidth) * 100;
				const animationEndPosition = - childWrapperWidthPercentage;
				setAnimationPositions({ start: animationStartPositon, end: animationEndPosition });
				console.log('desktop screen')
			} else {
				console.log('mobile screen')
				setAnimationPositions({ start: 100, end: -100 });
			}
		}
	}, [screenSize, refChildWrapper, refMotionDiv]);
	useEffect(() => {
		console.log("animationPositions", animationPositions);
	}, [animationPositions]);
	
  return (
    <div className={clsx("overflow-hidden relative w-full", "min-h-5", className)}>
      <motion.div
	  	ref={refMotionDiv}
        className="flex whitespace-nowrap min-w-full w-auto"
        initial={{ x: `${animationPositions?.start}%` }}
        animate={{ x: `${animationPositions?.end}%` }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration, // Duration of the marquee; higher means slower
        }}
      >
        <div ref={refChildWrapper} className="flex">
          {children}
		</div>
          {/* Duplicate content for smooth looping */}
      </motion.div>
    </div>
  );
};

export default Marquee;
