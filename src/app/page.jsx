import Featured from "@/components/featured/Featured";
import styles from "./home.module.css";
import Link from "next/link";
import CategoryList from "@/components/categoryList/CategoryList";
import CardList from "@/components/cardList/cardList";
import Menu from "@/components/Menu/Menu";

export default function Home() {
  return (
    <div className={styles.container}>
      <Featured />
      <CategoryList />
      <div className={styles.content}>
        <CardList />
        <Menu />
      </div>
    </div>
  )
}
