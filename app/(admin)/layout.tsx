import { ReactNode } from "react";

import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";

export default function LayoutAdmin({ children }: { children: ReactNode }) {
    return (
        <SidebarProvider>
            <AppSidebar />
            <SidebarTrigger className="relative top-5 left-5" />
            <main className="flex flex-col justify-between w-full h-dvh p-24">{children}</main>
        </SidebarProvider>
    );
}
