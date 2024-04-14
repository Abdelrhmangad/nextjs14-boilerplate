"use client";
import { useTranslations } from "next-intl";
import React, { useState } from "react";
import { FaEye } from "react-icons/fa";
import { RiEyeCloseFill } from "react-icons/ri";
import RoutingLink from "@/components/shared/RoutingLink";

import { UseFormRegister } from "react-hook-form";
import { FieldErrors } from "react-hook-form";

type PasswordInputType = {
  register: UseFormRegister<{ password: string } | any>;
  errors: FieldErrors<{ password: { type: string; message: string } }>;
  watch: any;
};

export default function PasswordInput({
    register,
    errors,
    watch,
}: PasswordInputType) {
    const t = useTranslations();
    const [showPassword, toggleShowPassword] = useState(false);
    return (
        <div className="mb-4 w-full max-w-[440px]">
            <div className="flex">
                <div className="flex-grow-1">
                    <label className="block mb-2 font-medium text-gray-700">
                        {t("password")}
                    </label>
                </div>
                <div className="ltr:ml-auto rtl:mr-auto">
                    <RoutingLink
                        href="contact-us"
                        className="block mb-2 font-medium text-gray-400"
                    >
                        {t("forgetPassword")}
                    </RoutingLink>
                </div>
            </div>

            <div className="flex">
                <input
                    type={showPassword ? "text" : `password`}
                    {...register("password", {
                        required: true,
                        minLength: 8,
                    })}
                    className="w-full placeholder:text-sm p-2 rounded border border-transparent ring ring-transparent focus:outline-transparent focus:ring-primaryHover"
                    placeholder={t("forgetPassword")}
                    aria-label="Password"
                    required
                    aria-describedby="password-addon"
                />
                <button
                    className="px-4 border rounded border-gray-50 bg-gray-200 ltr:rounded-l-none rtl:rounded-r-none ltr:border-l-0 rtl:border-r-0 "
                    type="button"
                    id="password-addon"
                    onClick={() => toggleShowPassword(!showPassword)}
                >
                    {showPassword ? (
                        <FaEye className="w-5 h-5 text-primary" />
                    ) : (
                        <RiEyeCloseFill className="w-5 h-5 text-primary" />
                    )}
                </button>
            </div>

            {errors.password?.type == "required" && (
                <p className="text-red-400 absolute -bottom-2 start-0">
          كلمة السر مطلوبه
                </p>
            )}
            {watch && watch("password")?.length < 8 && (
                <p className="text-red-400 absolute -bottom-2 start-0">
          كلمة السر يجب ان لا تقل عن 8 أحرف أو أرقام
                </p>
            )}
        </div>
    );
}
