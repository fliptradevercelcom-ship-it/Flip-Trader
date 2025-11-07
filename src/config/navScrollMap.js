/**
 * Navigation to Section ID Mapping Configuration
 * Maps navigation items to their corresponding section IDs for smooth scrolling
 */

export const navScrollMap = {
  // Quick Start dropdown items
  // "Quick Start": {
  //   "Why FlipTrade?": { sectionId: "buildtrader", path: "/" },
  //   "How to Start Trading": { sectionId: "workprocess", path: "/" },
  //   "Why Traders Choose Us": { sectionId: "whyflipstep", path: "/why-fliptrade" },
  //   "Contact Us": { sectionId: "contact", path: "/contact-us" },
  //   "FAQs": { sectionId: "faq-scroll", path: "/faq" },
  //   "Types of Markets": { sectionId: "exploremarket", path: "/" },
  //   "Account Types Overview": { sectionId: "account-type", path: "/" },
  //   "Risk Management Tips": { sectionId: "starttrading", path: "/" },
  //   "Mobile App": { sectionId: "trade-anywhere", path: "/" },
  //   "Platform Features": { sectionId: "platform-features", path: "/platform" },
  //   "Pip Calculator": { sectionId: "pip-calculator", path: "/" },
  //   "Economic Calendar": { sectionId: "calender", path: "/economic-calendar" },
  //   "IB Partner": { sectionId: "ib-partners", path: "/ib-partner" },
  //   "Why Partner with Us": { sectionId: "ib-why", path: "/ib-partner" },
  // },
  
  // Markets dropdown items
  "Markets": {
    "Benefits of Forex with FlipTrade": { sectionId: "benifits", path: "/forex" },
    "Why Trade Commodities": { sectionId: "benifits", path: "/commodities" },
    "Discover Stock Trading": { sectionId: "discover-trading", path: "/stocks" },
    "What are Indices": { sectionId: "graph", path: "/indices" },
    "FAQs": { sectionId: "faq-scroll", path: "/cryptocurrency" },
  },
  
  // Account Type dropdown items
  "Account Type": {
    "Account Overview": { sectionId: "account-type", path: "/classic-account" },
    "Why Choose Classic Account": { sectionId: "account-type", path: "/classic-account" },
    "Who Should Trade ECN Account": { sectionId: "trade-acc", path: "/enc-account" },
    "How to Upgrade": { sectionId: "upgrade-acc", path: "/accounts-types" },
    "Benefits of Professional Account": { sectionId: "get-started", path: "/professional-account" },
    "FAQs": { sectionId: "faq-scroll", path: "/accounts-types" },
  },
  
  // Platforms dropdown items
  "Platforms": {
    "Mobile App": { sectionId: "trade-anywhere", path: "/" },
    "Key Features": { sectionId: "platform-features", path: "/platform" },
    "Trade Anywhere": { sectionId: "trade", path: "/platform" },
    "Download (MT5)": { sectionId: "trade-download", path: "/platform" },
    "FAQs": { sectionId: "faq-scroll", path: "/platform" },
  },
  
  // Tools dropdown items
  "Tools": {
    "Calendar Overview": { sectionId: "calender", path: "/economic-calendar" },
    "Why Use Economic Calendar": { sectionId: "eco-calender", path: "/economic-calendar" },
    // "Trade Anywhere": { sectionId: "trade", path: "/platform" },
    "What is a Pip": { sectionId: "pip-cal", path: "/pip-calculator" },
    "Calculator": { sectionId: "calculator", path: "/pip-calculator" },
    "FAQs": { sectionId: "faq-scroll", path: "/pip-calculator" },
  },
  
  // Contact dropdown items
  "Contact": {
    "Office & Contact Details": { sectionId: "contact", path: "/contact-us" },
    "Social Links": { sectionId: "social-link", path: "/contact-us" },
    "How IB Partner Works": { sectionId: "ib-partner", path: "/ib-partner" },
    "Why Join as IB": { sectionId: "ib-why", path: "/ib-partner" },
  },
};

/**
 * Get section ID for a navigation item
 * @param {string} dropdownName - The dropdown menu name (e.g., "Quick Start")
 * @param {string} itemName - The navigation item name
 * @returns {string|null} - The section ID or null if not found
 */
export const getSectionId = (dropdownName, itemName) => {
  const dropdown = navScrollMap[dropdownName];
  if (!dropdown) return null;
  
  const item = dropdown[itemName];
  return item ? item.sectionId : null;
};

/**
 * Get target path for a navigation item
 * @param {string} dropdownName - The dropdown menu name
 * @param {string} itemName - The navigation item name
 * @returns {string|null} - The target path or null if not found
 */
export const getTargetPath = (dropdownName, itemName) => {
  const dropdown = navScrollMap[dropdownName];
  if (!dropdown) return null;
  
  const item = dropdown[itemName];
  return item ? item.path : null;
};

