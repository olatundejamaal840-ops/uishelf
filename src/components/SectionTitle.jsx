function SectionTitle({ title, text }) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <h2 className="text-3xl font-bold md:text-4xl">{title}</h2>
      <p className="mt-3 text-neutral-400">{text}</p>
    </div>
  );
}

export default SectionTitle;
