import { useContext, createContext } from "react";
import { useSearchContextState } from "./SearchContextState";

const SearchContext = createContext();

export const useSearch = () =>  useContext(SearchContext);

export const SearchProvider = ({ children }) => {
  const searchState = useSearchContextState();

  return (
    <SearchContext.Provider value={searchState}>
      {children}
    </SearchContext.Provider>
  );
}
