"use client";

import { useEffect, useState } from "react";
import CreateServerModal from "../modals/create-server-modal";
import InviteModal from "../modals/invite-modal";
import EditServerModal from "../modals/edit-server-modal";
import { MembersModal } from "../modals/members-modal";
import CreateChannelModal from "../modals/create-channel-modal";
import { DeleteServerModal } from "../modals/delete-server-modal";
import { LeaveServerModal } from "../modals/leave-server-modal";
import { EditChannelModal } from "../modals/edit-channel-modal";
import { DeleteChannelModal } from "../modals/delete-channel-modal";
import MessageFileModal from "../modals/message-file-modal";
import { DeleteMessageModal } from "../modals/delete-message-modal";

export default function ModalProvider() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      <CreateServerModal />
      <InviteModal />
      <EditServerModal />
      <MembersModal />
      <CreateChannelModal />
      <DeleteServerModal />
      <LeaveServerModal />
      <EditChannelModal />
      <DeleteChannelModal />
      <MessageFileModal />
      <DeleteMessageModal />
    </>
  );
}
