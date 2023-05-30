import Navbar from "@/components/Navbar";
import "./globals.css";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
    subsets: ["latin"],
    weight: ["300", "500", "700"],
});

export const metadata = {
    title: "Density Assignment",
    description: "An assignment given my density",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang='en'>
            <body className={`${montserrat.className} bg-[#ffffff]`}>
                <Navbar />
                {children}
            </body>
        </html>
    );
}
