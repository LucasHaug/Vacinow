import Link from 'next/link'
import Layout from '../components/Layout'

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <h1>Hello Staging!👋</h1>
    <p>
      <Link href="/upload">
        <a>upload</a>
      </Link>
    </p>
  </Layout>
)

export default IndexPage
