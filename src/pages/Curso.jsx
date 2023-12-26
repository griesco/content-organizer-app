import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { CURSOS } from "../data"
import { Accordion, TitleCourse } from "../components"

export default function Curso() {
    const { id } = useParams()
    const [course, setCourse] = useState({})

    useEffect(() => {
        const courseFound = CURSOS.find(curso => curso.id === id)
        setCourse(courseFound)
    }, [id])

    return (
        <>
            <TitleCourse logo={course.logo} technology={course.tecnologia}/>
            <Accordion id={course.id} />
        </>
    )
}