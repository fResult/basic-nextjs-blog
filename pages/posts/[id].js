import React from 'react'
import Layout from '../../components/layout'
import { getAllPostIds } from '../../lib/posts'

const Post = () => {
  return <Layout></Layout>
}

export default Post

export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
}
