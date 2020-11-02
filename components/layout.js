import React from 'react'
import styles from './layout.module.scss'
import utilStyles from '../styles/utils.module.scss'
import Link from 'next/link'
import Head from 'next/head'

const name = 'fResult'
export const siteTitle = 'My Sample WebSite'

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        Learn how to build a personal website using Next.js
        <meta
          name={'description'}
          content={'Learn how to build a personal website using Next.js'}
        />
        <meta
          property={'og:image'}
          content={`https://og-image.now.sh/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta property="og:title" content={siteTitle} />
        <meta property="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <img
              src="/images/fresult-avatar.jpg"
              className={`${styles.headerHomeImage} ${utilStyles.borderCircle}`}
              alt={name}
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <a>
                <img
                  src="/images/fresult-avatar.jpg"
                  className={`${styles.headerImage} ${utilStyles.borderCircle}`}
                  alt={name}
                />
              </a>
            </Link>
            <h2>
              <Link href="/">
                <a className={utilStyles.colorInherit}>{name}</a>
              </Link>
            </h2>
          </>
        )}
      </header>

      <main>{children}</main>

      {!home && (
        <Link href="/">
          <a>← Back to home</a>
        </Link>
      )}
    </div>
  )
}
