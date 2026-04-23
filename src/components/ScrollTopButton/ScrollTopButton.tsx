"use client";

import useScrollToTop from "@/hooks/scroll-to-top";
import { useEffect, useState } from "react";

export default function ScrollTopButton() {
    const { visible, scrollToTop } = useScrollToTop("scroll-element");

    if (!visible) return null;

    return (
        <button
            type="button"
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="scroll fixed bottom-6 right-7 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-sky-400/60 text-textSecondaryColor shadow-xl shadow-primary/50 transition-transform duration-200 hover:-translate-y-1 hover:bg-primary/90 focus:outline-none focus:ring-4 focus:ring-primary/30"
            title="Scroll to top"
        >
            <svg
                viewBox="0 0 24 24"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path d="M18 15l-6-6-6 6" />
            </svg>
        </button>
    );
}
