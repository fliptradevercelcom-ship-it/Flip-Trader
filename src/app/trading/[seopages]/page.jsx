import Seopage from "./Seopage";
import { seopagedata } from "../../Data/Seopagesdata";

export function generateMetadata({ params }) {
  const slug = params.seopages;

  const currentData = seopagedata.find(item => item.pageslug === slug);


  return {
    title:
      currentData?.metatitle ||
      "Best Forex & Multi-Asset Trading Platform | FlipTrade Group",
    description:
      currentData?.metadescription ||
      "Trade forex, stocks, cryptos, commodities & metals with FlipTrade — low spreads, fast execution, secure platform. Start your trading journey today."
  };
}

export default function Page({ params }) {
  return <Seopage />;
}
