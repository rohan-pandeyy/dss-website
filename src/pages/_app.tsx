
import type { AppProps } from 'next/app'
import '../styles/globals.css'
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
 
export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className={`${geistSans.variable} ${geistMono.variable} antialiased flex h-screen`}>
      <main className="flex-1 p-4">
        <Component {...pageProps} />
      </main>
    </div>
  )
}
