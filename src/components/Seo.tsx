import React from "react";
import Head from "next/head";

interface SeoProps {
  title?: string;
  description?: string;
  image?: string;
}

const Seo: React.FC<SeoProps> = ({
  title = "The Network",
  description = "The Network",
  image = "/images/shareCard.jpg",
}) => {
  return (
    <Head>
      <title>{title}</title>
      <link rel="icon" href="/images/favicon.png" />
      <meta name="description" content={description} />

      <meta property="og:locale" content="en_US" />
      <meta property="og:image" content={image} />
      <meta property="og:title" content={title} />
      <meta property="og:site_name" content={title} />
      <meta property="og:description" content={description} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:description" content={description} />
    </Head>
  );
};

export default Seo;
