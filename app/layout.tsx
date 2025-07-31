import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Timer from "@/components/timer/timer";
import Image from "next/image";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Actyv Ph",
  description: "This website is for Actyvph",
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
        <Timer />{" "}
        <Image
          src="/logo.png"
          width={150}
          height={150}
          alt="size-chart"
          className="flex justify-center mx-auto items-center sm:w-full w-[150px] max-w-[400px]"
        />
        <div className="max-w-3xl bg-neutral-900/80 justify-center items-center mx-auto p-4 h-full">
          {children}{" "}
          {/* <div className="sticky bottom-0 left-0 w-full pb-5 z-50 flex justify-center ">
            <button className=" bg-neutral-950 p-3 px-10 rounded-sm font-black text-lg shadow-2xl shadow-neutral-900">
              BUY NOW
            </button>
          </div> */}
        </div>{" "}
      </body>
    </html>
  );
}
