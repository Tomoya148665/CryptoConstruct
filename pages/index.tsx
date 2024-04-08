import type { NextPage } from "next";
import LoginContainer from "../components/login-container";

const Desktop: NextPage = () => {
  return (
    <div className="w-full relative bg-darkslategray h-[882px] overflow-hidden flex flex-col items-start justify-start py-[35px] px-0 box-border gap-[17px] text-left text-15xl text-white font-inter">
      <div className="self-stretch flex flex-row items-start justify-start py-0 px-6 gap-[28px]">
        <img className="w-[42px] relative h-[46px]" alt="" src="/logo.svg" />
        <div className="relative">CryptoConstruct</div>
      </div>
      <div className="self-stretch flex-1 flex flex-row items-center justify-start gap-[17px] text-center">
        <img
          className="flex-1 relative max-w-full overflow-hidden h-[475px] object-cover mq1000:hidden"
          alt=""
          src="/image-2@2x.png"
        />
        <div className="flex-1 flex flex-col items-center justify-start py-0 px-[30px] gap-[61px]">
          <div className="self-stretch relative">Login your Account</div>
          <LoginContainer
            loginYourAccount="Login your Account"
            changeField="Create Account"
          />
        </div>
      </div>
    </div>
  );
};

export default Desktop;
