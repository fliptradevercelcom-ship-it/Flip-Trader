"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import popupcoin from "../../../public/icons/popupcoin.svg";
import Image from "next/image";
const Promoform = () => {
  const [nameerror, setNameError] = useState("");
  const [emailerror, setEmailError] = useState("");
  const [phonenumbererror, setphonenumberError] = useState("");
  const [loading, setLoading] = useState(false);
  const [formdata, setFormdata] = useState({
    name: "",
    email: "",
    phonenumber: ""
  });
  const handleChange = e => {
    const { name, value } = e.target;
    setFormdata({ ...formdata, [name]: value });

    formdata.name === ""
      ? setNameError("")
      : formdata.email === ""
        ? setEmailError("")
        : formdata.phonenumber === "" ? setphonenumberError("") : null;
  };
  const router = useRouter();
  const errorhandle = () => {
    setNameError("");
    setEmailError("");
    setphonenumberError("");

    if (formdata.name === "") {
      setNameError("Enter Your name First");
    }

    if (formdata.email === "") {
      setEmailError("Enter Your Email Here");
    } else if (!formdata.email.includes("@") || !formdata.email.includes(".")) {
      setEmailError("Enter Your Valid Email with @ and .");
    }

    if (formdata.phonenumber === "") {
      setphonenumberError("Enter Your Phonenumber");
    }
  };
  const handlesubmit = async () => {
    errorhandle();

    const isValidEmail =
      formdata.email.includes("@") && formdata.email.includes(".");

    if (
      formdata.name &&
      formdata.email &&
      isValidEmail &&
      formdata.phonenumber
    ) {
      setLoading(true);
      try {
        const res = await fetch("/api/promo", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: formdata.name,
            email: formdata.email,
            phonenumber: formdata.phonenumber
          })
        });

        const data = await res.json();

        if (data.ok) {
          router.push("/thank-you");
          setFormdata({
            name: "",
            email: "",
            phonenumber: ""
          });
        } else {
          console.error("Email error:", data.error);
        }
      } catch (err) {
        console.error("Fetch error:", err);
        setLoading(false);
      } finally {
        setLoading(false);
      }
    }
  };


  return (
    <div className="max-w-[530px] bg-white p-3   lg:p-6 rounded-[38px] lg:rounded-[58px] w-full relative">
      {/* <form action=""> */}
      <div>
        <div className="font_ternary px-2 py-5   lg:py-7 ">
          <div className=" text-start">
            <div className="text-lg lg:text-[21px] text-primary font-[350]">
              Your Name <span className="text-red-500">*</span>
            </div>
            <input
              type="text"
              name="name"
              id=""
              value={formdata.name}
              onChange={handleChange}
              placeholder="Enter Your Name"
              className={`outline-none border-[3px] border-[#D8D8FF80] border-solid text-base lg:text-lg text-primary px-3 md:px-6 py-2 rounded-[10px] md:rounded-[40px] w-full bg-[#D8D8FF80] mt-4`}
              data-np-intersection-state="visible"
            />
            {nameerror === ""
              ? null
              : <span className="text-red-500 text-[14px] ml-[1rem]">
                  {nameerror}
                </span>}
          </div>
          <div className="pt-3 text-start">
            <div className="text-lg lg:text-[21px] text-primary font-[350]">
              Phonenumber Here <span className="text-red-500">*</span>
            </div>
            <input
              name="phonenumber"
              type="number"
              id=""
              value={formdata.phonenumber}
              onChange={handleChange}
              placeholder="phonenumber"
              className="outline-none border-[3px] border-[#D8D8FF80] border-solid text-base lg:text-lg text-primary px-3 md:px-6 py-2 rounded-[10px] md:rounded-[40px] w-full bg-[#D8D8FF80] mt-4 "
              data-np-intersection-state="visible"
            />
            {phonenumbererror === ""
              ? null
              : <span className="text-red-500 text-[14px] ml-[1rem]">
                  {phonenumbererror}
                </span>}
          </div>
          <div className="pt-3 text-start">
            <div className="text-lg lg:text-[21px] text-primary font-[350]">
              Email <span className="text-red-500">*</span>
            </div>
            <input
              type="email"
              name="email"
              id=""
              value={formdata.email}
              onChange={handleChange}
              placeholder="Enter Your Email"
              className="outline-none border-[3px] border-[#D8D8FF80] border-solid text-base lg:text-lg text-primary px-3 md:px-6 py-2 rounded-[10px] md:rounded-[40px] w-full bg-[#D8D8FF80] mt-4"
              data-np-intersection-state="visible"
            />
            {emailerror === ""
              ? null
              : <span className="text-red-500 text-[14px] ml-[1rem]">
                  {emailerror}
                </span>}
          </div>
          
        </div>
        <div className="flex justify-center">
          <div className=" flex gap-4 bg-primary w-max px-4 2xl:px-6 items-center rounded-full py-3 relative mt-2 cursor-pointer popup_scale">
            <Image
              src={popupcoin}
              alt="popupcoin"
              width={1000}
              height={500}
              className="w-[60px] absolute -left-2"
            />
            <span className={`text-base 2xl:text-lg font-light font_ternary text-do aos-init aos-animate underline ps-[40px] ${loading ? "cursor-not-allowed opacity-70" : "cursor-pointer"} `} 
              onClick={!loading ? handlesubmit : undefined}
            >
              {loading ? 'Loading' : ' Claim $500 Bonus Now!'} 
            </span>
          </div>
        </div>
      </div>

      {/* </form> */}
    </div>
  );
};

export default Promoform;
