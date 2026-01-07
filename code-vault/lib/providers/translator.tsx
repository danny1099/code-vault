
import { GTProvider } from 'gt-next';

export const TranslatorProvider = ({children}: {children: React.ReactNode;}) => {
    return (
        <GTProvider>{children}</GTProvider>
    )
}