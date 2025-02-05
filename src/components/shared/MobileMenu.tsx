import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";

interface TranslatableMenu {
  title: string;
  children: React.ReactNode;
}

export default function MobileMenu({ title, children }: TranslatableMenu) {
  return (
    <Sheet>
      <SheetTrigger>
        <Menu />
      </SheetTrigger>
      <SheetContent className="w-full bg-[#1b1b1b]">
        <SheetHeader>
          <SheetTitle>{title}</SheetTitle>
          {children}
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
