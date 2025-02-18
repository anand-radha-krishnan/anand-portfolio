import Particles from "@/components/common/Particles";
import ProjectCards from "@/components/experiments/ProjectCards";
import Link from "next/link";

export default function Experiments() {
  return (
    <div className="h-screen">
      <Particles
        className=""
        particleColors={["#ffffff", "#000"]}
        particleCount={800}
        particleSpread={10}
        speed={0.2}
        particleBaseSize={150}
        moveParticlesOnHover={true}
        alphaParticles={false}
        disableRotation={false}
      />
      <div className="absolute top-0 m-32">
        <ProjectCards>
          <Link
            href="/experimentation/pinterest"
            className="text-sm font-semibold leading-6 text-white"
          >
            Checkout my clicks
            <span aria-hidden="true">
              <span>&nbsp;{"-->"}</span>
            </span>
          </Link>
        </ProjectCards>
      </div>
    </div>
  );
}
