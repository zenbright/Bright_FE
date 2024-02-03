import React from 'react'
import bgimg from '../img/bgimg.png';
import Loginform from './component/Loginform';
import logo from '../img/logomini-vang.svg';


const Loginview = () => {
    const divStyle = {
        backgroundImage: `url(${bgimg})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        /* Additional styles can be added here */
    };

    return (
        <div>
            <div className='md:hidden'>
                <div style={divStyle}
                    alt="Authentication"
                    className="block"
                />
            </div>
            <div className='container relative hidden min-h-screen flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0'>
                <div className='relative hidden h-full flex-col bg-muted p-10 text-white lg:flex dark:border-r'>
                    <div className='absolute inset-0' style={divStyle}/>
                    <div className='relative z-20 flex items-center text-lg font-medium'>
                        <img src={logo} alt='logo' className='object-contain w-32' />
                        
                    </div>
                    <div className='relative z-20 mt-auto'>
                        <blockquote className="space-y-2">
                            <p className="text-lg">
                                &ldquo;This library has saved me countless hours of work and
                                helped me deliver stunning designs to my clients faster than
                                ever before.&rdquo;
                            </p>
                            <footer className="text-sm">Sofia Davis</footer>
                        </blockquote>
                    </div>
                </div>
                <div className='lg:p-8'>
                    <div className='mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]'>
                        <div className='flex flex-col space-y-2 text-center'>
                            <h1 className="text-2xl font-semibold tracking-tight">
                                Login to your account
                            </h1>
                            <p className="text-sm text-muted-foreground">
                                Enter your email below to login to your account
                            </p>
                        </div>
                        <Loginform />
                        <p className="px-8 text-center text-sm text-muted-foreground">
                            By clicking continue, you agree to our{" "}
                            <a
                                href="/terms"
                                className="underline underline-offset-4 hover:text-primary"
                            >
                                Terms of Service
                            </a>{" "}
                            and{" "}
                            <a
                                href="/privacy"
                                className="underline underline-offset-4 hover:text-primary"
                            >
                                Privacy Policy
                            </a>
                            .
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Loginview