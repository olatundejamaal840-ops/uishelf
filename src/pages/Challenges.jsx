import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";
import TagPill from "../components/TagPill";

function Challenges() {
  return (
    <main>
      <PageHero title="Challenges" text="Build one small UI element, share it and see what others make." />

      <section className="mx-auto grid max-w-6xl gap-5 px-6 md:grid-cols-3">
        <div className="rounded-2xl border border-neutral-800 bg-neutral-900 p-6">
          <TagPill label="This week" />
          <h2 className="mt-4 text-xl font-semibold">Button of the week</h2>
          <p className="mt-2 text-sm text-neutral-400">Make a button with a hover effect that feels good to press.</p>
          <Link to="/community" className="mt-6 inline-block font-semibold text-violet-400 hover:underline">Join this challenge</Link>
        </div>

        <div className="rounded-2xl border border-neutral-800 bg-neutral-900 p-6">
          <TagPill label="This month" />
          <h2 className="mt-4 text-xl font-semibold">Loader of the month</h2>
          <p className="mt-2 text-sm text-neutral-400">Design a loading animation that uses only CSS and Tailwind.</p>
          <Link to="/community" className="mt-6 inline-block font-semibold text-violet-400 hover:underline">Join this challenge</Link>
        </div>

        <div className="rounded-2xl border border-neutral-800 bg-neutral-900 p-6">
          <TagPill label="Coming soon" />
          <h2 className="mt-4 text-xl font-semibold">Form makeover</h2>
          <p className="mt-2 text-sm text-neutral-400">Take a plain login form and make it clear and friendly.</p>
          <Link to="/community" className="mt-6 inline-block font-semibold text-violet-400 hover:underline">Get notified</Link>
        </div>
      </section>
    </main>
  );
}

export default Challenges;
