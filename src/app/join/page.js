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
          <div className={`${style.daftar_anak}`}>
            <h1>Bergabung dengan PIK POTADS sesuai dengan umur anak anda</h1>

            <div className={`${style.link_list}`}>
              <Link
                href="https://bit.ly/DataAnggotaPotadsJabar0-6thn"
                className={`${style.button_volunteer}`}
              >
                0 - 6 Tahun
              </Link>
              <Link
                href="https://bit.ly/DataAnggotaPotadsJabar6-15thn"
                className={`${style.button_volunteer}`}
              >
                7 - 15 Tahun
              </Link>
              <Link
                href="https://bit.ly/DataAnggotaPotadsJabar15thplus"
                className={`${style.button_volunteer}`}
              >
                Lebih dari 15 Tahun
              </Link>
            </div>
          </div>

          <div className={`${style.other_join}`}>
            <Link href="/">Relawan</Link>
          </div>
        </div>
      </div>
    </>
  );
}
