import React from "react";
import Telegramlogo from "../../public/videos/Telegramlogo.gif";
import Image from "next/image";
import Link from "next/link";
const Telegramlink = () => {
  return (
    <div className="cursor-pointer">
      <Link href={"https://t.me/fliptradegroup"} target="_blank">
        <Image
          src={Telegramlogo}
          alt="Telegramlogo"
          width={3000}
          height={500}
          className="max-w-[80px] md:max-w-[100px] object-cover"
        />
      </Link>
    </div>
  );
};

export default Telegramlink;
