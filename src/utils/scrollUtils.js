/**
 * Global Scroll Utility Functions
 * Provides professional and reusable scroll functionality
 */

/**
 * Scrolls to a specific section element smoothly
 * @param {string} sectionId - The ID of the section to scroll to
 * @param {Object} options - Scroll options
 * @param {number} options.headerOffset - Offset from top for fixed headers (default: 120)
 * @param {number} options.delay - Delay before scrolling in ms (default: 300)
 * @param {string} options.behavior - Scroll behavior ('smooth' | 'auto') (default: 'smooth')
 * @returns {boolean} - Returns true if scroll was successful, false otherwise
 */
export const scrollToSection = (sectionId, options = {}) => {
  if (typeof window === 'undefined') return false;

  const {
    headerOffset = 120,
    delay = 300,
    behavior = 'smooth'
  } = options;

  const element = document.getElementById(sectionId);
  
  if (!element) {
    console.warn(`Section with ID "${sectionId}" not found`);
    return false;
  }

  // Wait for layout to stabilize
  requestAnimationFrame(() => {
    setTimeout(() => {
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: behavior
      });
    }, delay);
  });

  return true;
};

/**
 * Sets a section ID in sessionStorage for cross-page navigation
 * @param {string} sectionId - The ID of the section to scroll to after navigation
 */
export const setScrollTarget = (sectionId) => {
  if (typeof window === 'undefined') return;
  if (sectionId) {
    sessionStorage.setItem('scrollToSection', sectionId);
  }
};

/**
 * Gets the stored scroll target from sessionStorage and removes it
 * @returns {string|null} - The section ID or null if not set
 */
export const getScrollTarget = () => {
  if (typeof window === 'undefined') return null;
  const target = sessionStorage.getItem('scrollToSection');
  if (target) {
    sessionStorage.removeItem('scrollToSection');
  }
  return target;
};

/**
 * Scrolls to section if currently on the same page, otherwise sets target for navigation
 * @param {string} sectionId - The ID of the section to scroll to
 * @param {string} currentPath - Current page pathname
 * @param {string} targetPath - Target page pathname
 * @param {Object} options - Scroll options
 * @returns {boolean} - Returns true if scrolled on same page, false if navigating
 */
export const handleNavLinkClick = (sectionId, currentPath, targetPath, options = {}) => {
  if (!sectionId) return false;

  const isSamePage = currentPath === targetPath;

  if (isSamePage) {
    // Scroll immediately on same page
    return scrollToSection(sectionId, options);
  } else {
    // Set target for navigation
    setScrollTarget(sectionId);
    return false;
  }
};

