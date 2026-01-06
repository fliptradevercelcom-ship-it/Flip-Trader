import React from 'react';
import ContestTestimonial from '../Components/Pagecomponents/ContestTestimonial';
import Reviewshowcase from '../Components/Pagecomponents/Reviewshowcase';
import Reviewbanner from '../Components/Pagecomponents/Reviewbanner';
import ReviewpageBanner from '../Components/Pagecomponents/ReviewpageBanner';
import Reviewcontent from '../Components/Pagecomponents/Reviewcontent';

const page = () => {
  return (
    <div>
      {/* <Wikifxreview /> */}
      <Reviewbanner />
      <Reviewcontent />
      <Reviewshowcase />
      <ContestTestimonial />
    </div>
  )
}

export default page
