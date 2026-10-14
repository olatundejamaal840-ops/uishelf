import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="mt-24 border-t border-neutral-800 bg-black">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-5">
        <div className="md:col-span-1">
          <p className="text-2xl font-bold">
            <span className="border-b-4 border-violet-500 text-violet-400">ui</span>shelf
          </p>
          <p className="mt-3 text-neutral-400">The shelf of ready-made UI.</p>
          <p className="mt-4 text-sm text-neutral-500">Every element here is free to copy and use in your projects.</p>
        </div>

        <div>
          <h3 className="font-semibold">Tools</h3>
          <ul className="mt-4 flex flex-col gap-2 text-sm text-neutral-400">
            <li><a href="#" className="hover:text-white">Color picker</a></li>
            <li><a href="#" className="hover:text-white">Gradient maker</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold">Resources</h3>
          <ul className="mt-4 flex flex-col gap-2 text-sm text-neutral-400">
            <li><Link to="/elements" className="hover:text-white">All elements</Link></li>
            <li><Link to="/challenges" className="hover:text-white">Challenges</Link></li>
            <li><a href="#" className="hover:text-white">Design systems</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold">Information</h3>
          <ul className="mt-4 flex flex-col gap-2 text-sm text-neutral-400">
            <li><Link to="/blog" className="hover:text-white">Blog</Link></li>
            <li><Link to="/community" className="hover:text-white">Community</Link></li>
            <li><a href="#" className="hover:text-white">Report a bug</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold">Legal</h3>
          <ul className="mt-4 flex flex-col gap-2 text-sm text-neutral-400">
            <li><a href="#" className="hover:text-white">Terms</a></li>
            <li><a href="#" className="hover:text-white">Privacy policy</a></li>
            <li><a href="#" className="hover:text-white">Cookie policy</a></li>
          </ul>
        </div>
      </div>
      <p className="mx-auto max-w-6xl px-6 pb-10 text-sm text-neutral-500">2026 UIShelf. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
