"use client";
import Image from "next/image";
import React, { FC } from "react";
import styles from "./article.module.css";

type Props = {
  title: string;
  content?: string;
  image?: string;
  link?: string;
};

export const Article: FC<Props> = ({ title, content, image, link }: Props) => {
  const InnerContent = () => (
    <div>
      {image && <img className={styles.image} src={image} alt={"alt-img"} />}
      <div className={styles.content}>
        <h2>{title}</h2>
        {content && <p>{content} </p>}
      </div>
    </div>
  );

  return (
    <article className={styles.article}>
      {link && (
        <a target="_blank" href={link}>
          <InnerContent />
        </a>
      )}
      {!link && <InnerContent />}
    </article>
  );
};
