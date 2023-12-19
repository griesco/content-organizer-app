import { CONTRIBUIDORES } from "../../data/contribuidores";
export default function CardsCollaborators() {
  return (
    <>
        {CONTRIBUIDORES.map((Contribuidor) => (
        <div>
          <img src={Contribuidor.avatar} alt="" />
        </div>
      ))}{" "}
    </>
  );
}
