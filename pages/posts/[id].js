import React from 'react'
import Head from 'next/head'

import { getAllPostIds, getPostDataById } from '../../lib/posts'
import utilStyles from '../../styles/utils.module.scss'

import Layout from '../../components/layout'
import Date from '../../components/date'

export default function Post({ post }) {
  const { title, date, contentHtml } = post
  return (
    <Layout>
      <Head>
        <title>{title}</title>
      </Head>
      <h1 className={utilStyles.headingXl}>{title}</h1>
      <div className={utilStyles.lightText}>
        <Date fontSize={utilStyles.lightText} {...{ dateStr: date }} />
      </div>
      <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
    </Layout>
  )
}

export async function getStaticPaths() {
  const paths = getAllPostIds()
  return { paths, fallback: true }
}

export async function getStaticProps({ params }) {
  const postData = await getPostDataById(params.id)
  return { props: { post: postData } }
}
