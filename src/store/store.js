import { create } from 'zustand'

const useStore = create(set => ({
    user: {},
    isAuthenticated: false,
    login: (userData) => set({ user: userData, isAuthenticated: true }),
    logout: () => set({ user: {}, isAuthenticated: false }),
}))

export default useStore;