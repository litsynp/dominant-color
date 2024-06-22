"use client";
import { extractColors } from "extract-colors";
import { FinalColor } from "extract-colors/lib/types/Color";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Home() {
  const src = "/img/source.jpg";
  const [colors, setColors] = useState<FinalColor[]>([]);

  useEffect(() => {
    extractColors(src)
      .then((finalColors) => {
        console.log(finalColors);

        setColors(finalColors);
      })
      .catch(console.error);
  }, []);

  useEffect(() => {
    console.log("colors:", colors);
  }, [colors]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>The Image</h1>
      <div>
        <Image src={src} alt={"source image"} width={400} height={400} />
      </div>
      <h1>The Palette with dominant colors from the image</h1>
      <div>
        <div className="flex flex-wrap mx-auto items-center justify-center">
          {colors.map((color) => (
            <div
              key={color.hex}
              style={{
                width: 400,
                height: 400,
                backgroundColor: color.hex,
              }}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
