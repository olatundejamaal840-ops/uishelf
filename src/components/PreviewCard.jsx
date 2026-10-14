function PreviewCard({ children }) {
  return (
    <div className="flex h-44 items-center justify-center rounded-2xl border border-neutral-800 bg-neutral-900">
      {children}
    </div>
  );
}

export default PreviewCard;
