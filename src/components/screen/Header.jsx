import React from 'react'
import ButtonText from '../general/buttonText'

const Header = () => {
    return (
        <div>
            <nav class="h-14 flex justify-between items-center w-[92%]  mx-auto">
                <div>
                    <div class="w-20 font-medium text-sm cursor-pointer">
                        <ButtonText title={"Bright F.E"}
                            shape="rounded"
                            width="80px"
                            height="28px"
                            textColor={"text-black"}
                        ></ButtonText>
                    </div>
                </div>
                <div class="nav-links duration-500 md:static absolute  
                                    md:min-h-fit min-h-[60vh] left-0 top-[-100%] md:w-auto  
                                    w-full flex items-center px-5">
                    <ul class="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8">
                        <li>
                            <a class="hover:text-gray-500 font-medium text-sm " href="#">Products</a>
                        </li>
                        <li>
                            <a class="hover:text-gray-500 font-medium text-sm" href="#">Resource</a>
                        </li>
                        <li>
                            <a class="hover:text-gray-500 font-medium text-sm" href="#">Support</a>
                        </li>
                        <li>
                            <a class="hover:text-gray-500 font-medium text-sm" href="#">Pricing</a>
                        </li>
                        <li>
                            <a class="hover:text-gray-500 font-medium text-sm" href="#">Blog</a>
                        </li>
                    </ul>
                </div>
                <div class="flex items-center gap-6 font-medium text-sm">
                    <ButtonText title={"Sign Up"}
                        shape="rounded"
                        width="56px"
                        height="28px"
                        textColor={"text-black"}
                    ></ButtonText>
                </div>
            </nav>
        </div>
    )
}

export default Header