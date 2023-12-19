import { useState } from "react"
import { CLASES } from "../data/clases";

export function Componente() {
  return (
    <>
    <div>
      <ul>
        { CLASES.map((json) => (
          <li>{json.clase}</li>
          ))}
      </ul>
    </div>
    </>
  )
}
