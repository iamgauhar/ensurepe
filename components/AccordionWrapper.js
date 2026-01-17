
import React from 'react'

const ArrowIcon = () => {
    return (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.5 6.75L9 11.25L13.5 6.75" stroke="white" strokeWidth="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
    )
}

const AccordionWrapper = ({ Icon, methodName, children, toggle, setToggle, toggleClasses }) => {
    return (
        <div className={`${toggle ? toggleClasses : "min-h-14 h-14 overflow-hidden bg-[#1A1E2D] border-[0.5px] border-[#E0E0E080]"} transition-all duration-500 ease-in-out rounded-lg p-4 grid gap-6`}>
            <div onClick={() => setToggle(!toggle)} className='flex items-center justify-between w-full font-dm font-bold text-[16px] leading-6 text-white cursor-pointer'>
                <div className='flex items-center gap-2'>
                    <Icon />
                    {methodName}
                </div>
                <button className={toggle ? "rotate-180 duration-500 ease-in-out" : "rotate-0 duration-500 ease-in-out"}><ArrowIcon /></button>
            </div>
            <div className={`transition-opacity duration-300 ease-in-out mt-4 ${toggle ? "opacity-100" : "opacity-0"}`}>
                {children}
            </div>
        </div>
    )
}

export default AccordionWrapper