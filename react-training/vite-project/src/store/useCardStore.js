import {create} from 'zustand'

const useCardStore=create((set)=>({
    currentPage:1,
    setPage: (currentPage) => set({ currentPage }),
    
}))

export default useCardStore;