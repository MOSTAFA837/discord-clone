"use client";

import { ChannelType, MemberRole } from "@prisma/client";
import ActionTooltip from "../action-tooltip";
import { useModal } from "@/hooks/use-modal-store";
import { Plus, Settings } from "lucide-react";
import { ServerWithMembersAndProfiles } from "@/types";

interface Props {
  sectionType: "channels" | "members";
  channelType?: ChannelType;
  role?: MemberRole;
  label: string;
  server?: ServerWithMembersAndProfiles;
}

export default function ServerSection({
  sectionType,
  channelType,
  role,
  label,
  server,
}: Props) {
  const { open } = useModal();

  return (
    <div className="flex items-center justify-between py-2">
      <p className="text-xs uppercase font-semibold text-zinc-500 dark:text-zinc-400">
        {label}
      </p>

      {role !== MemberRole.GUEST && sectionType === "channels" && (
        <ActionTooltip label="Create channel" side="top">
          <button
            onClick={() => open("createChannel", { channelType })}
            className="text-zinc-500 hover:text-zinc-600 dark:text-zinc-400 dark:hover:text-zinc-300 transition"
          >
            <Plus className="h-4 w-4" />
          </button>
        </ActionTooltip>
      )}

      {role === MemberRole.ADMIN && sectionType === "members" && (
        <ActionTooltip label="Manage members" side="top">
          <button
            onClick={() => open("members", { server })}
            className="text-zinc-500 hover:text-zinc-600 dark:text-zinc-400 dark:hover:text-zinc-300 transition"
          >
            <Settings className="h-4 w-4" />
          </button>
        </ActionTooltip>
      )}
    </div>
  );
}
