import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

function Account() {
    return (
        <div className="container-ns flex flex-col w-[75vw] overflow-auto">
            <div className="z-30 mx-3 text-lg font-bold top-0 p-2 border-b-[1px] border-slate-300 group sticky bg-white">
                Account
            </div>
            <div className="flex flex-col">
                <div className="m-3 border-b-[1px] p-2">
                    <p className="font-semibold">Change Password</p>
                </div>
                <div className="mx-3 p-2 space-y-4">
                    <div className="flex flex-row items-center justify-between w-[40vw]">
                        <p className="font-semibold w-50">Old Password</p>
                        <Input placeholder="Old password" value="mujoker" type="password" className="w-[350px]"/>
                    </div>
                    <div className="flex flex-row items-center justify-between w-[40vw]">
                        <p className="font-semibold w-50">New Password</p>
                        <Input placeholder="Old password" value="kiensama" type="password" className="w-[350px]"/>
                    </div>
                    <div className="flex flex-row items-center justify-between w-[40vw]">
                        <p className="font-semibold w-50">Confirm new Password</p>
                        <Input placeholder="Old password" value="kiensama" type="password" className="w-[350px]"/>
                    </div>
                    <Button className="">Update</Button>
                </div>
                <div className="m-3 border-b-[1px] p-2">
                    <p className="font-semibold text-rose-600">Delete Account</p>
                </div>
                <div className="mx-3 p-2 space-y-4">
                    <p>Once you delete your account, there is no going back. Please be certain.</p>
                    <Button className="bg-rose-600 hover:bg-rose-500">Delete your account</Button>
                </div>
            </div>
        </div>
    )
}

export default Account