'use client'
import { useState, useEffect } from "react";

function useDebounce<T>(value: T, delay: number): T {
    const [debouncedValue, setDebouncedValue] = useState<T>(value);
    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);
        return () => {
            clearTimeout(handler);
        };
    }, [value, delay]);
    return debouncedValue;
}

export const useResponsive = () => {
    const [state, setState] = useState({
        isMobile: false,
        isTablet: false,
        isDesktop: false,
    });

    const Setup = () => {
        window.addEventListener("resize", debouncedCall, false);
    };

    const Cleanup = () => {
        window.removeEventListener("resize", debouncedCall, false);
    };

    useEffect(() => {
        if (typeof window !== undefined) {
            onResizeHandler();

            Setup();

            return () => {
                Cleanup();
            };
        }
    }, []);

    const onResizeHandler = () => {
        const isMobile = window.innerWidth <= 450;
        const isTablet = window.innerWidth >= 450 && window.innerWidth <= 900;
        const isDesktop = window.innerWidth > 990;

        setState({ isMobile, isTablet, isDesktop });
    };

    const debouncedCall = useDebounce(onResizeHandler, 500);

    return state;
};
