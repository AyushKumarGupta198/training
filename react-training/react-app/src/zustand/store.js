import { create } from "zustand";


const useStore = create((set) => ({
  mode:"light",
  toggleMode: () => set((state) => ({ mode: state.mode === "light" ? "dark" : "light"})),
}));

export default useStore;