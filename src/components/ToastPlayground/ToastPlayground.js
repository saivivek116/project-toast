import React from "react";

import Button from "../Button";

import ToastShelf from "../ToastShelf";

import styles from "./ToastPlayground.module.css";

import { ToastContext } from "../ToastProvider";

const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];

function ToastPlayground() {
    const [variant, setVariant] = React.useState("notice");
    const [message, setMessage] = React.useState("");

    const { createToasts } = React.useContext(ToastContext);

    const handleToast = (e) => {
        e.preventDefault();
        createToasts(message, variant);
        setVariant("notice");
        setMessage("");
    };

    return (
        <div className={styles.wrapper}>
            <header>
                <img alt="Cute toast mascot" src="/toast.png" />
                <h1>Toast Playground</h1>
            </header>

            <ToastShelf />

            <form onSubmit={handleToast}>
                <div className={styles.controlsWrapper}>
                    <div className={styles.row}>
                        <label
                            htmlFor="message"
                            className={styles.label}
                            style={{ alignSelf: "baseline" }}
                        >
                            Message
                        </label>
                        <div className={styles.inputWrapper}>
                            <textarea
                                id="message"
                                className={styles.messageInput}
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className={styles.row}>
                        <div className={styles.label}>Variant</div>
                        <div
                            className={`${styles.inputWrapper} ${styles.radioWrapper}`}
                        >
                            {VARIANT_OPTIONS.map((option) => {
                                const id = `variant-${option}`;

                                return (
                                    <label key={id} htmlFor={id}>
                                        <input
                                            id={id}
                                            type="radio"
                                            name="variant"
                                            value={option}
                                            checked={option === variant}
                                            onChange={(event) => {
                                                setVariant(event.target.value);
                                            }}
                                        />
                                        {option}
                                    </label>
                                );
                            })}
                        </div>
                    </div>

                    <div className={styles.row}>
                        <div className={styles.label} />
                        <div
                            className={`${styles.inputWrapper} ${styles.radioWrapper}`}
                        >
                            <Button>Pop Toast!</Button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default ToastPlayground;
