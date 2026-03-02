// import Image from "next/image";
// import React from "react";
// import Title from "../Uiux/Title";
// import Discription from "../Uiux/Discription";
// import Link from "next/link";

// const ReferDescription = () => {
//   return (
//     <div className="relative">
//       <video
//         className="absolute inset-0 h-full w-full object-cover z-0 pointer-events-none opacity-75"
//         src="/videos/marketsgraphbg.mp4"
//         autoPlay
//         muted
//         loop
//         playsInline
//         preload="metadata"
//       />
//       <div className="grid grid-cols-1 md:grid-cols-2 inn_container pt-24 relative z-10 gap-y-7 text-center md:text-left">
//         <div className="md:w-[90%] flex items-center">
//           <div>
//             <Title
//               title={"Earn Up to $100 for Every Successful Referral"}
//               color={"gradient_text"}
//             />
//             <div className="pt-8">
//               <Discription
//                 dispription={`
//           Invite new traders to join the platform and start earning rewards when they register and actively begin trading.
//           <br/>
//           <br/>
//           Earn up to $100 once your referred user completes the required trading activity. There’s no limit to how much you can earn — the more active traders you bring, the greater your rewards.
//           `}
//                 color={"text-white"}
//               />
//             </div>
//             <div className=" mt-1 md:mt-10" />
//             <Link
//               href={"/terms-and-conditions"}
//               className="text-xl text-white italic"
//             >
//               *Terms and conditions apply.
//             </Link>
//           </div>
//         </div>

//         <div>
//           <Image
//             src={"/images/referposter1.png"}
//             alt=""
//             width={1000}
//             height={500}
//           />
//         </div>

//         <div className="hidden md:block">
//           <Image
//             src={"/images/referposter2.webp"}
//             alt=""
//             width={1000}
//             height={500}
//             className="h-full object-cover"
//           />
//         </div>

//         <div className="md:w-[90%] ms-auto flex items-center md:py-12">
//           <div>
//             <Title
//               title={"Turn First Deposits Into $100 Rewards"}
//               color={"gradient_text"}
//             />
//             <div className="pt-8">
//               <Discription
//                 dispription={`
//           Receive a $100 reward when a new user joins the platform and completes their first successful deposit.
//           <br/>
//           <br/>
//           Grow your earnings by inviting more traders to start their trading journey and unlock rewards with every qualified first deposit.
//           `}
//                 color={"text-white"}
//               />
//             </div>
//             <div className=" mt-10" />
//             <Link
//               href={"/terms-and-conditions"}
//               className="text-xl text-white italic"
//             >
//               *Terms and conditions apply.
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ReferDescription;

import Image from "next/image";
import Link from "next/link";
import Button from "../Uiux/Button";
import Title from "../Uiux/Title";
import Discription from "../Uiux/Discription";

export default function ReferHeroSection() {
  return (
    <div>
    <section className="relative overflow-hidden">
      <video
        className="absolute inset-0 h-full w-full object-cover pointer-events-none opacity-70"
        src="/videos/marketsgraphbg.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      />

      <div className="inn_container grid lg:grid-cols-2 relative z-10 py-12 md:py-18">
        <div className="hidden md:block">
          <Image
            src={"/images/homescreentabphone-img.webp"}
            alt=""
            width={1500}
            height={500}
            className=""
          />
        </div>

        <div>
          <div className="md:w-[90%] ms-auto">
            <Title
              title={"Earn Up to $100 Per Referral"}
              color={"gradient_text"}
            />

            <div className="py-3">
              <Discription
                dispription={
                  "Share the opportunity with aspiring traders and invite them to experience the powerful trading environment at Fliptrade Group. Earn attractive rewards when your referrals register and actively participate in trading."
                }
                color={"text-white"}
              />
            </div>
            <Discription
              dispription={
                "With Fliptrade Group’s referral program, you can earn up to $100 for every qualified trader who completes the required activity."
              }
              color={"text-white"}
            />

            <div className="mt-8 flex flex-row gap-4 justify-center lg:justify-start">
              <Link href="https://client.fliptradegroup.com/trader/registration">
                <Button
                  btn_name={"Get Started"}
                  border_color="border-primary"
                  btn_bg={"bg-white"}
                  shadow={true}
                  text_color={"text-primary"}
                />
              </Link>

              <Link href="/terms-and-conditions">
                <Button
                  btn_name={"Terms & Conditions"}
                  border_color="border-primary"
                  btn_bg={"bg-priamry"}
                  shadow={true}
                  text_color={"text-white"}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <div>
       <div className="inn_container grid grid-cols-1 lg:grid-cols-2 py-12 md:py-18">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-18 relative lg:left-[7%]">
            <div className="lg:w-max  bg-theme  lg:ml-auto border-b-[1px] lg:border-b-0 border-r-0 lg:border-r-[3px] border-white shadow-[0_-15px_20px_-16px_#6a40ec,0_15px_16px_-15px_#6a40ec] ">
              <div className="p-4">
                <h5 className="text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl lg:leading-[35px]  font-medium gradient_text text-center lg:text-end">
                  Invite Your Friends
                </h5>
                <p className="list_text font-light font_ternary  max-w-[400px]  text-center md:text-end lg:max-w-[unset] md:text-[unset] leading-6 xl:leading-[28px] !text-white">
                  Invite friends to join and start <br /> trading today.
                </p>
              </div>
            </div>
            <div className="lg:w-max  bg-theme  lg:mx-auto border-b-[1px] lg:border-b-0 border-r-0 lg:border-r-[3px] border-white shadow-[0_-15px_20px_-16px_#6a40ec,0_15px_16px_-15px_#6a40ec] ">
              <div className="p-4">
                <h5 className="text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl lg:leading-[35px]  font-medium gradient_text text-center lg:text-end">
                  Manage Referrals
                </h5>
                <p className="list_text font-light font_ternary  max-w-[400px]  text-center md:text-end lg:max-w-[unset] md:text-[unset] leading-6 xl:leading-[28px] !text-white">
                  Manage referral settings and <br /> reward preferences.
                </p>
              </div>
            </div>
            <div className="lg:w-max bg-theme  lg:ml-auto border-b-[1px] lg:border-b-0 border-r-0 lg:border-r-[3px] border-white shadow-[0_-15px_20px_-16px_#6a40ec,0_15px_16px_-15px_#6a40ec] ">
              <div className="p-4">
                <h5 className="text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl lg:leading-[35px]  font-medium gradient_text text-center lg:text-end">
                  Track Your Rewards
                </h5>
                <p className="list_text font-light font_ternary  max-w-[400px]  text-center md:text-end lg:max-w-[unset] md:text-[unset] leading-6 xl:leading-[28px] !text-white">
                 View referral activity and track <br /> earned rewards.
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center pt-12 lg:pt-0">
            <div className="relative w-[60%] lg:w-max m-auto ">
              <Image
                src={'/images/referdollar.webp'}
                alt="img"
                width={1000}
                height={500}
                className="max-w-[100%] lg:max-w-[440px] 2xl:max-w-[540px]"
              />
            </div>
          </div>
        </div>
    </div>
    </div>
  );
}
