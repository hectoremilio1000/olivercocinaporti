import React, { useState } from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
const products = [
  {
    id: 1,
    title:
      "CORIAT IC‑132 Interceptor de grasa con capacidad de almacenaje de 32 kg de grasa y capacidad de flujo de 132 lt por minuto.",
    brand: "CORIAT",
    price: 9668,
    oldPrice: 9968,
    images: [
      "https://www.arvizugroup.com/cdn/shop/products/Coriat_-_TURBO-30-5Q_-_HD_Arvizu_Group.jpg?v=1525816141&width=720",
      "https://www.arvizugroup.com/cdn/shop/products/Coriat_-_TURBO-30-5Q-HD-CANASTA_-_Arvizu_Group.jpg?v=1525816141&width=720",
    ],
  },
  {
    id: 2,
    title:
      "CORIAT IC‑38 Interceptor de grasa con capacidad de almacenaje de 9 kg de grasa y capacidad de flujo de 38 lt por minuto.",
    brand: "CORIAT",
    price: 4708,
    oldPrice: 4908,
    images: [
      "https://www.arvizugroup.com/cdn/shop/products/Coriat_-_TURBO-30-5Q_-_HD_Arvizu_Group.jpg?v=1525816141&width=720",
      "https://www.arvizugroup.com/cdn/shop/products/Coriat_-_TURBO-30-5Q-HD-CANASTA_-_Arvizu_Group.jpg?v=1525816141&width=720",
    ],
  },
  {
    id: 3,
    title:
      "CORIAT TURBO‑30‑5Q DE PISO HD PREMIUM Freidora de piso, a gas, 2 canastillas, 30 litros, 5 quemadores y zona fría al fondo.",
    brand: "CORIAT",
    price: 25390,
    oldPrice: 25690,
    images: [
      "https://www.arvizugroup.com/cdn/shop/products/Coriat_-_TURBO-30-5Q_-_HD_Arvizu_Group.jpg?v=1525816141&width=720",
      "https://www.arvizugroup.com/cdn/shop/products/Coriat_-_TURBO-30-5Q-HD-CANASTA_-_Arvizu_Group.jpg?v=1525816141&width=720",
    ],
  },
  {
    id: 4,
    title:
      "CORIAT EC‑4‑HG DE PISO HD PREMIUM Estufa a gas, con 4 quemadores extra grandes y 1 horno.",
    brand: "CORIAT",
    price: 36223,
    oldPrice: 36723,
    images: [
      "https://www.arvizugroup.com/cdn/shop/products/Coriat_-_TURBO-30-5Q_-_HD_Arvizu_Group.jpg?v=1525816141&width=720",
      "https://www.arvizugroup.com/cdn/shop/products/Coriat_-_TURBO-30-5Q-HD-CANASTA_-_Arvizu_Group.jpg?v=1525816141&width=720",
    ],
  },
];
const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute right-0 top-1/2 -translate-y-1/2 z-20
                 rounded-full bg-blue-600 p-2 shadow-lg
                 transition hover:scale-110"
    >
      <ChevronRight className="h-6 w-6 text-white" />
    </button>
  );
};

const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute left-0 top-1/2 -translate-y-1/2 z-20
                 rounded-full bg-blue-600 p-2 shadow-lg
                 transition hover:scale-110"
    >
      <ChevronLeft className="h-6 w-6 text-white" />
    </button>
  );
};

const sliderSettings = {
  arrows: true,
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  responsive: [
    {
      breakpoint: 1280,
      settings: { slidesToShow: 3 },
    },
    {
      breakpoint: 1024,
      settings: { slidesToShow: 2 },
    },
    {
      breakpoint: 640,
      settings: { slidesToShow: 1 },
    },
  ],
};

const Currency = ({ value }) => (
  <span className="tracking-tight">
    $ {value.toLocaleString("es-MX", { minimumFractionDigits: 2 })} MXN
  </span>
);

const ProductCard = ({ product }) => {
  const [imageIdx, setImageIdx] = useState(0);

  const toggleImage = () => setImageIdx((prev) => (prev === 0 ? 1 : 0));

  return (
    <div className="px-4 pb-8">
      <div className="relative group cursor-pointer">
        {/* Oferta Badge */}
        <span className="absolute top-2 left-2 z-10 rounded-full bg-black px-4 py-1 text-sm font-semibold text-white shadow-md">
          Oferta
        </span>

        {/* Image with fade animation */}
        <motion.img
          key={product.images[imageIdx]}
          src={product.images[imageIdx]}
          alt={product.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          // onMouseOver={toggleImage}
          className="h-64 w-full object-contain bg-gray-50 rounded-lg shadow-inner"
        />
      </div>

      {/* Product copy */}
      <h3 className="mt-4 line-clamp-3 text-base font-semibold underline decoration-dotted">
        {product.title}
      </h3>

      <p className="mt-1 text-xs uppercase tracking-widest text-gray-500">
        {product.brand}
      </p>

      <div className="mt-2 flex items-end gap-2">
        <del className="text-sm text-gray-400">
          <Currency value={product.oldPrice} />
        </del>
        <span className="text-lg font-bold">
          <Currency value={product.price} />
        </span>
      </div>
    </div>
  );
};

const ProductCarousel = () => {
  return (
    <section className="mx-auto max-w-6xl py-8">
      <h1 className="w-full text-start text-3xl text-blue-950 font-bold">
        Cocción
      </h1>
      <Slider {...sliderSettings} className="product-slider">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </Slider>

      <div className="mt-10 flex justify-center">
        <button className="rounded-md bg-black px-10 py-3 text-lg font-semibold text-white transition hover:scale-105">
          Ver todo
        </button>
      </div>
    </section>
  );
};

export default ProductCarousel;
