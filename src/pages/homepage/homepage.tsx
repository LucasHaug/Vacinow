import Link from 'next/link'
import { Button } from 'react-bootstrap'
import styles from './homepage.module.css'

const Homepage = () => (
    <div>
        <h1 className={styles.title}>Vacinow</h1>
        <p>
            <Link href="/upload">
                <a>Upload</a>
            </Link>
            <Link href="/upload">
                <a>Login</a>
            </Link>
            <Button>oi</Button>
        </p>
    </div>
)

export default Homepage
