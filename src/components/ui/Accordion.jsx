import { AccordionItem } from "../../components";
import "../../styles/Accordion.css";
import {useAccordion} from "../../hooks"

// eslint-disable-next-line react/prop-types
export function Accordion({ id }) {
  const { classes, active, handleToggle } = useAccordion(id)

  return (
    <article>
      {classes?.length > 0 && classes.map((classe, index) => (
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
