import Link from 'next/link'
import React from 'react'

const UsefulLinks = () => {
    return (
        <div className='flex items-center gap-3 justify-center text-white p-2'>
            <Link className='font-dm text-[14px] leading-5 underline underline-offset-1 text-[#E0E0E0]' href={"/"}>Privacy Policy</Link>
            |
            <Link className='font-dm text-[14px] leading-5 underline underline-offset-1 text-[#E0E0E0]' href={"/"}>Terms & Conditions</Link>
            |
            <Link className='font-dm text-[14px] leading-5 underline underline-offset-1 text-[#E0E0E0]' href={"/"}>Support</Link>

        </div>
    )
}

export default UsefulLinks