import { ReactNode } from "react";

import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";

export default function LayoutAdmin({ children }: { children: ReactNode }) {
    return (
        <SidebarProvider>
            <AppSidebar />
            <div className="flex flex-col justify-between w-full h-dvh p-6 space-y-4">
                <SidebarTrigger className="" />
                {children}
            </div>
        </SidebarProvider>
    );
}
