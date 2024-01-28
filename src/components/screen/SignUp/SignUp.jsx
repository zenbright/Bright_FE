import React from "react";
import ButtonText from "../../general/buttonText";
import { useState } from "react";



const SignUp = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    

    return (
        <body> 
            <div class="min-h-screen">
                <header class=" bg-gradient-to-br from-yellow-300 via-yellow-400 to-yellow-200">
                    <nav class="h-14 flex justify-between items-center w-[92%] mx-auto">
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
                <div class=" flex items-center justify-center bg-white">
                    <div class='p-10 rounded-lg shadow-2xl bg-white max-w-lg w-7/12'>
                        <div class='h-15 rounded-lg mb-2 py-6 bg -m-10'>
                            <h2 class="font-bold text-2xl text-black-500 text-center mb-2">Create Your Account</h2>
                            <h4 class="text-sm text-black-400 text-center">Unlock Endless Possibilities: Create Your Account Today!</h4>
                        </div>
                        <div class="ml-2 mr-2">
                            <div class="grid grid-cols-2 gap-4">
                                <div class="relative z-0 w-full group bg-white p-0.5">
                                    <label  for="base-input" 
                                            class="block text-xs mb-2 text-black-500 ">First Name</label>
                                    <input 
                                            type="text" 
                                            id="base-input" 
                                            class="block py-1 px-2 w-full text-sm text-gray-900 bg-transparent
                                            rounded border border-gray-500 rounded-md
                                            focus:outline-none focus:ring-0 focus:border-blue-600 peer"/>
                                </div> 
                                <div class="relative z-0 w-full group bg-white p-0.5"> 
                                    <label  for="base-input" 
                                            class="block text-xs mb-2 text-black-500 ">Last Name</label>
                                    <input 
                                            type="text" 
                                            id="base-input" 
                                            class="block py-1 px-2 w-full text-sm text-gray-900 bg-transparent
                                            rounded border border-gray-500 rounded-md
                                            focus:outline-none focus:ring-0 focus:border-blue-600 peer"/>
                                </div> 
                                <div class="relative z-0 w-full mt-0 group bg-white p-0.5">
                                    <label  for="base-input" 
                                            class="block text-xs mb-2 text-black-500 ">Date of Birth</label>
                                    <input 
                                            type="date" 
                                            id="base-input" 
                                            class="block py-1 px-2 w-full text-sm text-gray-900 bg-transparent
                                            rounded border border-gray-500 rounded-md
                                            focus:outline-none focus:ring-0 focus:border-blue-600 peer"/>
                                </div> 
                            </div>
                            <div class="relative z-0 w-full mt-2 mb-2 group bg-white p-0.5">
                                    <label  for="base-input" 
                                            class="block text-xs mb-2 text-black-500 ">Email Address</label>
                                    <input 
                                            type="email" 
                                            id="base-input" 
                                            class="block py-1 px-2 w-full text-sm text-gray-900 bg-transparent
                                            rounded border border-gray-500 rounded-md
                                            focus:outline-none focus:ring-0 focus:border-blue-600 peer"/>
                            </div> 
                            <div class="relative z-0 w-full mt-2 mb-2 group bg-white p-0.5">
                                    <label  for="base-input" 
                                            class="block text-xs mb-2 text-black-500 ">Password</label>
                                    <input 
                                            type="password" 
                                            id="base-input" 
                                            class="block py-1 px-2 w-full text-sm text-gray-900 bg-transparent
                                            rounded border border-gray-500 rounded-md
                                            focus:outline-none focus:ring-0 focus:border-blue-600 peer"/>
                            </div> 
                            <div class="relative z-0 w-full mt-2 mb-2 group bg-white p-0.5">
                                    <label  for="base-input" 
                                            class="block text-xs mb-2 text-black-500 ">Confirm your Password</label>
                                    <input 
                                            type="password" 
                                            id="base-input" 
                                            class="block py-1 px-2 w-full text-sm text-gray-900 bg-transparent
                                            rounded border border-gray-500 rounded-md
                                            focus:outline-none focus:ring-0 focus:border-blue-600 peer"/>
                            </div> 
                            <div class="flex items-start mb-4">
                                <div class="flex items-center h-5">
                                    <input  id="terms" 
                                            type="checkbox" 
                                            value="" 
                                            class="w-4 h-4 
                                                border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300" required/>
                                </div>
                                <label  for="terms" 
                                        class="ms-2 text-sm font-medium text-black-500">I agree with the <a  href="#" 
                                        class="text-black-500 underline">terms and conditions</a>
                                </label>
                             </div>
                            <div class="flex flex-col mt-5 mb-4  font-medium text-sm cursor-pointer">
                                    <ButtonText title={"Create an account"}
                                                shape="rounded-lg"
                                                width="415px"
                                                height="38px"
                                                textColor={"text-black"}
                                                backgroundColor={"#FFFD55"}
                                    ></ButtonText>
                            </div>
                        </div>
                        <div className="items-center justify-center text-xs text-center text-black-500">
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