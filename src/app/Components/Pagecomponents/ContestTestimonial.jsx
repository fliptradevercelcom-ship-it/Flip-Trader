'use client'
import React, { useState } from 'react'
import TestimonialCard from '../Uiux/TestimonialCard'
import Title from '../Uiux/Title'
import Button from '../Uiux/Button';
const testimonials = [
  // ===== ROW 1 : Western + Arabic (4) =====
  {
    id: 1,
    person_name: "Daniel Smith",
    review:
      "The tight spreads are excellent. Trade execution is fast and reliable even during volatile market conditions.",
    rating_start: 5,
  },
  {
    id: 2,
    person_name: "Emily Carter",
    review:
      "Very competitive spreads. Perfect platform for active traders who value speed and precision.",
    rating_start: 5,
  },
  {
    id: 3,
    person_name: "Ahmed Al-Farsi",
    review:
      "Low spreads and fast execution make trading stress-free and highly efficient overall.",
    rating_start: 4,
  },
  {
    id: 4,
    person_name: "Omar Hassan",
    review:
      "Contest trading is professionally managed and very transparent with clearly defined rules.",
    rating_start: 5,
  },

  // ===== ROW 2 : Western + Arabic + 1 Indian (4) =====
  {
    id: 5,
    person_name: "Michael Johnson",
    review:
      "Contest trading is exciting and fair. The structure is well designed and easy to follow.",
    rating_start: 5,
  },
  {
    id: 6,
    person_name: "Sarah Williams",
    review:
      "Clean interface and reliable performance. A very professional platform for serious traders.",
    rating_start: 5,
  },
  {
    id: 7,
    person_name: "Fatima Al-Zahra",
    review:
      "Social trading feature helped me learn from experienced traders and improve consistency.",
    rating_start: 5,
  },
  {
    id: 8,
    person_name: "Rahul Sharma",
    review:
      "Tight spreads ki wajah se trading experience kaafi smooth raha aur execution fast mila.",
    rating_start: 5,
  },

  // ===== ROW 3 & BELOW : MIXED RANDOM =====
  {
    id: 9,
    person_name: "Arjun Mehta",
    review:
      "Contest trading ka experience engaging tha aur rewards system kaafi transparent laga.",
    rating_start: 4,
  },
  {
    id: 10,
    person_name: "Lucas Martin",
    review:
      "Smooth onboarding and premium feel. Everything works as expected without any confusion.",
    rating_start: 5,
  },
  {
    id: 11,
    person_name: "Kunal Singh",
    review:
      "Social trading beginners ke liye best hai aur learning kaafi smooth thi overall.",
    rating_start: 4,
  },
  {
    id: 12,
    person_name: "Neha Verma",
    review:
      "Beginners ke liye process simple aur easy hai with clear step-by-step guidance.",
    rating_start: 4,
  },
  {
    id: 13,
    person_name: "Jessica Brown",
    review:
      "Fast, intuitive, and well designed platform that feels reliable and modern.",
    rating_start: 5,
  },
  {
    id: 14,
    person_name: "Yusuf Khalid",
    review:
      "Platform feels secure and execution speed is impressive even during high activity.",
    rating_start: 4,
  },
  {
    id: 15,
    person_name: "Ankit Thakur",
    review:
      "Overall experience kaafi smooth raha. Support team responsive aur helpful thi.",
    rating_start: 5,
  },
  {
    id: 16,
    person_name: "Zaid Al-Harbi",
    review:
      "Clear process and reliable results. Trading experience has been very positive so far.",
    rating_start: 4,
  },
];


const ContestTestimonial = () => {
    const [showitem, setShowitem] = useState(8)
    const handelshowmore = () => {
        setShowitem(showitem + 4)
    }
    return (
        <div>
            <div className="inn_container pb-12">
                <div className="text-center">
                    <Title
                        title={'Clients Testimonial'}
                        color={'text-white'}
                    />
                </div>
                <div className='pt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-8'>
                    {
                        testimonials.slice(0, showitem).map((data) => (
                            <div className='h-full' key={data.id}>
                                <TestimonialCard
                                    id={data.id}
                                    person_name={data.person_name}
                                    review={data.review}
                                    rating_start={data.rating_start}
                                />
                            </div>
                        ))
                    }
                </div>
                {
                    showitem < testimonials.length && (
                        <div className='pt-6 text-center'>
                            <span className='text-white cursor-pointer ' onClick={handelshowmore}>
                                <Button
                                  btn_name={'Load More...'}
                                  btn_bg={'bg-white'}
                                  border_color={'border-white'}
                                  text_color={'text-black'}
                                  />
                            </span>
                        </div>
                    )
                }

            </div>

        </div>
    )
}

export default ContestTestimonial
