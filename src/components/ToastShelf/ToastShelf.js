import React from "react";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";

import { ToastContext } from "../ToastProvider";

function ToastShelf() {
    const { toasts } = React.useContext(ToastContext);

    return (
        <ol className={styles.wrapper}>
            {toasts.map(({ id, variant, message }) => {
                return (
                    <li className={styles.toastWrapper} id={id} key={id}>
                        <Toast variant={variant} id={id}>
                            {message}
                        </Toast>
                    </li>
                );
            })}
        </ol>
    );
}

export default React.memo(ToastShelf);
