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
                {children}
            </body>
        </html>
    );
}
