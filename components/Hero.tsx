import { StarIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import React from "react";
import { BsApple } from "react-icons/bs";

const Hero = () => {
    return (
        <div className='mx-4 my-2 bg-violet-300/70 rounded-[20px]'>
            <div className='flex items-center justify-between md:px-16 px-4 py-12'>
                <div className='md:flex-grow md:basis-1/2 flex-1'>
                    <p className='text-xs'>Ahead app</p>
                    <h2 className='font-extrabold text-5xl tracking-wide leading-normal'>
                        Master your life <br /> by mastering <br />
                        <span className='px-2 py-1 text-white bg-violet-400 rounded-xl'>
                            emotions.
                        </span>
                    </h2>
                    <div className='mx-2 my-1 py-2 flex items-center space-x-8'>
                        <button className='flex items-center mx-2 p-1.5 bg-black rounded-md shadow-md gap-2'>
                            <BsApple className='h-4 w-4 text-white' />
                            <p className='text-white text-sm leading-3'>
                                <span className='text-[8px]'>
                                    Download from
                                </span>{" "}
                                <br /> App Store
                            </p>
                        </button>
                        <div>
                            <div className='flex gap-1'>
                                <StarIcon className='h-5 w-5 text-yellow-200' />
                                <StarIcon className='h-5 w-5 text-yellow-200' />
                                <StarIcon className='h-5 w-5 text-yellow-200' />
                                <StarIcon className='h-5 w-5 text-yellow-200' />
                                <StarIcon className='h-5 w-5 text-yellow-200' />
                            </div>
                            <p className='font-light text-[10px]'>
                                100+ AppStore Reviews
                            </p>
                        </div>
                    </div>
                </div>
                <div className='flex-grow basis-1/2 hidden md:block'>
                    <div className='border-tr-2 border-tl-2 py-2 rounded-full border-tl-violet-500/40 border-tr-violet-500/40 shadow'>
                        <Image
                            src={"/phone-mockup.png"}
                            alt=''
                            height={500}
                            width={500}
                            className='object-contain'
                        />{" "}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
