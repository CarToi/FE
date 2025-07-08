import Image from "next/image";
import Logo from "@/assets/icons/logo.png";
import LogoDev from "@/assets/icons/logo_dev.png";
import LogoKR from "@/assets/icons/logo_kr.png";

export default function SideBar() {
  return (
    <div className="flex flex-col justify-between items-center w-[72px] h-screen overflow-hidden pt-[13px] border-r-1 border-[#EEEFF2] bg-[#FFFFFF]">
      <Image src={Logo} alt="" width={40} height={50} />
      <div className="flex flex-col justify-between items-center gap-[24px] py-[40px]">
        <Image src={LogoDev} alt="" width={32} height={32} />
        <Image src={LogoKR} alt="" width={32} height={32} />
      </div>
    </div>
  );
}
