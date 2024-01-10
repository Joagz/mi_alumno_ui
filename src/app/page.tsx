import styles from "./page.module.css";
import {
  Article,
  ContentListItem,
  Header,
  ListContainer,
  Nav,
  Section,
} from "./component/";
import { FeaturedLink, FeaturedLinkContainer } from "./component/featured-link";

export default function Home() {
  return (
    <main className={styles.main}>
      <Nav />
      <Header />
      <FeaturedLinkContainer>
        <FeaturedLink url='/destacado' image='/argentina.svg'>
          Provincias
        </FeaturedLink>
        <FeaturedLink url='/destacado' image='/acerca.svg'>
          Sobre Nosotros
        </FeaturedLink>
        <FeaturedLink url='/destacado' image='/escuela.svg'>
          Registrar una institución
        </FeaturedLink>
        <FeaturedLink url='/destacado' image='/alumno.svg'>
          Cómo Ingresar a una institución
        </FeaturedLink>
      </FeaturedLinkContainer>
      <div className='px-4 w-full flex flex-col justify-center items-center my-24'>
        <div className='xl:w-[60%] lg:w-3/4 md:w-3/2 w-full flex flex-col gap-6'>
          <div className='flex flex-col gap-2'>
            <h1 className='text-2xl font-bold'>
              Misión Institucional de MiAlumno.com
            </h1>
            <p className='text-lg'>
              En nuestra búsqueda por fortalecer la interconexión educativa,
              MiAlumno.com se dedica a ofrecer a las instituciones educativas
              una plataforma en línea especializada en la gestión interna de
              contenidos. Nuestra misión es proporcionar a las escuelas y a su
              comunidad educativa la capacidad de registrar sus perfiles,
              permitiéndoles cargar y compartir internamente recursos
              pedagógicos con alumnos, docentes, padres y demás personal
              educativo.
            </p>
          </div>
          <h2 className='text-2xl font-bold'>Servicios Destacados:</h2>
          <ListContainer>
            <ContentListItem
              content='MiAlumno.com facilita el proceso de registro para las
                  escuelas, permitiéndoles crear perfiles específicos que se
                  adaptan a las necesidades de su comunidad educativa.'
              title='Registro y Perfiles Específicos:'
              icon='perfil.svg'
            />
            <ContentListItem
              content='Facilitamos la comunicación interna entre los diversos actores
                educativos, brindando herramientas para compartir información de
                manera eficiente y colaborativa.'
              title='Comunicación Eficiente:'
              icon='comunicacion.svg'
            />
            <ContentListItem
              content='Ofrecemos una plataforma diseñada para que las instituciones
                carguen y gestionen internamente sus propios recursos
                educativos, fomentando la autonomía y la personalización del
                contenido para los alumnos.'
              title='Gestión de Contenidos Internos:'
              icon='gestion.svg'
            />
          </ListContainer>

          <Section>
            <Article
              content='Esto es una prueba'
              image='/img/ministerio.jpg'
              title={"Prueba"}
            ></Article>
            <Article
              content='Esto es una prueba'
              image='/img/ministerio.jpg'
              title={"Prueba"}
            ></Article>
            <Article
              content='Esto es una prueba'
              image='/img/ministerio.jpg'
              title={"Prueba"}
            ></Article>
          </Section>
          <h4 className='text-xl font-bold'>Incribir una institución</h4>
          <p>
            Nuestro compromiso radica en garantizar un proceso de inscripción
            sin complicaciones, facilitando la integración exitosa de su
            institución educativa en nuestra plataforma.
          </p>
          <p>
            Diseñamos una página que detalla paso a paso{" "}
            <a href='/registrar-una-escuela'>cómo registrar una institución</a>,
            también puedes ver una lista de las{" "}
            <a href='/padron-escolar'>instituciones presentes en el padrón</a>{" "}
            para comprobar si su escuela está presente.
          </p>
        </div>
      </div>
    </main>
  );
}
