import Link from 'next/link'
import { Button } from 'react-bootstrap'
import styles from './styles/homepage.module.css'

const Homepage = () => (
    <div className={styles.container}>
        <h1 className={styles.title}>Vacinow</h1>
        <p className={styles.links}>
            <Button className={styles.linkButton} href="/upload">Login</Button>
            <Button className={styles.linkButton} href="/upload">Upload</Button>
            <Button className={styles.linkButton} href="/upload">Cadastrar vacinação</Button>
        </p>
    </div>
)

export default Homepage
