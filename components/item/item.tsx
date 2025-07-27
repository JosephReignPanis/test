"use client";
import Image from "next/image";
import { useState } from "react";

const products = [
  {
    id: 1,
    name: "Muscle Tee (Black)",
    image: "/1.png",
    price: 449,
    shipping: 100,
    freeShipping: false,
  },
  {
    id: 2,
    name: "Muscle Tee (Grey)",
    image: "/2.png",
    price: 449,
    shipping: 100,
    freeShipping: false,
  },
  {
    id: 3,
    name: "MUSCLE TEE (Black + Grey)",
    image: "/3.png",
    price: 699,
    shipping: 0,
    freeShipping: true,
    doubleSize: true,
  },
];

export default function Home() {
  const [selectedItems, setSelectedItems] = useState<number[]>([1]);
  const [quantities, setQuantities] = useState<Record<number, number>>({
    1: 1,
    2: 1,
    3: 1,
  });

  const handleToggle = (id: number) => {
    setSelectedItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleQuantityChange = (id: number, qty: number) => {
    setQuantities((prev) => ({ ...prev, [id]: qty }));
  };

  const subtotal = selectedItems.reduce((total, id) => {
    const product = products.find((p) => p.id === id);
    const qty = quantities[id] || 1;
    return total + (product?.price ?? 0) * qty;
  }, 0);

  return (
    <main className="min-h-screen text-white p-4 sm:p-8">
      <div className="flex flex-col gap-6 max-w-4xl mx-auto">
        {products.map((product) => {
          const isSelected = selectedItems.includes(product.id);
          const qty = quantities[product.id] || 1;
          return (
            <div
              key={product.id}
              className={`p-4 rounded-md   ${
                isSelected
                  ? "bg-neutral-950/80 border-2 border-white/20"
                  : "bg-neutral-900/80"
              }`}
            >
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <input
                  type="checkbox"
                  checked={isSelected}
                  onChange={() => handleToggle(product.id)}
                  className="accent-blue-500"
                />
                <Image
                  src={product.image}
                  alt={product.name}
                  width={100}
                  height={100}
                  className="rounded-md object-cover w-full"
                />
                <div className="flex-1">
                  <div className="font-bold text-lg">{product.name}</div>
                  <p className="text-sm">
                    {product.freeShipping
                      ? "FREE SHIPPING!"
                      : "₱100 SHIPPING FOR SINGLE ORDER"}
                  </p>

                  <div className="flex gap-4 mt-2">
                    <div className="flex flex-col text-sm">
                      <label>Quantity</label>
                      <select
                        className="text-white rounded px-2 py-1"
                        value={qty}
                        onChange={(e) =>
                          handleQuantityChange(
                            product.id,
                            Number(e.target.value)
                          )
                        }
                      >
                        {[1, 2, 3].map((n) => (
                          <option key={n} value={n}>
                            {n}
                          </option>
                        ))}
                      </select>
                    </div>

                    {product.doubleSize ? (
                      <>
                        <div className="flex flex-col text-sm">
                          <label>Size Grey</label>
                          <select className="text-white rounded px-2 py-1">
                            {["XS", "S", "M", "L", "XL"].map((size) => (
                              <option key={size}>{size}</option>
                            ))}
                          </select>
                        </div>
                        <div className="flex flex-col text-sm">
                          <label>Size Black</label>
                          <select className="text-white rounded px-2 py-1">
                            {["XS", "S", "M", "L", "XL"].map((size) => (
                              <option key={size}>{size}</option>
                            ))}
                          </select>
                        </div>
                      </>
                    ) : (
                      <div className="flex flex-col text-sm">
                        <label>Size</label>
                        <select className="text-white rounded px-2 py-1">
                          {["XS", "S", "M", "L", "XL"].map((size) => (
                            <option key={size}>{size}</option>
                          ))}
                        </select>
                      </div>
                    )}
                  </div>

                  <div className="text-sm mt-2">
                    Item subtotal: ₱
                    {isSelected ? (product.price * qty).toFixed(2) : "0.00"} PHP
                  </div>
                </div>
                <div className="font-bold text-lg whitespace-nowrap">
                  ₱{product.price.toFixed(2)} PHP
                </div>
              </div>
            </div>
          );
        })}

        <div className="border-t border-white/20 pt-4 text-right text-xl font-bold">
          Total: ₱{subtotal.toFixed(2)} PHP
        </div>
      </div>
    </main>
  );
}
