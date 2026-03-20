export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-6">
      <main id="main" className="flex w-full max-w-xl flex-col gap-8">
        <div className="flex flex-col gap-3">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Tom Sesler
          </h1>
          <p className="text-lg text-zinc-400">
            Product Designer & Web Developer
          </p>
        </div>

        <p className="leading-relaxed text-zinc-300">
          I design and build digital products. My portfolio lives at{" "}
          <a
            href="https://straydesign.co"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="straydesign.co (opens in new tab)"
            className="text-white underline underline-offset-4 hover:text-zinc-300"
          >
            straydesign.co
          </a>
          . I run a web design agency at{" "}
          <a
            href="https://straywebdesign.co"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="straywebdesign.co (opens in new tab)"
            className="text-white underline underline-offset-4 hover:text-zinc-300"
          >
            straywebdesign.co
          </a>
          , building enterprise-grade websites for small businesses in Erie, PA.
        </p>

        <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
          <a
            href="https://straydesign.co"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Portfolio (opens in new tab)"
            className="inline-flex items-center justify-center rounded-lg bg-white px-6 py-3 text-sm font-medium text-black transition-colors hover:bg-zinc-200"
          >
            Portfolio &rarr;
          </a>
          <a
            href="https://straywebdesign.co"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Web Design Agency (opens in new tab)"
            className="inline-flex items-center justify-center rounded-lg border border-zinc-700 px-6 py-3 text-sm font-medium text-white transition-colors hover:border-zinc-500 hover:bg-zinc-900"
          >
            Web Design Agency &rarr;
          </a>
        </div>

        <p className="text-sm text-zinc-400">
          <a
            href="mailto:tom@straydesign.co"
            className="transition-colors hover:text-zinc-300"
          >
            tom@straydesign.co
          </a>
        </p>
      </main>

      <footer className="absolute bottom-6 text-xs text-zinc-400">
        Built by{" "}
        <a
          href="https://straywebdesign.co"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Stray Web Design (opens in new tab)"
          className="transition-colors hover:text-zinc-300"
        >
          Stray Web Design
        </a>
      </footer>
    </div>
  );
}
