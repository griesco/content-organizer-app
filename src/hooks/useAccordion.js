import { useState, useEffect } from "react";
import { accordionUtils } from "../utils"
import { CLASES } from '../data';

export function useAccordion(id) {
    const [classes, setClasses] = useState([]);
    const [active, setActive] = useState(null);

    useEffect(() => {
        const groupClasses = Object.groupBy(CLASES, ({ idCurso }) => idCurso);
        setClasses(groupClasses[id]);
    }, [id]);

    const handleToggle = (index) => {
        setActive((prevActive) => (accordionUtils(prevActive, index)));
    };

    return { classes, active, handleToggle };
}
