import { create } from "zustand";

export type ModalType = "createServer";

interface ModalProps {
  type: ModalType | null;
  isOpen: boolean;
  open: (type: ModalType) => void;
  close: () => void;
}

export const useModal = create<ModalProps>((set) => ({
  type: null,
  isOpen: false,
  open: (type) => set({ isOpen: true, type }),
  close: () => set({ isOpen: false, type: null }),
}));
