import { SVGProps } from 'react';

const PlusIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" {...props}>
    <path stroke="#000" strokeLinecap="round" strokeWidth={2} d="M12 4.8v14.4m7.2-7.2H4.8" />
  </svg>
);

export default PlusIcon;
