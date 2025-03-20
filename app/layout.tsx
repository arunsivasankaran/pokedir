import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import ThemeProvider from "@/components/theme-provider";
import Link from "next/link";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "PokeDir",
	description: "A directory of Pokémon",
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
				<ThemeProvider attribute="class" defaultTheme="system">
					<main className="flex flex-col items-center">
						<Link href="/">
							<h2 className="m-25 text-4xl font-bold">PokeDir</h2>
						</Link>
						{children}
					</main>
				</ThemeProvider>
			</body>
		</html>
	);
}
