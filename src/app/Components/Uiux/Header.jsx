"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState, useRef, useEffect } from "react";
import Logo from "../../../../public/images/Logo.webp";
import Logo2 from "../../../../public/images/logo2.webp";
import Button from "./Button";
import firebtnicon from "../../../../public/icons/firebtnicon.svg";
import menuicon from "../../../../public/icons/menuicon.svg";
import menucross from "../../../../public/icons/menucross.svg";
import downarrow from "../../../../public/icons/downarrow.svg";
import usericon from "../../../../public/icons/user.svg";
import giftwhite from "../../../../public/icons/giftwhite.svg";
import { handleNavLinkClick, scrollToSection, setScrollTarget } from "../../../utils/scrollUtils";
import { getSectionId, getTargetPath } from "../../../config/navScrollMap";
const navlistdata = [
  {
    id: 1,
    nav_name: "Quick Start",
    sections: [
      {
        heading: "Markets",
        items: [
          { id: "typesmarkets", name: "Forex", link: "/forex" },
          { id: "tradingconditions", name: "Indices", link: "/indices" },
          { id: "accounttypes", name: "Commodities", link: "/commodities" },
          { id: "riskmanagement", name: "Metals", link: "/metals" },
          {
            id: "riskmanagement",
            name: "Cryptocurrency",
            link: "/cryptocurrency"
          },
          { id: "riskmanagement", name: "Stocks", link: "/stocks" }
        ]
      },
      {
        heading: "Account Type",
        items: [
          { id: "typesmarkets", name: "Standard Account", link: "/standard-account" },
          { id: "tradingconditions", name: "Classic Account", link: "/classic-account" },
          { id: "accounttypes", name: "ECN Account", link: "/enc-account" },
          { id: "riskmanagement", name: "Professional Account", link: "/professional-account" },
          { name: "Spreads Swaps", link: "/spreads-swaps" },
          { name: "Reviews", link: "/reviews" } 
        ]
      },
      {
        heading: "Platforms",
        items: [
          { id: "2", name: "MetaTrader 5 (MT5)", link: "/platform" },
          { id: "tradingcondidstions", name: "WebTrader", link: "/web-trading" },
          // { id: "accounttfdsfypes", name: "Mobile App", link: "/" },
        ]
      },
      {
        heading: "Tools",
        items: [
          { name: "Pip Calculator", link: "/pip-calculator" },
          { name: "Economic Calendar", link: "/economic-calendar" },
          { name: "Learn Trading", link: "/learn-trading" },
          { id: "riskmanafdsgement", name: "Social & Copy Trading", link: "/social-copy-trading" },
          { name: "Contest", link: "/contest" },
          { name: "Deposit & Withdrawal", link: "/deposit-and-withdrawal" },

        ]
      },
    ]
  },
  {
    id: 2,
    nav_name: "Markets",
    sections: [
      {
        heading: "Markets Type",
        items: [
          { id: "typesmarkets", name: "Forex", link: "/forex" },
          { id: "tradingconditions", name: "Indices", link: "/indices" },
          { id: "accounttypes", name: "Commodities", link: "/commodities" },
          { id: "riskmanagement", name: "Metals", link: "/metals" },
          {
            id: "riskmanagement",
            name: "Cryptocurrency",
            link: "/cryptocurrency"
          },
          { id: "riskmanagement", name: "Stocks", link: "/stocks" }
        ]
      },
      {
        heading: "Quick Links",
        items: [
          {
            id: "onlinetrading",
            name: "Benefits of Forex with FlipTrade",
            link: "/forex"
          },
          // { id: "howtostart", name: "Global Index Overview", link: "/indices" },
          { id: "whychooseus", name: "Why Trade Commodities", link: "/commodities" },
          {
            id: "whychooseus",
            name: "Discover Stock Trading",
            link: "/stocks"
          },
          { id: "whychooseus", name: "What are Indices", link: "/indices" },
          { id: "whychooseus", name: "FAQs", link: "/cryptocurrency" }
        ]
      },
    ]
  },
  {
    id: 3,
    nav_name: "Account Type",
    sections: [
      {
        heading: "Account Type",
        items: [
          { id: "typesmarkets", name: "Standard Account", link: "/standard-account" },
          { id: "tradingconditions", name: "Classic Account", link: "/classic-account" },
          { id: "accounttypes", name: "ECN Account", link: "/enc-account" },
          { id: "riskmanagement", name: "Professional Account", link: "/professional-account" }
        ]
      },
      {
        heading: "Quick Links",
        items: [
          {
            id: "onlinetrading",
            name: "Account Overview",
            link: "/accounts-types"
          },
          {
            id: "howtostart",
            name: "Why Choose Classic Account",
            link: "/classic-account"
          },
          { id: "whychooseus", name: "Who Should Trade ECN Account", link: "/enc-account" },
          {
            id: "whychooseus",
            name: "How to Upgrade",
            link: "/accounts-types"
          },
          {
            id: "whychooseus",
            name: "Benefits of Professional Account",
            link: "/professional-account"
          },
          {
            id: "whychooseus",
            name: "FAQs",
            link: "/accounts-types"
          },
        ]
      },
    ]
  },
  {
    id: 4,
    nav_name: "Platforms",
    sections: [
      {
        heading: "Trading Platforms",
        items: [
          { id: "2", name: "MetaTrader 5 (MT5)", link: "/platform" },
          { id: "tradingcondidstions", name: "WebTrader", link: "/web-trading" },
          { id: "accounttfdsfypes", name: "Mobile App", link: "/" },
          { id: "riskmanafdsgement", name: "Social & Copy Trading", link: "/social-copy-trading" }
        ]
      },
      {
        heading: "Quick Links",
        items: [
          // { id: "whyflip", name: "Why Choose Our Platform", link: "/platform" },
          { id: "whyflip", name: "Key Features", link: "/platform" },
          { id: "whyflip", name: "Trade Anywhere", link: "/platform" },
          { id: "whyflip", name: "Download (MT5)", link: "/platform" },
          { id: "whyflip", name: "FAQs", link: "/platform" },
        ]
      },
    ]
  },
  {
    id: 5,
    nav_name: "Tools",
    sections: [
      {
        heading: "Trading Tools",
        items: [
          { name: "Pip Calculator", link: "/pip-calculator" },
          { name: "Economic Calendar", link: "/economic-calendar" },
          { name: "Learn Trading", link: "/learn-trading" }
        ]
      },
      {
        heading: "Quick Links",
        items: [
          { name: "Calendar Overview", link: "/economic-calendar" },
          { name: "Why Use Economic Calendar", link: "/economic-calendar" },
          // { name: "Trade Anywhere", link: "/platform" },
          { name: "What is a Pip", link: "/pip-calculator" },
          { name: "Calculator", link: "/pip-calculator" },
          { name: "Download Our App", link: "/" },
          { name: "FAQs", link: "/pip-calculator" }
        ]
      },
    ]

  },
  {
    id: 6,
    nav_name: "Contact",
    sections: [
      {
        heading: "Partnership & Support",
        items: [
          { name: "IB Partner", link: "/ib-partner" },
          { name: "Contact Us", link: "/contact-us" },
          { name: "About Us", link: "/about-us" },
        ]
      },
      {
        heading: "Quick Links",
        items: [
          { name: "Office & Contact Details", link: "/contact-us" },
          { name: "Sign Up Form", link: "https://client.fliptradegroup.com/trader/registration" },
          { name: "Social Links", link: "/contact-us" },
          { name: "How IB Partner Works", link: "/ib-partner" },
          { name: "Why Join as IB", link: "/ib-partner" },
          { name: "FAQs", link: "/faq" }
        ]
      },
    ]
  }
];

const MobileDropdownItem = ({ data, isOpen, setIsOpen, setIsMenu, pathname }) => {
  const sections = data.sections;

  // Get all items that match the pathname
  const matchingItems = sections?.flatMap(section => section.items || [])
    .filter(item => item.link === pathname);
  
  // Only consider active if there's exactly one unique match
  // On home page ("/") with multiple items, don't highlight any
  const activeItem = matchingItems.length === 1 ? matchingItems[0] : null;
  
  // Explicitly set to false on home page to prevent any highlighting
  const isChildActive = pathname === '/' ? false : !!activeItem;

  return (
    <div className="w-full">
      <div
        className={`flex items-center justify-between text-base font-medium py-4 px-4 cursor-pointer border-b border-gray-100 transition-colors ${isChildActive
          ? "text-white bg-primary"
          : "text-gray-800 hover:bg-gray-50"
          }`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-white">{data.nav_name}</span>
        <Image
          src={downarrow}
          alt="dropdown"
          width={16}
          height={16}
          className={`max-w-[16px] duration-300 transition-all ease-in-out brightness-0 invert ${isOpen ? "rotate-180" : "rotate-0"
            }`}
        />
      </div>
      <div
        className={`${isOpen ? "opacity-100" : "max-h-0 opacity-0"
          } overflow-hidden duration-300 transition-all ease-in-out bg-gray-50`}
      >
        {sections?.map((section) => (
          <div key={section.heading} className="px-4 py-2 border-b border-primary">
            <h4 className="text-black-600 font-semibold text-sm mb-3 uppercase tracking-wide">
              {section.heading}
            </h4>
            <div className="space-y-1">
              {section.items.map((item, index) => {
                // Check if this specific item should be active
                // Only highlight if it's the first item in all sections that matches pathname
                const isActive = activeItem && activeItem === item && item.link === pathname;
                
                return (
                <Link
                  key={index}
                  href={item.link}
                  className={`block py-2 text-sm font-medium rounded-md transition-colors ${isActive
                    ? "text-primary bg-primary/10 font-semibold"
                    : "text-gray-700 hover:text-primary hover:bg-theme"
                    }`}
                  onClick={(e) => {
                    // Get section ID for scroll
                    const sectionId = getSectionId(data.nav_name, item.name);
                    const isSamePage = pathname === item.link;
                    
                    if (sectionId && isSamePage) {
                      // Same page - prevent default and scroll
                      e.preventDefault();
                      scrollToSection(sectionId, { headerOffset: 120, delay: 100 });
                    } else if (sectionId) {
                      // Different page - set scroll target for navigation
                      setScrollTarget(sectionId);
                    }
                    
                    setIsMenu(false);
                    setIsOpen(false);
                  }}
                >
                  {item.name}
                </Link>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default function Header() {
  const pathname = usePathname();
  
  const [hoverPos, setHoverPos] = useState({ left: 0, width: 0 });
  const [activePos, setActivePos] = useState({ left: 0, width: 0 });
  const [isMenu, setIsMenu] = useState(false);
  const [openMobileDropdown, setOpenMobileDropdown] = useState(null);

  useEffect(() => {
    if (isMenu) {
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
    } else {
      document.body.style.overflow = 'unset';
      document.body.style.position = 'unset';
      document.body.style.width = 'unset';
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset';
      document.body.style.position = 'unset';
      document.body.style.width = 'unset';
    };
  }, [isMenu]);
  const [openDropdown, setOpenDropdown] = useState(null);
  
  useEffect(() => {
    setOpenDropdown(null);
    setHoverPos({ left: 0, width: 0 });
    setTempHoveredItem(null);
    setOpenMobileDropdown(null); 
  }, [pathname]);
  
  const [hoveredItem, setHoveredItem] = useState(() => {
    
    if (pathname === '/') return null;

    const matchingNav = navlistdata.find(nav =>
      nav.sections?.some(section =>
        section.items?.some(item => item.link === pathname)
      )
    );
    return matchingNav ? matchingNav.id : null; 
  });
  const [tempHoveredItem, setTempHoveredItem] = useState(null); 
  const containerRef = useRef(null);
  const leaveTimeoutRef = useRef(null);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (!containerRef.current) return;

      if (pathname === '/') {
        setActivePos({ left: 0, width: 0 });
        setHoveredItem(null);
        return;
      }

      const matchingNav = navlistdata.find(nav =>
        nav.sections?.some(section =>
          section.items?.some(item => item.link === pathname)
        )
      );

      if (matchingNav) {
        const navItem = containerRef.current.querySelector(`[data-nav-id="${matchingNav.id}"]`);
        if (navItem) {
          const rect = navItem.getBoundingClientRect();
          const parentRect = containerRef.current.getBoundingClientRect();
          setActivePos({ left: rect.left - parentRect.left, width: rect.width });
          setHoveredItem(matchingNav.id);
          return;
        }
      }

      setActivePos({ left: 0, width: 0 });
      setHoveredItem(null);
    }, 50);

    return () => clearTimeout(timeoutId);
  }, [pathname]);

  useEffect(() => {
    return () => {
      if (leaveTimeoutRef.current) clearTimeout(leaveTimeoutRef.current);
    };
  }, []);

  const showPos = hoverPos.width > 0 ? hoverPos : activePos;

  const moveHighlightTo = (el) => {
    if (!el || !containerRef.current) return;
    const rect = el.getBoundingClientRect();
    const parentRect = containerRef.current.getBoundingClientRect();
    setHoverPos({ left: rect.left - parentRect.left, width: rect.width });
  };

  return (
    <div className={`pt-8 pb-6 w-full border-b border-white/20`}>
      <div className="inn_container flex justify-between z-30 sticky">
        {/* Logo */}
        <div className="flex items-center relative z-[999]">
          <Link href="/">
            <Image
              src={openDropdown ? Logo2 : Logo}
              alt="Logo"
              width={2000}
              height={500}
              className="max-w-44 2xl:max-w-56"
              priority
            />
          </Link>
        </div>

        {/* Desktop Navbar */}
        <div className="hidden w-[56%] 2xl:w-[55%] xl:max-h-[52px] 2xl:max-h-[unset] max-w-[1280px] xl:flex justify-center">
          <div
            ref={containerRef}
            className="relative flex w-[98%] 2xl:w-[95%] justify-around items-center 2xl:py-1 font_secondary"
          >
            <div
              className={`${isMenu ? "fixed" : "absolute"
                } bottom-[-2px] h-[2px] bg-primary transition-all duration-300 ease-in-out`}
              style={{ left: showPos.left, width: showPos.width }}
            />
            {navlistdata.map((data) => (
              <div
                key={data.id}
                className="relative group"
                data-nav-id={data.id}
                onMouseEnter={(e) => {
                  // Clear any pending timeout
                  if (leaveTimeoutRef.current) {
                    clearTimeout(leaveTimeoutRef.current);
                    leaveTimeoutRef.current = null;
                  }
                  const anchor = e.currentTarget.querySelector("[data-link]");
                  moveHighlightTo(anchor);
                  setOpenDropdown(data.sections ? data.nav_name : null);
                  setTempHoveredItem(data.id); // Set temporary hover for text color
                }}
                onMouseLeave={() => {
                  leaveTimeoutRef.current = setTimeout(() => {
                    setHoverPos({ left: 0, width: 0 });
                    setOpenDropdown(null);
                    setTempHoveredItem(null); // Clear temporary hover
                  }, 100);
                }}
              >
                <p
                  data-link="#"
                  className={`relative z-10 list_text font-medium py-2 px-3 block cursor-pointer transition-colors duration-300 ${tempHoveredItem === data.id
                    ? "text-primary"
                    : hoveredItem === data.id
                      ? "text-primary"
                      : openDropdown === null
                        ? "text-white"
                        : "text-black"
                    }`}
                >
                  {data.nav_name}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop Buttons */}
        <div className="flex gap-8 items-center">
          <div className="hidden lg:flex items-center gap-6">
            <Link href={"https://client.fliptradegroup.com/trader"}>
              <button
                className={`hover:text-[var(--subprimary)] list_text font-medium px-8 cursor-pointer hover:underline hover:scale-[1.1] duration-300 transition-all ${openDropdown ? "text-black" : "text-white"
                  }`}
              >
                Login
              </button>
            </Link>
            <div className="rounded-[50px]">
              <Link
                href={"https://client.fliptradegroup.com/trader/registration"}
              >
                <Button
                  icon={usericon.src}
                  btn_name="Sign Up"
                  btn_bg="bg-primary"
                  text_color="text-white"
                  border_color="border-primary"
                  shadow={true}
                />
              </Link>
            </div>
          </div>
          <div className="flex xl:hidden gap-6">
            <div
              className={`relative z-[999] duration-700 transition-all ${isMenu ? "rotate-0" : "rotate-[225deg]"
                }`}
              onClick={() => setIsMenu(!isMenu)}
            >
              <Image
                src={!isMenu ? menuicon : menucross}
                alt="menu"
                width={1000}
                height={500}
                className="max-w-10 cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`fixed inset-x-0 top-[6rem] bottom-0 bg-theme z-[999] duration-300 transition-all flex flex-col ${!isMenu
          ? "translate-x-full opacity-0 pointer-events-none"
          : "translate-x-0 opacity-100 pointer-events-auto"
          }`}
      >
        {/* Navigation Content */}
        <div className=" py-2 px-4 border-t-[1px] border-gray-200">
          <div className="flex gap-4 items-center justify-center">
            <Link href={"https://client.fliptradegroup.com/trader/registration"}>
              <Button
                icon={usericon}
                btn_name="Sign Up"
                btn_bg="bg-primary"
                text_color="text-white"
                border_color="border-primary"
                shadow={true}
              />
            </Link>
            <Link href={"https://client.fliptradegroup.com/trader"}>
              <button className="w-full text-subprimary hover:text-primary text-base font-medium py-1.5 px-6 cursor-pointer hover:underline transition-all rounded-full border-subprimary border-[1.5px]">
                Login
              </button>
            </Link>
          </div>
        </div>
        <div className="flex-1 overflow-y-auto">
          <div className="">
            {navlistdata.map((data) => (
              <div key={data.id}>
                {data.sections ? (
                  <MobileDropdownItem
                    data={data}
                    isOpen={openMobileDropdown === data.id}
                    setIsOpen={(isOpen) => {
                      if (isOpen) {
                        setOpenMobileDropdown(data.id);
                      } else {
                        setOpenMobileDropdown(null);
                      }
                    }}
                    setIsMenu={setIsMenu}
                    pathname={pathname}
                  />
                ) : (
                  <Link
                    onClick={() => setIsMenu(false)}
                    href="#"
                    className="block text-gray-800 text-base font-medium py-4 px-6 border-b border-gray-100 hover:bg-gray-50 transition-colors"
                  >
                    {data.nav_name}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Footer Buttons */}
        
      </div>

      {/* Hover Dropdown Section */}
      <div
        onMouseEnter={() => {
          if (leaveTimeoutRef.current) {
            clearTimeout(leaveTimeoutRef.current);
            leaveTimeoutRef.current = null;
          }
        }}
        onMouseLeave={() => {
          setOpenDropdown(null);
          setHoverPos({ left: 0, width: 0 });
          setTempHoveredItem(null); // Clear temporary hover
        }}
        className={`absolute left-0 top-0 z-20 origin-top transition-all duration-300 ease-in-out w-full ${openDropdown
          ? "scale-100 opacity-100 pointer-events-auto"
          : "scale-0 opacity-0 pointer-events-none"
          }`}
      >
        <div className="h-full">
          <div className="m-auto bg-[#F2F7FF] border border-[#75757526] shadow-lg overflow-hidden">
            <div className="relative grid grid-cols-[2fr_3fr] gap-4 pt-[120px] pb-12  inn_container">
              <div className="flex flex-col items-start">
                <div className="text-secondary text-4xl 2xl:text-5xl leading-16">
                  Where Smart Traders
                  <br /> Flip the Game.
                </div>
                <div className="flex flex-wrap pt-8 gap-2">
                  <Link
                    href={
                      "https://client.fliptradegroup.com/trader/registration"
                    }
                  >
                    <Button
                      icon={firebtnicon.src}
                      btn_name="Open Live Account"
                      btn_bg="bg-primary"
                      text_color="text-white"
                      border_color="border-primary"
                      shadow={true}
                    />
                  </Link>
                  <Link
                    href={
                      "/ib-partner"
                    }
                  >
                    <Button
                      icon={giftwhite.src}
                      btn_name="Become IB Partner"
                      btn_bg="bg-[#0000008A]"
                      text_color="text-white"
                      border_color="border-[#fff]"
                    />
                  </Link>
                </div>
              </div>

              <div className="w-full">
                <div className="grid grid-cols-4 gap-4 py-4 px-6 h-max">
                  {navlistdata
                    .find((n) => n.nav_name === openDropdown)
                    ?.sections?.map((section) => (
                      <div key={section.heading} className="text-start">
                        <h3 className="text-xl font_ternary font-semibold text-black mb-4">
                          {section.heading}
                        </h3>
                        <div className="space-y-2">
                          {section.items.map((item, index) => (
                            <Link
                              key={index}
                              href={item.link}
                              className={`relative ${item.name === 'Spreads Swaps' ? 'pt-5' : ''} z-10 font_secondary py-1 block rounded-lg text-base text-ternary transition-all duration-500 ${item.link === pathname
                                ? "text-primary hover:underline"
                                : "text-black hover:text-primary hover:underline"
                                }`}
                             onClick={(e) => {
                                // Get section ID and target path from configuration
                                const sectionId = getSectionId(openDropdown, item.name);
                                const targetPath = getTargetPath(openDropdown, item.name);
                                
                                // If same page, always scroll (even if already scrolled)
                                const isSamePage = pathname === item.link;
                                
                                if (sectionId) {
                                  if (isSamePage) {
                                    // Prevent default link behavior and scroll directly
                                    e.preventDefault();
                                    scrollToSection(sectionId, { headerOffset: 120, delay: 100 });
                                  } else {
                                    // Different page - use normal navigation with scroll target
                                    handleNavLinkClick(
                                      sectionId,
                                      pathname,
                                      item.link,
                                      { headerOffset: 120, delay: 300 }
                                    );
                                  }
                                }
                                
                                setOpenDropdown(null);
                              }}
                              >
                              {item.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
