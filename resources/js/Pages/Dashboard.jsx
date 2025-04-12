import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, usePage } from '@inertiajs/react';

export default function Dashboard() {
    const user = usePage().props.auth.user;

    return (
        <AuthenticatedLayout
            //header 
            header={
                <div>
                    <ol className="flex flex-wrap pt-1 mr-12 bg-transparent rounded-lg sm:mr-16">
                        <li className="text-sm leading-normal">
                            <a className="opacity-50 text-slate-700" href="javascript:;">Pages</a>
                        </li>
                        <li className="text-sm pl-2 capitalize leading-normal text-slate-700 before:float-left before:pr-2 before:text-gray-600 before:content-['/']" aria-current="page">Dashboard</li>
                    </ol>
                    <h6 className="mb-0 font-bold capitalize">Dashboard</h6>
                </div>
            }
        >
            <Head title="Dashboard" />

            {/* main content */}
            <div className="py-12">
                <div class="flex flex-wrap">
                    <div class="relative flex items-center justify-between flex-auto min-w-0 p-4 mx-6 overflow-hidden break-words border-0 shadow-blur rounded-2xl bg-white/80 bg-clip-border backdrop-blur-2xl backdrop-saturate-200">
                        <div class="flex flex-wrap -mx-3">
                            <div class="flex-none w-auto max-w-full px-3">
                                <div class="text-base ease-soft-in-out h-18.5 w-18.5 relative inline-flex items-center justify-center rounded-xl text-white transition-all duration-200">
                                    <img src="../assets/img/user.jpg" alt="profile_image" class="w-full shadow-soft-sm rounded-xl" />
                                </div>
                            </div>
                            <div class="flex-none w-auto max-w-full px-3 my-auto">
                                <div class="h-full">
                                    <p class="mb-0 font-semibold leading-normal text-sm">Welcome,</p>
                                    <h5 class="mb-1 font-semibold text-xl capitalize">{user.name}</h5>

                                </div>
                            </div>

                        </div>

                        <div>
                            <a class="inline-block px-4 py-3 mb-0 font-bold text-center uppercase align-middle transition-all bg-transparent border-0 rounded-lg shadow-none cursor-pointer leading-pro text-xs ease-soft-in bg-150 hover:scale-102 active:opacity-85 bg-x-25 text-slate-500" 
                                href={ route('profile.edit') }>
                                Edit Profile
                            </a>
                        </div>
                    </div>

                    <div class="relative flex flex-auto justify-between items-center min-w-0 p-4 mx-6 overflow-hidden break-words border-0 shadow-blur rounded-2xl bg-white/80 bg-clip-border backdrop-blur-2xl backdrop-saturate-200">
                        <div class="flex flex-wrap -mx-3">
                            <div class="flex-none w-auto max-w-full px-3">
                                <div class="text-base ease-soft-in-out h-18.5 w-18.5 relative inline-flex items-center justify-center rounded-xl text-white transition-all duration-200">
                                    <img src="../assets/img/test.jpg" alt="test_image" class="w-full shadow-soft-sm rounded-xl" />
                                </div>
                            </div>
                            <div class="flex w-auto max-w-full px-3 my-auto">
                                <div class="h-full">
                                    <p class="mb-0 font-semibold leading-normal text-sm">Total Test</p>
                                    <h5 class="mb-1 font-semibold text-xl capitalize">1</h5>

                                </div>
                            </div>
                        </div>

                        <div>
                            <a class="inline-block px-4 py-3 mb-0 font-bold text-center uppercase align-middle transition-all bg-transparent border-0 rounded-lg shadow-none cursor-pointer leading-pro text-xs ease-soft-in bg-150 hover:scale-102 active:opacity-85 bg-x-25 text-slate-500" href="javascript:;">
                                View History
                            </a>
                        </div>
                    </div>
                </div>

                <div class="relative flex flex-col h-full min-w-0 p-4 mx-6 mt-6 break-words bg-white border-0 shadow-soft-xl rounded-2xl bg-clip-border">
                    <div class="p-4 pb-0 mb-0 bg-white border-b-0 rounded-t-2xl">
                        <div class="flex flex-wrap -mx-3">
                            <div class="flex items-center w-full max-w-full px-3 shrink-0 md:w-8/12 md:flex-none">
                                <h6 class="mb-0 font-semibold">Test Result</h6>
                            </div>
                        </div>
                    </div>

                    <div class="flex-auto p-4">
                        <p class="leading-normal text-sm">
                            Based on the test you completed on September 17, 2023, it appears that your strengths lie in 
                            <span class="bg-gradient-to-tl from-green-600 to-lime-400 px-2.5 text-xs rounded-1.8 py-1.4 inline-block whitespace-nowrap text-center align-baseline font-bold uppercase leading-none text-white mx-2">Technical</span>
                            skills.
                            As a result, I would like to recommend some job opportunities that align with your focus.
                        </p>
                        
                        <hr class="h-px my-6 bg-transparent bg-gradient-to-r from-transparent via-white to-transparent" />
                       
                        <span class="leading-normal text-sm mr-2">
                            Please check the following link for more details: 
                        </span>
                    
                        <a class="inline-block mb-0 font-bold text-center uppercase align-middle transition-all bg-transparent border-0 rounded-lg shadow-none cursor-pointer leading-pro text-xs ease-soft-in hover:scale-102 hover:active:scale-102 active:opacity-85 text-fuchsia-500 hover:text-fuchsia-800 hover:shadow-none active:scale-100" href="javascript:;">
                            View Job
                        </a>
                    
                    </div>
                </div>

                <div class="max-w-full px-3 text-center mx-auto mt-6 lg:w-1/2">
                    <div class="flex flex-col h-full">
                        <p class="pt-2 mb-1 font-semibold text-lg mb-2">Ready for Test</p>
                      
                        <p class="mb-12">
                            Are you ready to discover job opportunities that suit your skills? 
                            Take our assessment to evaluate your strengths and preferences.
                        </p>
                      
                        <h5 class="font-bold text-sm">
                            <i className='fa fa-file mr-2'></i>10 questions &nbsp;&nbsp;| 
                            <i className='fa fa-clock-o mx-2'></i>30 minutes</h5>

                        <a class="w-1/2 mx-auto mt-6 px-6 py-3 font-bold text-center text-white 
                            uppercase align-middle transition-all bg-transparent rounded-lg 
                            cursor-pointer leading-pro text-xs ease-soft-in shadow-soft-md bg-150 
                            bg-gradient-to-tl from-gray-900 to-slate-800 hover:shadow-soft-xs 
                            active:opacity-85 hover:scale-102 tracking-tight-soft bg-x-25" 
                            href={route('test.index')}> 
                            Let's start
                        </a>
                  
                    </div>
                </div>
                
            </div>

        </AuthenticatedLayout>
    );
}
