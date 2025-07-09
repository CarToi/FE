import Image from "next/image";
import Logo from "../../../../public/logo/logo_simple.svg";
import LogoDev from "../../../../public/logo/logo_dev.png";
import LogoKR from "../../../../public/logo/logo_kr.png";

export default function NavBar() {
  return (
    <div className="pointer-events-auto flex h-10 w-screen items-center border-r-1 border-[#EEEFF2] bg-white px-5 sm:h-screen sm:w-[72px] sm:flex-col sm:justify-between sm:px-0 sm:py-4">
      <Image src={Logo} className="size-6 sm:size-10" alt="새길 로고" />
      <div className="hidden flex-col items-center justify-between gap-6 py-10 sm:flex">
        <Image src={LogoDev} width={32} height={32} alt=" 새만금 개발청" />
        <Image src={LogoKR} width={48} height={25} alt="새만금 사업단" />
      </div>
    </div>
  );
}
