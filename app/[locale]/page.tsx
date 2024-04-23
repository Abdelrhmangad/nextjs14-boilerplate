import Image from "next/image";
import AvatarOne from "@/public/theme-images/avatar-1.jpg";
import AvatarTwo from "@/public/theme-images/avatar-2.jpg";
import AuthImg from "@/public/theme-images/auth-bg.jpg";
import LogoSvg from "@/public/theme-images/logo-sm.svg";

export default function Home() {
    return (
        <main className="">
            <div className="container-fluid">
                <div className="h-screen md:overflow-hidden">
                    <div className="grid grid-cols-1 md:grid-cols-12 ">
                        <div className="relative z-50 col-span-12 md:col-span-5 lg:col-span-4 xl:col-span-3">
                            <div className="w-full p-10 bg-white xl:p-12 dark:bg-zinc-800">
                                <div className="flex h-[90vh] flex-col">
                                    <div className="mx-auto mb-12">
                                        <a href="index.html" className="">
                                            <Image src={LogoSvg} alt="" className="inline h-7" />{" "}
                                            <span className="text-xl font-medium align-middle ltr:ml-1.5 rtl:mr-1.5 dark:text-white">
                        Minia
                                            </span>
                                        </a>
                                    </div>

                                    <div className="my-auto">
                                        <div className="text-center">
                                            <h5 className="font-medium text-gray-700 dark:text-gray-100">
                        Welcome Back !
                                            </h5>
                                            <p className="mt-2 mb-4 text-gray-500 dark:text-gray-100/60">
                        Sign in to continue to Minia.
                                            </p>
                                        </div>

                                        <form className="pt-2" action="index.html">
                                            <div className="mb-4">
                                                <label className="block mb-2 font-medium text-gray-700 dark:text-gray-100">
                          Username
                                                </label>
                                                <input
                                                    type="text"
                                                    className="w-full py-1.5 border-gray-50 rounded placeholder:text-13 bg-gray-50/30 dark:bg-zinc-700/50 dark:border-zinc-600 dark:text-gray-100 dark:placeholder:text-zinc-100/60 focus:ring focus:ring-violet-500/20 focus:border-violet-100 text-13"
                                                    id="username"
                                                    placeholder="Enter username"
                                                />
                                            </div>
                                            <div className="mb-3">
                                                <div className="flex">
                                                    <div className="flex-grow-1">
                                                        <label className="block mb-2 font-medium text-gray-600 dark:text-gray-100">
                              Password
                                                        </label>
                                                    </div>
                                                    <div className="ltr:ml-auto rtl:mr-auto">
                                                        <a
                                                            href="#"
                                                            className="text-gray-500 dark:text-gray-100"
                                                        >
                              Forgot password?
                                                        </a>
                                                    </div>
                                                </div>

                                                <div className="flex">
                                                    <input
                                                        type="password"
                                                        className="w-full py-1.5 border-gray-50 rounded ltr:rounded-r-none rtl:rounded-l-none bg-gray-50/30 placeholder:text-13 text-13 dark:bg-zinc-700/50 dark:border-zinc-600 dark:text-gray-100 dark:placeholder:text-zinc-100/60 focus:ring focus:ring-violet-500/20 focus:border-violet-100"
                                                        placeholder="Enter password"
                                                        aria-label="Password"
                                                        aria-describedby="password-addon"
                                                    />
                                                    <button
                                                        className="px-4 border rounded border-gray-50 bg-gray-50 ltr:rounded-l-none rtl:rounded-r-none ltr:border-l-0 rtl:border-r-0 dark:bg-zinc-700 dark:border-zinc-600 dark:text-gray-100"
                                                        type="button"
                                                        id="password-addon"
                                                    >
                                                        <i className="mdi mdi-eye-outline"></i>
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="mb-6 row">
                                                <div className="col">
                                                    <div>
                                                        <input
                                                            type="checkbox"
                                                            className="w-4 h-4 mt-1 align-top transition duration-200 bg-white bg-center bg-no-repeat bg-contain border border-gray-300 rounded cursor-pointer checked:bg-blue-600 checked:border-blue-600 focus:outline-none ltr:float-left rtl:float-right ltr:mr-2 rtl:ml-2 focus:ring-offset-0"
                                                            checked
                                                            id="exampleCheck1"
                                                        />
                                                        <label className="font-medium text-gray-600 align-middle dark:text-gray-100">
                              Remember me
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mb-3">
                                                <button
                                                    className="w-full py-2 text-white border-transparent shadow-md btn bg-violet-500 w-100 waves-effect waves-light shadow-violet-200 dark:shadow-zinc-600"
                                                    type="submit"
                                                >
                          Log In
                                                </button>
                                            </div>
                                        </form>

                                        <div className="pt-2 mt-5 text-center">
                                            <div>
                                                <h6 className="mb-3 font-medium text-gray-500 text-14 dark:text-gray-100">
                          - Sign in with -
                                                </h6>
                                            </div>

                                            <div className="flex justify-center gap-3">
                                                <a
                                                    href=""
                                                    className="w-8 h-8 leading-8 rounded-full bg-violet-500"
                                                >
                                                    <i className="text-sm text-white mdi mdi-facebook"></i>
                                                </a>
                                                <a
                                                    href=""
                                                    className="w-8 h-8 leading-8 rounded-full bg-sky-500"
                                                >
                                                    <i className="text-sm text-white mdi mdi-twitter"></i>
                                                </a>
                                                <a
                                                    href=""
                                                    className="w-8 h-8 leading-8 bg-red-400 rounded-full"
                                                >
                                                    <i className="text-sm text-white mdi mdi-google"></i>
                                                </a>
                                            </div>
                                        </div>

                                        <div className="mt-12 text-center">
                                            <p className="text-gray-500 dark:text-gray-100">
                        Do not have an account ?{" "}
                                                <a
                                                    href="register.html"
                                                    className="font-semibold text-violet-500"
                                                >
                                                    {" "}
                          Signup now{" "}
                                                </a>{" "}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="text-center ">
                                        <p className="relative text-gray-500 dark:text-gray-100">
                      ©
                                            <script>document.write(new Date().getFullYear())</script>{" "}
                      Minia . Crafted with{" "}
                                            <i className="text-red-400 mdi mdi-heart"></i> by
                      Themesbrand
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-12 md:col-span-7 lg:col-span-8 xl:col-span-9">
                            <div className="h-screen bg-cover relative p-5">
                                <div className="absolute inset-0 bg-violet-500/90"></div>

                                <ul className="absolute top-0 left-0 w-full h-full overflow-hidden bg-bubbles animate-square">
                                    <li className="h-10 w-10 rounded-3xl bg-white/10 absolute left-[10%] "></li>
                                    <li className="h-28 w-28 rounded-3xl bg-white/10 absolute left-[20%]"></li>
                                    <li className="h-10 w-10 rounded-3xl bg-white/10 absolute left-[25%]"></li>
                                    <li className="h-20 w-20 rounded-3xl bg-white/10 absolute left-[40%]"></li>
                                    <li className="h-24 w-24 rounded-3xl bg-white/10 absolute left-[70%]"></li>
                                    <li className="h-32 w-32 rounded-3xl bg-white/10 absolute left-[70%]"></li>
                                    <li className="h-36 w-36 rounded-3xl bg-white/10 absolute left-[32%]"></li>
                                    <li className="h-20 w-20 rounded-3xl bg-white/10 absolute left-[55%]"></li>
                                    <li className="h-12 w-12 rounded-3xl bg-white/10 absolute left-[25%]"></li>
                                    <li className="h-36 w-36 rounded-3xl bg-white/10 absolute left-[90%]"></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
