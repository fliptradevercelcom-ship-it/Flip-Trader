"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Title from "../Uiux/Title";

// Icons (reuse the same set you already have)
import usericon from "../../../../public/icons/usericon.svg";
import Regulation from "../../../../public/icons/Regulation.svg";
import usericonwhite from "../../../../public/icons/usericonwhite.svg";
import Regulationwhite from "../../../../public/icons/Regulationwhite.svg";
import faqicon from "../../../../public/icons/faq.svg";
import pageicon from "../../../../public/icons/page.svg";
import pageiconblack from "../../../../public/icons/pageblack.svg";
import securityblack from "../../../../public/icons/securityblack.svg";
import securitywhite from "../../../../public/icons/securitywhite.svg";
import Disclosurewhite from "../../../../public/icons/Disclosurewhite.svg";
import Disclosureblack from "../../../../public/icons/Disclosureblack.svg";
import lawblack from "../../../../public/icons/lawblack.svg";
import lawwhite from "../../../../public/icons/lawwhite.svg";
import Cookiesblack from "../../../../public/icons/Cookiesblack.svg";
import Cookieswhite from "../../../../public/icons/Cookieswhite.svg";
import Securityb from "../../../../public/icons/Securityb.svg";
import Securityw from "../../../../public/icons/Securityw.svg";
import otherwhite from "../../../../public/icons/otherwhite.svg";
import otherblack from "../../../../public/icons/otherblack.svg";
import contactblack from "../../../../public/icons/contactblack.svg";
import contactwhite from "../../../../public/icons/contactwhite.svg";

/* =========================================================
   SECTION LIST (match Privacy Policy structure/props)
========================================================= */
export const termsSections = [
  { id: 1,  faqtitle: "Introduction",                     faqicon: pageiconblack,     faqiconwhite: pageicon,         sectioncompoent: TermsCard1 },
  { id: 2,  faqtitle: "Information About Us",             faqicon: usericon,          faqiconwhite: usericonwhite,    sectioncompoent: TermsCard2 },
  { id: 3,  faqtitle: "Accessing Our Site",               faqicon: Regulation,        faqiconwhite: Regulationwhite,  sectioncompoent: TermsCard3 },
  { id: 4,  faqtitle: "Use of Our Website",               faqicon: securityblack,     faqiconwhite: securitywhite,    sectioncompoent: TermsCard4 },
  { id: 5,  faqtitle: "Prohibited Uses",                  faqicon: Disclosureblack,   faqiconwhite: Disclosurewhite,  sectioncompoent: TermsCard5 },
  { id: 6,  faqtitle: "Reliance on Information Posted",   faqicon: lawblack,          faqiconwhite: lawwhite,         sectioncompoent: TermsCard6 },
  { id: 7,  faqtitle: "Changes to Our Site",              faqicon: Cookiesblack,      faqiconwhite: Cookieswhite,     sectioncompoent: TermsCard7 },
  { id: 8,  faqtitle: "Limitation of Liability",          faqicon: Securityb,         faqiconwhite: Securityw,        sectioncompoent: TermsCard8 },
  { id: 9,  faqtitle: "Information About You & Visits",   faqicon: otherblack,        faqiconwhite: otherwhite,       sectioncompoent: TermsCard9 },
  { id: 10, faqtitle: "Transactions via Website",         faqicon: pageiconblack,     faqiconwhite: pageicon,         sectioncompoent: TermsCard10 },
  { id: 11, faqtitle: "Uploading Material",               faqicon: Regulation,        faqiconwhite: Regulationwhite,  sectioncompoent: TermsCard11 },
  { id: 12, faqtitle: "Interactive Services",             faqicon: securityblack,     faqiconwhite: securitywhite,    sectioncompoent: TermsCard12 },
  { id: 13, faqtitle: "Viruses, Hacking & Misuse",        faqicon: Disclosureblack,   faqiconwhite: Disclosurewhite,  sectioncompoent: TermsCard13 },
  { id: 14, faqtitle: "Suspension & Termination",         faqicon: lawblack,          faqiconwhite: lawwhite,         sectioncompoent: TermsCard14 },
  { id: 15, faqtitle: "Linking to Our Website",           faqicon: Cookiesblack,      faqiconwhite: Cookieswhite,     sectioncompoent: TermsCard15 },
  { id: 16, faqtitle: "Linking from Our Website",         faqicon: Securityb,         faqiconwhite: Securityw,        sectioncompoent: TermsCard16 },
  { id: 17, faqtitle: "Trademarks & IP",                  faqicon: otherblack,        faqiconwhite: otherwhite,       sectioncompoent: TermsCard17 },
  { id: 18, faqtitle: "Variations",                       faqicon: pageiconblack,     faqiconwhite: pageicon,         sectioncompoent: TermsCard18 },
  { id: 19, faqtitle: "Your Concerns / Contact",          faqicon: contactblack,      faqiconwhite: contactwhite,     sectioncompoent: TermsCard19 },
];

/* =========================================================
   PAGE COMPONENT
========================================================= */
const Termsconditions = () => {
  const sectionRefs = useRef([]);
  const [activeSection, setActiveSection] = useState(null);
  const [faqtogle, setFaqTogle] = useState(false); // added to fix mobile toggle usage

  useEffect(() => {
    const handleScroll = () => {
      sectionRefs.current.forEach((ref, index) => {
        if (!ref) return;
        const rect = ref.getBoundingClientRect();
        if (rect.top >= 0 && rect.top <= 50) {
          setActiveSection(termsSections[index].id);
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-theme">
      <div className="inn_container pt-12 md:pt-18 lg:pt-28 xl:pt-32 2xl:pt-40 pb-12 xl:pb-24">
        <div className="text-center">
          <Title title="Terms of Use" color="text-white" />
        </div>

        <div className="flex flex-col xl:flex-row xl:pt-14 gap-4 relative">
          {/* Sidebar (Desktop) */}
          <div className="hidden xl:block xl:w-[30%] 2xl:w-[25%]">
            <div className="bg-primary xl:max-w-[380px] p-6 rounded-3xl sticky top-10">
              <p className="text-[30px] font-medium text-white">Terms of Use</p>
              <div className="pt-4 grid grid-cols-2 xl:grid-cols-1 gap-3">
                {termsSections.map((data, index) => (
                  <div
                    key={data.id}
                    className={`p-4 rounded-2xl mt-4 cursor-pointer transition-all duration-300 ${
                      activeSection === data.id ? "bg-white" : "bg-[#4C1BE3]"
                    }`}
                    onClick={() =>
                      sectionRefs.current[index]?.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                      })
                    }
                  >
                    <div className="flex items-center gap-3">
                      <Image
                        src={activeSection === data.id ? data.faqicon : data.faqiconwhite}
                        alt="icon"
                        width={24}
                        height={24}
                        className="max-w-[24px]"
                      />
                      <p
                        className={`list_text font-medium ${
                          activeSection === data.id ? "text-black" : "text-white"
                        }`}
                      >
                        {data.faqtitle}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="xl:w-[70%] 2xl:w-[75%]">
            {/* Mobile floating button + drawer */}
            <div className="block xl:hidden sticky top-[50px] z-10">
              <button
                className="bg-primary w-max p-3 rounded-full"
                onClick={() => setFaqTogle((v) => !v)}
                aria-label="Toggle sections"
              >
                <Image src={faqicon} alt="faqicon" width={32} height={32} className="max-w-[32px]" />
              </button>

              {faqtogle && (
                <div className="absolute top-[57px] left-0 w-full md:w-[80%]">
                  <div className="bg-primary p-6 rounded-3xl">
                    <p className="text-[24px] font-medium text-white">Sections</p>
                    <div className="pt-4 grid grid-cols-1 md:grid-cols-2 gap-3">
                      {termsSections.map((data, index) => (
                        <div
                          key={data.id}
                          className={`p-4 rounded-2xl mt-4 cursor-pointer transition-all duration-300 ${
                            activeSection === data.id ? "bg-white" : "bg-[#4C1BE3]"
                          }`}
                          onClick={() => {
                            sectionRefs.current[index]?.scrollIntoView({
                              behavior: "smooth",
                              block: "start",
                            });
                            setFaqTogle(false);
                          }}
                        >
                          <div className="flex items-center gap-3">
                            <Image
                              src={activeSection === data.id ? data.faqicon : data.faqiconwhite}
                              alt="icon"
                              width={24}
                              height={24}
                              className="max-w-[24px]"
                            />
                            <p
                              className={`list_text font-medium ${
                                activeSection === data.id ? "text-black" : "text-white"
                              }`}
                            >
                              {data.faqtitle}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Sections */}
            <div>
              {termsSections.map((data, index) => {
                const Sectioncard = data.sectioncompoent;
                return (
                  <div
                    key={data.id}
                    ref={(el) => (sectionRefs.current[index] = el)}
                    className="p-4 shadow-[1px_1px_0px_0px_#fff] rounded-3xl mt-12"
                  >
                    <div className="flex items-center gap-3 max-w-[900px] 2xl:max-w-7xl m-auto">
                      <Image
                        src={data.faqiconwhite}
                        alt="icon"
                        width={34}
                        height={34}
                        className="max-w-[34px]"
                      />
                      <p className=" text-xl md:text-[22px] xl:text-[30px] font-medium text-white">{data.faqtitle}</p>
                    </div>
                    <div>{Sectioncard && <Sectioncard />}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Termsconditions;

/* =========================================================
   CARDS (content from your Terms text)
========================================================= */

export function TermsCard1() {
  return (
    <div className="pt-6">
      <p className="text-base 2xl:text-xl text-white font_ternary">
        This page (together with the documents referred to on it) explains the Terms of Use on
        which you may access and use our website, whether as a guest or a registered user.
      </p>
      <br />
      <p className="text-base 2xl:text-xl text-white font_ternary">
        By accessing or using FlipTrade Group’s website (“the Website”, “our site”, “we”, “us”, or
        “our”), you agree to comply with and be bound by these Terms of Use, our Privacy Policy,
        Cookies Policy, and any other notices or conditions displayed on the Website
        (collectively, “the Terms”). If you do not agree, please refrain from using the Website.
      </p>
    </div>
  );
}

export function TermsCard2() {
  return (
    <div className="pt-6">
      <p className="text-base 2xl:text-xl text-white font_ternary">
        FlipTrade Group Limited is a financial services and technology company providing online
        trading and investment solutions.
      </p>
      <p className="text-base 2xl:text-xl text-white pt-4">Registered Office:</p>
      <p className="text-base 2xl:text-xl text-white">Ground Floor, The Sotheby Building,</p>
      <p className="text-base 2xl:text-xl text-white">Rodney Village, Rodney Bay, Saint Lucia</p>
      <p className="text-base 2xl:text-xl text-white font_ternary pt-4">
        FlipTrade Group operates under applicable international laws and regulations governing
        trading and brokerage services. Any access to or use of this Website is subject to these
        Terms and all applicable laws.
      </p>
    </div>
  );
}

export function TermsCard3() {
  return (
    <div className="pt-6">
      <p className="text-base 2xl:text-xl text-white font_ternary">
        Access to our Website is permitted on a temporary basis. We reserve the right to withdraw
        or amend our site or the services we provide without prior notice. We shall not be liable
        if, for any reason, the Website is unavailable at any time or for any period.
      </p>
      <p className="text-base 2xl:text-xl text-white font_ternary pt-4">
        From time to time, we may restrict access to certain parts or all of our Website to
        registered users only. If you are provided with a user identification code, password, or
        other credentials, you must keep them confidential and not disclose them to any third
        party. We may disable credentials if we believe you have failed to comply with these Terms
        or for security reasons. We may deny, suspend, or terminate access if there are concerns
        about unauthorized use, security, or breaches.
      </p>
    </div>
  );
}

export function TermsCard4() {
  return (
    <div className="pt-6">
      <p className="text-base 2xl:text-xl text-white font_ternary">
        You are responsible for ensuring that all persons who access the Website through your
        internet connection are aware of these Terms and comply with them. We are the owner or
        licensee of all intellectual property rights in our Website, including design, content,
        text, graphics, and layout. These materials are protected by copyright and international
        IP laws. All rights reserved.
      </p>
      <div className="ps-6 pt-4">
        {[
          "You may print or download extracts for personal reference only.",
          "You may share links internally within your organization for informational purposes.",
          "You must not modify printed/downloaded materials or use media separately from accompanying text.",
          "You must not use any part of the materials for commercial purposes without prior written consent.",
        ].map((t) => (
          <li key={t} className="text-base 2xl:text-lg text-white list-none pt-2">
            {t}
          </li>
        ))}
      </div>
      <p className="text-base 2xl:text-xl text-white font_ternary pt-4">
        If you breach these terms, your right to use the Website will cease immediately, and you
        must return or destroy any copies of materials you have made.
      </p>
    </div>
  );
}

export function TermsCard5() {
  return (
    <div className="pt-6">
      <div className="ps-6">
        {[
          "Use the Website in any way that breaches local, national, or international laws or regulations.",
          "Use it for unlawful, fraudulent, or harmful purposes.",
          "Transmit unsolicited advertising, promotional material, or spam.",
          "Knowingly transmit viruses, trojans, worms, spyware, or any harmful software.",
        ].map((t) => (
          <li key={t} className="text-base 2xl:text-lg text-white list-none pt-2">
            {t}
          </li>
        ))}
      </div>
    </div>
  );
}

export function TermsCard6() {
  return (
    <div className="pt-6">
      <p className="text-base 2xl:text-xl text-white font_ternary">
        All information, commentary, and materials published on our Website are provided for
        informational purposes only and do not constitute investment advice. We disclaim all
        liability for reliance placed on such materials by visitors or third parties informed of
        their content.
      </p>
    </div>
  );
}

export function TermsCard7() {
  return (
    <div className="pt-6">
      <p className="text-base 2xl:text-xl text-white font_ternary">
        We aim to update our Website regularly and may change its content at any time. We may
        suspend access to our Website or close it indefinitely without prior notice. The material
        on the Website may be out of date at any time, and we are under no obligation to update it.
      </p>
    </div>
  );
}

export function TermsCard8() {
  return (
    <div className="pt-6">
      <p className="text-base 2xl:text-xl text-white font_ternary">
        All materials on our Website are provided without any guarantees, conditions, or warranties
        as to their accuracy. To the extent permitted by law, FlipTrade Group, its affiliates,
        employees, or service providers expressly exclude liability for any direct, indirect, or
        consequential loss or damage arising from your use of our Website, including but not
        limited to loss of income, business, profits, data, goodwill, business interruption, or
        damage caused by viruses or technical errors. This does not affect liability for death or
        personal injury resulting from negligence, or for fraudulent misrepresentation.
      </p>
    </div>
  );
}

export function TermsCard9() {
  return (
    <div className="pt-6">
      <p className="text-base 2xl:text-xl text-white font_ternary">
        We process your personal data in accordance with our Privacy Policy and Cookies Policy. By
        using our Website, you consent to such processing and warrant that all data you provide is
        accurate. Please review those policies to understand how your data is collected, used, and
        protected.
      </p>
    </div>
  );
}

export function TermsCard10() {
  return (
    <div className="pt-6">
      <p className="text-base 2xl:text-xl text-white font_ternary">
        Any contracts or transactions formed through our Website or resulting from visits made by
        you are governed by separate account or client agreements with FlipTrade Group. Please
        refer to the respective terms that apply to your account.
      </p>
    </div>
  );
}

export function TermsCard11() {
  return (
    <div className="pt-6">
      <p className="text-base 2xl:text-xl text-white font_ternary">
        Whenever you upload content or submit materials via our Website, you must ensure such
        content complies with our content standards. You warrant that your contribution does not:
      </p>
      <div className="ps-6 pt-2">
        {[
          "Contain defamatory, obscene, or offensive material.",
          "Promote violence, discrimination, or illegal activity.",
          "Infringe copyright or intellectual property rights of others.",
        ].map((t) => (
          <li key={t} className="text-base 2xl:text-lg text-white list-none pt-2">
            {t}
          </li>
        ))}
      </div>
      <p className="text-base 2xl:text-xl text-white font_ternary pt-4">
        Any material you upload will be considered non-confidential, and FlipTrade Group reserves
        the right to use, copy, or disclose it for any purpose. We may remove content or restrict
        access to materials that, in our view, violate these standards.
      </p>
    </div>
  );
}

export function TermsCard12() {
  return (
    <div className="pt-6">
      <p className="text-base 2xl:text-xl text-white font_ternary">
        From time to time, we may provide interactive features (such as chat or forums) and will
        inform users whether these services are moderated. However, we are under no obligation to
        monitor interactive features and accept no liability for any loss or damage arising from
        their use. FlipTrade Group does not permit use of its interactive services by minors (under
        18 years of age).
      </p>
    </div>
  );
}

export function TermsCard13() {
  return (
    <div className="pt-6">
      <p className="text-base 2xl:text-xl text-white font_ternary">
        You must not misuse our Website by introducing viruses, trojans, or other harmful
        software, or attempt to gain unauthorized access to the Website or related servers. We
        will report such breaches to relevant authorities and may disclose your identity if
        required by law. We are not liable for loss or damage caused by cyberattacks, malware, or
        other harmful content arising from your use of our Website or linked websites.
      </p>
    </div>
  );
}

export function TermsCard14() {
  return (
    <div className="pt-6">
      <p className="text-base 2xl:text-xl text-white font_ternary">
        We may suspend or terminate your access to the Website if we determine you have violated
        these Terms. Actions may include temporary or permanent suspension, removal of content,
        legal action for reimbursement of costs arising from the breach, and disclosure of
        information to law enforcement if necessary. We are not liable for any consequences arising
        from the enforcement of these actions.
      </p>
    </div>
  );
}

export function TermsCard15() {
  return (
    <div className="pt-6">
      <div className="ps-6">
        {[
          "You may link to our home page fairly and legally without damaging our reputation or implying endorsement.",
          "Do not establish links suggesting association without written consent.",
          "Do not use our company name, brand, or logo in a misleading manner.",
          "Do not create links from websites not owned by you.",
        ].map((t) => (
          <li key={t} className="text-base 2xl:text-lg text-white list-none pt-2">
            {t}
          </li>
        ))}
      </div>
      <p className="text-base 2xl:text-xl text-white font_ternary pt-4">
        We reserve the right to withdraw linking permission without notice.
      </p>
    </div>
  );
}

export function TermsCard16() {
  return (
    <div className="pt-6">
      <p className="text-base 2xl:text-xl text-white font_ternary">
        Our Website may contain links to external sites operated by third parties. These are
        provided for informational purposes only. We have no control over their content or data
        processing activities and accept no responsibility for any loss or damage arising from your
        use of them. You should review the privacy policies of any third-party sites you visit.
      </p>
    </div>
  );
}

export function TermsCard17() {
  return (
    <div className="pt-6">
      <p className="text-base 2xl:text-xl text-white font_ternary">
        All content on this Website, including text, images, graphics, and design, is owned or
        licensed by FlipTrade Group Limited. All trademarks, trade names, and logos displayed are
        the property of FlipTrade Group or their respective owners and may not be used without
        prior written consent.
      </p>
    </div>
  );
}

export function TermsCard18() {
  return (
    <div className="pt-6">
      <p className="text-base 2xl:text-xl text-white font_ternary">
        We may revise these Terms of Use at any time by updating this page. You are encouraged to
        review this page periodically to stay informed about changes, as they are binding upon you.
        Certain provisions may also be superseded by legal notices or terms published elsewhere on
        our Website.
      </p>
    </div>
  );
}

export function TermsCard19() {
  return (
    <div className="pt-6">
      <p className="text-base 2xl:text-xl text-white font_ternary">
        If you have any concerns about content that appears on our Website, please contact us at:
      </p>
      <p className="pt-2 text-base 2xl:text-xl text-primary">
        <a href="mailto:support@fliptradegroup.com" target="_blank">
            support@fliptradegroup.com
        </a>
      </p>
      <p className="text-base 2xl:text-xl text-white font_ternary pt-4">
        By accessing www.fliptradegroup.com and any associated pages, you acknowledge that you have
        read, understood, and agreed to be bound by these Terms of Use, the Privacy Policy, and the
        Cookies Policy.
      </p>
    </div>
  );
}

