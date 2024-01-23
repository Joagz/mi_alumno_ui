import Image from "next/image";
import styles from "./featured-link.module.css";
type Props = {
  image?: string;
  url: string;
  children: string;
};
export const FeaturedLink = ({ image, url, children }: Props) => {
  return (
    <a
      href={url}
      target='_blank'
      className='w-40 hover:translate-y-1 transition-all p-1 gap-1 flex justify-center items-center flex-col group'
    >
      {image && (
        <Image
          src={"/icon" + image}
          alt=''
          width={50}
          height={50}
          className={
            "transition-all group-hover:filter-none group-hover:scale-90 group-hover:bg-yellow-300 w-24 rounded-full aspect-square bg-orange-400 p-3 invert text-white"
          }
        />
      )}
      <span className={styles.text}>{children}</span>
    </a>
  );
};
