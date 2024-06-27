import { createContext } from "react";
import { ProfessionalsTypo } from "@/types";

const DataProvider = createContext<ProfessionalsTypo | undefined>(undefined);

export default DataProvider;