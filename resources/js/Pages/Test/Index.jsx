import GuestLayout from "@/Layouts/GuestLayout";
import { Head } from "@inertiajs/react";

export default function Index() {
    return (
        <GuestLayout>
            <Head title="Test" />

            <div className="flex flex-col items-start w-full">
                <h4 className="mt-10 text-xl text-slate-700/60">Question 1 of 5</h4>

                <div className="mt-4 text-2xl text-slate-700">
                    What type of framework is Next.js?
                </div>
            </div>
        </GuestLayout>
    );
}