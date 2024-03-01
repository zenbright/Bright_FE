import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Button } from "@/components/ui/button"
import { useState } from "react";

function Notification() {
    const [communicationEmail, setCommunicationEmail] = useState(true);
    const [securityEmail, setSecurityEmail] = useState(true);
    const [socialEmail, setSocialEmail] = useState(true);
    const [notifyMe, setNotifyMe] = useState(false)

    const setCommunicationEmailState = () => {
        if (!notifyMe) {
            setCommunicationEmail(!communicationEmail)
        } else {
            setCommunicationEmail(!communicationEmail)
            setNotifyMe(!notifyMe)
        }
    }

    const setSecurityEmailState = () => {
        if (!notifyMe) {
            setSecurityEmail(!securityEmail)
        } else {
            setSecurityEmail(!securityEmail)
            setNotifyMe(!notifyMe)
        }
    }

    const setSocialEmailState = () => {
        if (!notifyMe) {
            setSocialEmail(!socialEmail)
        } else {
            setSocialEmail(!socialEmail)
            setNotifyMe(!notifyMe)
        }
    }

    const handleDisableAll = () => {
        if (communicationEmail || securityEmail || socialEmail) {
            // If any of them are on, set notifyMe to true
            setCommunicationEmail(false);
            setSecurityEmail(false);
            setSocialEmail(false);
            setNotifyMe(true);
        } else if (!communicationEmail && !securityEmail && !socialEmail) {
            setNotifyMe(!notifyMe)
        } else {
            // Otherwise, set notifyMe to false
            setNotifyMe(false);
        }
    };

    return (
        <div className="container-ns flex flex-col w-[75vw] overflow-auto">
            <div className=" z-30 mx-3 text-lg font-bold top-0 p-2 border-b-[1px] border-slate-300 group sticky bg-white">
                Notification
            </div>
            <div className="flex flex-col">
                <div className="w-[98%] rounded-md border-[1px] m-3 h-fit py-3 px-5">
                    <p className="text-md font-semibold">Default Notification</p>
                    <p className="text-md w-[80%]">Choose where you'd like emails to be sent. You can add more email addresses.
                        Use custom routes to specify different email addresses to be used for individual organizations.
                    </p>
                    <Select>
                        <SelectTrigger className="w-[180px] mt-2">
                            <SelectValue placeholder="Verified email" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="1">a@gmail.com</SelectItem>
                            <SelectItem value="2">b@gmail.com</SelectItem>
                            <SelectItem value="3">c@gmail.com</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <div className="w-[98%] rounded-md border-[1px] m-3 h-fit">
                    <div className="p-3 border-b-[1px] bg-opacity-50 font-semibold bg-slate-200 rounded-t-md">
                        Subscription
                    </div>
                    <div className="p-3 border-b-[1px] flex flex-row justify-between items-center">
                        <div>
                            <p className="text-md font-semibold">Communication email</p>
                            <p className="text-md">Receive email about your account activity</p>
                        </div>
                        <Switch className="mt-2" checked={communicationEmail} onClick={setCommunicationEmailState}></Switch>
                    </div>
                    <div className="p-3 border-b-[1px] flex flex-row justify-between items-center">
                        <div>
                            <p className="text-md font-semibold">Security email</p>
                            <p className="text-md">Receive email about your account security</p>
                        </div>
                        <Switch className="mt-2" checked={securityEmail} onClick={setSecurityEmailState}></Switch>
                    </div>
                    <div className="p-3 border-b-[1px] flex flex-row justify-between items-center">
                        <div>
                            <p className="text-md font-semibold">Social email</p>
                            <p className="text-md">Receive email about friend requests, follows and more</p>
                        </div>
                        <Switch className="mt-2" checked={socialEmail} onClick={setSocialEmailState}></Switch>
                    </div>
                    <div className="p-3 flex flex-row justify-between items-center">
                        <div>
                            <p className="text-md font-semibold">Don't notify me </p>
                            <p className="text-md">You won't be able to receive any more notification</p>
                        </div>
                        <Switch className="mt-2" checked={notifyMe} onClick={handleDisableAll}></Switch>
                    </div>
                </div>
                <div className="mx-3 mb-2">
                    <Button>Save changes</Button>
                </div>
            </div>
        </div>
    )
}

export default Notification