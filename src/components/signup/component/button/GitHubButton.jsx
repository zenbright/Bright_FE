import { Github } from "lucide-react"
import { Button } from "../../../ui/button"

function GithubButton ({onClick}) {
    return (
        <Button 
                onClick={onClick}
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


