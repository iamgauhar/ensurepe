"use client"
import React, { useState } from 'react'
import AccordionWrapper from '../AccordionWrapper'
import GpayIcon from '../Icons/GpayIcon'
import PhonePeIcon from '../Icons/PhonePeIcon'
import BhimIcon from '../Icons/BhimIcon'
import AmazonPeIcon from '../Icons/AmazonPeIcon'


const QRIcon = () => {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M24 24H0V0H24V24Z" />
            <path d="M2 4.14286C2 2.95982 2.95982 2 4.14286 2H8.42857C9.61161 2 10.5714 2.95982 10.5714 4.14286V8.42857C10.5714 9.61161 9.61161 10.5714 8.42857 10.5714H4.14286C2.95982 10.5714 2 9.61161 2 8.42857V4.14286ZM4.85714 4.85714V7.71429H7.71429V4.85714H4.85714ZM2 15.5714C2 14.3884 2.95982 13.4286 4.14286 13.4286H8.42857C9.61161 13.4286 10.5714 14.3884 10.5714 15.5714V19.8571C10.5714 21.0402 9.61161 22 8.42857 22H4.14286C2.95982 22 2 21.0402 2 19.8571V15.5714ZM4.85714 16.2857V19.1429H7.71429V16.2857H4.85714ZM15.5714 2H19.8571C21.0402 2 22 2.95982 22 4.14286V8.42857C22 9.61161 21.0402 10.5714 19.8571 10.5714H15.5714C14.3884 10.5714 13.4286 9.61161 13.4286 8.42857V4.14286C13.4286 2.95982 14.3884 2 15.5714 2ZM19.1429 4.85714H16.2857V7.71429H19.1429V4.85714ZM13.4286 14.1429C13.4286 13.75 13.75 13.4286 14.1429 13.4286H17C17.3929 13.4286 17.7143 13.75 17.7143 14.1429C17.7143 14.5357 18.0357 14.8571 18.4286 14.8571H19.8571C20.25 14.8571 20.5714 14.5357 20.5714 14.1429C20.5714 13.75 20.8929 13.4286 21.2857 13.4286C21.6786 13.4286 22 13.75 22 14.1429V18.4286C22 18.8214 21.6786 19.1429 21.2857 19.1429H18.4286C18.0357 19.1429 17.7143 18.8214 17.7143 18.4286C17.7143 18.0357 17.3929 17.7143 17 17.7143C16.6071 17.7143 16.2857 18.0357 16.2857 18.4286V21.2857C16.2857 21.6786 15.9643 22 15.5714 22H14.1429C13.75 22 13.4286 21.6786 13.4286 21.2857V14.1429ZM18.4286 22C18.2391 22 18.0574 21.9247 17.9235 21.7908C17.7895 21.6568 17.7143 21.4752 17.7143 21.2857C17.7143 21.0963 17.7895 20.9146 17.9235 20.7806C18.0574 20.6467 18.2391 20.5714 18.4286 20.5714C18.618 20.5714 18.7997 20.6467 18.9336 20.7806C19.0676 20.9146 19.1429 21.0963 19.1429 21.2857C19.1429 21.4752 19.0676 21.6568 18.9336 21.7908C18.7997 21.9247 18.618 22 18.4286 22ZM21.2857 22C21.0963 22 20.9146 21.9247 20.7806 21.7908C20.6467 21.6568 20.5714 21.4752 20.5714 21.2857C20.5714 21.0963 20.6467 20.9146 20.7806 20.7806C20.9146 20.6467 21.0963 20.5714 21.2857 20.5714C21.4752 20.5714 21.6568 20.6467 21.7908 20.7806C21.9247 20.9146 22 21.0963 22 21.2857C22 21.4752 21.9247 21.6568 21.7908 21.7908C21.6568 21.9247 21.4752 22 21.2857 22Z" fill="#00A3FF" />
        </svg>
    )
}

const UPIMethods = [
    {
        Icon: GpayIcon,
        name: "Google Pay",
    },
    {
        Icon: PhonePeIcon,
        name: "PhonePe",
    },
    {
        Icon: BhimIcon,
        name: "BHIM",
    },
    {
        Icon: AmazonPeIcon,
        name: "Amazon Pay",
    },
]
const MethodUPI = ({ isOpen, onToggle }) => {
    return (
        <AccordionWrapper Icon={QRIcon} methodName={"UPI / QR Code"} toggleClasses={"max-h-100 border-[#0790DA] border"} {...{ toggle: isOpen, setToggle: onToggle }}>
            <div className='flex gap-6'>
                <div className='h-[235px] min-w-[235px] rounded-lg'>
                    <img className='w-full h-full object-cover' src='qr-img.png' alt='QR' />
                </div>
                <div className='w-full grid gap-6 items-start h-fit'>
                    <div>
                        <input className='font-dm font-normal text-[16px] leading-6 text-white placeholder:text-[#ADAEBC] bg-[#0A0F1D] border-[0.5px] border-[#E0E0E080] rounded-lg p-4 w-full' type="text" placeholder='Enter your UPI ID' />
                        <div className='font-dm font-normal text-[14px] leading-5 text-[#9CA3AF] pt-2'>You will receive a request on your UPI app</div>
                    </div>
                    <div>
                        <div className='font-dm font-medium text-[12px] leading-4 text-[#FFFFFF]'>Scan the QR using any UPI App</div>
                        <div className='flex items-center gap-3 pt-2'>
                            {
                                UPIMethods.map((upiApp, i) => {
                                    return <button className='h-8 w-8 rounded-full border border-[#E0E0E080] grid place-content-center' key={i}><upiApp.Icon /></button>
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </AccordionWrapper>
    )
}

export default MethodUPI