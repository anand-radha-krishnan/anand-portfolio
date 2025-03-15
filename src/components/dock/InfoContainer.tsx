import { MotionValue } from "framer-motion";
import Link from "next/link";
import IconContainerDiv from "./InfoContainerDiv";

export default function IconContainer({
  mouseX,
  title,
  icon,
  href,
  isLink = true,
  onClick,
}: {
  mouseX: MotionValue;
  title: string;
  icon: React.ReactNode;
  isLink?: boolean;
  href: string;
  onClick?: () => void;
}) {
  return isLink ? (
    <Link href={href} onClick={onClick}>
      <IconContainerDiv mouseX={mouseX} icon={icon} title={title} />
    </Link>
  ) : (
    <a onClick={onClick} className="cursor-pointer">
      <IconContainerDiv mouseX={mouseX} icon={icon} title={title} />
    </a>
  );
}
