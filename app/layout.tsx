import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Quizlet to Anki Converter",
    description: "A tool to convert Quizlet flashcards to Anki format",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                {children}
                <footer className="w-full text-center text-gray-500 text-sm py-6 mt-12 border-t border-gray-200 dark:border-gray-700">
                    © 2025 Quizlet to Anki Converter
                </footer>
            </body>
        </html>
    );
}
