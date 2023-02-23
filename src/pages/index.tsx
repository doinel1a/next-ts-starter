import React from 'react';

import Counter from '@/components/counter';
import GithubCorner from '@/components/github-corner';
import MetaHead from '@/components/meta-head';

export default function Home() {
  return (
    <>
      <MetaHead
        title='NextTS — Starter'
        description='Start a NextJS Web App, SPA, website or landing page using TypeScript, Tailwind CSS, ESLint, Husky, Vercel and much more, in JUST 30 seconds, without the hassle of setting up your dev environment.'
        keywords='typescript, ts, react-typescript, react-ts, react, template, boilerplate, next-js, nextjs, vercel, tailwind, tailwindcss, sass, scss, css, github'
      />

      <main className='flex h-screen flex-col items-center justify-center bg-primary text-color'>
        <GithubCorner
          title='Get started on GitHub'
          url='https://github.com/doinel1a/next-ts-starter'
        />
        <Counter />
      </main>
    </>
  );
}
