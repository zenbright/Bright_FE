import React, { useEffect, useRef } from "react";
import { FloatingDock } from "@components/ui/floating-dock";
import {
    IconBrandGithub,
} from "@tabler/icons-react";
import { Sun, Moon, MousePointer, MousePointerClick, Home, Languages, RotateCw, Info } from 'lucide-react';

export function DeveloperDock() {
    const [currentTheme, setCurrentTheme] = React.useState<string | null>(null);
    const [isSelectionMode, setIsSelectionMode] = React.useState<boolean>(false);
    const [language, setLanguage] = React.useState<string>("EN"); // State for language
    const highlighterRef = useRef<HTMLDivElement | null>(null);

    React.useEffect(() => {
        const theme = document.documentElement.getAttribute('data-theme') || 'light-default';
        setCurrentTheme(theme);
    }, []);

    const toggleTheme = () => {
        const newTheme = currentTheme === 'light-default' ? 'dark-default' : 'light-default';
        document.documentElement.setAttribute('data-theme', newTheme);
        setCurrentTheme(newTheme);
    };

    const toggleSelectionMode = () => {
        setIsSelectionMode((prev) => !prev);
    };

    const toggleLanguage = () => {
        setLanguage((prev) => (prev === "EN" ? "VI" : "EN"));
    };

    useEffect(() => {
        const handleMouseEnter = (event: MouseEvent) => {
            if (!isSelectionMode) return;

            const target = event.target as HTMLElement;
            if (target && highlighterRef.current) {
                const rect = target.getBoundingClientRect();
                highlighterRef.current.style.width = `${rect.width}px`;
                highlighterRef.current.style.height = `${rect.height}px`;
                highlighterRef.current.style.left = `${rect.left + window.scrollX}px`; // Adjust for scrolling
                highlighterRef.current.style.top = `${rect.top + window.scrollY}px`; // Adjust for scrolling
                highlighterRef.current.style.pointerEvents = 'none'; // Disable pointer events to let mouse events pass through
                highlighterRef.current.style.zIndex = '9999'; // Ensure highlighter is on top
                highlighterRef.current.style.border = '2px dashed rgba(0, 123, 255, 0.8)'; // Dashed border for clarity
                highlighterRef.current.style.backgroundColor = 'rgba(0, 123, 255, 0.2)'; // Light blue background
            }
        };

        const handleMouseLeave = () => {
            if (highlighterRef.current) {
                highlighterRef.current.style.width = '0';
                highlighterRef.current.style.height = '0';
            }
        };

        if (isSelectionMode) {
            // Use event delegation for specific elements or apply listeners to desired targets
            document.addEventListener('mouseenter', handleMouseEnter, true);
            document.addEventListener('mouseleave', handleMouseLeave, true);
        }

        // Cleanup event listeners on unmount or when selection mode changes
        return () => {
            document.removeEventListener('mouseenter', handleMouseEnter, true);
            document.removeEventListener('mouseleave', handleMouseLeave, true);
        };
    }, [isSelectionMode]);

    const links = [
        {
            title: isSelectionMode ? "Selection Mode: ON" : "Selection Mode: OFF",
            icon: isSelectionMode ? <MousePointerClick className="h-full w-full text-neutral-500 dark:text-neutral-300" /> : (<MousePointer className="h-full w-full text-neutral-500 dark:text-neutral-300" />),
            href: "#",
            action: toggleSelectionMode,
        },
        {
            title: `Language: ${language}`, // Dynamic language title
            icon: <Languages className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
            href: "#",
            action: toggleLanguage, // Action to toggle language
        },
        {
            title: "Reload",
            icon: <RotateCw className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
            action: () => window.location.reload(),
        },
        {
            title: "Home",
            icon: <Home className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
            action: () => window.open("http://localhost:5173/", "_blank"),
        },
        {
            title: "Theme",
            icon: currentTheme !== 'light-default' ? (
                <Moon className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ) : (
                <Sun className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "#",
            action: toggleTheme,
        },
        {
            title: "GitHub",
            icon: <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
            action: () => window.open("https://github.com/zenbright/bright-fe", "_blank"),
        },
        {
            title: `Info`,
            icon: <Info className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
            // Get the current instance of the browser including engine, version, and platform
            action: () => alert(`Browser: ${navigator.userAgent}`),
        },
    ];

    return (
        <div className="flex items-center justify-center h-[35rem] w-full relative">
            <FloatingDock
                mobileClassName="translate-y-20" // only for demo, remove for production
                items={links}
            />
            {isSelectionMode && (
                <div
                    ref={highlighterRef}
                    className="fixed transition-all"
                    style={{ width: 0, height: 0 }} // Initialize with zero size
                />
            )}
        </div>
    );
}
