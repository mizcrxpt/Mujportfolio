import { create } from "zustand";

interface ModalsState {
    bBanners: boolean;
    bEndScreens: boolean;
    bThumbNails: boolean;

    setbThumbNails: (bThumbNails: boolean) => void;
    setbEndScreens: (bEndScreens: boolean) => void;
    setbBanners: (bBanners: boolean) => void;
}

export const useModalsStore = create<ModalsState>((set) => ({
    bBanners: false,
    bEndScreens: false,
    bThumbNails: false,

    setbThumbNails: (bThumbNails: boolean) => set(() => ({ bThumbNails })),
    setbEndScreens: (bEndScreens: boolean) => set(() => ({ bEndScreens })),
    setbBanners: (bBanners: boolean) => set(() => ({ bBanners })),
}));
