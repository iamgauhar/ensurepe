import React from 'react'

const NameOnCardInput = () => {
    return (
        <div className="flex flex-col gap-2">
            <label className="font-dm font-medium text-[16px] leading-6 text-white" >Name on Card</label>
            <input
                type="text"
                placeholder="Enter Name on Card"
                onChange={(e) => { }}
                className="w-full text-[16px] leading-6 text-[#E0E0E0] rounded-lg border border-[#E0E0E080] bg-transparent p-3 outline-none focus:border-[#0391C7CC]"
            />
        </div>
    );
}

export default NameOnCardInput