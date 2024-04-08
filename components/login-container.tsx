import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";

export type LoginContainerType = {
  userNameValue?: string;
  passWordValue?: string;
  loginYourAccount?: string;
  changeField?: string;
};

const LoginContainer: NextPage<LoginContainerType> = ({
  userNameValue,
  passWordValue,
  loginYourAccount,
  changeField,
}) => {
  const router = useRouter();

  const onFrameButton1Click = useCallback(() => {
    router.push("/desktop1");
  }, [router]);

  return (
    <div className="self-stretch rounded-3xs [background:linear-gradient(90deg,_#ac6aec,_#bb7ff5)] flex flex-col items-center justify-center py-[100px] px-10 gap-[20px] text-left text-base text-white font-inter">
      <div className="self-stretch rounded-11xl bg-darkslateblue flex flex-row items-center justify-center py-4 px-0">
        <input
          className="[border:none] [outline:none] font-semibold font-inter text-base bg-[transparent] flex-1 relative text-silver text-center"
          placeholder="User Name"
          type="text"
          value={userNameValue}
        />
      </div>
      <div className="self-stretch rounded-11xl bg-darkslateblue flex flex-row items-center justify-center py-4 px-0">
        <input
          className="[border:none] [outline:none] font-semibold font-inter text-base bg-[transparent] flex-1 relative text-silver text-center"
          placeholder="PassWord"
          type="text"
          value={passWordValue}
        />
      </div>
      <div className="self-stretch flex flex-row items-center justify-between py-0 px-1.5">
        <div className="flex flex-row items-center justify-center gap-[8px]">
          <input
            className="cursor-pointer m-0 w-5 relative rounded-[50%] bg-white h-5"
            checked={true}
            type="radio"
          />
          <div className="relative font-semibold">Remember Me</div>
        </div>
        <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-base font-semibold font-inter text-white text-left inline-block">
          Forget Password?
        </button>
      </div>
      <button className="cursor-pointer [border:none] py-6 px-0 bg-darkviolet self-stretch rounded-11xl flex flex-row items-center justify-center">
        <div className="relative text-base font-semibold font-inter text-white text-left">
          {loginYourAccount}
        </div>
      </button>
      <div className="self-stretch flex flex-row flex-wrap items-center justify-between py-0 px-2.5">
        <div className="relative font-semibold whitespace-pre-wrap">
          Don’t Have Account?
        </div>
        <button
          className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-row items-center justify-center border-b-[1px] border-solid border-white"
          onClick={onFrameButton1Click}
        >
          <div className="relative text-base font-extrabold font-inter text-white text-left">
            {changeField}
          </div>
        </button>
      </div>
    </div>
  );
};

export default LoginContainer;
