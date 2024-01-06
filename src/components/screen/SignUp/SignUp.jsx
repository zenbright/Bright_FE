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
                <div class="h-screen w-screen flex items-center justify-center bg-blue-800">
                    <div class='p-10 rounded-lg shadow-sm bg-blue-950 max-w-lg w-7/12'>
                        <div class='h-20 rounded-lg mb-6 py-6 bg -m-10'>
                            <h2 class="font-bold text-2xl text-white text-center">Create Your Account</h2>
                        </div>
                        <div class="ml-2 mr-2">
                            <div class="grid grid-cols-2 gap-4">
                                <div class="relative rounded-md z-0 w-full mt-1 mb-3 group bg-white p-0.5">
                                    <input  type="text" 
                                            name="floating_name" 
                                            id="floating_name" 
                                            class="block py-1 px-2 w-full text-sm text-gray-900 bg-transparent
                                                rounded  
                                                focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
                                            placeholder="" required />
                                    <label  for="floating_name" 
                                            class="peer-focus:font-medium absolute text-sm text-red-500 
                                                duration-300 transform -translate-y-7 scale-75 top-1.5 left-2 -z-10 origin-[0] 
                                                peer-focus:start-0 
                                                peer-focus:text-red-500 
                                                rtl:peer-focus:translate-x-1/4 
                                                rtl:peer-focus:left-auto 
                                                peer-placeholder-shown:scale-100 
                                                peer-placeholder-shown:translate-y-0 
                                                peer-focus:scale-75 
                                                peer-focus:left-2
                                                peer-focus:-translate-y-7">First Name</label>
                                </div> 
                                <div class="relative rounded-md z-0 w-full mt-1 mb-3 group bg-white p-0.5">
                                    <input  type="email" 
                                            name="floating_lname" 
                                            id="floating_lname" 
                                            class="block py-1 px-2 w-full text-sm text-gray-900 bg-transparent
                                                rounded  
                                                focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
                                            placeholder="" required />
                                    <label  for="floating_lname" 
                                            class="peer-focus:font-medium absolute text-sm text-red-500 
                                                duration-300 transform -translate-y-7 scale-75 top-1.5 left-2 -z-10 origin-[0] 
                                                peer-focus:start-0 
                                                peer-focus:text-red-500 
                                                rtl:peer-focus:translate-x-1/4 
                                                rtl:peer-focus:left-auto 
                                                peer-placeholder-shown:scale-100 
                                                peer-placeholder-shown:translate-y-0 
                                                peer-focus:scale-75 
                                                peer-focus:left-2
                                                peer-focus:-translate-y-7">Last Name</label>
                                </div> 
                                <div class="relative rounded-md z-0 w-full mt-1 mb-3 group bg-white p-0.5">
                                    <input  type="date" 
                                            name="floating_date" 
                                            id="floating_date" 
                                            class="block py-1 px-2 w-full text-sm text-gray-900 bg-transparent
                                                rounded  
                                                focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
                                            placeholder="" required />
                                    <label  for="floating_date" 
                                            class="peer-focus:font-medium absolute text-sm text-red-500 
                                                duration-300 transform -translate-y-7 scale-75 top-1.5 left-2 -z-10 origin-[0] 
                                                peer-focus:start-0 
                                                peer-focus:text-red-500 
                                                rtl:peer-focus:translate-x-1/4 
                                                rtl:peer-focus:left-auto 
                                                peer-placeholder-shown:scale-100 
                                                peer-placeholder-shown:translate-y-0 
                                                peer-focus:scale-75 
                                                peer-focus:left-2
                                                peer-focus:-translate-y-7">Date of Birth</label>
                                </div> 
                            </div>
                            <div class="relative rounded-md z-0 w-full mt-5 mb-5 group bg-white p-0.5">
                                <input  type="email" 
                                        name="floating_email" 
                                        id="floating_email" 
                                        class="block py-1 px-2 w-full text-sm text-gray-900 bg-transparent
                                            rounded  
                                            focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
                                        placeholder="" required />
                                <label  for="floating_email" 
                                        class="peer-focus:font-medium absolute text-sm text-red-500 
                                            duration-300 transform -translate-y-7 scale-75 top-1.5 left-2 -z-10 origin-[0] 
                                            peer-focus:start-0 
                                            peer-focus:text-red-500 
                                            rtl:peer-focus:translate-x-1/4 
                                            rtl:peer-focus:left-auto 
                                            peer-placeholder-shown:scale-100 
                                            peer-placeholder-shown:translate-y-0 
                                            peer-focus:scale-75 
                                            peer-focus:left-2
                                            peer-focus:-translate-y-7">Email address</label>
                            </div> 
                            <div class="relative rounded-md z-0 w-full mt-7 mb-5 group bg-white p-0.5">
                                <input  type="password" 
                                        name="floating_pass" 
                                        id="floating_pass" 
                                        class="block py-1 px-2 w-full text-sm text-gray-900 bg-transparent
                                            rounded  
                                            focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
                                        placeholder="" required />
                                <label  for="floating_pass" 
                                        class="peer-focus:font-medium absolute text-sm text-red-500 
                                            duration-300 transform -translate-y-7 scale-75 top-1.5 left-2 -z-10 origin-[0] 
                                            peer-focus:start-0 
                                            peer-focus:text-red-500 
                                            rtl:peer-focus:translate-x-1/4 
                                            rtl:peer-focus:left-auto 
                                            peer-placeholder-shown:scale-100 
                                            peer-placeholder-shown:translate-y-0 
                                            peer-focus:scale-75 
                                            peer-focus:left-2
                                            peer-focus:-translate-y-7">Password</label>
                            </div>
                            <div class="relative rounded-md z-0 w-full mt-7 mb-5 group bg-white p-0.5">
                                <input  type="password" 
                                        name="floating_Cpass" 
                                        id="floating_Cpass" 
                                        class="block py-1 px-2 w-full text-sm text-gray-900 bg-transparent
                                            rounded  
                                            focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
                                        placeholder="" required />
                                <label  for="floating_Cpass" 
                                        class="peer-focus:font-medium absolute text-sm text-red-500 
                                            duration-300 transform -translate-y-7 scale-75 top-1.5 left-2 -z-10 origin-[0] 
                                            peer-focus:start-0 
                                            peer-focus:text-red-500 
                                            rtl:peer-focus:translate-x-1/4 
                                            rtl:peer-focus:left-auto 
                                            peer-placeholder-shown:scale-100 
                                            peer-placeholder-shown:translate-y-0 
                                            peer-focus:scale-75 
                                            peer-focus:left-2
                                            peer-focus:-translate-y-7">Confirm your Password</label>
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
                                        class="ms-2 text-sm font-medium text-gray-300">
                                        I agree with the terms and conditions
                                </label>
                             </div>
                            <div class="flex flex-col mt-5 mb-4  font-medium text-sm cursor-pointer">
                                    <ButtonText title={"Create an account"}
                                                shape="rounded-lg"
                                                width="415px"
                                                height="38px"
                                                textColor={"text-black"}
                                                backgroundColor={"#43F5E9"}
                                    ></ButtonText>
                            </div>
                        </div>
                        <div className="items-center justify-center text-xs text-center text-white">
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