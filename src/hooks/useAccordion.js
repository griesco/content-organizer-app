import { useState, useEffect } from "react";
import { CLASES } from '../data';

export function useAccordion(id) {
    const [classes, setClasses] = useState([]);
    const [active, setActive] = useState(null);

    useEffect(() => {
        const groupClasses = Object.groupBy(CLASES, ({ idCurso }) => idCurso)
        setClasses(groupClasses[id]);
    }, [id]);

    const handleToggle = (index) => {
        setActive((prevActive) => (prevActive === index ? null : index));
    };

    return { classes, active, handleToggle }
}