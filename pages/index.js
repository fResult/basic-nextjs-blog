import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Hello I'm Korn. <br />
          You can also tell me short, that's `Sila`. <br />
          My site is called <a href="https://fResult.dev">fResult website</a> <br />
          Thanks
        </p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>. )
        </p>
      </section>
    </Layout>
  )
}
