import { Bot } from "lucide-react";

export default function LoadingDot() {
  return (
    <div className="mb-3 flex items-center me-5 justify-start">
      <Bot className="mr-0.5 flex-none" />
      <div className="rounded-md bg-background">
        <div className="flex space-x-1.5 justify-center items-center bg-white  dark:invert">
          <span className="sr-only">Loading...</span>
          <div className="h-1.5 w-1.5 bg-black rounded-full animate-bounce [animation-delay:-0.3s]"></div>
          <div className="h-1.5 w-1.5 bg-black rounded-full animate-bounce [animation-delay:-0.15s]"></div>
          <div className="h-1.5 w-1.5 bg-black rounded-full animate-bounce"></div>
        </div>
      </div>
    </div>
  );
}
