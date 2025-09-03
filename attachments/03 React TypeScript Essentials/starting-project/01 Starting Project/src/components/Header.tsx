import { type ReactNode } from 'react';

interface imageType {
  image: { src: string; alt: string };
  children: ReactNode;
}

export default function Header({ image, children }: imageType) {
  return (
    <header>
      <img {...image} />
      {children}
    </header>
  );
}
