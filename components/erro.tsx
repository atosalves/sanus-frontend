import { Alert, AlertDescription, AlertTitle } from "./ui/alert";

interface ErroProps {
    error: Error;
}

export function Erro({ error }: ErroProps) {
    const { message } = error;

    return (
        <Alert variant="destructive">
            <AlertTitle>Algo deu errado!</AlertTitle>
            <AlertDescription>{message}</AlertDescription>
        </Alert>
    );
}
