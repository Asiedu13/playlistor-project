"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "../../firebase/config";

import { CustomBtn } from "./CustomBtn";
import { SubmitButton } from "./SubmitBtn";
import { TextInput } from "./TextInput";

import { getRedirectRes, signInWithGoogle } from "../../firebase/authFunctions";

export function SignUpForm() {
    const router = useRouter()
  const [createUserWithEmailAndPassword] =
      useCreateUserWithEmailAndPassword( auth );
    
    
    const handleSubmit = async ( e ) => {
        e.preventDefault();
        const target = e.target;
        try {
            const res = await createUserWithEmailAndPassword( target.email.value, target.password.value );
            sessionStorage.setItem( 'user', true );
            console.log( res );
            router.push( '/me' );
            
        } catch (e) {
            console.log( 'Error' );
        }
        
    }
    useEffect(() => {
      // Checking the google sign in after it returns from the redirected page
      async function checkForSignIn() {
        const res = await getRedirectRes();
        if (res?.token) {
          sessionStorage.setItem("user", true);
          router.push("/me");
        }
      }
      checkForSignIn();
    }, []);
  return (
    <section className="flex flex-col justify-center items-center h-screen">
      <h1 className="mb-[40px] font-semibold text-specifics">
        TubeLinkExtract.com
      </h1>
      <form onSubmit={handleSubmit} className="max-w-[100%] w-[440px] h-[519px] shadow-md rounded-2xl bg-[#fff] p-10 ">
        {/* Greetingd */}
        <header className="flex flex-col justify-center items-center ">
          <h1 className={` text-specifics text-3xl font-black mb-[16px]`}>
            Join us today
          </h1>
          <div id="a_bit_lost" className="flex justify-center items-center ">
            <p className="text-secondary text-sm ">
              Already on TubeLinkExtract.com?
            </p>
            <span>
              <Link
                href="/login"
                className="font-semibold text-sm flex justify-center items-center text-specifics"
              >
                {" "}
                &nbsp; Log in here
              </Link>
            </span>
          </div>
        </header>

        {/******* Sign in content ***********/}
        <section className="w-[97%] h-[364px] mt-[32px] ">
          {/* Signing in with google */}
          <Link
            href="##"
            onClick={(e) => {
              e.preventDefault();
              signInWithGoogle(); // Initiate the google sign up
            }}
          >
            <CustomBtn>
              <Image
                src="/imgs/googlelogo.svg"
                width={20}
                height={20}
                alt="Google logo"
              />{" "}
              &nbsp; Sign up with Google
            </CustomBtn>
          </Link>

          {/* or */}
          <div className=" flex items-center justify-around relative mb-[10px]">
            <div className="float-left w-[40%] mr-2">
              <hr />
            </div>
            <p className="text-[#808785]">or</p>
            <div className="float-right ml-2 w-[40%]">
              <hr />
            </div>
          </div>

          {/********* Sign in the traditional way ************/}
          <TextInput
            name="email"
            type="text"
            placeholder="johndoe@example.com"
            // onChange={handleChange}
            // value={userInfo.email}
          />
          <div>
            <TextInput
              name="password"
              type="password"
              // visible={visible}
              // onChange={handleChange}
              // value={userInfo.password}
            >
              <Image
                // src={visible ? '/imgs/eye-off.svg' : '/imgs/eye_icon.svg'}
                src="/imgs/eye-off.svg"
                alt="show hidden password icon"
                width={20}
                height={10}
                // onClick={() => setVisible(!visible)}
              />
            </TextInput>
          </div>

          <Link
            href="/forgot"
            className="ml-[55%] font-semibold text-sm md:ml-[65%]"
          >
            Forgot password?
          </Link>

          <SubmitButton
          //onSubmit={handleSubmit}
          >
            Sign in
          </SubmitButton>
        </section>
      </form>
    </section>
  );
}
