import { ReactNode } from "react";
import { Alert, AlertDescription, AlertTitle } from "./ui/alert";
import { BadgeAlert } from "lucide-react";

interface CampoVazioProps {
    children: ReactNode;
}

export function CampoVazio({ children }: CampoVazioProps) {
    return (
        <Alert className="space-y-4">
            <AlertTitle>
                <div className="flex items-center space-x-2">
                    <BadgeAlert />
                    <span className="text-base font-bold">Informações não encontradas!</span>
                </div>
            </AlertTitle>
            <AlertDescription>{children}</AlertDescription>
        </Alert>
    );
}
