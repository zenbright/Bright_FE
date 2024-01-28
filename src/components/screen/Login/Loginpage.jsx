import React from "react";
import ButtonText from "../../general/buttonText";
import { useState } from "react";
import { BsSlashLg } from "react-icons/bs";


const Loginpage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    return (
        <body> 
            <div class="min-h-screen">
                <header class="bg-gradient-to-br from-red-200 via-red-300 to-yellow-200">
                    <nav class="h-14 flex justify-between items-center w-[92%]  mx-auto">
                        <div>
                            <div class="w-20 font-medium text-sm cursor-pointer">
                                <ButtonText title={"Bright F.E"}
                                            shape="rounded"
                                            width="80px"
                                            height="28px"
                                            textColor={"text-black"}
                                ></ButtonText>
                            </div> 
                        </div>
                        <div class="nav-links duration-500 md:static absolute  
                                    md:min-h-fit min-h-[60vh] left-0 top-[-100%] md:w-auto  
                                    w-full flex items-center px-5">
                            <ul class="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8">
                                <li>
                                    <a class="hover:text-gray-500 font-medium text-sm " href="#">Products</a>
                                </li>
                                <li>
                                    <a class="hover:text-gray-500 font-medium text-sm" href="#">Resource</a>
                                </li>
                                <li>
                                    <a class="hover:text-gray-500 font-medium text-sm" href="#">Support</a>
                                </li>
                                <li>
                                    <a class="hover:text-gray-500 font-medium text-sm" href="#">Pricing</a>
                                </li>
                                <li>
                                    <a class="hover:text-gray-500 font-medium text-sm" href="#">Blog</a>
                                </li>
                            </ul>
                        </div>
                        <div class="flex items-center gap-6 font-medium text-sm">
                            <ButtonText title={"Sign Up"}
                                        shape="rounded"
                                        width="56px"
                                        height="28px"
                                        textColor={"text-black"}
                            ></ButtonText>
                        </div>
                    </nav>
                </header>
                <div class="container mt-16 mx-auto">
                    <h1 class="text-3xl font-bold text-center">Login to Your Account</h1>
                    <div class="flex flex-col lg:flex-row w-10/12 lg:w-8/12 mx-auto ">
                        <div class="w-full lg:w-1/2 py-16 px-12 flex flex-col items-center justify-center">
                            <div class="font-medium text-sm flex-auto h-14 w-64 mb-2 bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 p-0.5 rounded-md">
                                <input  type="email" 
                                        placeholder="Account email" 
                                        class="h-full w-full bg-white rounded py-1 px-2 focus:outline-none"></input>
                            </div>
                            <div class=" font-medium text-sm flex-auto h-14 w-64 bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 p-0.5 rounded-md">
                                <input  type="password" 
                                        placeholder="Password" 
                                        class="h-full w-full bg-white rounded py-1 px-2 focus:outline-none"></input>
                            </div>
                            <div class="w-64 h-14 bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 rounded-md p-0.5 mt-2">
                                <button     type="button" 
                                                class="w-full h-full rounded px-5 py-2.5 
                                                text-black text-sm 
                                                hover:bg-gradient-to-br from-red-200 via-red-300 to-yellow-200
                                                font-medium  
                                                text-center inline-flex items-center">
                                        Login to your Account
                                    <svg    class="rtl:rotate-180 w-6 h-3.5 ml-10" 
                                            aria-hidden="true" 
                                            xmlns="http://www.w3.org/2000/svg" 
                                            fill="none" 
                                            viewBox="0 0 14 10">
                                        <path   stroke="currentColor" 
                                                stroke-linecap="round" 
                                                stroke-linejoin="round" 
                                                stroke-width="2" 
                                                d="M1 5h12m0 0L9 1m4 4L9 9"/>
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div class="flex flex-col lg:flex-row w-10/12 lg:w-8/12 mx-auto">
                                <BsSlashLg  style = {{transform: 'rotate(170deg)' }} class='mt-36 w-6 h-6'/>
                        </div>
                        <div class="w-full lg:w-1/2 py-16 px-12 flex flex-col items-center justify-center">
                            <div class="w-64 h-14 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 rounded-md p-0.5 mb-2">
                                <button     type="button" 
                                                class="w-full h-full rounded px-5 py-2.5 
                                                text-black text-sm bg-white
                                                hover:bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 
                                                font-medium  
                                                text-center inline-flex items-center">
                                        <svg    class="w-4 h-4 me-2" 
                                                aria-hidden="false" 
                                                mlns="http://www.w3.org/2000/svg" 
                                                fill="currenColor" 
                                                viewBox="0 0 18 19">
                                            <path   fill-rule="evenodd" 
                                                    d="M8.842 18.083a8.8 8.8 0 0 1-8.65-8.948 8.841 8.841 0 0 1 8.8-8.652h.153a8.464 8.464 0 0 1 5.7 2.257l-2.193 2.038A5.27 5.27 0 0 0 9.09 3.4a5.882 5.882 0 0 0-.2 11.76h.124a5.091 5.091 0 0 0 5.248-4.057L14.3 11H9V8h8.34c.066.543.095 1.09.088 1.636-.086 5.053-3.463 8.449-8.4 8.449l-.186-.002Z" 
                                                    clip-rule="evenodd"/>
                                        </svg>
                                        Sign in with Google
                                </button>
                            </div>
                            <div class="w-64 h-14 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-md p-0.5">
                                <button     type="button" 
                                            class="w-full h-full rounded px-5 py-2.5 
                                            text-black text-sm bg-white
                                            hover:bg-gradient-to-br from-cyan-500 to-blue-500
                                            font-medium  
                                            text-center inline-flex items-center">
                                    <svg    class="w-4 h-4 me-2" 
                                            aria-hidden="false" 
                                            mlns="http://www.w3.org/2000/svg" 
                                            fill="currenColor" 
                                            viewBox="0 0 8 19">
                                        <path   fill-rule="evenodd" 
                                                d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" 
                                                clip-rule="evenodd"/>
                                    </svg>
                                    Sign in with Facebook
                                </button>
                            </div>
                            <div class="w-64 h-14 bg-gradient-to-br from-teal-300 to-lime-300 rounded-md p-0.5 mt-2">
                                <button     type="button" 
                                                class="w-full h-full rounded px-5 py-2.5 
                                                text-black text-sm bg-white
                                                hover:bg-gradient-to-br from-teal-300 to-lime-300
                                                font-medium  
                                                text-center inline-flex items-center">
                                        <svg    class="w-4 h-4 me-2" 
                                                aria-hidden="false" 
                                                mlns="http://www.w3.org/2000/svg" 
                                                fill="currenColor" 
                                                viewBox="0 0 20 20">
                                            <path   fill-rule="evenodd" 
                                                    d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" 
                                                    clip-rule="evenodd"/>
                                        </svg>
                                        Sign in with Github
                                </button>
                            </div>
                        </div>             
                    </div>
                    <div className="items-center justify-center text-xs text-center">
                        <a className="underline" href="">
                            Forgot Password?
                        </a>
                    </div>
                </div>
            </div>
    </body>
    );
  };
  
export default Loginpage;