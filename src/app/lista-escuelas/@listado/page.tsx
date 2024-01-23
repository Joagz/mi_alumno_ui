import { SchoolCard, SearchParamsShow } from "components/schoolcard";

type Props = {
  searchParams: {
    orientacion?: string;
    sector?: string;
    ambito?: string;
    jurisdiccion?: string;
    page: number;
  };
};

function Listado({
  searchParams: { ambito, sector, jurisdiccion, orientacion, page },
}: Props) {
  return (
    <div className='flex-[2]'>
      {/* Cards Container */}
      <div className='flex-1 p-8 px-4 flex flex-col gap-6 '>
        <SearchParamsShow
          jurisdiccion={jurisdiccion}
          ambito={ambito}
          orientacion={orientacion}
          sector={sector}
        />
        <SchoolCard
          title={"E.E.T.P N. 612 Eudocio de los Santos Giménez"}
          content={"Escuela técnica de orientación electromecánica y contable."}
          location={"Coronda, Prov. de Santa Fé."}
          image='/next.svg'
          slug={""}
        ></SchoolCard>{" "}
        <SchoolCard
          title={"E.E.T.P N. 612 Eudocio de los Santos Giménez"}
          content={"Escuela técnica de orientación electromecánica y contable."}
          location={"Coronda, Prov. de Santa Fé."}
          image='/next.svg'
          slug={""}
        ></SchoolCard>
        <SchoolCard
          title={"E.E.T.P N. 612 Eudocio de los Santos Giménez"}
          content={"Escuela técnica de orientación electromecánica y contable."}
          location={"Coronda, Prov. de Santa Fé."}
          image='/next.svg'
          slug={""}
        ></SchoolCard>
        <SchoolCard
          title={"E.E.T.P N. 612 Eudocio de los Santos Giménez"}
          content={"Escuela técnica de orientación electromecánica y contable."}
          location={"Coronda, Prov. de Santa Fé."}
          image='/next.svg'
          slug={""}
        ></SchoolCard>
      </div>
    </div>
  );
}

export default Listado;
