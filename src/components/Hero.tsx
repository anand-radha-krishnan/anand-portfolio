import Link from "next/link";

export default function Hero() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Welcome to the world of Anand
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            A Senior Frontend Developer with over 6+ years of experience in
            building high-performing, scalable and responsive web applications.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="/profile"
              className="button text-sm font-semibold leading-6 text-gray-900 arrow"
            >
              Learn more about me{" "}
              <span aria-hidden="true">
                <span className="arrow-transform">-&gt;</span>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
