import { Github } from "lucide-react"
import { Button } from "../../../ui/button"
import React, { useEffect } from 'react';

function GithubButton () {
    const redirectGitHubOAuth = () => {
        window.location.href = 'https://github.com/login/oauth/authorize?client_id=ce0a3e8be7b81c84ee8d';
    };
    useEffect(() => {
        const urlSearchParams = new URLSearchParams(window.location.search);
        const codeParam = urlSearchParams.get('code');
    
        // Now, codeParam contains the value of the 'code' query parameter
        console.log('Code parameter:', codeParam);
      }, []);

    
    return (
        <Button 
                onClick={redirectGitHubOAuth}
                className=" w-full h-9 rounded px-5 py-2.5 
                        text-black text-sm bg-white
                        font-medium hover:bg-gray-300
                        text-center inline-flex items-center mb-2 border border-gray-400">
            <Github className="mr-2 h-4 w-4" />
            GitHub 
        </Button>
    )
}

export default GithubButton


