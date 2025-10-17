import { ChevronLeft, ChevronRight } from "lucide-react";

type NavigationArrowsProps = {
  images: string[];
  prevImage: () => void;
  nextImage: () => void;
};

function NavigationArrows({
  images,
  prevImage,
  nextImage,
}: NavigationArrowsProps) {
  if (images.length <= 1) {
    return null;
  }

  const arrowStyle = `text-gray-800 bg-white/80 dark:bg-gray-700/50 backdrop-blur-sm rounded-full p-1 shadow-lg cursor-pointer z-10
  md:p-2`;

  return (
    <>
      <button
        onClick={prevImage}
        aria-label="Imagen anterior"
        className={`absolute left-4 top-1/2 -translate-y-1/2 ${arrowStyle}`}
      >
        <ChevronLeft className="w-5 h-5 text-gray-700 dark:text-gray-300" />
      </button>
      <button
        onClick={nextImage}
        aria-label="Imagen siguiente"
        className={`absolute right-4 top-1/2 -translate-y-1/2 ${arrowStyle}`}
      >
        <ChevronRight className="w-5 h-5 text-gray-700 dark:text-gray-300" />
      </button>
    </>
  );
}

export default NavigationArrows;
