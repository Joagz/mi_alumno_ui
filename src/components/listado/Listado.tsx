import {
  SchoolCard,
  SchoolPage,
  SearchParamsShow,
} from "components/schoolcard";

type Props = {
  orientacion?: string;
  sector?: string;
  ambito?: string;
  jurisdiccion?: string;
  page: number;
  show_card?: boolean;
  card_id?: string;
};

export function Listado({
  ambito,
  sector,
  jurisdiccion,
  orientacion,
  page,
  show_card,
  card_id,
}: Props) {
  console.log(show_card);
  return (
    <div className='flex-[2]'>
      {show_card && <SchoolPage school_id={card_id} />}

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
          slug={"/1"}
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
