import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import { SearchIcon } from "lucide-react";
import { useTheme } from "next-themes";
import React from "react";

const Search: React.FC = () => {
  const { theme } = useTheme();
  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            className="text-black dark:bg-white dark:text-black"
          >
            <SearchIcon
              size={18}
              strokeWidth={2}
              className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all"
            />
          </Button>
        </DialogTrigger>

        <DialogContent
          className={`sm:max-w-[425px] ${
            theme === "dark" && "bg-black text-white"
          }`}
        >
          <DialogHeader>
            <div>
              <input
                type="text"
                className="w-full mt-5 py-2 px-3 bg-transparent border rounded"
                placeholder="Write your search ..."
              />
            </div>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Search;
