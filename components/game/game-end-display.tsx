import * as React from "react";

import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

export default function GameEndDisplay({
  gameTitle,
  score,
}: {
  gameTitle: string;
  score: number;
}) {
  return (
    <div className="w-full">
      <div className="p-2 flex flex-col items-center justify-center">
        <p className="text-md font-semibold ">{gameTitle}</p>
        <p className="text-lg ">Your Score</p>
        <p className="text-2xl ">{score}</p>

        <Button variant="outline" className="rounded-lg mt-1">
          Exit Game
          <ChevronRight size={20} className="ml-0.5 w-4 h-4" />
        </Button>
      </div>
    </div>
  );
}