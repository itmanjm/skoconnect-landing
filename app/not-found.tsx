export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-slate-950 px-6 text-center">
      <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">Error 404</p>
      <h1 className="mt-3 text-4xl font-bold text-white sm:text-5xl">Page not found</h1>
      <p className="mt-4 max-w-md text-slate-400">
        The page you&apos;re looking for doesn&apos;t exist or may have moved.
      </p>
      <a
        href="/"
        className="mt-8 rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-500"
      >
        Back to skoconnect.com
      </a>
    </main>
  );
}
