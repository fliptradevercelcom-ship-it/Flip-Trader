"use client";
import React, { useEffect, useState } from "react";
import { seopagedata } from "../../Data/Seopagesdata";
import { usePathname, useRouter } from "next/navigation";
import Seobanner from "../../Components/seopages/Seobanner";
import Seowhychoose from "../../Components/seopages/Seowhychoose";
import Seobestplatform from "../../Components/seopages/Seobestplatform";
import Forextradinglegal from "../../Components/seopages/Forextradinglegal";
import Advantageforextrading from "../../Components/seopages/Advantageforextrading";
import Tradingmarket from "../../Components/seopages/Tradingmarket";
import Howstart from "../../Components/seopages/Howstart";
import Loader from "../../Components/Uiux/Loader";
import Enddescription from "../../Components/seopages/Enddescription";
import Title from "../../Components/Uiux/Title";
import Faq from "../../Components/Pagecomponents/Faq";

const Seopage = () => {
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const currentpath = pathname.split("/").pop();
  const currentdagedata = seopagedata.find(
    item => item.pageslug === currentpath
  );

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted && !currentdagedata) {
      const timer = setTimeout(() => {
        router.push("/404");
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [mounted, currentdagedata, router]);

  if (!mounted) return null;

  return (
    <div>
      {!currentdagedata ? (
        <Loader />
      ) : (
        <>
          <Seobanner
            title={currentdagedata.bannertitle}
            description={currentdagedata.bannerdescription}
          />
          <Seowhychoose
            title={currentdagedata.whychoosetitle}
            carddata={currentdagedata.whychoosecarddata}
          />
          <Seobestplatform
            title={currentdagedata.platfromtitle}
            description={currentdagedata.platfromdescription}
            platyformdata={currentdagedata.platfromcarddata}
          />
          <Forextradinglegal
            title={currentdagedata.legaltitle}
            description1={currentdagedata.legaldescription1}
            tradeInfo={currentdagedata.legalbardata}
            description2={currentdagedata.legaldescription2}
          />
          <Advantageforextrading
            title={currentdagedata.advantagetitle}
            advantageforextrading={currentdagedata.advantagecarddata}
          />
          <Tradingmarket />
          <Howstart
            title={currentdagedata.howtitle}
            description={currentdagedata.howdescription}
            howstartstepdata={currentdagedata.howstartstepdata}
          />
          <Enddescription
            title={currentdagedata.endtitle}
            despription={currentdagedata.enddescription}
          />
          <div className=" bg-theme">
            <div className="inn_container pt-12 pb-16">
              <div className="text-center">
                <Title
                  title={"Frequently Asked <br/> Questions"}
                  color={"text-white"}
                />
              </div>
              <div className="pt-8">
                <Faq faqData={currentdagedata.faqdata} />
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Seopage;
