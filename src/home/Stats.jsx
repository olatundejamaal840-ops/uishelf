function Stats() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <div className="grid gap-10 text-center md:grid-cols-3">
        <div>
          <p className="text-5xl font-bold md:text-6xl">1,200</p>
          <p className="mt-2 text-neutral-400">Community-made UI elements</p>
        </div>
        <div>
          <p className="text-5xl font-bold md:text-6xl">100%</p>
          <p className="mt-2 text-neutral-400">Free for personal and commercial use</p>
        </div>
        <div>
          <p className="text-5xl font-bold md:text-6xl">8,500</p>
          <p className="mt-2 text-neutral-400">Contributors to the community</p>
        </div>
      </div>
    </section>
  );
}

export default Stats;
