import { MotionValue, motion, useMotionValue } from "framer-motion";
import IconContainer from "./InfoContainer";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

export default function FloatingDockDesktop({
  items,
  className,
}: {
  items: { title: string; icon: React.ReactNode; href: string }[];
  className?: string;
}) {
  const mouseX = useMotionValue(Infinity);

  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className={`mx-auto hidden md:flex h-16 gap-4 items-end rounded-2xl bg-gray-50 dark:bg-neutral-900 px-4 pb-3 ${className}`}
    >
      {items.map((item) => (
        <IconContainer mouseX={mouseX} key={item.title} {...item} />
      ))}
      <ThemesContainer mouseX={mouseX} />
    </motion.div>
  );
}

const ThemesContainer = ({ mouseX }: { mouseX: MotionValue<number> }) => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <div className="w-12 justify-items-center">
      {theme === "dark" ? (
        <IconContainer
          mouseX={mouseX}
          title="Light mode"
          href="#"
          onClick={toggleTheme}
          icon={
            <>
              <Sun />
              <span className="sr-only">Toggle theme</span>
            </>
          }
        />
      ) : (
        <IconContainer
          mouseX={mouseX}
          title="Dark mode"
          href="#"
          onClick={toggleTheme}
          icon={
            <>
              <Moon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all " />
              <span className="sr-only">Toggle theme</span>
            </>
          }
        />
      )}
    </div>
  );
};
