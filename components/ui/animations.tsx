"use client";

import { motion, useInView, Variants } from "framer-motion";
import { useRef, ReactNode, useMemo } from "react";
import { cn } from "@/lib/utils";

interface FadeInProps {
    children: ReactNode;
    className?: string;
    delay?: number;
    duration?: number;
    direction?: "up" | "down" | "left" | "right" | "none";
    fullWidth?: boolean;
}

export function FadeIn({
    children,
    className,
    delay = 0,
    duration = 0.5,
    direction = "up",
    fullWidth = false,
}: FadeInProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-5%" });

    // Memoize variants to prevent recreation on every render
    const variants: Variants = useMemo(() => ({
        hidden: {
            opacity: 0,
            y: direction === "up" ? 20 : direction === "down" ? -20 : 0,
            x: direction === "left" ? 20 : direction === "right" ? -20 : 0,
        },
        visible: {
            opacity: 1,
            y: 0,
            x: 0,
            transition: {
                duration,
                delay,
                ease: "easeOut",
            },
        },
    }), [direction, duration, delay]);

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={variants}
            className={cn(fullWidth ? "w-full" : "", className)}
        >
            {children}
        </motion.div>
    );
}

interface StaggerContainerProps {
    children: ReactNode;
    className?: string;
    delay?: number;
    staggerDelay?: number;
}

export function StaggerContainer({
    children,
    className,
    delay = 0,
    staggerDelay = 0.1,
}: StaggerContainerProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-5%" });

    const containerVariants = useMemo(() => ({
        hidden: {},
        visible: {
            transition: {
                delayChildren: delay,
                staggerChildren: staggerDelay,
            },
        },
    }), [delay, staggerDelay]);

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
            className={className}
        >
            {children}
        </motion.div>
    );
}

export const staggerItem = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: "easeOut",
        },
    },
};

interface ScaleInProps {
    children: ReactNode;
    className?: string;
    delay?: number;
}

export function ScaleIn({ children, className, delay = 0 }: ScaleInProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-5%" });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5, delay, ease: "easeOut" }}
            className={className}
        >
            {children}
        </motion.div>
    );
}
