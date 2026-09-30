import Sidebar from "@/components/Sidebar";
import ContentArea from "@/components/ContentArea";

export default function Home() {
    return (
        <main className="max-w-6xl mx-auto p-4 md:p-8 pt-8 md:pt-16 flex flex-col md:flex-row gap-6 md:gap-12">
            <Sidebar />
            <ContentArea />
        </main>
    );
}
