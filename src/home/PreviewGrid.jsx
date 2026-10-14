import PreviewCard from "../components/PreviewCard";

function PreviewGrid() {
  return (
    <section className="mx-auto max-w-6xl px-6">
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">

        <PreviewCard>
          <div className="rounded-md bg-black px-4 py-2 text-sm">Star on GitHub &nbsp;&#9733; 6</div>
        </PreviewCard>

        <PreviewCard>
          <button type="button" className="rounded-full bg-gradient-to-r from-violet-600 to-blue-500 px-8 py-3 font-semibold text-white">
            Get started
          </button>
        </PreviewCard>

        <PreviewCard>
          {/* A volume bar: grey box with a white box filling the bottom half */}
          <div className="relative h-24 w-10 overflow-hidden rounded-lg bg-neutral-600">
            <div className="absolute bottom-0 h-1/2 w-full bg-white"></div>
          </div>
        </PreviewCard>

        <PreviewCard>
          <p className="text-2xl text-neutral-400">loading <span className="text-violet-400">forms</span></p>
        </PreviewCard>

        <PreviewCard>
          <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-neutral-400 text-3xl text-neutral-300">+</div>
        </PreviewCard>

        <PreviewCard>
          <button type="button" className="flex items-center gap-3 rounded-full bg-lime-300 py-2 pl-2 pr-6 text-sm font-semibold text-black">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-black text-lime-300">&#10148;</span>
            Explore
          </button>
        </PreviewCard>

        <PreviewCard>
          {/* A toggle switch: grey pill with a white circle */}
          <div className="flex h-8 w-14 items-center rounded-full bg-neutral-600 px-1">
            <div className="h-6 w-6 rounded-full bg-white"></div>
          </div>
        </PreviewCard>

        <PreviewCard>
          <div className="flex flex-col gap-2 text-sm text-neutral-400">
            <label className="flex items-center gap-2"><input type="checkbox" /> Checkbox 1</label>
            <label className="flex items-center gap-2 text-blue-400"><input type="checkbox" defaultChecked /> Checkbox 2</label>
            <label className="flex items-center gap-2"><input type="checkbox" /> Checkbox 3</label>
          </div>
        </PreviewCard>

        <PreviewCard>
          <div className="flex h-24 w-24 items-end justify-center rounded-lg border border-neutral-500 bg-neutral-600 pb-2 text-sm text-neutral-300">Figma</div>
        </PreviewCard>

        <PreviewCard>
          <button type="button" className="rounded-lg border-2 border-violet-500 bg-neutral-950 px-8 py-3 text-lg text-neutral-200">
            Button
          </button>
        </PreviewCard>

        <PreviewCard>
          <div className="h-12 w-12 rounded-xl border-2 border-neutral-400"></div>
        </PreviewCard>

        <PreviewCard>
          <button type="button" className="flex items-center gap-3 rounded-full border-2 border-indigo-900 py-2 pl-2 pr-6 text-neutral-200">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-900">&darr;</span>
            Download
          </button>
        </PreviewCard>

      </div>
    </section>
  );
}

export default PreviewGrid;
