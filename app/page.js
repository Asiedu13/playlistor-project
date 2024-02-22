import { Youtube, Clapperboard } from "lucide-react";
import { Logo } from "./components/common/ui/Logo";
import { SearchComponent } from "./components/common/search/SearchComponent";

import { SearchResponseContext } from "./components/common/context/SearchResponseContext";

import { ResultsMain } from "./components/common/results/ResultsMain";

export default function Home() {
  return (
    <section className="bg-background h-[100vh]">
      <header className="mx-24 .my-[30px] bg-secondary rounded-md">
        <nav className="h-[40px] py-8 flex items-center gap-5">
          <div className="w-[80px] h-[70px] ">
            <Logo />
          </div>
          <button className="text-white text-sm font-medium flex items-center px-2 gap-2 h-[30px] w-max .bg-blue-500 rounded-md ">
            <Clapperboard size={20} strokeWidth={1} />
            Service2
          </button>
          <button className="text-white text-sm font-medium flex items-center px-2 gap-2 h-[30px] w-max bg-blue-400 rounded-md ">
            <Youtube size={20} strokeWidth={1} />
            YouTube
          </button>
        </nav>
      </header>

      <main className="mx-[100px] h-[300px] rounded-md .grid .grid-cols-2">
        <SearchResponseContext>
          <SearchComponent />
          <section>
            {/* Various formats go here
              - excel format
              - React component
              - html
                - Select what you want to be present
                  - Image
                  - No Image
                  - Link
                  - Author
                  - Date
                  - Ratings
            */}
          </section>
          <ResultsMain />
        </SearchResponseContext>
      </main>
    </section>
  );
}
