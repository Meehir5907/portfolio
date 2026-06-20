import Sidebar from "@/components/Sidebar";
import ContentArea from "@/components/ContentArea";

export default function Home() {
    return (
        <main className="max-w-5xl mx-auto p-8 pt-16 md:pt-24 flex flex-col md:flex-row gap-16 md:gap-24">
            <Sidebar />
            <ContentArea />
        </main>
    );
}
