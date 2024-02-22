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
      setGrabbing(false);
      setUrl("");
      setResults(response);
      console.log("This is from the web", response);
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
        {grabbing ? (
          <button
            type="button"
            class="inline-flex items-center px-4 py-1 font-semibold leading-6 text-sm shadow rounded-md text-white bg-blue-400"
            disabled=""
          >
            <svg
              class="motion-reduce:hidden animate-spin -ml-1 mr-3 h-5 w-5 text-white"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                class="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                stroke-width="4"
              ></circle>
              <path
                class="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            Processing...
          </button>
        ) : (
          <button
            onClick={handleClick}
            className="text-white text-[14px] bg-green-500 w-max px-[10px] py-1 flex items-center gap-1 rounded-md"
          >
            Go <ArrowUpRight size={16} />
          </button>
        )}
      </section>
    </section>
  );
}
