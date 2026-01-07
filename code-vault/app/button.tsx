"use client"
import {toast} from "sonner"
import { useMessages, msg} from 'gt-next';

const stackMessages = [
    msg("Test notification text"),
    msg("Your app is running smoothly"),
    msg("New updates are available"),
    msg("You have a new message"),
    msg("Your settings have been saved"),
]

export const Button = () => {
    const m = useMessages();

    const randomMessage = async () => {
       return new Promise<string>((resolve) => {
            setTimeout(() => {
                const randomIndex = Math.floor(Math.random() * stackMessages.length);
                resolve(stackMessages[randomIndex]);
            }, 600);
        });
    }

    const showMessage = async () => {
        const message = await randomMessage();
        toast.success(m(message));
    }

    return (
        <button onClick={showMessage} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            {m("Click me")}
        </button>
    )
}