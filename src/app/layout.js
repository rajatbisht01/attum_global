import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Attum ",
  description: "Technology Resourcing. Simplified. Scaled. Specialized.",
 
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} bg-bg-light`}>
        <Navigation/>
        {children}
        <Toaster 
          position="top-right" 
          reverseOrder={false} 
          toastOptions={{ duration: 3000 }} 
        />
        <Footer/>
      </body>
    </html>
  );
}
