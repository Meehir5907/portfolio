import Sidebar from "@/components/Sidebar";
import ContentArea from "@/components/ContentArea";

export default function Home() {
    return (
        <main className="max-w-7xl mx-auto p-4 md:p-8 flex flex-col md:flex-row gap-8 md:gap-16 min-h-screen items-start">
            <Sidebar />
            <div className="flex-1 w-full max-w-3xl flex flex-col">
                <ContentArea />
            </div>
        </main>
    );
}
