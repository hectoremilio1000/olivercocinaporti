import ArvizuGroup from "@/components/Home/ArvizuGroup";
import PersonalizeCocina from "@/components/Home/PersonalizeCocina";
import ProductCarousel from "@/components/Home/ProductCarousel";
import SectionDesignCocina from "@/components/Home/SectionDesignCocina";
import { Geist, Geist_Mono } from "next/font/google";

import Layaout from "@/components/Layouts/Layout1/Layaout1";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function HomePage() {
  return (
    <div className="font-sans">
      <Layaout>
        {/* Hero Section */}
        <section className="relative bg-gray-100 py-10 px-4 text-center">
          <div className="max-w-7xl mx-auto">
            <div className="text-left">
              <img
                src="https://www.inmeza.com/cdn/shop/files/IN_Congeladores_Banner_1700x620.png?v=1748286558"
                alt="Congeladores"
                width={1200}
                height={400}
                className="rounded-md"
              />
            </div>
          </div>
        </section>
        <SectionDesignCocina />
        <PersonalizeCocina />
        <ProductCarousel />
        <ArvizuGroup />
      </Layaout>
    </div>
  );
}
