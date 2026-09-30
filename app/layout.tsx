import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

export const metadata: Metadata = {
    metadataBase: new URL("https://meehir.vercel.app"),
    title: "Meehir Prabhakar | Portfolio",
    description:
        "Computer Vision & Software Engineer building edge AI, dual-model vision pipelines, and multi-channel SIEM frameworks.",
    openGraph: {
        title: "Meehir Prabhakar | Portfolio",
        description:
            "Computer Vision & Software Engineer building edge AI, dual-model vision pipelines, and multi-channel SIEM frameworks.",
        url: "/",
        siteName: "Meehir Prabhakar",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Meehir Prabhakar | Portfolio",
        description:
            "Computer Vision & Software Engineer building edge AI, dual-model vision pipelines, and multi-channel SIEM frameworks.",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className="antialiased min-h-screen font-sans">
                <ThemeProvider>
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
