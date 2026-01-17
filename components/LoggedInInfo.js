import React from 'react'
import ContainerWrapper from './ContainerWrapper'

const LoggedInInfo = () => {
    return (
        <ContainerWrapper>
            <div className='grid gap-4'>
                <div className='font-dm font-medium text-[14px] leading-5 text-[#9CA3AF]'>Logged in as</div>
                <div className='flex items-center gap-4 justify-between'>
                    <div className='font-semibold text-[16px] leading-[100%] text-white'>+91 98765 43210</div>
                    <button className='font-dm font-normal text-[14px] leading-5 text-[#00A3FF]'>Change</button>
                </div>
            </div>
        </ContainerWrapper>
    )
}

export default LoggedInInfo