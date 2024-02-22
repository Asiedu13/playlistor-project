'use client';

import { createContext, useState } from "react";

export const SearchResults = createContext();

export function SearchResponseContext({children}) {
    const [results, setResults] = useState();

    return (
        <SearchResults.Provider value={{results, setResults}}>
            {children}
        </SearchResults.Provider>
    )
}