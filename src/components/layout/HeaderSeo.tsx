import Head from "next/head";
import React from "react";

function HeaderSeo({
  title,
  keywords,
  description,
}: {
  title: string;
  keywords: string;
  description: string;
}) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keyword" content={keywords} />
    </Head>
  );
}

export default HeaderSeo;
