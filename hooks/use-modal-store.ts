import { Channel, ChannelType, Server } from "@prisma/client";
import { create } from "zustand";

export type ModalType =
  | "createServer"
  | "invite"
  | "editServer"
  | "members"
  | "createChannel"
  | "leaveServer"
  | "deleteServer"
  | "deleteChannel"
  | "editChannel";

interface ModalData {
  server?: Server;
  channelType?: ChannelType;
  channel?: Channel;
}

interface ModalProps {
  type: ModalType | null;
  data: ModalData;
  isOpen: boolean;
  open: (type: ModalType, datat?: ModalData) => void;
  close: () => void;
}

export const useModal = create<ModalProps>((set) => ({
  type: null,
  data: {},
  isOpen: false,
  open: (type, data = {}) => set({ isOpen: true, type, data }),
  close: () => set({ isOpen: false, type: null }),
}));
