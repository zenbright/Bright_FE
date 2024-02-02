import React from "react";
import ButtonText from "../general/buttonText";
import { useState } from "react";
import Header from "../Header";
import SignUpCom from "./SignUpCom";

const SignUp = () => {
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [date, setDate] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [cpassword, setCPassword] = useState("");


    return (
        <div> 
            <div class="min-h-screen">
                <header class=" bg-gradient-to-br from-yellow-300 via-yellow-400 to-yellow-200">
                    <Header/>
                </header>
                <div class=" flex items-center justify-center bg-white">
                    <div class='p-10 rounded-lg shadow-2xl bg-white max-w-lg w-7/12'>
                        <div class='h-15 rounded-lg mb-2 py-6 bg -m-10'>
                            <h2 class="font-bold text-2xl text-black-500 text-center mb-2">Create Your Account</h2>
                            <h4 class="text-sm text-black-400 text-center">Unlock Endless Possibilities: Create Your Account Today!</h4>
                        </div>
                        <div class="ml-2 mr-2">
                            <div class="grid grid-cols-2 gap-2">
                                <div class="relative z-0 w-full group bg-white p-0.5">
                                    <label  class="block text-xs mb-2 text-black-500 ">First Name</label>
                                    <SignUpCom  type = 'text'
                                                value = {fname}
                                                placeholder=""
                                                onChange={(e) => setFname(e.target.value)}/>
                                </div> 
                                <div class="relative z-0 w-full group bg-white p-0.5"> 
                                    <label  class="block text-xs mb-2 text-black-500 ">Last Name</label>
                                    <SignUpCom  type = 'text'
                                                value = {lname}
                                                placeholder=""
                                                onChange={(e) => setLname(e.target.value)}/>
                                </div> 
                                <div class="relative z-0 w-full group bg-white p-0.5">
                                    <label  class="block text-xs mb-2 text-black-500 ">Date of Birth</label>
                                    <SignUpCom  type = 'date'
                                                value = {date}
                                                placeholder=""
                                                onChange={(e) => setDate(e.target.value)}/>
                                </div> 
                            </div>
                            <div class="relative z-0 w-full mt-2 mb-2 group bg-white p-0.5">
                                    <label  class="block text-xs mb-2 text-black-500 ">Email Address</label>
                                    <SignUpCom  type = 'email'
                                                value = {email}
                                                placeholder=""
                                                onChange={(e) => setEmail(e.target.value)}/>
                            </div> 
                            <div class="relative z-0 w-full mt-2 mb-2 group bg-white p-0.5">
                                    <label class="block text-xs mb-2 text-black-500 ">Password</label>
                                    <SignUpCom  type = 'password'
                                                value = {password}
                                                placeholder=""
                                                onChange={(e) => setPassword(e.target.value)}/>
                            </div> 
                            <div class="relative z-0 w-full mt-2 mb-2 group bg-white p-0.5">
                                    <label class="block text-xs mb-2 text-black-500 ">Confirm your Password</label>
                                    <SignUpCom  type = 'password'
                                                value = {cpassword}
                                                placeholder=""
                                                onChange={(e) => setCPassword(e.target.value)}/>
                            </div> 
                            <div class="flex items-start mb-4">
                                <div class="flex items-center h-5">
                                    <input  
                                            type="checkbox" 
                                            value="" 
                                            class="w-4 h-4 
                                                border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300" required/>
                                </div>
                                <label  
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
    </div>
    );
};
  
export default SignUp