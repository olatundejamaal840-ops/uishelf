import PageHero from "../components/PageHero";

function Community() {
  return (
    <main>
      <PageHero title="Join the community" text="Share your work, get feedback and learn from other builders." />

      <section className="mx-auto grid max-w-6xl gap-5 px-6 md:grid-cols-3">
        <div className="rounded-2xl border border-neutral-800 bg-neutral-900 p-6">
          <h2 className="text-xl font-semibold">Share your elements</h2>
          <p className="mt-2 text-sm text-neutral-400">Post buttons, cards and loaders for others to use.</p>
        </div>
        <div className="rounded-2xl border border-neutral-800 bg-neutral-900 p-6">
          <h2 className="text-xl font-semibold">Get feedback</h2>
          <p className="mt-2 text-sm text-neutral-400">Ask questions and hear what other designers think.</p>
        </div>
        <div className="rounded-2xl border border-neutral-800 bg-neutral-900 p-6">
          <h2 className="text-xl font-semibold">Join challenges</h2>
          <p className="mt-2 text-sm text-neutral-400">Practice with a new small task every week.</p>
        </div>
      </section>

      {/* This form is only for show. It does not send anything because there is no JavaScript. */}
      <section className="mx-auto mt-16 max-w-xl px-6">
        <div className="rounded-2xl border border-neutral-800 bg-neutral-900 p-8">
          <h2 className="text-2xl font-bold">Get updates</h2>
          <p className="mt-2 text-neutral-400">Enter your email and we will tell you about new elements and challenges.</p>
          <form className="mt-6 flex flex-col gap-4">
            <label htmlFor="email" className="font-medium">Your email</label>
            <input id="email" type="email" className="rounded-lg border border-neutral-700 bg-neutral-950 px-4 py-2" />
            <button type="button" className="rounded-lg bg-indigo-600 px-6 py-3 font-semibold text-white hover:bg-indigo-500">
              Join the community
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}

export default Community;
