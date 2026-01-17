import React from 'react'
import ContainerWrapper from './ContainerWrapper'

const MerchantTitleCard = () => {
    return (
        <ContainerWrapper>
            <div className='flex items-center gap-2'>
                <div className='h-12 w-12 min-w-12 rounded-full overflow-hidden'>
                    <img src="box-pack.png" alt="" />
                </div>
                <div className=''>
                    <h2 className='font-dm font-bold text-[20px] text-white'>Myntra</h2>
                    <div className='font-dm font-normal text-[14px] leading-5 text-[#9CA3AF]'>Myntra Private Limited</div>
                </div>
            </div>
        </ContainerWrapper>
    )
}

export default MerchantTitleCard