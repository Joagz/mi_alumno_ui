import { Nav } from "components";

type Props = { params: { page: [] } };

function PortalPage({ params }: Props) {
  return (
    <main className='flex'>
      <Nav />
      {params.page.map((p) => (
        <span>{p}</span>
      ))}
    </main>
  );
}

export default PortalPage;
