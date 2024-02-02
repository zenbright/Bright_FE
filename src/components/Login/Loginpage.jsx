import React from "react";
import { useState } from "react";
import { BsSlashLg } from "react-icons/bs";
import InputComponent from "./InputComponent";
import Header from "../Header";
import GoogleButton from "./googleButton";
import FacebookButton from "./FacebookButton";
import GithubButton from "./GithubButton";
import LoginButton from "./LoginButton";
import login from "./service";
import bgimg from "./img/bg3.png"

const Loginpage = () => {
    const [account, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const handleLogin = async (e) => {
        e.preventDefault();
        try{
            const post = await login(account, password);
            console.log("success",post);
        }
        catch(error){
            console.error("failed",error);
        }
    };

    const divStyle = {
        backgroundImage: `url(${bgimg})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        /* Additional styles can be added here */
    };

    return (
        <div> 
            <div className="min-h-screen" style={divStyle}>
                <header className="bg-gradient-to-br from-yellow-300 via-yellow-400 to-yellow-200">
                    <Header/>
                </header>
                <div className="mt-16 mx-20 py-16 px-12">
                    <h1 className="text-3xl 2xl:text-4xl font-bold text-center">Login to Your Account</h1>
                    <div className="flex flex-col lg:flex-row w-7/12 lg:w-7/12 mx-auto justify-center ">
                        <form className="w-full lg:w-2/3 py-16 px-10 flex flex-col items-center justify-center">
                            <InputComponent type="email"
                                            value = {account}
                                            placeholder = {"Account Email"}
                                            onChange = {(e) => setEmail(e.target.value)}
                            />
                            <InputComponent type="password"
                                            value = {password}
                                            placeholder = {"Password"}
                                            onChange = {(e) => setPassword(e.target.value)}
                            />
                            <div className="w-64 h-14 bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 rounded-md p-0.5 mt-2">
                                <LoginButton onClick={handleLogin}/>
                            </div>
                        </form>
                    <div className="flex flex-col lg:flex-row w-7/12 lg:w-7/12 justify-center items-center mx-auto">
                        <BsSlashLg  style = {{transform: 'rotate(170deg)' }} className='w-8 h-8'/>
                    </div>
                    <div className="w-7/12 lg:w-7/12 py-16 px-10 flex flex-col items-center justify-center">
                        <div className="w-64 h-14 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 rounded-md p-0.5 mb-2">
                            <GoogleButton/>
                        </div>
                        <div className="w-64 h-14 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-md p-0.5">
                            <FacebookButton/>
                        </div>
                        <div className="w-64 h-14 bg-gradient-to-br from-teal-300 to-lime-300 rounded-md p-0.5 mt-2">
                             <GithubButton/>
                        </div>
                    </div>             
                </div>
                    <div className="items-center justify-center text-xs 2xl:text-sm text-center">
                        <a className="underline" href="">
                            Forgotten Password? Let's Fix That
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
  };
  
export default Loginpage;

