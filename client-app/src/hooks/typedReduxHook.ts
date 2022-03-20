import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState } from "../redux/store";

// selector typed hook
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
