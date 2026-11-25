import { useState } from 'react';
import { Cog } from 'lucide-react';

interface Props {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  eager?: boolean;
}

/** Lazy-loaded image with a designed placeholder if the source fails. */
export default function ImageWithFallback({ src, alt, className = '', imgClassName = '', eager }: Props) {
  const [failed, setFailed] = useState(false);
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={`relative overflow-hidden bg-oatmeal ${className}`}>
      {failed ? (
        <div
          role="img"
          aria-label={alt}
          className="image-ph flex h-full w-full flex-col items-center justify-center gap-2 text-abyssal/50"
        >
          <Cog size={28} aria-hidden />
          <span className="tech-label">Image placeholder</span>
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          loading={eager ? 'eager' : 'lazy'}
          decoding="async"
          onLoad={() => setLoaded(true)}
          onError={() => setFailed(true)}
          className={`h-full w-full object-cover transition-opacity duration-700 ${
            loaded ? 'opacity-100' : 'opacity-0'
          } ${imgClassName}`}
        />
      )}
    </div>
  );
}
