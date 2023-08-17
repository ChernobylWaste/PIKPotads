"use client";
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import style from "./home.module.css";
import { useEffect, useState } from "react";
// import HomeKegiatan from "@/components/homepage/home_kegiatan";

export default function Home() {
  const [active, setActive] = useState({
    faq1: false,
    faq2: false,
    faq3: false,
  });

  return (
    <>
      <div class={style.welcome}>
        <h1>SELAMAT DATANG DI WEBSITE POTADS JAWA BARAT</h1>
      </div>

      <div class={style.general_content}>
        <div class={style.general_title}>
          <h1>EDUKASI DOWN SYNDROME</h1>
          <div class={style.content}>
            <p>
              Sindrom Down adalah suatu kondisi di mana seseorang memiliki
              kromosom ekstra. Kromosom adalah "paket" kecil gen dalam tubuh.
              Mereka menentukan bagaimana tubuh bayi terbentuk dan berfungsi
              saat tumbuh selama kehamilan dan setelah lahir. Biasanya, bayi
              lahir dengan 46 kromosom. Bayi dengan sindrom Down memiliki
              salinan ekstra dari salah satu kromosom ini, kromosom 21. Istilah
              medis untuk memiliki salinan ekstra kromosom adalah 'trisomi.'
              Sindrom Down juga disebut sebagai Trisomi 21. Salinan ekstra ini
              mengubah cara tubuh dan otak bayi berkembang, yang dapat
              menyebabkan tantangan mental dan fisik bagi bayi.
            </p>
            <a href="/Edukasi/index.html" className={style.hyperlink}>
              Info Lebih Lanjut
            </a>
          </div>
        </div>

        <div class={style.general_title}>
          <h1>TENTANG POTADS</h1>
          <div class={style.content}>
            <p>
              Pertama kali diinisiasi oleh 3 orangtua pada tahun 1997 melalui
              sebuah pertemuan rutin yang dilakukan pada saat mengantar sang
              buah hati melakukan terapi di salah satu Rumah Sakit di Jakarta.
              Seiring dengan bertambahnya kebutuhan akan dukungan dan informasi
              yang akurat, Pusat Informasi Kegiatan (PIK) POTADS berkembang
              hingga terdapat 10 PIK yang tersebar di Indonesia. Yayasan POTADS
              sebagai organisasi sosial nirlaba yang menyediakan dukungan berupa
              informasi, sharing, bantuan serta wadah kegiatan bagi orang tua
              anak dengan Down Syndrome. Yayasan POTADS didirikan dengan Akte
              Notaris Noerbaety Ismail SH, M Kn No 19 tertanggal 28 Juli 2003.
              berkedudukan di Cinere, Tangerang Selatan. Sedangkan PIK POTADS
              yang merupakan cabang di Bandung, didirikan dengan SK Yayasan
              POTADS pada 21 Maret 2012, yang kemudian menjadi PIK Potads Jawa
              Barat di tahun 2019. Tujuan utama POTADS adalah memberdayakan
              orangtua anak dengan Down Syndrome agar selalu bersemangat untuk
              membantu tumbuh kembang anak spesialnya secara maksimal, sehingga
              mereka mampu menjadi pribadi yang mandiri, bahkan bisa berprestasi
              sehingga dapat diterima masyarakat luas: karena anak Down Syndrome
              memiliki Hak yang sama dengan anak-anak lainnya.
            </p>
            <a href="/TentangKami" className={style.hyperlink}>
              Info Lebih Lanjut
            </a>
          </div>
        </div>
      </div>

      <div class={style.scroll_able}>
        <div class={style.visi_misi}>
          <div class={style.visi}>
            <h1>Visi</h1>
            <p>
              Visi Yayasan POTADS adalah menjadi pusat informasi dan konsultasi
              terlengkap tentang Down Syndrome di Indonesia.
            </p>
            <a href="" className={style.hyperlink}>
              Info Lebih Lanjut
            </a>
          </div>

          <div class={style.misi}>
            <h1>Misi</h1>
            <p>
              Memiliki pusat informasi yang bisa diakses 24 jam baik melalui
              surat, telepon, internet atau media komunikasi lainnya.
              Menyediakan informasi terkini tentang perkembangan Down Syndrome
              baik secara ilmiah maupun dari pengalaman orang lain.
            </p>
            <a href="" className={style.hyperlink}>
              Info Lebih Lanjut
            </a>
          </div>

          <div class={style.motto}>
            <h1>Motto</h1>
            <p>
              Motto PIK Potads Jabar adalah BEDA TAPI KEREN, yang merupakan
              ekspresi dari anak-anak down syndrome Jawa Barat yg memang berbeda
              dari anak-anak lain tetapi tetap bisa melakukan dan menampilkan
              berbagai kegiatan baik olahraga, seni dan keterampilan lainnya
              bahkan banyak yang berprestasi sehingga itu menjadi terlihat Keren
              / Istimewa
            </p>
            <a href="" className={style.hyperlink}>
              Info Lebih Lanjut
            </a>
          </div>
        </div>
      </div>

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

      {/* <HomeKegiatan /> */}

      <div class={style.events_comp}>
        <h1 class={style.events_title}>Events</h1>
        <div class={style.events}>
          <div class={style.list}>
            <img
              src="https://plus.unsplash.com/premium_photo-1663100143645-219cad61e1e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
              alt=""
            />
            <h1>MUSIK</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div class={style.list}>
            <img
              src="https://plus.unsplash.com/premium_photo-1663100143645-219cad61e1e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
              alt=""
            />
            <h1>MUSIK</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div class={style.list}>
            <img
              src="https://plus.unsplash.com/premium_photo-1663100143645-219cad61e1e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
              alt=""
            />
            <h1>MUSIK</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
        <a href="EventsPotads/" className={style.hyperlink}>
          Info Lebih Lanjut
        </a>
      </div>

      <div class={style.tim_comp}>
        <h1>TIM</h1>
        <div class={style.tim_grid}>
          <div class={style.tim_grid_total}>
            <h1>Jumlah Team</h1>
            <h2>POTADS JABAR</h2>

            <div class={style.total_number}>
              <div class={style.volunteer}>
                <h1>XXX</h1>
                <p>Volunteer</p>
              </div>

              <div class={style.pengurus}>
                <h1>XXX</h1>
                <p>Pengurus</p>
              </div>
            </div>

            <a href="" className={style.hyperlink}>
              Info Lebih Lanjut
            </a>
          </div>

          <div class={style.tim_grid_image}>
            <img
              src="https://images.unsplash.com/photo-1471922694854-ff1b63b20054?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80"
              alt="placeholder"
            />
            <img
              src="https://images.unsplash.com/photo-1520454974749-611b7248ffdb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
              alt="placeholder"
            />
          </div>
        </div>
      </div>

      <div class={style.contact}>
        <div class={style.info}>
          <h1>Kontak Kami</h1>
          <div class={style.email}>
            <a href="mailto:">
              <img src="/gmail.svg" alt="gmail" />
              example@gmail.com
            </a>
          </div>
          <div class="phone">
            <a href="tel:+62">
              <img src="/phone.svg" alt="phone" />
              08123456789
            </a>
          </div>
        </div>

        <div class={style.maps}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.307499363972!2d107.62911047494718!3d-6.973001668278649!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e9adf177bf8d%3A0x437398556f9fa03!2sTelkom%20University!5e0!3m2!1sen!2sid!4v1692090584338!5m2!1sen!2sid"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </>
  );
}
