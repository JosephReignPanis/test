"use client";
import Link from "next/link";
export default function Confirmation() {
  return (
    <>
      <div className="flex flex-col gap-5 justify-center h-full ">
        <p className="flex p-10 items-center justify-center">
          {" "}
          Thank you for your purchasing buying our product
        </p>
        <Link href={"/"} className="p-4 bg-neutral-950 rounded-md text-center">
          Back to buying
        </Link>
      </div>
    </>
  );
}
