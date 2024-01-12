import { SearchRounded }  from "@mui/icons-material";
import { Nav }            from "component";

function Page() {
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
              name="query"
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
      </div>
    </>
  );
}

export default Page;
