import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Accordion, TitleCourse } from '../components'
import { CURSOS } from '../data'

export default function Curso() {
    const { id } = useParams();
    const [course, setCourse] = useState('');

    useEffect(() => {
        const courseFound = CURSOS.find(tecnologia => tecnologia.id === id);
        setCourse(courseFound);
    }, [id]);

    return (
        <>
            <TitleCourse logo={course.logo} technology={course.tecnologia} />
            <Accordion id={id} />
        </>
    );
} 