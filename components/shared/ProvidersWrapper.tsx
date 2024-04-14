/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { useEffect } from "react";
import { Toaster } from "react-hot-toast";
// import { getUserProfileData } from "@/services/auth.api";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

export default function ProvidersWrapper({ children }: { children: React.ReactNode }) {
    // Set the last access time in localStorage when the app is loaded
    const setLastAccessTime = () => {
        localStorage.setItem("lastAccessTime", new Date().getTime() as any);
    };

    // Check the last access time and clear localStorage after a period of days
    const clearLocalStorageAfterDays = (days: number) => {
        const lastAccessTime = localStorage.getItem("lastAccessTime");
        if (lastAccessTime) {
            const currentTime = new Date().getTime();
            const elapsedTime = currentTime - parseInt(lastAccessTime, 10);
            const daysElapsed = Math.floor(elapsedTime / (24 * 60 * 60 * 1000));

            if (daysElapsed >= days) {
                // Clear the redux-persist storage
                // persistor.purge();
                // Set the last access time to the current time
                setLastAccessTime();
            }
        } else {
            // Set the last access time if not already set
            setLastAccessTime();
        }
    };

    //! Get all global data and set them into redux-store
    async function fetchGlobalData() {
    //         const userData = getUserProfileData();
    // await getCategoriesAPI();
    }

    useEffect(() => {
        clearLocalStorageAfterDays(1); // Adjust the number of days as needed
        (async () => {
            await fetchGlobalData();
        })();
    }, []);

    const queryClient = new QueryClient();

    return (
        <QueryClientProvider client={queryClient}>
            <Toaster position="top-center" containerClassName="custom-toaster" />
            {children}
            <div dir="ltr">
                <ReactQueryDevtools initialIsOpen={false} />
            </div>
        </QueryClientProvider>
    );
}
