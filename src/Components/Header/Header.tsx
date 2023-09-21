import LogoIcon from '@/Components/Icon/LogoIcon.tsx';

const Header = () => (
  <div className="w-full h-[64px] flex items-center px-[32px] border-b-[1px] border-[#C3CAD9] gap-[8px]">
    <LogoIcon />
    <span>Solaris</span>
  </div>
);

export default Header;
