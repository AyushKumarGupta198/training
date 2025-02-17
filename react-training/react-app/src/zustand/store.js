import { create } from "zustand";
import { persist } from "zustand/middleware";


const useStore = create(
  persist(
    (set, get) => ({
      mode: "light",

      toggleMode: () => {
        const currentMode = get().mode;
        set({ mode: currentMode === "light" ? "dark" : "light" });
      },
    }),
    {
      name: "theme-storage",
      getStorage: () => localStorage, 
    }
  )
);

export default useStore;