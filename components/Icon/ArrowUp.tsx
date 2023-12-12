import React from "react";

export const ArrowUp = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      focusable="false"
      aria-hidden="true"
      viewBox="0 0 24 24"
      data-testid="ArrowDropUpIcon"
      {...props}
    >
      <path d="m7 14 5-5 5 5z"></path>
    </svg>
  );
};
