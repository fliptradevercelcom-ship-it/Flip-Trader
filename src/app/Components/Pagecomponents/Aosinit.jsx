"use client";
import { useEffect } from "react";
import AOS from "aos";
import 'aos/dist/aos.css';
const Aosinit = () => {
  useEffect(() => {
    AOS.init({
      duration: 1300,
    });
  }, []);

  return null;
};

export default Aosinit;
