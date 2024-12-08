import React from "react";

interface ImageProps {
  src: string;
  alt: string;
}

export const Image = ({ src, alt }: ImageProps) => {
  return (
    <>
      <img src={src} alt={alt} />
      {alt !== "" && (
        <span className="block w-full mt-2 mb-6 text-center prose-caption-11-regular text-gray-500">
          {alt}
        </span>
      )}
    </>
  );
};
