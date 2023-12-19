import { CONTRIBUIDORES } from "../../data/contribuidores";
export default function CardsCollaborators() {
  return (
    <>
        {CONTRIBUIDORES.map((Contribuidor) => (
        <div key={Contribuidor.avatar}>
          <img src={Contribuidor.avatar} alt={Contribuidor.avatar} />
        </div>
      ))}{" "}
    </>
  );
}
