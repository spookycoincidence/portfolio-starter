// src/app/components/ProjectCard.tsx
import Image from 'next/image';

interface ProjectCardProps {
  title: string;
  description: string;
  link?: string;
  imageSrc?: string;
  imageAlt?: string;
}

export default function ProjectCard({ title, description, link, imageSrc, imageAlt }: ProjectCardProps) {
  if (!link) return null;

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="
        group
        cursor-pointer
        transform transition-transform
        hover:scale-105
        w-full
        md:max-w-sm
        md:bg-gradient-to-br md:from-gray-800 md:via-gray-900 md:to-black
        md:rounded-2xl md:shadow-lg md:p-4
        flex flex-col
        md:h-full
        text-inherit no-underline
      "
    >
      {imageSrc && (
        <div
          className="
            relative w-full
            aspect-square
            overflow-hidden
            rounded-xl
            md:aspect-[4/3]
            mb-0 md:mb-4
          "
        >
          <Image
            src={imageSrc}
            alt={imageAlt || title}
            fill
            className="object-cover"
            priority
          />

          {/* mobile */}
          <div
            className="
              absolute inset-x-0 bottom-0 md:hidden
              bg-gradient-to-t from-black/70 to-transparent
              p-2
            "
          >
            <h3 className="text-white text-sm font-semibold">{title}</h3>
          </div>
        </div>
      )}

      {/* oculto en mobile */}
      <div className="hidden md:flex md:flex-col md:justify-between md:flex-grow">
        <div>
          <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
          <p className="text-gray-300 mb-4">{description}</p>
        </div>
        <span className="text-gray-100 font-semibold hover:underline mt-auto">
          View project →
        </span>
      </div>
    </a>
  );
}
