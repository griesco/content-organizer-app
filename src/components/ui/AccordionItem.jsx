/* eslint-disable react/prop-types */
import { useRef } from "react";
import { IconChevronDown } from "../../components";
import styles from '../../styles/AccordionItem.module.css'


export function AccordionItem(props) {
    const contentEl = useRef(null);
    const { handleToggle, active, classe } = props;
    let { id, clase, resumen, material, repositorio, video } = classe;

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
                <div className={styles.Item}>
                    <ul>
                        {material && (
                            <li>
                                <a
                                    href={material}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Ver material
                                </a>
                            </li>
                        )}
                        {repositorio && (
                            <li>
                                <a
                                    href={repositorio}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Ir al repositorio
                                </a>
                            </li>
                        )}
                        {video && (
                            <li>
                                <a
                                    href={video}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Ver grabación
                                </a>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </>
    );
}