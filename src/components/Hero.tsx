import Link from "next/link";

export default function Hero() {
  return (
    <div className="border-b border-solid dark:border-white border-black">
      <div className="md:mx-auto max-w-2xl py-48 mx-4">
        <div className="text-center">
          <h1 className="font-bold  text-6xl">Welcome to the world of Anand</h1>
          <p className="mt-6 text-lg leading-8 ">
            A Full Stack Engineer with over 6.8+ years of experience in building
            high-performing, scalable and responsive web applications.
          </p>
          <div className="mt-10 justify-center gap-x-6">
            <Link href="/profile" className="text-sm font-semibold leading-6">
              Learn more about me{" "}
              <span aria-hidden="true">
                <span>&nbsp;{"-->"}</span>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
