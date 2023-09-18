"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";
import { useModal } from "@/hooks/use-modal-store";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Check, Copy, RefreshCcw } from "lucide-react";
import { useOrigin } from "@/hooks/use-origin";
import axios from "axios";

export default function InviteModal() {
  const { isOpen, open, close, type, data } = useModal();
  const origin = useOrigin();

  const [copied, setCopied] = useState(false);
  const [loading, setLoading] = useState(false);

  const isModalOpen = isOpen && type === "invite";
  const { server } = data;

  const inviteUrl = `${origin}/invite/${server?.inviteCode}`;

  const onCopy = () => {
    navigator.clipboard.writeText(inviteUrl);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 1000);
  };

  const onNew = async () => {
    try {
      setLoading(true);

      const res = await axios.patch(`/api/servers/${server?.id}/invite-code`);

      open("invite", { server: res.data });
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={isModalOpen} onOpenChange={close}>
      <DialogContent className="bg-white text-black p-0 overflow-hidden">
        <DialogHeader className="pt-8 px-6">
          <DialogTitle className="text-2xl text-center font-bold">
            Invite friends
          </DialogTitle>
        </DialogHeader>

        <div className="p-6">
          <Label className=" uppercase text-xs font-bold text-zinc-500 dark:text-secondary/70">
            Server invite link
          </Label>

          <div className="flex items-center mt-2 gap-x-2">
            <Input
              disabled={loading}
              className=" bg-zinc-300/50 border-0 focus-visible:ring-0 text-black focus-visible:ring-offset-0"
              value={inviteUrl}
            />

            <Button disabled={loading} size="icon" onClick={onCopy}>
              {copied ? (
                <Check className=" w-4 h-4" />
              ) : (
                <Copy className=" w-4 h-4" />
              )}
            </Button>
          </div>

          <Button
            onClick={onNew}
            disabled={loading}
            variant="link"
            size="sm"
            className=" text-xs text-zinc-500 mt-4"
          >
            Generate a new link
            <RefreshCcw className=" w-4 h-4 ml-2" />
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
