import React from 'react'


function InputComponent({type, placeholder, value, onChange}) {

    return (
        <div class="font-medium text-sm flex-auto h-14 w-64 mb-2 bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 p-0.5 rounded-md">
            <input type = {type}
                value = {value}
                placeholder =  {placeholder}
                onChange = {onChange}
                class="h-full w-full bg-white rounded py-1 px-2 focus:outline-none"></input>
        </div>
    )
}
export default InputComponent