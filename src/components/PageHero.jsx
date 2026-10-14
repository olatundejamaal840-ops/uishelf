function PageHero({ title, text }) {
  return (
    <section className="bg-gradient-to-b from-indigo-950/70 to-neutral-950">
      <div className="mx-auto max-w-4xl px-6 py-20 text-center">
        <h1 className="text-4xl font-bold md:text-6xl">{title}</h1>
        <p className="mt-5 text-lg text-neutral-400">{text}</p>
      </div>
    </section>
  );
}

export default PageHero;
