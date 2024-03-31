import { useEffect, useRef } from "react";
import { TransitionProps } from "./Transition.types";
import { motion, useAnimation, useInView } from "framer-motion";
import { fadeIn } from "./TransitionFramer";

export function Transition(props: TransitionProps) {
    const { children, className } = props;
    const ref = useRef(null);

    const isInView = useInView(ref, { once: false });
    const mainControl = useAnimation();
    const slideControl = useAnimation();

    useEffect(() => {
        mainControl.start("visible");
        slideControl.start("visible");
    }, [isInView]);

    return (
        <div ref={ref}>
            <motion.div
                variants={fadeIn()}
                className={className}
                initial="hidden"
                animate={mainControl}
                exit="hidden"
            >
                {children}
            </motion.div>
        </div>
    );
}