"use client";
import React, { useState } from "react";
import clickring from "../../../../public/icons/clickring.svg";
import clickcheck from "../../../../public/icons/clickcheck.svg";
import firebtnicon from "../../../../public/icons/firebtnicon.svg";
import Image from "next/image";
import Button from "../Uiux/Button";
import { useRouter } from "next/navigation";

const Enrolform = () => {
  const router = useRouter();

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phonenumber: "",
    experience: "",
    learn: [],
    sessionType: "",
    message: "",
  });

  const learnOptions = [
    "Forex",
    "CFDs",
    "Technical Analysis",
    "Risk Management",
    "MT5",
    "Crypto",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleLearnChange = (option) => {
    const updatedLearn = formData.learn.includes(option)
      ? formData.learn.filter((item) => item !== option)
      : [...formData.learn, option];
    setFormData({ ...formData, learn: updatedLearn });
  };

  const handleSessionChange = (e) => {
    setFormData({ ...formData, sessionType: e.target.value });
  };

  const validate = () => {
    const tempErrors = {};

    if (!formData.name.trim()) tempErrors.name = "Enter Your Name";
    if (!formData.email.trim()) tempErrors.email = "Enter Your Email";
    else if (!formData.email.includes("@") || !formData.email.includes("."))
      tempErrors.email = "Enter a valid Email with @ and .";

    if (!formData.phonenumber) tempErrors.phonenumber = "Enter Phone Number";
    if (!formData.experience.trim()) tempErrors.experience = "Enter Experience";

    setErrors(tempErrors);

    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (!validate()) return;

    setLoading(true);
    try {
      const res = await fetch("/api/enroll", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (data.ok) {
        router.push("/thank-you");
        setFormData({
          name: "",
          email: "",
          phonenumber: "",
          experience: "",
          learn: [],
          sessionType: "",
          message: "",
        });
      } else {
        console.error("Error:", data.error);
      }
    } catch (err) {
      console.error("Fetch Error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white w-full p-6 md:p-10 rounded-2xl md:rounded-4xl">
      <div className="grid md:grid-cols-2 gap-5">
        {/* Name */}
        <div className="flex flex-col gap-2">
          <label className="text-primary text-lg">Full Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="bg-[#C3C3C3] outline-none border-none text-xl font_ternary px-4 py-3 rounded-[10px] text-secondary"
          />
          {errors.name && (
            <span className="text-red-500 text-[14px]">{errors.name}</span>
          )}
        </div>

        {/* Email */}
        <div className="flex flex-col gap-2">
          <label className="text-primary text-lg">Email Address</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="bg-[#C3C3C3] outline-none border-none text-xl font_ternary px-4 py-3 rounded-[10px] text-secondary"
          />
          {errors.email && (
            <span className="text-red-500 text-[14px]">{errors.email}</span>
          )}
        </div>

        {/* Phone Number */}
        <div className="flex flex-col gap-2">
          <label className="text-primary text-lg">Phone Number</label>
          <input
            type="number"
            name="phonenumber"
            value={formData.phonenumber}
            onChange={handleChange}
            className="bg-[#C3C3C3] outline-none border-none text-xl font_ternary px-4 py-3 rounded-[10px] text-secondary"
          />
          {errors.phonenumber && (
            <span className="text-red-500 text-[14px]">{errors.phonenumber}</span>
          )}
        </div>

        {/* Experience */}
        <div className="flex flex-col gap-2">
          <label className="text-primary text-lg">Experience Level</label>
          <input
            type="text"
            name="experience"
            value={formData.experience}
            onChange={handleChange}
            className="bg-[#C3C3C3] outline-none border-none text-xl font_ternary px-4 py-3 rounded-[10px] text-secondary"
          />
          {errors.experience && (
            <span className="text-red-500 text-[14px]">{errors.experience}</span>
          )}
        </div>
      </div>

      {/* What Do You Want to Learn */}
      <div className="pt-4">
        <label className="text-primary text-lg">What Do You Want to Learn?</label>
        <div className="grid md:grid-cols-2 2xl:grid-cols-3 gap-5 pt-4">
          {learnOptions.map((option) => (
            <div
              key={option}
              className="flex items-center gap-3 cursor-pointer"
              onClick={() => handleLearnChange(option)}
            >
              <Image
                src={formData.learn.includes(option) ? clickcheck : clickring}
                alt=""
                width={17}
                height={17}
              />
              <span className="text-secondary text-lg">{option}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Preferred Learning Mode */}
      <div className="pt-4">
        <label className="text-primary text-lg">Preferred Learning Mode</label>
        <div className="flex flex-wrap gap-5 pt-4">
          {["Live Sessions", "Recorded Lessons", "Both"].map((mode) => (
            <div key={mode} className="flex items-center gap-3">
              <input
                type="radio"
                name="sessionType"
                value={mode}
                checked={formData.sessionType === mode}
                onChange={handleSessionChange}
                className="w-5 h-5 accent-primary cursor-pointer"
              />
              <label className="text-secondary text-lg cursor-pointer">{mode}</label>
            </div>
          ))}
        </div>
      </div>

      {/* Message */}
      <div className="pt-4">
        <label className="text-primary text-lg">Message or Questions (Optional)</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell us about..."
          className="bg-[#C3C3C3] min-h-[150px] w-full outline-none border-none text-xl font_ternary px-4 py-3 rounded-[10px] text-secondary mt-2"
        />
      </div>

      {/* Submit Button */}
      <div className="m-auto w-max pt-8">
        <div
          className={loading ? "cursor-not-allowed opacity-70" : "cursor-pointer"}
          onClick={!loading ? handleSubmit : undefined}
        >
          <Button
            btn_name={loading ? "Loading..." : "Enrol Now"}
            btn_bg="bg-primary"
            text_color="text-white"
            border_color="border-primary"
            icon={firebtnicon}
            shadow={true}
          />
        </div>
      </div>
    </div>
  );
};

export default Enrolform;
