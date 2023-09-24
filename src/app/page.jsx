import Featured from "@/components/featured/Featured";
import styles from "./homepage.module.css";
import Link from "next/link";
import CategoryList from "@/components/categoryList/CategoryList";
import CardList from "@/components/cardList/cardList";
import Menu from "@/components/Menu/Menu";

export default function Home() {
  return (
    <div className="styles.container">
      <Featured />
      <CategoryList />
      <div>
        <CardList />
        <Menu />
      </div>
    </div>
  )
}
