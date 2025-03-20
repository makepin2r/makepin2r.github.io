"use client";
import React from "react";
import Image from "next/image";
import { ExtendedRecordMap } from "notion-types";
import { NotionRenderer } from "react-notion-x";

interface RendererProps {
  recordMap: ExtendedRecordMap;
}

const Renderer: React.FC<RendererProps> = ({ recordMap }) => {
  return (
    <NotionRenderer
      disableHeader
      components={{
        nextImage: Image,
      }}
      recordMap={recordMap}
    />
  );
};

export default Renderer;
