import { create } from "zustand";

export const useMyStore = create((set) => ({
  // default stuff used to learn store
  count: 0,
  inc: () => set((state) => ({ count: state.count + 1 })),

  // crosshair
  crosshairVisible: false,
  setCrosshairVisibility: (val) =>
    set(() => ({
      crosshairVisible: val,
    })),
  // handle mouse captured state
  isMouseCaptured: false,
  setIsMouseCaptured: (val) =>
    set(() => ({
      isMouseCaptured: val,
    })),
  crosshairScale: 1,
  setCrosshairScale: (val) =>
    set(() => ({
      crosshairScale: val,
    })),
  // Handle player input
  forward: false,
  backward: false,
  left: false,
  right: false,
  setForward: (val) =>
    set(() => ({
      forward: val,
    })),
  setBackward: (val) =>
    set(() => ({
      backward: val,
    })),
  setLeft: (val) =>
    set(() => ({
      left: val,
    })),
  setRight: (val) =>
    set(() => ({
      right: val,
    })),
}));
