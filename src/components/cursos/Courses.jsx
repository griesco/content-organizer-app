import { Badge, Course, Grid, Small, Title } from '../../components'

export function Courses() {
    return (
        <>
            <Title style={{ marginTop: '5rem' }}>
                Todos los cursos
                <Badge emoji='🎉' text='3 cursos' />
            </Title>

            <Small>
                Aquí puedes encontrar el listado de los cursos completos con sus enlaces a Google Drive
            </Small>

            <Grid style={{ marginTop: '3rem' }}>
                <Course
                    title='Curso de SQL'
                    subtitle='9 clases'
                    href='../curso/1'
                    image='/pescar/img/sql.png'
                    alt='SQL'
                    author='Leandro Morrone'
                />
                <Course
                    title='Curso de React'
                    subtitle='8 clases'
                    href='../curso/3'
                    image='/pescar/img/react.svg'
                    alt='React'
                    author={<>Iván Caravajal <br /> Gerónimo Riesco</>}
                />
                <Course
                    title='Curso de .NET'
                    subtitle='8 clases'
                    href='../curso/2'
                    image='/pescar/img/dotnet.png'
                    alt='.NET'
                    author='Leandro Morrone'
                />
            </Grid>
        </>
    )
}