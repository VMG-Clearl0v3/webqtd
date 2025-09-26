'use client';

import { useState, useEffect } from 'react';
import { Phone } from 'lucide-react';

export default function CallButton() {
  const [isMobile, setIsMobile] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const phoneNumbers = [
    { number: '02293 864 329', label: 'Hotline' },
    { number: '0977 676 359', label: 'Mr.Thức' },
    { number: '0913 767 574', label: 'Ms.Mai' },
  ];

  return (
    <div className="fixed top-1/2 right-4 -translate-y-1/2 z-50">
      <div className={`relative flex items-center ${!isMobile && 'group'}`}>
        {/* List số điện thoại */}
        <div
          className={`
            absolute right-full mr-3 flex flex-col items-end gap-2 origin-right
            transition-all duration-300 ease-out
            ${
              (isMobile && open)
                ? 'opacity-100 scale-100 translate-x-0 pointer-events-auto'
                : (!isMobile
                    ? 'opacity-0 scale-90 translate-x-3 pointer-events-none group-hover:opacity-100 group-hover:scale-100 group-hover:translate-x-0 group-hover:pointer-events-auto'
                    : 'opacity-0 scale-90 translate-x-3 pointer-events-none')
            }
          `}
        >
            {phoneNumbers.map((item) => (
            <a
            key={`${item.number}-${item.label}`} // key duy nhất
            href={`tel:${item.number.replace(/\s/g, '')}`}
            className="
            bg-[#2aa1d3] text-white rounded-full shadow
            hover:bg-[#1e87b5] 
            active:scale-95 active:shadow-inner   /* hiệu ứng click */
            px-4 py-2 text-sm font-medium
            inline-flex justify-between items-center
            min-w-[220px] transition-all duration-200 ease-out
            "
            >
            <span>{item.number}</span>
            <span className="font-semibold">{item.label}</span>
            </a>
            ))}
        </div>

        {/* Nút gọi */}
        <button
          aria-label="Call"
          onClick={() => isMobile && setOpen(!open)}
          className="
            relative bg-[#00377B] text-white p-3 rounded-full shadow-lg 
            hover:bg-[#0050aa] transition flex items-center justify-center 
            ring-animation
          "
        >
          {/* ripple effect */}
          <div className="ripple-wrapper">
            <span className="ripple-circle"></span>
            <span className="ripple-circle"></span>
            <span className="ripple-circle"></span>
          </div>
          <Phone size={24} />
        </button>
      </div>
    </div>
  );
}