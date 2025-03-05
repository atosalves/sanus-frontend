import { Loader2 } from "lucide-react";

export function Carregando() {
    return (
        <div className="flex justify-center space-x-4 h-full w-full p-4">
            <Loader2 className="animate-spin" />
            <span>Carregando...</span>
        </div>
    );
}
