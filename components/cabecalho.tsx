import { ReactNode } from "react";

interface CabecalhoProps {
    titulo: string;
    children?: ReactNode;
}

export function Cabecalho({ titulo, children }: CabecalhoProps) {
    return (
        <>
            <div className="flex items-center justify-between w-full py-4">
                {children}
                <h1 className="text-xl font-bold">{titulo}</h1>
            </div>
        </>
    );
}
