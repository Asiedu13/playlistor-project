"use client";
import { useState } from 'react';
import { ArrowUpRight, Youtube } from "lucide-react";

export function SearchComponent() {
  const [url, setUrl] = useState( '' );
  const handleChange = (e) => {
    const { value } = e.target;
    setUrl( value );
  }
  const handleClick = async () => {
    try {
      const res = await fetch( `/extractors/youtube?url=${url}` );
      const response = await res.json();
      console.log('This is from the web', response );
    } catch (err) {
      return err;
    }
  };
  return (
    <section>
      <header className="flex flex-col gap-2 items-center mx-[10px] .h-[300px] .w-max">
        <div className="flex gap-2 items-center my-4 text-white">
          <Youtube strokeWidth={1.0} size={30} />
          <h2 className="text-4xl text-white">Grab a YouTube PlayList</h2>{" "}
        </div>
        <p className="text-sm text-slate-400">
          Insert a playlist link and watch magic unfold{" "}
        </p>
      </header>

      <section className="my-2 px-2 flex .w-max justify-center items-center">
        <input
          type="text"
          placeholder="Link goes here"
          className="w-[400px] bg-secondary px-2 py-2 outline-none placeholder:text-sm text-white"
          value={url}
          onChange={handleChange}
        />

        <button
          onClick={handleClick}
          className="text-white bg-green-500 w-max px-1 py-1 flex .gap-1 rounded-md"
        >
          Go <ArrowUpRight />
        </button>
      </section>
    </section>
  );
}
