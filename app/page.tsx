export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 relative">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/mudomana.webp"
          alt="Background Image"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="z-10 max-w-5xl w-full text-center relative">
        {/* Content */}
        <div className="mb-1 text-2xl font-semibold uppercase flex items-center justify-center">
          <span>
            Join us on this journey where Mud meets Mmana...  &nbsp;
          </span>
          {/* Zimarc Logo */}
          <img
            src="/zimarc_logo.svg"
            alt="Zimarc Logo"
            className="dark:invert ml-2"
            width={50}
            height={12}
          />
        </div>
      </div>

      {/* Next.js Logo */}
      <div className="relative flex items-center justify-center w-full h-[180px] sm:w-[240px] sm:h-[300px] lg:w-[480px] lg:h-[360px] before:absolute before:z-[-1] before:h-full before:w-full before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 z-10">
        <img
          className="relative dark:drop-shadow-[0 0 0.3rem #ffffff70] dark:invert"
          src="/mudomana_logo.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
        />
      </div>

      {/* Grid */}
      <div className="mb-32 text-center relative">
        <p className="m-0 text-sm font-semibold max-w-[40ch] mx-auto">
        <h2 >🚧 Under Construction Alert!🚧</h2> 
         Hello Mudomaniacs!  Our pottery website is currently in the kiln, getting ready to dazzle you. Stay tuned for a clayful adventure - launching soon! Stay muddy, Mudomana Team 🌈✨
        </p>
      </div>
    </main>
  );
}
