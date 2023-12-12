import React from "react";

export const Logo = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M0 0V32L8.75787 23.2407V8.75934L0 0Z" fill="currentColor"></path>
      <path
        d="M15.9999 15.9824L11.621 11.621V31.9975L20.3788 23.2748L20.3788 11.621L15.9999 15.9824Z"
        fill="currentColor"
      ></path>
      <path
        d="M23.2421 8.74506V31.9989L32 23.2538V0L23.2421 8.74506Z"
        fill="currentColor"
      ></path>
    </svg>
  );
};
