import { Users, ReceiptText } from "lucide-react";

import {
    Sidebar,
    SidebarContent,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const items = [
    {
        titulo: "Alunos",
        url: "/alunos",
        icone: Users,
    },
    {
        titulo: "Planos",
        url: "/planos",
        icone: ReceiptText,
    },
];

export function AppSidebar() {
    return (
        <Sidebar>
            <SidebarHeader className="flex flex-row items-center space-x-2 p-4">
                <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div className="flex flex-col">
                    <span className="font-semibold text-lg">Sanus</span>
                    <span className="font-thin text-xs">John Doe</span>
                </div>
            </SidebarHeader>
            <SidebarContent>
                <SidebarMenu>
                    {items.map((item) => (
                        <SidebarMenuItem key={item.titulo}>
                            <SidebarMenuButton asChild>
                                <a href={item.url}>
                                    <item.icone />
                                    <span>{item.titulo}</span>
                                </a>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    ))}
                </SidebarMenu>
            </SidebarContent>
        </Sidebar>
    );
}
