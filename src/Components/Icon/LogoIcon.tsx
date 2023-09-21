import { SVGProps } from 'react';

const LogoIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg width="24" height="24" viewBox="0 0 715 560" fill="none" {...props}>
    <g clipPath="url(#a)">
      <path
        fill="url(#b)"
        d="M116.06 427.411a23.38 23.38 0 0 1 16.529-6.827H702.83c10.42 0 15.63 12.576 8.264 19.942L598.447 553.173A23.377 23.377 0 0 1 581.918 560H11.678c-10.42 0-15.63-12.576-8.264-19.942L116.06 427.411Z"
      />
      <path
        fill="url(#c)"
        d="M116.06 6.827C120.552 2.515 126.481 0 132.589 0H702.83c10.42 0 15.63 12.576 8.264 19.942L598.447 132.59a23.377 23.377 0 0 1-16.529 6.827H11.678c-10.42 0-15.63-12.576-8.264-19.942L116.06 6.827Z"
      />
      <path
        fill="url(#d)"
        d="M598.447 215.772a23.378 23.378 0 0 0-16.529-6.828H11.678c-10.42 0-15.63 12.577-8.264 19.943L116.06 341.534a23.383 23.383 0 0 0 16.529 6.827H702.83c10.42 0 15.63-12.577 8.264-19.943L598.447 215.772Z"
      />
    </g>
    <defs>
      <linearGradient id="b" x1={648.355} x2={253.703} y1={-67.292} y2={688.625} gradientUnits="userSpaceOnUse">
        <stop stopColor="#00FFA3" />
        <stop offset={1} stopColor="#DC1FFF" />
      </linearGradient>
      <linearGradient id="c" x1={475.792} x2={81.14} y1={-157.385} y2={598.533} gradientUnits="userSpaceOnUse">
        <stop stopColor="#00FFA3" />
        <stop offset={1} stopColor="#DC1FFF" />
      </linearGradient>
      <linearGradient id="d" x1={561.524} x2={166.872} y1={-112.625} y2={643.292} gradientUnits="userSpaceOnUse">
        <stop stopColor="#00FFA3" />
        <stop offset={1} stopColor="#DC1FFF" />
      </linearGradient>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h714.508v560H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default LogoIcon;
