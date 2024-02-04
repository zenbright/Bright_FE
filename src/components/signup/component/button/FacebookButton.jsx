import React from 'react'
import { Button } from "../../../ui/button"
import { Facebook } from "lucide-react"
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "../../../ui/alert-dialog"

function FacebookButton () {
    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <Button 
                        className=" w-full h-9 rounded px-5 py-2.5 
                        text-black text-sm bg-white
                        font-medium hover:bg-gray-300
                        text-center inline-flex items-center mb-2 border border-gray-400">
                    <Facebook className="mr-2 h-4 w-4" />
                        Sign in with Facebook 
                </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                    <AlertDialogDescription>
                        This action cannot be undone. This will redirect you to Facebook.
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction>Continue</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}

export default FacebookButton