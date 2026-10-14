import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="sticky top-0 z-10 border-b border-neutral-800 bg-neutral-950/90 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-4">
        <div className="flex flex-wrap items-center gap-6">
          <Link to="/" className="text-2xl font-bold">
            <span className="border-b-4 border-violet-500 text-violet-400">ui</span>shelf
          </Link>
          <Link to="/elements" className="text-sm text-neutral-300 hover:text-white">Elements</Link>
          <Link to="/challenges" className="text-sm text-neutral-300 hover:text-white">Challenges</Link>
          <Link to="/blog" className="text-sm text-neutral-300 hover:text-white">Blog</Link>
        </div>
        <div className="flex gap-3">
          <Link to="/elements" className="rounded-lg bg-gradient-to-r from-violet-500 to-fuchsia-500 px-4 py-2 text-sm font-semibold text-white">
            + Create
          </Link>
          <Link to="/community" className="rounded-lg bg-neutral-800 px-4 py-2 text-sm font-semibold text-white hover:bg-neutral-700">
            Join the Community
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
