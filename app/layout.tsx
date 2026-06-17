import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "Meehir Prabhakar | Portfolio",
    description: "Computer Vision & Software Engineer",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className="antialiased min-h-screen font-sans">
                <nav className="p-8 pb-0 max-w-3xl mx-auto flex justify-between items-center">
                    <span className="font-bold tracking-tight text-zinc-100">MP</span>
                    <div className="flex gap-6 text-sm text-zinc-400">
                        <a href="https://github.com/Meehir5907" className="hover:text-zinc-100 transition-colors">GitHub</a>
                        <a href="https://linkedin.com/in/meehir-prabhakar" className="hover:text-zinc-100 transition-colors">LinkedIn</a>
                    </div>
                </nav>
                {children}
            </body>
        </html>
    );
}
