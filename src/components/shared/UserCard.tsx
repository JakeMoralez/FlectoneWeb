import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";

interface Props {
  name: string;
  about: string;
}

export default function UserCard({ name, about }: Props) {
  return (
    <Card className="dark:bg-neutral-800/50 w-full h-[200px] transition-transform hover:scale-105">
      <a
        href={`https://github.com/${name}`}
        rel="noopener noreferrer"
        className="h-full"
      >
        <CardHeader className="flex gap-6 pb-2">
          <Avatar>
            <AvatarImage src={`https://github.com/${name}.png`} alt="logo" />
            <AvatarFallback>{name} avatar</AvatarFallback>
          </Avatar>
          <CardTitle className="font-montserrat text-lg">{name}</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription className="font-inter text-sm line-clamp-4">
            {about}
          </CardDescription>
        </CardContent>
      </a>
    </Card>
  );
}
