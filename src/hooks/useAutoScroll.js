"use client";
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { scrollToSection } from '../utils/scrollUtils';

/**
 * Custom hook that automatically scrolls to a section on component mount
 * if a scroll target was set via sessionStorage
 * 
 * @param {string} sectionId - The ID of the section element in this component
 * @param {Object} options - Scroll options
 * @param {number} options.headerOffset - Offset from top (default: 120)
 * @param {number} options.delay - Delay before scrolling in ms (default: 800)
 * @param {boolean} options.autoRemove - Remove scroll target after scrolling (default: true)
 */
export const useAutoScroll = (sectionId, options = {}) => {
  const pathname = usePathname();
  const {
    headerOffset = 120,
    delay = 800,
    autoRemove = true
  } = options;

  useEffect(() => {
    // Function to check and scroll
    const checkAndScroll = () => {
      // Get scroll target without removing it yet
      const scrollTarget = typeof window !== 'undefined' 
        ? sessionStorage.getItem('scrollToSection') 
        : null;
      
      // Only scroll if this component's section matches the target
      if (scrollTarget && scrollTarget === sectionId) {
        // Check if element exists
        const element = document.getElementById(sectionId);
        
        if (element) {
          // Element exists, now remove from sessionStorage and scroll
          if (autoRemove && typeof window !== 'undefined') {
            sessionStorage.removeItem('scrollToSection');
          }
          
          setTimeout(() => {
            scrollToSection(sectionId, { headerOffset, delay: 0 });
          }, delay);
        } else {
          // Element not found yet, retry after a short delay
          setTimeout(checkAndScroll, 200);
        }
      }
    };

    // Initial check with delay to allow DOM to settle
    const timeoutId = setTimeout(checkAndScroll, 100);
    
    // Also check after a longer delay in case DOM is still loading
    const retryTimeoutId = setTimeout(checkAndScroll, delay);

    return () => {
      clearTimeout(timeoutId);
      clearTimeout(retryTimeoutId);
    };
  }, [sectionId, headerOffset, delay, pathname, autoRemove]);
};

/**
 * Custom hook that automatically scrolls to a section on component mount
 * Uses a more flexible approach - checks multiple possible section IDs
 * 
 * @param {string|string[]} sectionIds - Single section ID or array of possible section IDs
 * @param {Object} options - Scroll options
 * @param {number} options.headerOffset - Offset from top (default: 120)
 * @param {number} options.delay - Delay before scrolling in ms (default: 800)
 */
export const useAutoScrollFlexible = (sectionIds, options = {}) => {
  const {
    headerOffset = 120,
    delay = 800
  } = options;

  useEffect(() => {
    const scrollTarget = getScrollTarget();
    
    if (!scrollTarget) return;

    const idsToCheck = Array.isArray(sectionIds) ? sectionIds : [sectionIds];
    
    // Check if any of the provided section IDs match the target
    const matchingId = idsToCheck.find(id => id === scrollTarget);
    
    if (matchingId) {
      setTimeout(() => {
        scrollToSection(matchingId, { headerOffset, delay: 0 });
      }, delay);
    }
  }, [sectionIds, headerOffset, delay]);
};

