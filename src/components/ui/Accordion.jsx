import { useState, useEffect } from "react";
import { AccordionItem } from "../../components";
import "../../styles/Accordion.css";
import { CLASES } from '../../data'

// eslint-disable-next-line react/prop-types
export function Accordion({ id }) {
  const [classes, setClasses] = useState([]);
  const [active, setActive] = useState(null);

  useEffect(() => {
    const groupClasses = Object.groupBy(CLASES, ({ idCurso }) => idCurso)
    setClasses(groupClasses[id]);
  }, [id]);

  const handleToggle = (index) => {
    setActive((prevActive) => (prevActive === index ? null : index));
  };

  return (
    <article>
      {classes.map((classe, index) => (
        <AccordionItem
          key={index}
          active={active}
          handleToggle={handleToggle}
          classe={classe}
        />
      ))}
    </article>
  );
}


// Uso de Custom Hooks (useAccordion)

// import { AccordionItem } from "../../components";
// import "../../styles/Accordion.css";
// import { useAccordion } from "../../hooks"

// // eslint-disable-next-line react/prop-types
// export function Accordion({ id }) {
//   const { classes, active, handleToggle } = useAccordion(id);

//   return (
//     <article>
//       {classes.map((classe, index) => (
//         <AccordionItem
//           key={index}
//           active={active}
//           handleToggle={handleToggle}
//           classe={classe}
//         />
//       ))}
//     </article>
//   );
// }