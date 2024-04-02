import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {LogOutIcon} from "lucide-react";
import {User2Icon} from "lucide-react";

export function ProfileButton({name = "there"}) {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger>
                <Avatar className={"size-12"} >
                    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent className={"mr-3"} >
                <DropdownMenuLabel>Hi, {name}</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem><User2Icon size={16} className={"mr-2"}></User2Icon> Profile</DropdownMenuItem>
                <DropdownMenuItem><User2Icon size={16} className={"mr-2"}></User2Icon> Accounts</DropdownMenuItem>
                <DropdownMenuItem> <LogOutIcon size={16} className={"mr-2"}></LogOutIcon> Logout</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>



    )
}
