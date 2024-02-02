import React from 'react'

function FacebookButton ({onClick}) {
    return (
        <button type="button"
                onClick={onClick}
                className=" w-full h-full rounded px-5 py-2.5 
                        text-black text-sm bg-white
                        hover:bg-gradient-to-br from-cyan-500 to-blue-500
                        font-medium  
                        text-center inline-flex items-center">
            <svg className="w-4 h-4 me-2"
                aria-hidden="false"
                mlns="http://www.w3.org/2000/svg"
                fill="currenColor"
                viewBox="0 0 8 19">
                <path fill-rule="evenodd"
                    d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                    clip-rule="evenodd" />
            </svg>
            Sign in with Facebook
        </button>
    )
}

export default FacebookButton