import { SVGProps } from 'react';

const DeleteIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" {...props}>
    <path
      stroke="#FF3232"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M2.4 5.4h19.2M8.4 1.8h7.2m-6 15.6v-7.2m4.8 7.2v-7.2m1.8 12H7.8a2.4 2.4 0 0 1-2.4-2.4L4.852 6.65A1.2 1.2 0 0 1 6.051 5.4h11.898a1.2 1.2 0 0 1 1.199 1.25L18.6 19.8a2.4 2.4 0 0 1-2.4 2.4Z"
    />
  </svg>
);

export default DeleteIcon;
