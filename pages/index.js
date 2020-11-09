import { useStoreState } from "easy-peasy";
import Head from "next/head";
import NavBar from "../components/NavBar";
import TodoList from "../components/TodoList";
import styles from "../styles/Home.module.css";

export default function Home() {
  const user = useStoreState((state) => state.auth.currentUser);
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <h1>Todo With Easy Peasy</h1>
      <h2>Welcome {user.lastName}</h2>

      <main className={styles.main}>
        <TodoList />
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}
