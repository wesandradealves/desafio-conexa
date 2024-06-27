import { createContext } from "react";
import { searchbarTypo } from "@/components/searchbar/typo";

const SearchProvider = createContext<searchbarTypo | undefined>(undefined);

export default SearchProvider;