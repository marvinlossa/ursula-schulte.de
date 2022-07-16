import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Ursula Schulte</title>
        <meta name="description" content="Die Homepage von Ursula Schulte" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Ursula Schulte
        </h1>
        <p className={styles.description}>
          Als langjährige Führungskraft im Verkauf versuche ich stets, mein Knowhow und Enthusiasmus mit unseren Lesern zu teilen. Mein Schwerpunkt liegt dabei bei der Qualifizierung von Leads und der Optimierung von Verkaufsvorgängen im e-Commerce.
        </p>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
