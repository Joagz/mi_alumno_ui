import { Nav, InfoCard } from "components";
import styles from "../escuela.module.css";
import { Ambito, Orientacion, Sector } from "types/school-attrbs";
import { Provincias } from "types/provincia";
import Image from "next/image";

type Props = { params: { slug: string } };

async function FindBySlug({ params: { slug } }: Props) {

  return (
    <main className={styles.main}>
      <Nav></Nav>

      <div className='flex justify-center items-center w-full flex-col gap-4'>
        <div className='flex-1 flex flex-col justify-center items-center w-full'>
          <Image
            src={"/img/edu-1.jpg"}
            alt='imagen'
            width={1600}
            height={500}
            style={{ minWidth: "100%", maxHeight: 500, objectFit: "cover" }}
          />
        </div>

        <div className='flex justify-center items-center'>
          <div className='w-full md:w-2/3 lg:w-1/2 flex flex-col justify-center items-start p-4 gap-14'>
            <InfoCard
              ambito={Ambito.Urbano}
              sector={Sector.Estatal}
              orientacion={Orientacion.Electromecánica}
              ubicacion={{
                ciudad: "Coronda",
                provincia: Provincias["Santa Fe"],
              }}
            ></InfoCard>
            <div>
              <h1 className='my-4 text-3xl md:text-4xl lg:text-5xl font-semibold'>
                E.E.T.P N. 612 "Eudocio de los Santos Giménez"
              </h1>
              <h4 className='font-light'>
                Optional subtitle Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Amet, deleniti?
              </h4>
            </div>
            <p className='text-xl'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur, corporis. Sapiente repellendus enim doloribus aliquam
              tempora quod consequuntur laudantium, sint esse culpa adipisci
              eos, fuga cum voluptas exercitationem sed, impedit nihil!
              Molestiae dignissimos eaque eius esse autem cumque distinctio
              provident est itaque enim nam quas beatae facilis sequi, veniam
              dolorem.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default FindBySlug;
