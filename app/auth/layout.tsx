import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "../globals.css";
import Image from "next/image";
import styles from "./auth.module.css";
const poppins = Poppins({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "Authentication",
  description: "Authentication layout for the app",
};

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <div className="min-h-screen flex items-center justify-center">
          <div className="max-w-md w-full rounded-md">
            <div className={styles.container}>
              <div className={styles.header}>
                <Image
                  src="/icons/img_group_19.svg"
                  alt="Logo"
                  width={50}
                  height={50}
                />
              </div>
              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
