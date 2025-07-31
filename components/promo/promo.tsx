import Image from "next/image";
export default function Promo() {
  return (
    <>
      <div className="flex flex-col gap-4 mb-4">
        <video
          autoPlay
          loop
          muted
          src="/movie.mp4"
          width="320"
          height="240"
          className="w-full"
        />
        <Image
          src={"/item-slideshow.gif"}
          width={200}
          height={200}
          alt="slideshow"
          className="w-full"
          unoptimized
        />{" "}
        <Image
          src={"/promo-header.png"}
          width={500}
          height={500}
          alt="slideshow"
          className="w-full"
        />{" "}
      </div>
    </>
  );
}
