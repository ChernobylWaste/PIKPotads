import "./globals.css";
import "bootstrap/dist/css/bootstrap.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/header";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "PIK POTADS JABAR",
  description: "Persatuan Orang Tua Anak Down Syndrom",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
