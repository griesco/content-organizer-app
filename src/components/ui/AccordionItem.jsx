/* eslint-disable react/prop-types */
import { useRef } from "react";
import { IconChevronDown } from "../../components";

export function AccordionItem(props) {
    const contentEl = useRef(null);
    const { handleToggle, active, classe } = props;
    const { id, clase, resumen } = classe;

    return (
        <>
            <header
                className={active === id ? "active" : ""}
                onClick={() => handleToggle(id)}
            >
                <h2>{clase}</h2>
                <span className="material-symbols-outlined">
                    <IconChevronDown />
                </span>
            </header>
            <div
                ref={contentEl}
                className={`collapse ${active === id ? "show" : ""}`}
                style={
                    active === id
                        ? { height: contentEl?.current?.scrollHeight }
                        : { height: "0px" }
                }
            >
                <p>{resumen}</p>
            </div>
        </>
    );
}