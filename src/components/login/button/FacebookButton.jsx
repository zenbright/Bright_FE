import React from 'react'
import { Button } from "../../ui/button"
import { Facebook } from "lucide-react"

function FacebookButton ({onClick}) {
    return (
        <Button 
                onClick={onClick}
                className=" w-full h-8 rounded px-5 py-2.5 
                text-black text-sm bg-white
                font-medium hover:bg-gray-300
                text-center inline-flex items-center mb-2 border border-gray-400">
            <Facebook className="mr-2 h-4 w-4" />
                Facebook 
        </Button>
    )
}

export default FacebookButton