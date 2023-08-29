"use client";
/* eslint-disable @next/next/no-img-element */
import style from "@/components/navbar.module.css";
import Image from "next/image";
import burger from "../../public/burger_icon.svg";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <div className={style.donasi}>
        <a href="https://docs.google.com/forms/d/1zJpofuOkMCzJK-nwrluYO84G0IdHdUDS4oAvR8uPiKI/edit">
          <h2>Donasi Klik Disini</h2>
        </a>
      </div>

      <div className={style.navbar}>
        <div className={style.logo}>
          <a href="/">
            <Image src="/Logo Potads.png" alt="Logo" width={80} height={80} />
          </a>
        </div>
        <button
          type="button"
          onClick={() => setIsActive(!isActive)}
          className={style.burger}
        >
          <Image src={burger} alt="burger" width={60} height={60} />
        </button>

        <div className={style.all_links}>
          <div className={`${style.navigation} ${isActive ? "flex" : ""}`}>
            <Link href="/">Beranda</Link>
            <Link href="/Edukasi">Edukasi</Link>
            <Link href="/TentangKami">Tentang</Link>
            <Link href="/Kegiatan">Kegiatan</Link>
            <Link href="/Tim">Tim</Link>
            <Link href="/FAQ">FAQ</Link>
            <Link href="/Kontak/">Kontak</Link>
          </div>

          <Link href="/join">
            <div className={style.join_us}>Join Us</div>
          </Link>
        </div>
      </div>
    </>
  );
}
