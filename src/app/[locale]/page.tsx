import styles from "./page.module.css";
import { useTranslations } from "next-intl";
import Link from "next/link";

export default function Home() {
  const t = useTranslations("common");
  const t1 = useTranslations();
  return (
    <div className={styles.page}>
      <h1>{t("HomePage.title")}</h1>
      <h2>{t1("common.HomePage.title")}</h2>
      <Link href="/about">{t("HomePage.about")}</Link>
    </div>
  );
}
