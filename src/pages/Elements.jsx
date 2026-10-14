import PageHero from "../components/PageHero";
import PreviewGrid from "../home/PreviewGrid";
import TagCloud from "../home/TagCloud";
import Categories from "../home/Categories";

function Elements() {
  return (
    <main>
      <PageHero title="All elements" text="Buttons, switches, loaders and more. Pick one and copy it." />
      <PreviewGrid />
      <div className="pt-24">
        <TagCloud />
      </div>
      <Categories />
    </main>
  );
}

export default Elements;
