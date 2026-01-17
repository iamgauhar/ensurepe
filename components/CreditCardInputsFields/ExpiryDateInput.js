"use client";
import { useState } from "react";

const ExpiryDateInput = () => {
    const [value, setValue] = useState("");

    const formatExpiry = (input) => {
        let digits = input.replace(/\D/g, "");

        // Limit to 4 digits (MMYY)
        if (digits.length > 4) digits = digits.slice(0, 4);

        // Auto-fix invalid month
        if (digits.length >= 2) {
            let month = digits.slice(0, 2);
            if (parseInt(month) > 12) month = "12";
            if (parseInt(month) === 0) month = "01";
            digits = month + digits.slice(2);
        }

        // Format MM / YY
        if (digits.length <= 2) return digits;
        return `${digits.slice(0, 2)} / ${digits.slice(2)}`;
    };


    return (
        <div className="flex flex-col gap-2">
            <label className="font-dm font-medium text-[16px] leading-6 text-white" >Expiry Date</label>
            <input
                type="text"
                inputMode="numeric"
                placeholder="MM / YY"
                maxLength={7}
                value={value}
                onChange={(e) => setValue(formatExpiry(e.target.value))}
                className="w-full text-[16px] leading-6 text-[#E0E0E0] rounded-lg border border-[#E0E0E080] bg-transparent p-3 outline-none focus:border-[#0391C7CC]"
            />
        </div>
    );
};

export default ExpiryDateInput;
