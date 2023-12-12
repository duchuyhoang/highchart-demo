import React from "react";

export const ArrowDown = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      focusable="false"
      aria-hidden="true"
      viewBox="0 0 24 24"
      data-testid="ArrowDropDownIcon"
      {...props}
    >
      <path d="m7 10 5 5 5-5z"></path>
    </svg>
  );
};
