import React from 'react'

const ContainerWrapper = ({ children }) => {
    return (
        <div className='bg-[#1E2740] rounded-xl p-4'>
            {children}
        </div>
    )
}

export default ContainerWrapper