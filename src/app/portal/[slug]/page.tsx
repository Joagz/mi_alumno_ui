import { Header, Nav } from "components";

type Props = { params: { slug: string } };

const links = [
  { name: "Home", url: "/" },
  {
    name: "About",
    url: "/about",
    sublinks: [
      {
        name: "About Developer",
        url: "/about/developer",
      },
      {
        name: "About Company",
        url: "/about/company",
      },
    ],
  },
];

function PortalById({ params }: Props) {
  return (
    <main className='flex'>
      {/* Mostrar solo en el Home del portal */}
      <div className='relative w-full'>
        <Nav forceEnable={true}></Nav>
        <Header
          disableSearch
          title="E.E.T.P N.612 'Eudocio de los Santos Giménez'"
          subtitle='Escuela de educación técnica en Santa Fe.'
        ></Header>
      </div>
    </main>
  );
}

export default PortalById;
