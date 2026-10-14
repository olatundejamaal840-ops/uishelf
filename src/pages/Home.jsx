import Hero from "../home/Hero";
import PreviewGrid from "../home/PreviewGrid";
import Stats from "../home/Stats";
import TagCloud from "../home/TagCloud";
import Categories from "../home/Categories";

function Home() {
  return (
    <main>
      <Hero />
      <PreviewGrid />
      <Stats />
      <TagCloud />
      <Categories />
    </main>
  );
}

export default Home;
