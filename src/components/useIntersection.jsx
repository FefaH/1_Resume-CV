import React, { useLayoutEffect, useState } from 'react'

export const useIntersection = (element, rootMargin) => {
    const [isVisible, setIsVisible] = useState(false);

    useLayoutEffect (() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(entry.isIntersecting);
                    observer.unobserve(element.current);
                    console.log('element: ', observer)
                }
            }, { rootMargin }
        );

        element.current && observer.observe(element.current);

        return () => observer.unobserve(element.current)
    }, []);

    return isVisible;
};
