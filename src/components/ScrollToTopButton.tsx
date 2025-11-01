import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ScrollToTopButtonProps {
  className?: string;
}

const ScrollToTopButton = ({ className }: ScrollToTopButtonProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!isVisible) {
    return null;
  }

  return (
    <Button
      onClick={scrollToTop}
      className={cn(
        "fixed bottom-4 right-4 sm:bottom-8 sm:right-8 z-50 h-10 w-10 sm:h-12 sm:w-12 rounded-full p-0 shadow-lg transition-all hover:scale-110",
        className
      )}
      aria-label="Volver arriba"
    >
      <ArrowUp className="h-4 w-4 sm:h-5 sm:w-5" />
    </Button>
  );
};

export default ScrollToTopButton;
