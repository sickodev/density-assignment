"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState<boolean>(false);
    const menuList = [
        {
            id: 1,
            title: "Emotions",
        },
        {
            id: 2,
            title: "Manifesto",
        },
        {
            id: 3,
            title: "Self-awareness test",
        },
        {
            id: 4,
            title: "Work With Us",
        },
    ];

    const handleButtonClick = () => {
        setMenuOpen(!menuOpen);
    };
    return (
        <nav>
            <div className='flex items-center justify-between space-x-5 px-12'>
                <Image
                    src='https://store-images.s-microsoft.com/image/apps.22242.a54ce72f-202b-4274-91d8-f484bb1da790.217825f0-8b11-4e1a-8713-4f00dad2cabe.ef408ed7-6a95-47f3-9243-be5062771046'
                    alt=''
                    width={90}
                    height={60}
                    className='object-contain'
                />
                <div className='md:flex space-x-8 justify-between px-12 pl-32 hidden'>
                    <Link
                        href={"/"}
                        className='transition-all duration-200 ease-in active:scale-95'
                    >
                        Emotions
                    </Link>
                    <Link
                        href={"/"}
                        className='transition-all duration-200 ease-in active:scale-95'
                    >
                        Manifesto
                    </Link>
                    <Link
                        href={"/"}
                        className='transition-all duration-200 ease-in active:scale-95'
                    >
                        Self-awareness test
                    </Link>
                    <Link
                        href={"/"}
                        className='transition-all duration-200 ease-in active:scale-95'
                    >
                        Work With Us
                    </Link>
                </div>
                <button className='md:block hidden p-3 bg-black text-white rounded-full text-sm'>
                    Download app
                </button>
                <button
                    className='block md:hidden transition-all duration-200 ease-in active:scale-95'
                    onClick={handleButtonClick}
                >
                    {!menuOpen && <Bars3BottomRightIcon className='h-9 w-9' />}
                </button>
            </div>
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ x: 200, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        layout
                        exit={{ x: 200, opacity: 0 }}
                        transition={{
                            type: "tween",
                            duration: 0.3,
                            staggerChildren: 0.2,
                        }}
                        className='space-y-5 md:hidden absolute top-0 left-0 bg-gradient-to-b from-violet-400 to-white h-full w-full'
                    >
                        <div className='absolute top-0 left-0  filter blur-md opacity-60 w-screen h-full p-2 -z-40' />
                        <motion.div className='flex-grow flex justify-end px-12 py-4'>
                            {menuOpen && (
                                <button onClick={handleButtonClick}>
                                    <XMarkIcon className='h-9 w-9' />
                                </button>
                            )}
                        </motion.div>
                        <motion.div>
                            <motion.ul
                                transition={{ staggerChildren: 0.5 }}
                                className='flex flex-col items-center justify-center space-y-4 p-2'
                            >
                                {menuList.map((menuListItem) => (
                                    <motion.a
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        key={menuListItem.id}
                                        href='/'
                                        className='p-2 font-bold transition-all duration-200 ease-in active:scale-95'
                                    >
                                        <h3>{menuListItem.title}</h3>
                                    </motion.a>
                                ))}
                                <button className='w-[20vw] block md:hidden p-3 bg-black text-white rounded-full text-sm'>
                                    Download app
                                </button>
                            </motion.ul>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
