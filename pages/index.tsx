import Layout from '../components/Layout/Layout'
import Homepage from './homepage'
import RegistrationForm from './registrationForm'
import Head from 'next/head'

const IndexPage = () => (
  <Layout title="Vacinow">
    <Homepage />
  </Layout>
)

export default IndexPage
