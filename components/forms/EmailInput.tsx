import React from "react";

export default function EmailInput() {
    return (
        <div className="mb-4 w-full max-w-[440px]">
            <label
                htmlFor="example-text-input"
                className="block mb-2 font-medium text-gray-700"
            >
        Email
            </label>
            <input
                className="w-full placeholder:text-sm p-2 rounded border border-transparent ring ring-transparent focus:outline-transparent focus:ring-primaryHover"
                type="email"
                required
                placeholder="bootstrap@example.com"
                id="email-input"
            />
        </div>
    );
}
