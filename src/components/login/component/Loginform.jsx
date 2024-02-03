import React from 'react'
import InputComponent from './InputComponent'
import LoginButton from '../button/LoginButton'
import GithubButton from '../button/GitHubButton'
import GoogleButton from '../button/googleButton'
import FacebookButton from '../button/FacebookButton'
import login from './service'
import { useState } from 'react'


function Loginform() {
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

    return (
        <div className='flex flex-col space-y-2 text-center' >
            <form>
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
                <div className="">
                    <LoginButton onClick={handleLogin}/>
                </div>
            </form>
            <div className="relative">
                <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-background px-2 text-muted-foreground">
                        Or continue with
                    </span>
                </div>
            </div>
            <div>
                <GithubButton />
                <GoogleButton />
                <FacebookButton />
            </div>
        </div>
    )
}

export default Loginform