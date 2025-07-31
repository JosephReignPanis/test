"use client";
import Form from "@/components/form/form";
import Image from "next/image";
import Item from "@/components/item/item";
import Timer from "@/components/timer/timer";
import Promo from "@/components/promo/promo";
export default function Home() {
  return (
    <>
      {/* <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/watch?v=pejoJfyROC0"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        className="w-full h-full"
      ></iframe> */}

      <Promo />{" "}
      <div className="grid grid-cols-1 sm:grid-cols-1">
        <Item />
      </div>
      <div className="flex flex-col items-center justify-center h-full my-5 gap-2">
        <p className="text-2xl font-bold">Size chart</p>
        <Image src="/sizechart.png" width={700} height={600} alt="size-chart" />
      </div>
      <Form />{" "}
    </>
  );
}
