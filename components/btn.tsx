import type { NextPage } from "next";
import { useCallback, Fragment, useState } from "react";
import { useRouter } from "next/router";
import { useAuth } from "../context/auth";
import { login, logout } from "@/lib/auth";

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

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.currentTarget.value);
  };
  const handleChangePhoneNumber = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPhonenumber(event.currentTarget.value);
  };
  const handleChangeUsername = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.currentTarget.value);
  };
  const handleChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.currentTarget.value);
  };

  const navigate = useRouter();

  const Register = (event: any) => {
    event.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
        navigate("/post");
      })
      .catch((error) => {
        alert(error.message);
        console.error(error);
      });
  };

  return (
    <div className="self-stretch rounded-3xs [background:linear-gradient(90deg,_#ac6aec,_#bb7ff5)] h-[647px] flex flex-col items-center justify-center py-2.5 px-10 box-border gap-[20px] text-left text-base text-white font-inter">
      <div className="self-stretch rounded-11xl bg-darkslateblue flex flex-row items-center justify-center py-4 px-0">
        <input
          className="[border:none] [outline:none] font-semibold font-inter text-base bg-[transparent] flex-1 relative text-silver text-center"
          placeholder="Mail Address"
          type="text"
          value={mailAddressValue}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            handleChangeEmail(event);
          }}
        />
      </div>
      <div className="self-stretch rounded-11xl bg-darkslateblue flex flex-row items-center justify-center py-4 px-0">
        <input
          className="[border:none] [outline:none] font-semibold font-inter text-base bg-[transparent] flex-1 relative text-silver text-center"
          placeholder="Phone Number"
          type="text"
          value={phoneNumberValue}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            handleChangePhoneNumber(event);
          }}
        />
      </div>
      <div className="self-stretch rounded-11xl bg-darkslateblue flex flex-row items-center justify-center py-4 px-0">
        <input
          className="[border:none] [outline:none] font-semibold font-inter text-base bg-[transparent] flex-1 relative text-silver text-center"
          placeholder="User Name"
          type="text"
          value={userNameValue}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            handleChangeUsername(event);
          }}
        />
      </div>
      <div className="self-stretch rounded-11xl bg-darkslateblue flex flex-row items-center justify-center py-4 px-0">
        <input
          className="[border:none] [outline:none] font-semibold font-inter text-base bg-[transparent] flex-1 relative text-silver text-center"
          placeholder="PassWord"
          type="text"
          value={passWordValue}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            handleChangePassword(event);
          }}
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
