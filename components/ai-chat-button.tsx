"use client";

import { Bot } from "lucide-react";
import { useState } from "react";
import AIChatBox from "./ai-chat-box";
import { Button } from "./ui/button";

export default function AIChatButton() {
  const [chatBoxOpen, setChatBoxOpen] = useState(false);

  return (
    <>
      <Button
        className="font-bold"
        variant="default"
        size="sm"
        onClick={() => setChatBoxOpen(true)}
      >
        AI Chat
      </Button>
      <AIChatBox open={chatBoxOpen} onClose={() => setChatBoxOpen(false)} />
    </>
  );
}
