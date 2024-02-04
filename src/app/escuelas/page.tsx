import { SearchRounded } from "@mui/icons-material";
import { Filterbar, Listado, Nav } from "components";
type Props = {
  searchParams: {
    orientacion?: string;
    sector?: string;
    ambito?: string;
    jurisdiccion?: string;
    page: number;
    show_card?: boolean;
    card_id?: string;
  };
};
function Page({
  searchParams: {
    ambito,
    sector,
    jurisdiccion,
    orientacion,
    page,
    show_card,
    card_id,
  },
}: Props) {
  return (
    <>
      <Nav></Nav>
      <div className='flex justify-center items-center flex-col py-6 gap-4'>
        <h1 className='text-4xl font-light mt-12'>Instituciones Registradas</h1>
        <form className='flex flex-1 justify-center items-center gap-4'>
          <div className=' transition-all flex'>
            <input
              placeholder='Buscá tu escuela'
              type='text'
              name='query'
              className='border !border-r-0 input !px-6 !flex-grow !rounded-r-none'
            />
            <button
              type='submit'
              className='button !flex-shrink !rounded-l-sm !border !border-l-0 !border-inherit '
            >
              <SearchRounded className='!text-3xl' />
            </button>
          </div>
        </form>
      </div>{" "}
      <div className='flex justify-center items-center'>
        <div className='flex lg:w-3/4 xl:w-2/3 w-full justify-center items-center md:items-start relative md:flex-row flex-col'>
          <Filterbar></Filterbar>
          <div className='flex-[2]'>
            <Listado
              orientacion={undefined}
              sector={undefined}
              ambito={undefined}
              jurisdiccion={undefined}
              page={0}
              card_id={card_id}
              show_card={show_card}
            ></Listado>
          </div>
        </div>
      </div>
    </>
  );
}

export default Page;
