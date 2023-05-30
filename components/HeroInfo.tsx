import React from "react";

const HeroInfo = () => {
    return (
        <div>
            <div className='flex items-center justify-between space-x-5 px-8 py-2'>
                <h3 className='basis-1/3text-center font-bold'>EQ beats IQ</h3>
                <p className='basis-1/4 text-sm p-1 text-gray-500 tracking-wide'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                </p>
                <p className='basis-1/4 text-sm p-1 text-gray-500 tracking-wide'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                </p>
            </div>
        </div>
    );
};

export default HeroInfo;
