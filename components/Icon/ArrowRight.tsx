import React from "react";

export const ArrowRight = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M2.5 15.8332L6.25 9.99984L2.5 4.1665L12.5 4.1665C12.7778 4.1665 13.0382 4.229 13.2812 4.354C13.5243 4.479 13.7222 4.65262 13.875 4.87484L17.5 9.99984L13.875 15.1248C13.7222 15.3471 13.5243 15.5207 13.2812 15.6457C13.0382 15.7707 12.7778 15.8332 12.5 15.8332L2.5 15.8332ZM5.54167 14.1665L12.5 14.1665L15.4583 9.99984L12.5 5.83317L5.54167 5.83317L8.25 9.99984L5.54167 14.1665Z"
        fill="currentColor"
      ></path>
    </svg>
  );
};
