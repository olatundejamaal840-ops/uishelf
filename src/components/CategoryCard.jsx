import TagPill from "./TagPill";

function CategoryCard({ title, text, tag1, tag2, tag3 }) {
  return (
    <div className="rounded-2xl border border-neutral-800 bg-neutral-900 p-6">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-neutral-400">{text}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        <TagPill label={tag1} />
        <TagPill label={tag2} />
        <TagPill label={tag3} />
      </div>
    </div>
  );
}

export default CategoryCard;
