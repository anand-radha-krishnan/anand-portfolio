import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun, PanelTopOpen } from "lucide-react";

export default function FloatingDockMobile({
  items,
  className,
}: {
  items: {
    title: string;
    icon: React.ReactNode;
    href: string;
    display: boolean;
  }[];
  className?: string;
}) {
  const [open, setOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <div className={`relative block md:hidden ${className}`}>
      <AnimatePresence>
        {open && (
          <motion.div
            layoutId="nav"
            className="absolute top-full mb-2 mt-2 inset-x-0 flex flex-row justify-center gap-2"
          >
            {items.map(
              (item, idx) =>
                item.display && (
                  <Animation
                    key={item.title}
                    index={idx}
                    itemsLength={items.length}
                  >
                    <Link
                      href={item.href}
                      key={item.title}
                      onClick={() => setOpen(!open)}
                      className="h-10 w-10 rounded-full bg-gray-200 dark:bg-neutral-900 flex items-center justify-center"
                    >
                      <div className="h-4 w-4">{item.icon}</div>
                    </Link>
                  </Animation>
                )
            )}
            <Animation
              key={"Toggle themes"}
              index={4}
              itemsLength={items.length}
            >
              <div className="h-10 w-10 p-2 rounded-full bg-gray-200 dark:bg-neutral-900">
                {theme === "dark" ? (
                  <>
                    <Sun onClick={toggleTheme} />
                    <span className="sr-only">Toggle theme</span>
                  </>
                ) : (
                  <>
                    <Moon onClick={toggleTheme} />
                    <span className="sr-only">Toggle theme</span>
                  </>
                )}
              </div>
            </Animation>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setOpen(!open)}
        className="h-10 w-10 p-2 rounded-full bg-gray-200 dark:bg-neutral-800 flex items-center justify-center"
      >
        <PanelTopOpen />
      </button>
    </div>
  );
}

const Animation = ({
  key,
  index,
  itemsLength,
  children,
}: Readonly<{
  key: string;
  index: number;
  itemsLength: number;
  children: React.ReactNode;
}>) => {
  return (
    <motion.div
      key={key}
      initial={{ opacity: 0, y: -10 }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      exit={{
        opacity: 0,
        y: -10,
        transition: {
          delay: (itemsLength - 1 - index) * 0.05,
        },
      }}
      transition={{ delay: index * 0.05 }}
    >
      {children}
    </motion.div>
  );
};
