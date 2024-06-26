import type { Metadata } from "next";
import "../globals.scss";
import { unstable_setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import ProvidersWrapper from "@/components/shared/ProvidersWrapper";

export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default async function RootLayout({
    children,
    params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
    unstable_setRequestLocale(locale);

    // the try block below loads our JSON files and
    // it's passed to the NextIntl Provider as messages
    let locales;
    try {
        locales = (await import(`../../languages/${locale}.json`)).default;
    } catch (error) {
    // this is a 404 page function provided by nextjs
        notFound();
    }

    return (
        <html lang={locale} dir={locale === "ar" ? "rtl" : "ltr"}>
            <body>
                <NextIntlClientProvider locale={locale} messages={locales}>
                    <ProvidersWrapper>{children}</ProvidersWrapper>
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
