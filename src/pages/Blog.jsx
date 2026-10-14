import PageHero from "../components/PageHero";
import TagPill from "../components/TagPill";

function Blog() {
  return (
    <main>
      <PageHero title="Blog" text="Short guides on building better interfaces." />

      <section className="mx-auto grid max-w-6xl gap-5 px-6 md:grid-cols-3">
        <article className="rounded-2xl border border-neutral-800 bg-neutral-900 p-6">
          <div className="mb-5 h-32 rounded-lg bg-gradient-to-br from-violet-700 to-indigo-900"></div>
          <TagPill label="CSS" />
          <h2 className="mt-4 text-xl font-semibold">Ten buttons you can copy in a minute</h2>
          <p className="mt-2 text-sm text-neutral-400">Pick one, paste it, change the colors. Done.</p>
        </article>

        <article className="rounded-2xl border border-neutral-800 bg-neutral-900 p-6">
          <div className="mb-5 h-32 rounded-lg bg-gradient-to-br from-fuchsia-700 to-violet-900"></div>
          <TagPill label="Tailwind" />
          <h2 className="mt-4 text-xl font-semibold">Build a toggle switch with Tailwind</h2>
          <p className="mt-2 text-sm text-neutral-400">A grey pill, a white circle and a few classes.</p>
        </article>

        <article className="rounded-2xl border border-neutral-800 bg-neutral-900 p-6">
          <div className="mb-5 h-32 rounded-lg bg-gradient-to-br from-blue-700 to-indigo-900"></div>
          <TagPill label="Design" />
          <h2 className="mt-4 text-xl font-semibold">Three spacing fixes for any page</h2>
          <p className="mt-2 text-sm text-neutral-400">Small gaps and margins make a big difference.</p>
        </article>
      </section>
    </main>
  );
}

export default Blog;
