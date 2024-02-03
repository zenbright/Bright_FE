import React from 'react'

function SignUpCom({type, placeholder, value, onChange}) {
    return (
        <div>
            <input
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}   
                class=" block py-1 px-2 w-full text-sm text-gray-900 bg-transparent
                        rounded border border-gray-500 rounded-md
                        focus:outline-none focus:ring-0 focus:border-blue-600 peer"/>
        </div>
    )
}

export default SignUpCom 