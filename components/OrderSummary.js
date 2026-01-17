import React from 'react'
import ContainerWrapper from './ContainerWrapper'

const TagIcon = () => {
    return (
        <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_1_2355)">
                <path d="M14 16H0V0H14V16Z" stroke="" />
                <path d="M0 2.5V7.17187C0 7.70312 0.209375 8.2125 0.584375 8.5875L6.08437 14.0875C6.86562 14.8687 8.13125 14.8687 8.9125 14.0875L13.0844 9.91562C13.8656 9.13437 13.8656 7.86875 13.0844 7.0875L7.58437 1.5875C7.20937 1.2125 6.7 1.00312 6.16875 1.00312H1.5C0.671875 0.999999 0 1.67187 0 2.5ZM3.5 3.5C3.76522 3.5 4.01957 3.60536 4.20711 3.79289C4.39464 3.98043 4.5 4.23478 4.5 4.5C4.5 4.76522 4.39464 5.01957 4.20711 5.20711C4.01957 5.39464 3.76522 5.5 3.5 5.5C3.23478 5.5 2.98043 5.39464 2.79289 5.20711C2.60536 5.01957 2.5 4.76522 2.5 4.5C2.5 4.23478 2.60536 3.98043 2.79289 3.79289C2.98043 3.60536 3.23478 3.5 3.5 3.5Z" fill="#4ADE80" />
            </g>
            <defs>
                <clipPath id="clip0_1_2355">
                    <rect width="14" height="16" fill="white" />
                </clipPath>
            </defs>
        </svg>
    )
}

const OrderSummary = () => {
    return (
        <ContainerWrapper>
            <div className='grid gap-4'>
                <div className='font-dm font-bold text-[16px] leading-6 text-white'>Order Summary</div>
                <div className='grid gap-3 border-b pb-2 border-[#BCBEC080]'>
                    <div className='font-dm font-normal text-[16px] leading-6 text-white flex items-center gap-4 justify-between'>
                        <div>Total Amount</div>
                        <div>₹12,299</div>
                    </div>
                    <button className='font-dm font-normal text-[16px] leading-6 text-[#4ADE80] flex items-center gap-2'>
                        <TagIcon />
                        2 offers available
                    </button>
                </div>
                <div className='font-dm font-bold text-[16px] leading-6 text-white flex items-center gap-4 justify-between'>
                    <div>Total Amount</div>
                    <div>₹12,299</div>
                </div>
            </div>
        </ContainerWrapper >
    )
}

export default OrderSummary