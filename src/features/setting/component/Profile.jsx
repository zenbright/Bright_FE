import { useState } from 'react';
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { LinkIcon } from "lucide-react"
import { CalendarIcon } from "@radix-ui/react-icons"
import { format } from "date-fns"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import userImage from '../asset/cat.jpg'

function Profile() {
    const [date, setDate] = useState(Date);
    return (
        <div className="container-ns flex flex-col w-[75vw] overflow-auto">
            <div className="mx-3 text-lg font-bold top-0 p-2 border-b-[1px] border-slate-300 group sticky bg-white z-40">
                Public Profile
            </div>
            <div className="flex flex-row h-screen">
                <div className="w-9/12 px-5 py-3">
                    {/* Public Information */}
                    <div id="name-container" className="flex flex-row w-full gap-7">
                        <div id="username" className="w-5/12">
                            <p className="font-semibold">Username</p>
                            <Input placeholder="Username" className="h-[35px]" />
                        </div>
                        <div id="nickname" className="w-5/12">
                            <p className="font-semibold">Nickname</p>
                            <Input placeholder="Nickname" className="h-[35px]" />
                        </div>
                    </div>
                    <div id="bio" className="pt-3 w-full">
                        <p className="font-semibold">Bio</p>
                        <Textarea placeholder="Tell us a little about yourself" className="w-8/12" />
                    </div>
                    <div id="pronouns" className="pt-3 w-full">
                        <p className="font-semibold">Pronouns</p>
                        <Select>
                            <SelectTrigger className="w-8/12 h-[35px]">
                                <SelectValue placeholder="Don't Specify" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="a">Don't Specify</SelectItem>
                                <SelectItem value="b">they/them</SelectItem>
                                <SelectItem value="c">he/him</SelectItem>
                                <SelectItem value="d">she/her</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <div id="url" className="pt-3 w-full">
                        <p className="font-semibold">URL</p>
                        <Input className="w-8/12 h-[35px]" />
                    </div>
                    <div id="social-account" className="pt-3 w-full">
                        <p className="font-semibold">Social Account</p>
                        <div className="flex flex-col gap-y-2 pt-1">
                            <div className="flex flex-row">
                                <LinkIcon className="w-5 h-5 mt-2 mr-2" />
                                <Input placeholder="Link to social profile" className="w-10/12 h-[35px]" />
                            </div>
                            <div className="flex flex-row">
                                <LinkIcon className="w-5 h-5 mt-2 mr-2" />
                                <Input placeholder="Link to social profile" className="w-10/12 h-[35px]" />
                            </div>
                            <div className="flex flex-row">
                                <LinkIcon className="w-5 h-5 mt-2 mr-2" />
                                <Input placeholder="Link to social profile" className="w-10/12 h-[35px]" />
                            </div>
                            <div className="flex flex-row">
                                <LinkIcon className="w-5 h-5 mt-2 mr-2" />
                                <Input placeholder="Link to social profile" className="w-10/12 h-[35px]" />
                            </div>
                        </div>
                    </div>

                    {/* Personal Information */}
                    <div id="personal" className="my-3 pt-3 border-t-[1px] border-slate-300 text-lg font-semibold">
                        Personal Information
                    </div>
                    <div id="personal-container-1" className="flex flex-row w-full gap-7 mb-3">
                        <div id="email-address" className="w-5/12">
                            <p className="font-semibold">Email Address</p>
                            <Input placeholder="Email Address" type="email" className="h-[35px]" />
                        </div>
                        <div id="phone-number" className="w-5/12">
                            <p className="font-semibold">Country</p>
                            <Select>
                                <SelectTrigger className="w-8/12 h-[35px]">
                                    <SelectValue placeholder="Select Your Country" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="vn-VN">Vietnam</SelectItem>
                                    <SelectItem value="us-US">United State</SelectItem>
                                    <SelectItem value="en-EN">England</SelectItem>
                                    <SelectItem value="jp-JP">Japan</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                    <div id="personal-content-2" className="flex flex-row w-full gap-7">
                        <div id="phone-number" className="w-5/12">
                            <p className="font-semibold">Phone Number</p>
                            <Input placeholder="Phone Number" type="email" className="h-[35px]" />
                        </div>
                        <div id='date-of-birth'>
                            <p className="font-semibold">Date of birth</p>
                            <Popover>
                                <PopoverTrigger asChild>
                                    <Button
                                        variant={"outline"}
                                        className={cn(
                                            "w-[240px] justify-start text-left font-normal h-[35px]",
                                            !date && "text-muted-foreground"
                                        )}
                                    >
                                        <CalendarIcon className="mr-2 h-4 w-4" />
                                        {date ? format(date, "PPP") : <span>Pick a date</span>}
                                    </Button>
                                </PopoverTrigger>
                                <PopoverContent className="w-auto p-0" align="start">
                                    <Calendar
                                        mode="single"
                                        selected={date}
                                        onSelect={setDate}
                                        initialFocus
                                    />
                                </PopoverContent>
                            </Popover>
                        </div>
                    </div>

                    <Button className="mt-5 mb-3 bg-blue-700 h-[35px]">Update Profile</Button>
                </div>
                <div className="w-3/12 relative z-0">
                    <img src={userImage} alt="" className='h-50 w-50 rounded-full p-5'/>
                    <Button class="absolute top-10 w-[60px] bg-blue-700 bg-opacity-100 text-white p-2 rounded-sm hover:bg-black m-2">
                        Edit
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Profile