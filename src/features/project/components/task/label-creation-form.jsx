import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { LABEL_CREATION_FORM } from "../../assets/strings"
import { RefreshCw } from "lucide-react"
import { useState } from "react"
import { neonColorCreator } from "../../utils/utils"

export const LabelCreationForm = () => {
    const randomDarkHexColor = () => {
        let color = "#";
        for (let i = 0; i < 3; i++) {
            // Generate a random number between 0 and 127 (half of the 0-255 range)
            let component = Math.floor(Math.random() * 70 + 50).toString(16);

            color += component.length === 1 ? "0" + component : component;
        }
        return color;
    }

    const [labelColor, setLabelColor] = useState(randomDarkHexColor());

    return (
        <Dialog>
            <DialogTrigger asChild className="flex w-full items-center h-full">
                <Button variant="outline">{LABEL_CREATION_FORM.TITLE}</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>{LABEL_CREATION_FORM.TITLE}</DialogTitle>
                    <DialogDescription>
                        {LABEL_CREATION_FORM.DESCRIPTION}
                    </DialogDescription>
                </DialogHeader>

                <div className="grid pt-3 py-2">
                    <div className="grid grid-cols-4 items-center gap-4 mb-4">
                        <Label htmlFor="name" className="text-left">
                            {LABEL_CREATION_FORM.LABEL_NAME}
                        </Label>
                        <Input
                            id="name"
                            defaultValue="hello world"
                            className="col-span-3"
                        />
                    </div>

                    <div className="grid grid-cols-4 items-center">
                        <Label htmlFor="name" className="text-left">
                            {LABEL_CREATION_FORM.COLOR}
                        </Label>

                        <div className="flex w-full col-span-3 items-center h-full gap-1">
                            <Input
                                id="name"
                                defaultValue={labelColor}
                                value={labelColor}
                                onChange={(e) => setLabelColor(e.target.value)}
                            />

                            <Button variant="outline" size="icon" className={`w-14`} onClick={() => setLabelColor(randomDarkHexColor())} style={{ backgroundColor: labelColor }}>
                                <RefreshCw className="h-4 w-4" style={{ color: neonColorCreator(labelColor) }} />
                            </Button>
                        </div>

                        <div className="w-full col-span-4 text-black/50 font-semibold text-sm mt-4 italic"> {LABEL_CREATION_FORM.COLOR_CRITERIA} </div>
                    </div>

                    <div className="flex flex-col items-end pt-2 hover:cursor-pointer hover:underline text-sm">
                        More option
                    </div>
                </div>
                <DialogFooter>
                    <Button type="submit">Save changes</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
