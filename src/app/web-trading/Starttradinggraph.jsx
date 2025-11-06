
'use client';

import React from 'react';

export default function Starttradinggraph() {
  return (
    <div className='bg-black inn_container m-auto'>
      <iframe
        src="https://webtrading.fliptradegroup.com/terminal"
        frameBorder="0"
        allow="fullscreen; clipboard-read; clipboard-write"
        scrolling="yes"
        width='100%'
        height='700'
        loading="lazy"
        style={{
          border: '1px solid #ccc',
          borderRadius: '10px',
          boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
          overflow: 'auto',
        }}
      ></iframe>
    </div>
  );
}
    