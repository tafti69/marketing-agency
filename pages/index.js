import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Main from "../components/Main";
import ServicesSection from "../components/ServicesSection";
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
        <ServicesSection />
        <Solutions />
        <Footer />
      </div>
    </div>
  );
}
