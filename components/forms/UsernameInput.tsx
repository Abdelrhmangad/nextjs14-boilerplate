import { useTranslations } from "next-intl";
import React from "react";
import { UseFormRegister } from "react-hook-form";
import { FieldErrors } from "react-hook-form";

type UsernameInputType = {
  register: UseFormRegister<{ username: string } | any>;
  errors: FieldErrors<{ username: { type: string; message: string } }>;
};

export default function UsernameInput({ register, errors }: UsernameInputType) {
    const t = useTranslations();

    return (
        <div className="mb-4 w-full max-w-[440px] relative">
            <label
                htmlFor="example-text-input"
                className="block mb-2 font-medium text-gray-700"
            >
                {t("email")}
            </label>
            <input
                className="w-full placeholder:text-sm p-2 rounded border border-transparent ring ring-transparent focus:outline-transparent focus:ring-primaryHover"
                type="text"
                required
                {...register("username", {
                    required: true,
                })}
                placeholder={t("email")}
                id="email-input"
            />

            {errors.username?.type == "required" && (
                <p className="text-red-400 absolute -bottom-2 start-0">
          البريد الالكتروني مطلوب
                </p>
            )}
        </div>
    );
}
