import Link from "next/link";

export default function Page() {
    return (
      <main className="px-[110px]">
        <header className="px-[100px] mt-[100px]">
          <h1 className="text-3xl">
            Welcome <f className="text-accent">Name</f>
          </h1>
          <p className="text-sm text-accent">
            Choose from the manifold services to extract from
          </p>
        </header>

        <section className="px-[100px] my-10">
          <header className="">
            <h2 className="text-specifics">Services</h2>
          </header>
          <section className=" my-10 grid grid-cols-3">
            <Link href="/services/youtube">
            <article className="w-[300px] h-[300px] rounded-md shadow-sm bg-[#fff]">
              <div className="bg-secondary rounded-t-md h-[100px] p-5 text-background flex items-center justify-center">
                <h3 className="text-6xl">YouTube</h3>
              </div>
              <p className="p-5 text-specifics">
                Grab from YouTube
              </p>
            </article>
            </Link>
            <article className="w-[300px] h-[300px] rounded-md shadow-sm bg-[#fff]"></article>
          </section>
        </section>
      </main>
    );
  }
