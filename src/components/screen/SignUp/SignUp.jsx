import React from "react";
import ButtonText from "../../general/buttonText";
import { useState } from "react";



const SignUp = () => {
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
                <div class="h-screen w-screen flex items-center justify-center bg-stone-100">
                    <div class='p-10 rounded-lg shadow-sm bg-stone-50 max-w-lg w-7/12'>
                        <div class='h-20 rounded-lg mb-6 py-6 bg-white -m-10'>
                            <h2 class="font-bold text-2xl text-black text-center">Create Your Account</h2>
                        </div>
                        <div class="ml-2 mr-2">
                            <div class="grid grid-cols-2 gap-4">
                                <div class="flex flex-col font-medium text-sm mb-2 bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 p-0.5 rounded-md">
                                    <input  type="text" 
                                            placeholder="First Name" 
                                            class="h-full w-full bg-white rounded py-1 px-2 focus:outline-none"></input>
                                </div>
                                <div class="flex flex-col font-medium text-sm mb-2 bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 p-0.5 rounded-md">
                                    <input  type="text" 
                                            placeholder="Last Name" 
                                            class="h-full w-full bg-white rounded py-1 px-2 focus:outline-none"></input>
                                </div>
                                <div class="flex flex-col font-medium text-sm mb-2 bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 p-0.5 rounded-md">
                                    <input  type="text" 
                                            placeholder="Date of Birth" 
                                            class="h-full w-full bg-white rounded py-1 px-2 focus:outline-none"></input>
                                </div>
                            </div>
                            <div class="flex flex-col mt-4 mb-4 bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 rounded-md p-0.5">
                                    <input  type="email" 
                                            placeholder="Email" 
                                            class="h-full w-full bg-white rounded py-1 px-2 focus:outline-none"></input>
                            </div>
                            <div class="flex flex-col mt-6 mb-4 bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 rounded-md p-0.5">
                                    <input  type="password" 
                                            placeholder="Password" 
                                            class="h-full w-full bg-white rounded py-1 px-2 focus:outline-none"></input>
                            </div>
                            <div class="flex flex-col mt-6 mb-4 bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 rounded-md p-0.5">
                                    <input  type="password" 
                                            placeholder="Confirm your Password" 
                                            class="h-full w-full bg-white rounded py-1 px-2 focus:outline-none"></input>
                            </div>
                        
                            <div class="flex flex-col mt-6 mb-4  font-medium text-sm cursor-pointer">
                                    <ButtonText title={"Create an account"}
                                                shape="rounded-lg"
                                                width="415px"
                                                height="38px"
                                                textColor={"text-black"}
                                                backgroundColor={"#43F5E9"}
                                    ></ButtonText>
                            </div>
                        </div>
                        <div className="items-center justify-center text-xs text-center">
                            <a className="" href="">
                                Already have an account?
                            </a>
                        </div>
                    </div>
                </div>
            </div>
    </body>
    );
  };
  
export default SignUp