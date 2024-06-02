import { Bot } from "lucide-react";

export default function LoadingDot() {
  return (
    <div className="mb-3 flex items-center me-5 justify-start">
      <Bot className="mr-2 flex-none" />
      <div className="rounded-md px-3 py-2 bg-background">
        <div className="flex space-x-2 justify-center items-center bg-white  dark:invert">
          <span className="sr-only">Loading...</span>
          <div className="h-2 w-2 bg-black rounded-full animate-bounce [animation-delay:-0.3s]"></div>
          <div className="h-2 w-2 bg-black rounded-full animate-bounce [animation-delay:-0.15s]"></div>
          <div className="h-2 w-2 bg-black rounded-full animate-bounce"></div>
        </div>
      </div>
    </div>
  );
}
