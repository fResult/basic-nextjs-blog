import React from 'react'
import dompurify from 'dompurify'
import Layout from '../../components/layout'
import { getAllPostIds, getPostDataById } from '../../lib/posts'
import Head from 'next/head'


const Post = ({ post }) => {
  const { id, title, date, contentHtml } = post
  return (
    <Layout>
      <Head>
        <title>{title}</title>
      </Head>
      {title} <br />
      {id} <br />
      {date} <br />
      <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
    </Layout>
  )
}

export default Post

export async function getStaticPaths() {
  const paths = getAllPostIds()
  return { paths, fallback: true }
}

export async function getStaticProps({ params }) {
  const postData = await getPostDataById(params.id)
  return { props: { post: postData } }
}
