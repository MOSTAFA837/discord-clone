"use client";

import { useParams, useRouter } from "next/navigation";
import ActionTooltip from "../action-tooltip";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

interface Props {
  server: {
    id: string;
    imageUrl: string;
    name: string;
  };
}

export default function NavServerItem({ server }: Props) {
  const params = useParams();
  const router = useRouter();

  const onClick = () => {
    router.push(`/servers/${server.id}`);
  };

  return (
    <ActionTooltip side="right" align="center" label={server.name}>
      <Link
        href={`/servers/${server.id}`}
        className=" group relative flex items-center"
      >
        <div
          className={cn(
            "absolute left-0 bg-white rounded-r-full transition-all w-[4px]",
            params?.serverId === server.id
              ? "h-[36px]"
              : "h-[8px] group-hover:h-[20px]"
          )}
        />

        <div
          className={cn(
            "relative group flex mx-3 h-[48px] w-[48px] rounded-[24px] group-hover:rounded[16px] transition-all overflow-hidden",
            params?.serverId === server.id &&
              "bg-white text-white rounded-[16xp]"
          )}
        >
          <Image fill src={server.imageUrl} alt="Channel" />
        </div>
      </Link>
    </ActionTooltip>
  );
}
