import { useState } from "react"
import { CURSOS } from "../data/cursos";

export function TituloLogo({titulo, logo}) {

  return (
    <>
    <div>
      <h1>
        {titulo} - {logo}
      </h1>
    </div>
    </>
  )
}
