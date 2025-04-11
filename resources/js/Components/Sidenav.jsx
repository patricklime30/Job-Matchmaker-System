import { Link, usePage } from "@inertiajs/react";
import ApplicationLogo from "./ApplicationLogo";

export default function Sidenav() {

    const { url } = usePage();

    // Check if the current route is the dashboard
    const isDashboard = url === '/dashboard';
    const isTestHistory = url === '/test_history';
    const isProfile = url === '/profile';
    const isJobRecommendation = url === '/job_recommendation';

    return (
        <aside className="max-w-62.5 ease-nav-brand z-990 fixed inset-y-0 my-4 ml-4 block w-full -translate-x-full flex-wrap items-center justify-between rounded-2xl border-0 bg-white p-0 antialiased shadow-none transition-transform duration-200 xl:left-0 xl:translate-x-0 xl:bg-transparent">
            <div className="h-20">
                <i className="absolute top-0 right-0 hidden p-4 opacity-50 cursor-pointer fa fa-times text-slate-400 xl:hidden" sidenav-close></i>
                <a className="block px-8 py-6 m-0 text-sm whitespace-nowrap text-slate-700" href="#">
                    <ApplicationLogo className="inline h-9 w-auto fill-current text-gray-800 rounded-lg" />
                
                    <span className="ml-2 font-semibold transition-all duration-200 ease-nav-brand">
                        Job Matchmaker
                    </span>
                </a>
            </div>

            <hr className="h-px mt-0 mb-4 bg-transparent bg-gradient-to-r from-transparent via-black/40 to-transparent" />

            <div className="items-center block w-auto max-h-screen overflow-auto grow basis-full">
                <ul className="flex flex-col pl-0 mb-0">
                    <li className="mt-0.5 w-full">
                        <a className={` ${isDashboard ? 'rounded-lg bg-white shadow-soft-xl font-semibold text-slate-700' : ''} py-2.7 text-sm ease-nav-brand my-0 mx-4 flex items-center whitespace-nowrap px-4 transition-colors`} href={route('dashboard')}>
                            <div className={` ${isDashboard ? 'bg-gradient-to-tl from-purple-700 to-pink-500' : '' } shadow-soft-2xl mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-white bg-center stroke-0 text-center xl:p-1.5`}>
                                <svg class={isDashboard ? "text-gray-100" : "text-gray-800"} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                    <path fill-rule="evenodd" d="M11.293 3.293a1 1 0 0 1 1.414 0l6 6 2 2a1 1 0 0 1-1.414 1.414L19 12.414V19a2 2 0 0 1-2 2h-3a1 1 0 0 1-1-1v-3h-2v3a1 1 0 0 1-1 1H7a2 2 0 0 1-2-2v-6.586l-.293.293a1 1 0 0 1-1.414-1.414l2-2 6-6Z" clip-rule="evenodd"/>
                                </svg>

                            </div>

                            <span className="ml-1 duration-300 opacity-100 pointer-events-none ease-soft">Dashboard</span>
                        </a>
                    </li>

                    <li className="mt-0.5 w-full">
                        <a className={` ${isTestHistory ? 'rounded-lg bg-white shadow-soft-xl font-semibold text-slate-700' : ''} py-2.7 text-sm ease-nav-brand my-0 mx-4 flex items-center whitespace-nowrap px-4 transition-colors`} href="./pages/tables.html">
                            <div className={` ${isTestHistory ? 'bg-gradient-to-tl from-purple-700 to-pink-500' : '' } shadow-soft-2xl mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-white bg-center stroke-0 text-center xl:p-1.5`}>
                                <svg className={isTestHistory ? "text-gray-100" : "text-gray-800"} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                    <path fill-rule="evenodd" d="M2 6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6Zm4.996 2a1 1 0 0 0 0 2h.01a1 1 0 1 0 0-2h-.01ZM11 8a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2h-6Zm-4.004 3a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2h-.01ZM11 11a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2h-6Zm-4.004 3a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2h-.01ZM11 14a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2h-6Z" clip-rule="evenodd"/>
                                </svg>

                            </div>

                            <span className="ml-1 duration-300 opacity-100 pointer-events-none ease-soft">Test History</span>
                        </a>
                    </li>

                    <li className="mt-0.5 w-full">
                        <a className={` ${isJobRecommendation ? 'rounded-lg bg-white shadow-soft-xl font-semibold text-slate-700' : ''} py-2.7 text-sm ease-nav-brand my-0 mx-4 flex items-center whitespace-nowrap px-4 transition-colors`} href="./pages/billing.html">
                            <div className={` ${isJobRecommendation ? 'bg-gradient-to-tl from-purple-700 to-pink-500' : '' } shadow-soft-2xl mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-white bg-center stroke-0 text-center xl:p-1.5`}>
                                
                                <svg class={isJobRecommendation ? "text-gray-100" : "text-gray-800"} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                    <path fill-rule="evenodd" d="M6 2a2 2 0 0 0-2 2v15a3 3 0 0 0 3 3h12a1 1 0 1 0 0-2h-2v-2h2a1 1 0 0 0 1-1V4a2 2 0 0 0-2-2h-8v16h5v2H7a1 1 0 1 1 0-2h1V2H6Z" clip-rule="evenodd"/>
                                </svg>

                            </div>
                            <span className="ml-1 duration-300 opacity-100 pointer-events-none ease-soft">Job Recommendation</span>
                        </a>
                    </li>

                    <li class="w-full mt-4">
                        <h6 class="pl-6 ml-2 text-xs font-bold leading-tight uppercase opacity-60">Settings</h6>
                    </li>

                    <li class="mt-0.5 w-full">
                        <a class={` ${isProfile ? 'rounded-lg bg-white shadow-soft-xl font-semibold text-slate-700' : ''} py-2.7 text-sm ease-nav-brand my-0 mx-4 flex items-center whitespace-nowrap px-4 transition-colors`} href={ route('profile.edit') }>
                            <div class={` ${isProfile ? 'bg-gradient-to-tl from-purple-700 to-pink-500' : '' } shadow-soft-2xl mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-white bg-center stroke-0 text-center xl:p-1.5`}>
                                <svg class={isProfile ? "text-gray-100" : "text-gray-800"} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                    <path fill-rule="evenodd" d="M12 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-2 9a4 4 0 0 0-4 4v1a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1a4 4 0 0 0-4-4h-4Z" clip-rule="evenodd"/>
                                </svg>

                            </div>

                            <span class="ml-1 duration-300 opacity-100 pointer-events-none ease-soft">Profile</span>
                        </a>
                    </li>

                    <li class="mt-0.5 w-full">
                        <Link href={route('logout')} method="post" as="button" 
                            className="py-2.7 text-sm ease-nav-brand my-0 mx-4 flex items-center whitespace-nowrap px-4 transition-colors" 
                                >

                            <div class="shadow-soft-2xl mr-2 flex h-8 w-8 items-center justify-center rounded-lg bg-white bg-center stroke-0 text-center xl:p-1.5">
                                <svg class="w-6 h-6 text-red-600 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H8m12 0-4 4m4-4-4-4M9 4H7a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h2"/>
                                </svg>

                            </div>
                        
                            <span class="ml-1 duration-300 opacity-100 pointer-events-none ease-soft text-red-600">Logout</span>
                        </Link>
                    </li>
                </ul>
            </div>

        </aside>
    );
}