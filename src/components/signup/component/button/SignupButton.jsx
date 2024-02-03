import React from 'react'
import { Button } from "../../../ui/button"
import { useState } from 'react'
import { Brush } from "lucide-react"

function SignupButton({onClick}) {
    const [isLoading, setIsLoading] = useState(false)
    const onSubmit = async (event) => {
        event.preventDefault();
        setIsLoading(true);
        setTimeout(() => {
          setIsLoading(false);
        }, 3000);
        try {
            // Assuming login is an asynchronous function
            await login(email, password, fname, lname, date);
            console.log("success");
          } catch (error) {
            console.error("failed", error);
          } finally {
            setIsLoading(false);
          }
      };
    return (
        <form onSubmit={onSubmit}> 
            <Button variant="outline"
                    className=" w-full h-9 rounded px-5 py-2.5 
                                text-black text-sm bg-white
                                font-medium  hover:bg-gray-300
                                text-center inline-flex items-center border border-gray-400"
                    onClick={onClick} disabled={isLoading}>
                    {isLoading && (
                        <Brush className="mr-2 h-4 w-4 animate-spin" />
                    )}
                    Sign up 
            </Button>
        </form>    
    )
}

export default SignupButton