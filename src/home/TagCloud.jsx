import TagPill from "../components/TagPill";

function TagCloud() {
  return (
    <section className="mx-auto max-w-5xl px-6">
      <div className="rounded-3xl border border-neutral-800 bg-neutral-900/60 p-8">
        <div className="flex flex-wrap justify-center gap-3">
          <TagPill label="loader" />
          <TagPill label="switch" />
          <TagPill label="modern" />
          <TagPill label="gradient" />
          <TagPill label="form" />
          <TagPill label="button" />
          <TagPill label="card" />
          <TagPill label="rounded" />
          <TagPill label="dark" />
          <TagPill label="minimal" />
          <TagPill label="animated" />
          <TagPill label="icon" />
          <TagPill label="checkbox" />
          <TagPill label="toggle" />
          <TagPill label="input" />
          <TagPill label="glow" />
          <TagPill label="tooltip" />
          <TagPill label="hover" />
        </div>
        <h2 className="mt-8 text-center text-2xl font-bold">Browse by tags</h2>
      </div>
    </section>
  );
}

export default TagCloud;
