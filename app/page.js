import Link from "next/link";
import { Logo } from "./components/common/ui/Logo";
export default function Home() {
  return (
    <section className="bg-black h-full">
      <header className="px-[40px] bg-black">
        <nav className="h-[120px] py-8 flex items-center gap-5">
          <div className="w-[80px] h-[50px] ">
            <Logo />
          </div>
          <button className="text-white font-medium flex gap-3 w-[120px] h-[40px] bg-blue-500 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              id="playlist"
            >
              <path fill="#fff" d="M0 0h48v48H0z"></path>
              <path d="M28 20H4v4h24v-4zm0-8H4v4h24v-4zm8 16v-8h-4v8h-8v4h8v8h4v-8h8v-4h-8zM4 32h16v-4H4v4z"></path>
            </svg>
            Playlists
          </button>
        </nav>
      </header>
    </section>
  );
}
