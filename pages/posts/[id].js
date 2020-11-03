import React from 'react'
import Layout from '../../components/layout'
import { getAllPostIds, getPostDataById } from '../../lib/posts'

const Post = ({ post }) => {
  const { id, title, date } = post
  return (
    <Layout>
      {title} <br/>
      {id} <br/>
      {date}
    </Layout>
  )
}

export default Post

export async function getStaticPaths() {
  const paths = getAllPostIds()
  return { paths, fallback: true }
}

export async function getStaticProps({ params }) {
  const postData = getPostDataById(params.id)
  return { props: { post: postData } }
}
