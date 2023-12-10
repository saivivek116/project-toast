import React, { useCallback } from "react";
import useEscapeKey from "../../hooks/useEscapeKey";

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
    const [toasts, setToasts] = React.useState([
        {
            id: crypto.randomUUID(),
            variant: "success",
            message: "hello there",
        },
    ]);

    const handleEscape = useCallback(() => {
        setToasts([]);
    }, []);

    useEscapeKey(handleEscape);

    const createToasts = (message, variant) => {
        setToasts((toastList) => [
            ...toastList,
            {
                id: crypto.randomUUID(),
                variant,
                message,
            },
        ]);
    };

    const dismissToast = React.useCallback(
        (toastId) => {
            const tl = toasts.filter(({ id }) => {
                return id !== toastId;
            });
            setToasts(tl);
        },
        [toasts]
    );

    return (
        <ToastContext.Provider value={{ toasts, createToasts, dismissToast }}>
            {children}
        </ToastContext.Provider>
    );
}

export default ToastProvider;
