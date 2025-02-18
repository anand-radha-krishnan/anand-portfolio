import SpotlightCard from "../common/SpotlightCard";

export default function ProjectCards({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SpotlightCard
      className="custom-spotlight-card"
      spotlightColor="rgba(0, 229, 255, 0.2)"
    >
      {children}
    </SpotlightCard>
  );
}
