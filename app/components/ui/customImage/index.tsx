'use client';

// default
import { CSSProperties } from 'react';
import Image, { StaticImageData } from 'next/image';

interface CustomImageProps {
  src: StaticImageData;
  alt: string;
  height: string;
  width: string;
  priority: boolean;
  style?: CSSProperties;
}

export default function CustomImage({
  src,
  alt,
  height,
  width,
  priority,
  style,
}: CustomImageProps) {
  return (
    <Image
      src={src}
      alt={alt}
      priority={priority}
      style={{ height: height, width: width, ...style }}
    />
  );
}
