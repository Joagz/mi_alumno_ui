import { SchoolPage } from "components";

type Props = { params: { slug: string } };

async function FindBySlug({ params: { slug } }: Props) {
  return (
    <main className='p-12 relative'>
      <SchoolPage />
    </main>
  );
}

export default FindBySlug;
