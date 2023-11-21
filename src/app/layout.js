"use client";
import "./globals.css";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

import { usePathname } from "next/navigation";



export default function RootLayout({ children }) {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <html lang="en">
      <body className={inter.className}>
     
      {children}
      </body>
    
    </html>
  );
}
