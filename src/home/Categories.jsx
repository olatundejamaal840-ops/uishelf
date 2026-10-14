import { Link } from "react-router-dom";
import SectionTitle from "../components/SectionTitle";
import CategoryCard from "../components/CategoryCard";

function Categories() {
  return (
    <section className="mx-auto max-w-6xl px-6 pt-24">
      <SectionTitle
        title="Browse by what you are building"
        text="Hand-picked groups of elements for the things people look for most."
      />

      <div className="mt-12 grid gap-5 md:grid-cols-3">
        <CategoryCard title="Loading UI" text="Spinners, loaders and progress bars." tag1="CSS loaders" tag2="Tailwind loaders" tag3="Animated" />
        <CategoryCard title="Button effects" text="Hover states, gradients, glow and 3D buttons." tag1="Hover effects" tag2="Gradient" tag3="3D" />
        <CategoryCard title="Card components" text="Profile cards, product cards and glass cards." tag1="Glass" tag2="Profile" tag3="Tailwind" />
        <CategoryCard title="Modern styles" text="Gradients, dark mode, retro and neon looks." tag1="Neumorphism" tag2="Gradient UI" tag3="Dark mode" />
        <CategoryCard title="Forms and inputs" text="Login forms, input fields, checkboxes and switches." tag1="Inputs" tag2="Toggles" tag3="Checkboxes" />
        <CategoryCard title="Tooltips and patterns" text="Hover tips and background patterns." tag1="Tooltips" tag2="Backgrounds" tag3="Patterns" />
      </div>

      <div className="mt-10 text-center">
        <Link to="/elements" className="inline-block rounded-lg bg-neutral-800 px-6 py-3 font-semibold hover:bg-neutral-700">
          Explore all collections
        </Link>
      </div>
    </section>
  );
}

export default Categories;
