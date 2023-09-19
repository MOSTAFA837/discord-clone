import { redirect } from "next/navigation";

import { currentProfile } from "@/lib/current-profile";
import { db } from "@/lib/db";
import NavAction from "./nav-action";
import { Separator } from "../ui/separator";
import { ScrollArea } from "../ui/scroll-area";
import NavServerItem from "./nav-server-item";
import { ModeToggle } from "../mode-toggle";
import { UserButton } from "@clerk/nextjs";

export default async function NavSidebar() {
  const profile = await currentProfile();

  if (!profile) return redirect("/");

  const servers = await db.server.findMany({
    where: {
      members: {
        some: {
          profileId: profile?.id,
        },
      },
    },
  });

  return (
    <div className="overflow-hidden space-y-4 flex flex-col items-center justify-between h-full text-primary w-full bg-[#ddddddbd] dark:bg-[#1e1f22] py-3">
      <div>
        <NavAction />

        <Separator className=" h-[2px] bg-zinc-300 dark:bg-zinc-700 rounded-md w-10 mx-auto my-3" />

        <ScrollArea>
          {servers.map((server) => (
            <div key={server.id} className="my-4">
              <NavServerItem server={server} />
            </div>
          ))}
        </ScrollArea>
      </div>

      <div className="pb-3 mt-auto flex items-center flex-col gap-y-4">
        <ModeToggle />

        <UserButton
          afterSignOutUrl="/"
          appearance={{
            elements: {
              avatarBox: "h-[48px] w-[48px]",
            },
          }}
        />
      </div>
    </div>
  );
}
