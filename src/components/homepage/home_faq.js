"use client";
import style from "@/components/homepage/home_faq.module.css";
import { useState } from "react";

export default function Faq_home() {
  const [active, setActive] = useState({
    faq1: false,
    faq2: false,
    faq3: false,
  });
  return (
    <>
      <div class={style.faq}>
        <div class={style.rate}>
          <img src="/lady_rate.png" alt="lady_rate" />
          <div class={style.star}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>

        <div class={style.faq_content}>
          <h1>FAQ</h1>
          <div class={style.freq}>
            <h4>
              Apa Saja Faktor Yang Meningkatkan Resiko Ibu Hamil Mengandung Bayi
              Down Syndrome?
            </h4>

            <button
              type="button"
              onClick={() => {
                // setActive1(!active1);
                const temp = !active.faq1;
                setActive({ ...active, faq1: temp });
              }}
            >
              <img src="/Arrow_Vector.svg" alt="Expand" />
            </button>

            <p className={`${style.expand} ${active.faq1 ? "flex" : "hidden"}`}>
              Tanda-tanda ibu hamil bayi Down syndrome dapat terdeteksi melalui
              pemeriksaan USG pada bulan-bulan awal kehamilan. Bila diperlukan,
              Dokter akan menyarankan untuk melakukan pemeriksaan lebih lanjut
              seperti CVS atau amniosentesis.
            </p>
          </div>
          <div class={style.freq}>
            <h4>Apakah Kondisi Down Syndrome Bisa Terdeteksi?</h4>
            <button
              type="button"
              onClick={() => {
                // setActive2(!active2);
                const temp = !active.faq2;
                setActive({ ...active, faq2: temp });
              }}
            >
              <img src="/Arrow_Vector.svg" alt="Expand" />
            </button>

            <p className={`${style.expand} ${active.faq2 ? "flex" : "hidden"}`}>
              Tanda-tanda ibu hamil bayi Down syndrome dapat terdeteksi melalui
              pemeriksaan USG pada bulan-bulan awal kehamilan. Bila diperlukan,
              Dokter akan menyarankan untuk melakukan pemeriksaan lebih lanjut
              seperti CVS atau amniosentesis.
            </p>
          </div>
          <div class={style.freq}>
            <h4>Apakah Down Syndrome Sebuah Penyakit?</h4>
            <button
              type="button"
              onClick={() => {
                // setActive3(!active3);
                const temp = !active.faq3;
                setActive({ ...active, faq3: temp });
              }}
            >
              <img src="/Arrow_Vector.svg" alt="Expand" />
            </button>
            <p className={`${style.expand} ${active.faq3 ? "flex" : "hidden"}`}>
              Tanda-tanda ibu hamil bayi Down syndrome dapat terdeteksi melalui
              pemeriksaan USG pada bulan-bulan awal kehamilan. Bila diperlukan,
              Dokter akan menyarankan untuk melakukan pemeriksaan lebih lanjut
              seperti CVS atau amniosentesis.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
