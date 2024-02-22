import { Youtube, Clapperboard } from "lucide-react";
import { Logo } from "./components/common/ui/Logo";
import { SearchComponent } from "./components/common/search/SearchComponent";

export default function Home() {
  return (
    <section className="bg-background h-full">
      <header className="mx-24 .my-[30px] bg-secondary rounded-md">
        <nav className="h-[40px] py-8 flex items-center gap-5">
          <div className="w-[80px] h-[70px] ">
            <Logo />
          </div>
          <button className="text-white text-sm font-medium flex items-center px-2 gap-2 h-[30px] w-max .bg-blue-500 rounded-md ">
            <Clapperboard size={20} strokeWidth={1} />
            Service2
          </button>
          <button className="text-white text-sm font-medium flex items-center px-2 gap-2 h-[30px] w-max bg-blue-500 rounded-md ">
            <Youtube size={20} strokeWidth={1} />
            YouTube
          </button>
        </nav>
      </header>

      <main className="mx-[100px] h-[300px] rounded-md .grid .grid-cols-2">
        <SearchComponent />
      </main>
    </section>
  );
}
