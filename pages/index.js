import Head from "next/head";
import TodoList from "../components/TodoList";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Todo With Easy Peasy</h1>

      <main className={styles.main}>
        <TodoList />
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}
