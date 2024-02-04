import React from 'react'
import { Input } from "../../ui/input"

function InputComponent({type, placeholder, value, onChange}) {

    return (
            <Input type = {type}
                value = {value}
                placeholder =  {placeholder}
                onChange = {onChange}
                className="h-full w-full bg-white border border-gray-400 rounded-md focus:outline-none"/>
        
    )
}
export default InputComponent