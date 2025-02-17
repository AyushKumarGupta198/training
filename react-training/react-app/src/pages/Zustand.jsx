import React from 'react'
import useStore from '../zustand/store'
import '../components/Context/Context.css'
import { create } from "zustand";

/*export const useStore = create((set) => ({
    mode:"light",
    toggleMode: () => set((state) => ({ mode: state.mode === "light" ? "dark" : "light"})),
  }));
*/

export default function Zustand() {
    const {mode,toggleMode}=useStore();
  return (
    <div className={`theme-container ${mode}`}>
      <h1>Zustand Practice</h1>
      <h1>{mode=="dark" ? "Dark Mode" : "Light Mode"}</h1>
      <button onClick={toggleMode}>change Theme</button>
    </div>
  )
}

