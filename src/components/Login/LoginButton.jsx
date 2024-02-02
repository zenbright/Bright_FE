import React from 'react'

function LoginButton ({onClick}) {
    return (
        <button type="button"
                onClick={onClick}
                className=" w-full h-full rounded px-5 py-2.5 
                        text-black text-sm bg-white
                        hover:bg-gradient-to-br from-red-200 via-red-300 to-yellow-200
                        font-medium  
                        text-center inline-flex items-center">
            Login to your Account
            <svg className="rtl:rotate-180 w-6 h-3.5 ml-10"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10">
                <path stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9" />
            </svg>
        </button>
    )
}

export default LoginButton