import React from "react";
import { useState } from "react";
import { BsSlashLg } from "react-icons/bs";
import InputComponent from "./InputComponent";
import Header from "../Header";
import GoogleButton from "./googleButton";
import FacebookButton from "./FacebookButton";
import GithubButton from "./GithubButton";
import LoginButton from "./LoginButton";

const Loginpage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    return (
        <body> 
            <div class="min-h-screen">
                <header class="bg-gradient-to-br from-yellow-300 via-yellow-400 to-yellow-200">
                    <Header/>
                </header>
                <div class="container mt-16 mx-auto">
                    <h1 class="text-3xl font-bold text-center">Login to Your Account</h1>
                    <div class="flex flex-col lg:flex-row w-10/12 lg:w-8/12 mx-auto ">
                        <div class="w-full lg:w-1/2 py-16 px-12 flex flex-col items-center justify-center">
                            <InputComponent type="email"
                                            value = {email}
                                            placeholder = {"Account Email"}
                                            onChange = {(e) => setEmail(e.target.value)}
                            />
                            <InputComponent type="password"
                                            value = {password}
                                            placeholder = {"Password"}
                                            onChange = {(e) => setPassword(e.target.value)}
                            />
                            <div class="w-64 h-14 bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 rounded-md p-0.5 mt-2">
                                <LoginButton/>
                            </div>
                        </div>
                        <div class="flex flex-col lg:flex-row w-10/12 lg:w-8/12 mx-14 ">
                                <BsSlashLg  style = {{transform: 'rotate(170deg)' }} class='mt-36 w-6 h-6'/>
                        </div>
                        <div class="w-full lg:w-1/2 py-16 px-12 flex flex-col items-center justify-center">
                            <div class="w-64 h-14 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 rounded-md p-0.5 mb-2">
                                <GoogleButton/>
                            </div>
                            <div class="w-64 h-14 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-md p-0.5">
                                <FacebookButton/>
                            </div>
                            <div class="w-64 h-14 bg-gradient-to-br from-teal-300 to-lime-300 rounded-md p-0.5 mt-2">
                                <GithubButton/>
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