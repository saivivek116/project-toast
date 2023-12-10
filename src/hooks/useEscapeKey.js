import React from "react";

function useEscapeKey(callback) {
    React.useEffect(() => {
        function handleKeyDown(event) {
            if (event.code === "Escape") {
                callback(event);
            }
        }
        document.addEventListener("keydown", handleKeyDown);
        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [callback]);
}

export default useEscapeKey;
