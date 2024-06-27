import { ReactNode } from "react";
import { ProfessionalsTypo } from "@/types";

export interface searchbarTypo {
  prop?: string;
  keywords?: any;
  children?: ReactNode;
  onChange?: React.Dispatch<any>;
  setKeywords?: React.Dispatch<any>;
}