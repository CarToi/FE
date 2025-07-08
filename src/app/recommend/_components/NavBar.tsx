import Image from "next/image";
import Logo from "@/assets/icons/logo.png";
import LogoDev from "@/assets/icons/logo_dev.png";
import LogoKR from "@/assets/icons/logo_kr.png";

export default function NavBar() {
  return (
    <div className="flex h-12 w-screen items-center justify-between overflow-hidden border-r-1 border-[#EEEFF2] bg-[#FFFFFF] pt-[13px] sm:h-screen sm:w-[72px] sm:flex-col">
      <Image
        src={Logo}
        className="h-[30px] w-6 sm:h-[50px] sm:w-10"
        alt="새길 로고"
      />
      <div className="hidden flex-col items-center justify-between gap-6 py-10 sm:flex">
        <Image src={LogoDev} width={32} height={32} alt="새만금 개발청" />
        <Image src={LogoKR} width={48} height={25} alt="새만금 사업단" />
      </div>
    </div>
  );
}
