import type { Metadata } from "next";
import { Geist, Geist_Mono, Kanit } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/layout/navbar/Navbar";
import Footer from "@/components/layout/footer/Footer";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

const kanit = Kanit({
    subsets: ["latin", "thai"],
    weight: ["400", "700"],
    variable: "--font-kanit",
});

export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} bg-[#fffffe] ${geistMono.variable} ${kanit.variable} antialiased flex flex-col min-h-screen`}
            >
                <Navbar link="/"></Navbar>
                <main className="flex-grow-1 bg-[#fffffe]">{children}</main>
                <Footer />
            </body>
        </html>
    );
}
