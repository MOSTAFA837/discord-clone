"use client";

import { ServerWithMembersAndProfiles } from "@/types";
import { MemberRole } from "@prisma/client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import {
  ChevronDown,
  LogOut,
  PlusCircle,
  Settings,
  Trash,
  UserPlus,
  Users,
} from "lucide-react";
import { useModal } from "@/hooks/use-modal-store";

export default function ServerHeader({
  server,
  role,
}: {
  server: ServerWithMembersAndProfiles;
  role?: MemberRole;
}) {
  const { open } = useModal();

  const isAdmin = role === MemberRole.ADMIN;
  const isModerator = isAdmin || role === MemberRole.MODERATOR;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className=" focus:outline-none" asChild>
        <button className="w-full text-md font-semibold px-3 flex items-center h-12 border-neutral-200 dark:border-neutral-800 border-b-2 hover:bg-zinc-700/10 dark:hover:bg-zinc-700/50 transition">
          {server.name}

          <ChevronDown className="h-5 w-5 ml-auto" />
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-56 text-xs font-medium text-black dark:text-neutral-400 space-y-[2px] border-none bg-white dark:bg-black">
        {isModerator && (
          <DropdownMenuItem
            onClick={() => open("invite", { server })}
            className=" text-indigo-600 dark:text-indigo-400 px3 py-2 text-sm cursor-pointer"
          >
            Invite Peopel
            <UserPlus className="h-4 w-4 ml-auto" />
          </DropdownMenuItem>
        )}

        {isAdmin && (
          <>
            <DropdownMenuItem
              onClick={() => open("editServer", { server })}
              className="px3 py-2 text-sm cursor-pointer "
            >
              Server Settings
              <Settings className="h-4 w-4 ml-auto" />
            </DropdownMenuItem>

            <DropdownMenuItem
              onClick={() => open("members", { server })}
              className="px3 py-2 text-sm cursor-pointer "
            >
              Manage members
              <Users className="h-4 w-4 ml-auto" />
            </DropdownMenuItem>
          </>
        )}

        {isModerator && (
          <>
            <DropdownMenuItem
              onClick={() => open("createChannel")}
              className="px3 py-2 text-sm cursor-pointer "
            >
              Create Channel
              <PlusCircle className="h-4 w-4 ml-auto" />
            </DropdownMenuItem>

            <DropdownMenuSeparator className=" bg-[#d8d8d8] dark:bg-[#414141]" />
          </>
        )}

        {isAdmin && (
          <DropdownMenuItem
            onClick={() => open("deleteServer", { server })}
            className="px3 py-2 text-sm cursor-pointer text-rose-500"
          >
            Delete Server
            <Trash className="h-4 w-4 ml-auto" />
          </DropdownMenuItem>
        )}

        {!isAdmin && (
          <DropdownMenuItem
            onClick={() => open("leaveServer", { server })}
            className="px3 py-2 text-sm cursor-pointer text-rose-500"
          >
            Leave Server
            <LogOut className="h-4 w-4 ml-auto" />
          </DropdownMenuItem>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
