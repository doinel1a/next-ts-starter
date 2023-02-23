import Head from 'next/head';
import React from 'react';

interface IMetaHead {
  title: string;
  description: string;
  keywords: string;
}

export default function MetaHead({ title, description, keywords }: IMetaHead) {
  return (
    <Head>
      {/* ESSENTIAL */}
      <meta charSet='utf-8' />
      <meta httpEquiv='x-ua-compatible' content='ie=edge' />
      <meta name='viewport' content='width=device-width, initial-scale=1' />

      {/* GENERAL */}
      <title>{title}</title>
      <meta name='title' content={title} />
      <meta name='application-name' content={title} />
      <meta name='description' content={description} />
      <meta name='keywords' content={keywords} />
      <link rel='manifest' href='/app.webmanifest' />
      <link rel='icon' sizes='192x192' href='/favicon/favicon-192.png' />
      <link rel='icon' sizes='512x512' href='/favicon/favicon-512.png' />

      {/* GOOGLE  */}
      <meta name='rating' content='General' />
      <meta name='robots' content='index,follow' />

      {/* iOS  */}
      <link rel='apple-touch-icon' href='/favicon/favicon-512.png' />
      <link rel='mask-icon' href='/favicon/favicon-512.png' color='black' />
      <meta name='apple-mobile-web-app-title' content={title} />
      <meta name='apple-mobile-web-app-capable' content='yes' />
      <meta name='apple-mobile-web-app-status-bar-style' content='black' />

      {/* ANDROID  */}
      <meta name='theme-color' content='#000' />
      <meta name='mobile-web-app-capable' content='yes' />
    </Head>
  );
}
