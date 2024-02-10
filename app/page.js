import Link from "next/link";
import { ListPlus } from "lucide-react";
import { Logo } from "./components/common/ui/Logo";
export default function Home() {
  return (
    <section className="bg-black h-full">
      <header className="px-[40px] bg-black">
        <nav className="h-[80px] py-8 flex items-center gap-5">
          <div className="w-[80px] h-[70px] ">
            <Logo />
          </div>
          <button className="text-white text-sm font-medium flex items-center px-2 gap-2 w-[130px] h-[30px] bg-blue-500 rounded-md ">
            <ListPlus />
            My Playlists
          </button>
        </nav>
      </header>
    </section>
  );
}
