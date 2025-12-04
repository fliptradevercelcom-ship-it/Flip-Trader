"use client";
import { useEffect, useState } from "react";
import popupbanner from "../../../public/images/popupbanner.webp";
import cross from "../../../public/icons/popupcross.svg";
import Image from "next/image";
import popupcoin from "../../../public/icons/popupcoin.svg";
import { usePathname } from "next/navigation";
export default function Signuppopup() {
  const [showPopup, setShowPopup] = useState(false);
  const [showcross, setshowcross] = useState(false);
  const currentpath = usePathname();
  useEffect(() => {
    const popupHiddenUntil = localStorage.getItem("popupHiddenUntil");
    const now = Date.now();

    if (popupHiddenUntil && now < Number(popupHiddenUntil)) {
      return;
    }

    const timer = setTimeout(() => {
      setShowPopup(true);
      currentpath === '/signup-offer' ? null : document.body.style.overflow = "hidden";
      
    }, 5000);
    const timercross = setTimeout(() => {
      setshowcross(true);
    }, 10000);

    return () => clearTimeout(timer, timercross);
  }, []);

  const handleClose = () => {
    const hideUntil = Date.now() + 12 * 60 * 60 * 1000;
    localStorage.setItem("popupHiddenUntil", hideUntil);
    document.body.style.overflow = "auto";
    setShowPopup(false);
  };

  const handleSignup = () => {
    const hideUntil = Date.now() + 12 * 60 * 60 * 1000;
    localStorage.setItem("popupHiddenUntil", hideUntil);
    document.body.style.overflow = "auto";
    window.location.href =
      "https://wa.me/+918852099227";
  };

  if (!showPopup) return null;

  return (
    <>
     {
      currentpath === '/signup-offer' 
      ? null 
      :
       <div style={styles.overlay}>
      <div className="relative">
        <Image
          src={popupbanner}
          alt="popupbanner"
          width={2000}
          height={500}
          className="max-w-[90%] m-auto md:max-w-[400px] lg:max-w-[550px] 2xl:max-w-[650px]"
        />
        {/* popup cross */}
        {showcross
          ? <div
              className="absolute top-3 right-3 z-[10]"
              onClick={handleClose}
            >
              <Image
                src={cross}
                alt="cross"
                width={1000}
                height={500}
                className="max-w-[52px] cursor-pointer"
              />
            </div>
          : null}

        {/* main text */}
        <div className="absolute w-full h-full flex items-center justify-center top-0 left-0">
          <div className="flex flex-col items-center rotate-[355deg] relative left-2">
            <h2 className="text-[23px] lg:text-[35px] xl:text-[43px] 2xl:text-[55px] text-primary font-bold leading-[normal]
            text-center px-16">
              Black Friday 
            </h2>
            <h2 className="text-[23px] lg:text-[35px] xl:text-[43px] 2xl:text-[55px] text-primary font-bold leading-[normal]
            text-center px-16">
              Sale!
            </h2>
            <p className="text-[22px] lg:text-[30px] 2xl:text-[40px] text-secondary text-center">
             Get $250 Bonus 
            </p>

            <div
              className=" flex gap-4 bg-primary w-max px-4 2xl:px-6 items-center rounded-full py-3 relative mt-2 cursor-pointer popup_scale"
              onClick={handleSignup}
            >
              <Image
                src={popupcoin}
                alt="popupcoin"
                width={1000}
                height={500}
                className="w-[60px] absolute -left-2"
              />
              <span className="text-base 2xl:text-lg font-light font_ternary text-do aos-init aos-animate underline ps-[40px]">
               Claim Black Friday Bonus
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
     }
    </>
   
  );
}

const styles = {
  overlay: {
    position: "fixed",
    inset: 0,
    background: "#000000cf",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 9999
  }
};
