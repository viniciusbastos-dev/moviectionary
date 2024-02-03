import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./reset.css";
import StyledComponentsRegistry from "@/lib/registry";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GlobalStyle from "@/themes/globalStyles";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Moviectionary",
    description: "Generated by create next app",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <StyledComponentsRegistry>
                    <GlobalStyle />
                    <Header />
                    <main>{children}</main>
                    <Footer />
                </StyledComponentsRegistry>
            </body>
        </html>
    );
}