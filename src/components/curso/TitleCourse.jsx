/* eslint-disable react/prop-types */
import { Title } from '../../components'
import styles from '../../styles/TitleCourse.module.css'

export function TitleCourse({ technology, logo }) {
    return (
        <div className={styles.containerCourse}>
            <Title>{technology}</Title>
            <img src={logo} alt={`Logo de ${technology}`} height={60} />
        </div>
    )
}