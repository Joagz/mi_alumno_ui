import Link from "next/link";
import Image from "next/image";

type Props = {
  slug: string;
  title: string;
  content: string;
  image?: string;
  location: string;
};

export function SchoolCard({ slug, title, content, image, location }: Props) {
  return (
    <Link href={`/escuelas/${slug}`}>
      <div className='min-h-[150px] max-h-[250px] justify-between items-center gap-4 cursor-pointer group w-full flex border rounded-md hover:border-r-sky-500 border-r-8 p-4 transition-all'>
        <div className='flex flex-col'>
          <span className='md:text-2xl text-xl font-bold text-slate-600 group-hover:text-sky-500 transition-all'>
            {title}
          </span>
          <span className='font-semibold text-slate-700'>{location}</span>
          <p className='md:text-lg text-md'>
            {content.substring(0, 100)}
            {content.length > 100 && "..."}
          </p>
        </div>
        {image && (
          <Image
            height={120}
            width={120}
            src={image}
            objectFit='contain'
            alt='LOGO'
          ></Image>
        )}
      </div>
    </Link>
  );
}
