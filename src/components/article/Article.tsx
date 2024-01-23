"use client";
import { FC } from "react";
import styles from "./article.module.css";
import Image from "next/image";

type Props = {
  title: string;
  content?: string;
  image?: string;
  link?: string;
};

export const Article: FC<Props> = ({ title, content, image, link }: Props) => {
  const InnerContent = () => (
    <div>
      {image && (
        <Image
          className={styles.image}
          src={image}
          alt={image}
          height={100}
          width={100}
          style={{ minWidth: "100%", height: "auto" }}
        />
      )}
      <div className={styles.content}>
        <h2>{title}</h2>
        {content && <p>{content} </p>}
      </div>
    </div>
  );

  return (
    <article className={styles.article}>
      {link && (
        <a target='_blank' href={link}>
          <InnerContent />
        </a>
      )}
      {!link && <InnerContent />}
    </article>
  );
};
