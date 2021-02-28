import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Main from "../components/Main";
import Services from "../components/Services";
import Solutions from "../components/Solutions";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Focus - Digital Marketing Agency</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Header />
        <Main />
        <Services />
        <Solutions />
        <Footer />
      </div>
    </div>
  );
}
