import React from "react";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import { useTranslations } from "next-intl";

type PhoneInputType = {
  register: UseFormRegister<{ phone: string } | any>;
  errors: FieldErrors<{ phone: { type: string; message: string } }>;
};
export default function PhoneInput({ register, errors }: PhoneInputType) {
    const t = useTranslations();

    return (
        <div className="mb-4 w-full max-w-[440px] relative">
            <label
                htmlFor="example-text-input"
                className="block mb-2 font-medium text-gray-700"
            >
                {t("phone")}
            </label>
            <input
                type="number"
                {...register("phone", {
                    required: true,
                })}
                id="phoneNumber"
                className="w-full placeholder:text-sm p-2 rounded border border-transparent ring ring-transparent focus:outline-transparent focus:ring-primaryHover"
                placeholder={t("phone")}
            />

            {errors.phone?.type == "required" && (
                <span className="text-danger absolute -bottom-6 text-sm end-0">
          رقم الهاتف مطلوب
                </span>
            )}
        </div>
    );
}
