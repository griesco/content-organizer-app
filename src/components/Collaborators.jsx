import "../styles/Collaborators.css";
import CardsCollaborators from "./ui/CardsCollaborators";
export default function Collaborators() {
  return (
    <>
      <h1 className="Colab">Colaboradores</h1>
      <div className="CardsColab">
        <CardsCollaborators />
      </div>
    </>
  );
}
