import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";

export type BtnType = {
  mailAddressValue?: string;
  phoneNumberValue?: string;
  userNameValue?: string;
  passWordValue?: string;
  createYourAccount?: string;
  changeField?: string;
};

const Btn: NextPage<BtnType> = ({
  mailAddressValue,
  phoneNumberValue,
  userNameValue,
  passWordValue,
  createYourAccount,
  changeField,
}) => {
  const router = useRouter();

  const onFrameContainerClick = useCallback(() => {
    router.push("/");
  }, [router]);

  return (
    <div className="self-stretch rounded-3xs [background:linear-gradient(90deg,_#ac6aec,_#bb7ff5)] h-[647px] flex flex-col items-center justify-center py-2.5 px-10 box-border gap-[20px] text-left text-base text-white font-inter">
      <div className="self-stretch rounded-11xl bg-darkslateblue flex flex-row items-center justify-center py-4 px-0">
        <input
          className="[border:none] [outline:none] font-semibold font-inter text-base bg-[transparent] flex-1 relative text-silver text-center"
          placeholder="Mail Address"
          type="text"
          value={mailAddressValue}
        />
      </div>
      <div className="self-stretch rounded-11xl bg-darkslateblue flex flex-row items-center justify-center py-4 px-0">
        <input
          className="[border:none] [outline:none] font-semibold font-inter text-base bg-[transparent] flex-1 relative text-silver text-center"
          placeholder="Phone Number"
          type="text"
          value={phoneNumberValue}
        />
      </div>
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
      <div className="self-stretch rounded-11xl bg-darkviolet flex flex-row items-center justify-center py-6 px-0">
        <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-base font-semibold font-inter text-white text-left inline-block">
          {createYourAccount}
        </button>
      </div>
      <div className="self-stretch flex flex-row flex-wrap items-center justify-between py-0 px-2.5">
        <div className="relative font-semibold">Already Have Account?</div>
        <div
          className="flex flex-row items-center justify-center cursor-pointer border-b-[1px] border-solid border-white"
          onClick={onFrameContainerClick}
        >
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-base font-extrabold font-inter text-white text-left inline-block">
            {changeField}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Btn;
