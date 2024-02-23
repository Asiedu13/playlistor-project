"use client";
import { SearchResults } from "../context/SearchResponseContext";
import { useContext } from "react";

export function ResultsMain(links) {
  const { results, setResults } = useContext(SearchResults);
  if (results) {
    return (
      <section>
        <div className="text-white text-lg">Search Results</div>
        <section className="grid grid-cols-4 gap-10 h-[700px] overflow-y-scroll overflow-x-hidden">
          {results?.data.map((video, index) => (
            <div
              key={index}
              className="text-white w-[300px] h-max rounded-md p-5 border-1 shadow-md bg-slate-400"
            >
              <h2>{video.videoTitle}</h2>
              <a
                className="underline"
                target="_blank noreferrer noopener"
                href={`https://youtube.com${video.videoLink}`}
              >
                Watch here
              </a>
            </div>
          ))}
        </section>
      </section>
    );
  } else {
    return <div>&apos; &apos;</div>;
  }
}
