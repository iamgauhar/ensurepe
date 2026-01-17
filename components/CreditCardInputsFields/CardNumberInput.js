"use client";
import { useState } from "react";

const CardNumberInput = () => {
    const [value, setValue] = useState("");

    const formatCardNumber = (number) => {
        // Remove non-digits
        const digits = number.replace(/\D/g, "");

        // Add space after every 4 digits
        return digits.replace(/(.{4})/g, "$1 ").trim();
    };


    return (
        <div className="flex flex-col gap-2">
            <label className="font-dm font-medium text-[16px] leading-6 text-white" >Card Number</label>
            <input
                type="text"
                inputMode="numeric"
                placeholder="Enter card number"
                maxLength={19}
                value={value}
                onChange={(e) => setValue(formatCardNumber(e.target.value))}
                className="w-full text-[16px] leading-6 text-[#E0E0E0] rounded-lg border border-[#E0E0E080] bg-transparent p-3 outline-none focus:border-[#0391C7CC]"
            />
        </div>
    );
};

export default CardNumberInput;
