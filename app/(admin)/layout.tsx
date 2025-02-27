"use client";

import { ReactNode } from "react";

import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function LayoutAdmin({ children }: { children: ReactNode }) {
    return (
        <SidebarProvider>
            <AppSidebar />
            <div className="flex flex-col justify-between w-full h-dvh p-6 space-y-4">
                <SidebarTrigger className="" />
                <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
            </div>
        </SidebarProvider>
    );
}
