"use client";

import React from "react";
import { Badge } from "./ui/badge";
import { useSocket } from "./providers/socket-provider";

export default function SocketIndicator() {
  const { isConnected } = useSocket();

  if (!isConnected) {
    return (
      <Badge variant="outline" className="bg-rose-600 text-white border-none">
        Fallback
      </Badge>
    );
  }

  return (
    <Badge variant="outline" className="bg-emerald-600 text-white border-none">
      Live
    </Badge>
  );
}
