function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20 text-center md:py-28">
      <h1 className="text-4xl font-bold leading-tight md:text-7xl">
        The biggest shelf of ready-made UI
      </h1>
      <p className="mx-auto mt-6 max-w-xl text-lg text-neutral-400">
        Free UI elements made by the community. Copy them as HTML, Tailwind or React.
      </p>

      <div className="mx-auto mt-10 flex max-w-xl rounded-xl bg-neutral-200 p-1">
        <input
          type="text"
          aria-label="Search"
          placeholder="Search for buttons, loaders, cards..."
          className="min-w-0 flex-1 bg-transparent px-4 text-neutral-900 placeholder-neutral-500 outline-none"
        />
        <button type="button" className="rounded-lg bg-indigo-600 px-5 py-2 font-semibold text-white hover:bg-indigo-500">
          Search
        </button>
      </div>
    </section>
  );
}

export default Hero;
