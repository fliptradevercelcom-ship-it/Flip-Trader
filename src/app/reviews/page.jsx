import React from 'react';
import ContestTestimonial from '../Components/Pagecomponents/ContestTestimonial';
import Reviewshowcase from '../Components/Pagecomponents/Reviewshowcase';
import Wikifxreview from '../Components/Pagecomponents/Wikifxreview';

const page = () => {
  return (
    <div>
      <Wikifxreview />
      <Reviewshowcase />
      <ContestTestimonial />
    </div>
  )
}

export default page
