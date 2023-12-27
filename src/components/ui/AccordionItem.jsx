/* eslint-disable react/prop-types */
import { useRef } from "react";
import { IconChevronDown } from "../../components";
import styles from '../../styles/AccordionItem.module.css'


export function AccordionItem(props) {
    const contentEl = useRef(null);
    const { handleToggle, active, classe } = props;
    const { id, clase, material, repositorio } = classe;

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
                <div className={styles.Item}>
                    <ul>
                        <li><a 
                        href={material}
                        target="__black"
                        rel="noopener"
                        >Ir al Material</a></li>
                        <li><a 
                        href={repositorio}
                        target="__black"
                        rel="noopener"
                        >Ir al Repositorio</a></li>
                    </ul>   
                </div>
            </div>
        </>
    );
}