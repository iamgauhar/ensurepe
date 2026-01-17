"use client"
import React, { useState } from 'react'
import AccordionWrapper from '../AccordionWrapper'
import CardNumberInput from '../CreditCardInputsFields/CardNumberInput'
import NameOnCardInput from '../CreditCardInputsFields/NameOnCardInput'
import ExpiryDateInput from '../CreditCardInputsFields/ExpiryDateInput'
import CvvInput from '../CreditCardInputsFields/CvvInput'

const CardIcon = () => {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_1_2543)">
                <path d="M21.5001 4.92857C21.8537 4.92857 22.143 5.21786 22.143 5.57143V6.85714H2.85728V5.57143C2.85728 5.21786 3.14657 4.92857 3.50014 4.92857H21.5001ZM22.143 10.7143V18.4286C22.143 18.7821 21.8537 19.0714 21.5001 19.0714H3.50014C3.14657 19.0714 2.85728 18.7821 2.85728 18.4286V10.7143H22.143ZM3.50014 3C2.08184 3 0.928711 4.15313 0.928711 5.57143V18.4286C0.928711 19.8469 2.08184 21 3.50014 21H21.5001C22.9184 21 24.0716 19.8469 24.0716 18.4286V5.57143C24.0716 4.15313 22.9184 3 21.5001 3H3.50014ZM5.75014 15.2143C5.21576 15.2143 4.78585 15.6442 4.78585 16.1786C4.78585 16.7129 5.21576 17.1429 5.75014 17.1429H7.67871C8.21309 17.1429 8.643 16.7129 8.643 16.1786C8.643 15.6442 8.21309 15.2143 7.67871 15.2143H5.75014ZM10.893 15.2143C10.3586 15.2143 9.92871 15.6442 9.92871 16.1786C9.92871 16.7129 10.3586 17.1429 10.893 17.1429H15.393C15.9274 17.1429 16.3573 16.7129 16.3573 16.1786C16.3573 15.6442 15.9274 15.2143 15.393 15.2143H10.893Z" fill="#0790DA" />
            </g>
            <defs>
                <clipPath id="clip0_1_2543">
                    <rect width="24" height="24" fill="white" />
                </clipPath>
            </defs>
        </svg>
    )
}

const MethodCard = ({ isOpen, onToggle }) => {
    return (
        <AccordionWrapper toggleClasses={"max-h-100 bg-[#1A1E2D]"} Icon={CardIcon} methodName={"Debit/Credit Cards"} toggle={isOpen} setToggle={onToggle} >
            <div className='bg-[#0A0F1D] p-6 rounded-lg grid grid-cols-2 gap-6'>
                <CardNumberInput />
                <NameOnCardInput />
                <ExpiryDateInput />
                <CvvInput />
                <div className='font-dm font-normal text-[14px] leading-5 text-white flex items-center gap-2'>
                    <input className='h-4.5 accent-[#0790DA] bg-transparent' type="checkbox" name="" id="" />
                    Save Card Details
                </div>
            </div>
        </AccordionWrapper>
    )
}

export default MethodCard