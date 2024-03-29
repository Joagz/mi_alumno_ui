"use client";

import { Article, Header, Nav, Section } from "components/";
import { FeaturedLink, FeaturedLinkContainer } from "components/featured-link";

export default function Home() {
  return (
    <main>
      <Nav />
      <Header />
      <FeaturedLinkContainer>
        <FeaturedLink url='/provincias' image='/argentina.svg'>
          Provincias
        </FeaturedLink>
        <FeaturedLink url='/acerca-de' image='/acerca.svg'>
          Sobre Nosotros
        </FeaturedLink>
        <FeaturedLink url='/escuelas/registrar' image='/escuela.svg'>
          Registrar una institución
        </FeaturedLink>
        <FeaturedLink url='/ayuda/ingreso' image='/alumno.svg'>
          Cómo Ingresar a una institución
        </FeaturedLink>
      </FeaturedLinkContainer>
      <div className='px-4 w-full flex flex-col justify-center items-center my-24'>
        <div className='xl:w-[60%] lg:w-3/4 md:w-3/2 w-full flex flex-col gap-24'>
          <div className='flex flex-col gap-2'>
            <h2 className='text-2xl font-bold'>
              Misión Institucional de MiAlumno.com
            </h2>
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

          <div>
            {" "}
            <h2 className='text-2xl font-bold'>Servicios Destacados:</h2>
            <Section>
              <Article
                content='carguen y gestionen internamente sus propios recursos
                educativos, fomentando la autonomía y la personalización del
                contenido para los alumnos.'
                image='/icon/gestion.svg'
                title={"Gestión de Contenidos Internos"}
              ></Article>
              <Article
                content='Facilitamos la comunicación interna entre los diversos actores
                educativos, brindando herramientas para compartir información de
                manera eficiente y colaborativa.'
                image='/icon/comunicacion.svg'
                title={"Comunicación Eficiente"}
              ></Article>
              <Article
                content='MiAlumno.com facilita el proceso de registro para las
                  escuelas, permitiéndoles crear perfiles específicos que se
                  adaptan a las necesidades de su comunidad educativa.'
                image='/icon/perfil.svg'
                title={"Registro y Perfiles Específicos"}
              ></Article>
            </Section>
          </div>
          <div>
            <h3 className='text-2xl font-bold'>Incribir una institución</h3>
            <p>
              Nuestro compromiso radica en garantizar un proceso de inscripción
              sin complicaciones, facilitando la integración exitosa de su
              institución educativa en nuestra plataforma.
            </p>
            <p>
              Diseñamos una página que detalla paso a paso{" "}
              <a href='/registrar-una-escuela' className="font-bold">
                cómo registrar una institución
              </a>
              , también puedes ver una lista de las{" "}
              <a href='/padron-escolar' className="font-bold">instituciones presentes en el padrón</a>{" "}
              para comprobar si su escuela está presente.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
