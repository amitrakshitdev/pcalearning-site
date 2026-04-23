"use client";

import { useCallback, useEffect, useRef, useState } from "react";

export default function useScrollToTop(elementId: string) {
    const [visible, setVisible] = useState(false);
    const elementRef = useRef<HTMLElement | null>(null);

    useEffect(() => {
        const el = document.getElementById(elementId);
        if (!el) return;
        elementRef.current = el;

        const handleScroll = () => {
            setVisible(el.scrollTop > 250);
        };

        handleScroll();
        el.addEventListener("scroll", handleScroll);

        return () => {
            el.removeEventListener("scroll", handleScroll);
        };
    }, [elementId]);

    const scrollToTop = useCallback(() => {
        elementRef.current?.scrollTo({ top: 0, behavior: "smooth" });
    }, []);

    return { visible, scrollToTop };
}
