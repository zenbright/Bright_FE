import { Github } from "lucide-react"
import { Button } from "../../../ui/button"
import React, { useEffect } from 'react';
import axios from 'axios';


function GithubButton() {
    const redirectGitHubOAuth = () => {
        window.location.href = 'https://github.com/login/oauth/authorize?client_id=ce0a3e8be7b81c84ee8d';
    };

    useEffect( () => {
        const urlSearchParams = new URLSearchParams(window.location.search);
        const codeParam = urlSearchParams.get('code');
        if (codeParam) {
            const onGitHubCallback = async () => {
                const code = codeParam;
                try {
                    const response = await axios.post('http://3.27.142.116:4000/bright-backend/api/auth/git',
                    { code });
                    console.log(response);
                    return response.data;
                }
                catch (error) {
                    console.error("failed", error);
                };
            }
            onGitHubCallback(codeParam);
        }
    }, []);
    


    return (
        <Button
            onClick={redirectGitHubOAuth}
            className=" w-full h-9 rounded px-5 py-2.5 
                        text-black text-sm bg-white
                        font-medium hover:bg-gray-300
                        text-center inline-flex items-center mb-2 border border-gray-400">
            <Github className="mr-2 h-4 w-4" />
            Siign in with GitHub
        </Button>
    )
}

export default GithubButton


