import style from "@/app/join/join.module.css";
import Link from "next/link";

export default function Join() {
  return (
    <>
      <div className={`${style.full_container}`}>
        <div className={`${style.container_head}`}>
          <h1 className={`${style.container_title}`}>Join us</h1>

          <Link
            className={`${style.join_relawan}`}
            href="https://docs.google.com/forms/d/1AHAxrIM-oR2cMBkNttrPs4ESx94iCoikQqga5oaiIwE/viewform?edit_requested=true"
            target="_blank"
          >
            Relawan
          </Link>
        </div>

        <div className={`${style.container_content}`}>
          <div className={`${style.daftar_anak}`}>
            <h1>Bergabung dengan PIK POTADS sesuai dengan umur anak anda</h1>

            <div className={`${style.link_list}`}>
              <Link
                href="https://bit.ly/DataAnggotaPotadsJabar0-6thn"
                className={`${style.button_volunteer}`}
                target="_blank"
              >
                0 - 6 Tahun
              </Link>
              <Link
                href="https://bit.ly/DataAnggotaPotadsJabar6-15thn"
                className={`${style.button_volunteer}`}
                target="_blank"
              >
                7 - 15 Tahun
              </Link>
              <Link
                href="https://bit.ly/DataAnggotaPotadsJabar15thplus"
                className={`${style.button_volunteer}`}
                target="_blank"
              >
                Lebih dari 15 Tahun
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
