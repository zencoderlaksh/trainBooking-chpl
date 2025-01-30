import { create } from "zustand";

const useLoaderStore = create((set) => ({
  loading: false,
  setLoading: (state) => set({ loading: state }),
}));

export default useLoaderStore;
