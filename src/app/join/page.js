import style from "@/app/join/join.module.css";
import Link from "next/link";

export default function Join() {
  return (
    <>
      <div className={`${style.full_container}`}>
        <div className={`${style.container_title}`}>
          <h1>Join us</h1>
        </div>

        <div className={`${style.container_content}`}>
          <Link href="/" className={`${style.button_volunteer}`}>
            Relawan
          </Link>
          <Link href="/" className={`${style.button_volunteer}`}>
            Relawan
          </Link>
          <Link href="/" className={`${style.button_volunteer}`}>
            Relawan
          </Link>
        </div>
      </div>
    </>
  );
}
