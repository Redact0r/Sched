import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import "@picocss/pico";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "yoursched",
  description: "Schedule your employees, quick and easy!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
