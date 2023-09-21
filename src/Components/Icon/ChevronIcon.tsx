import { SVGProps } from 'react';

const ChevronIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg width="24" height="24" viewBox="0 0 30 30" fill="none" {...props}>
    <path
      fill="#C3CAD9"
      fillRule="evenodd"
      d="m12.293 18.962 3.88-3.88-3.88-3.88a.996.996 0 0 1 0-1.41.996.996 0 0 1 1.41 0l4.59 4.59c.39.39.39 1.02 0 1.41l-4.59 4.59a.996.996 0 0 1-1.41 0c-.38-.39-.39-1.03 0-1.42Z"
      clipRule="evenodd"
    />
  </svg>
);
export default ChevronIcon;
