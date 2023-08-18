/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import style from "@/app/FAQ/FAQ.module.css";
import { useState } from "react";
import { Button, Collapse } from "react-bootstrap";

export default function faq() {
  const [isActive, setIsActive] = useState({
    faq1: false,
    faq2: false,
    faq3: false,
    faq4: false,
    faq5: false,
    faq6: false,
    faq7: false,
    faq8: false,
    faq9: false,
    faq10: false,
    faq11: false,
    faq12: false,
  });

  // const ButtonCollapse = () => {
  //   setIsActive(!isActive);
  // };

  return (
    <>
      <div
        class="container-fluid text-light"
        style={{ height: "290px", backgroundColor: "#25265E" }}
        // style="height: 290px; background-color: #25265E;"
      >
        <div>
          <h1 class={style.katafotokiriFAQ}>Frequently Asked Questions</h1>
        </div>
      </div>
      <p
        class="row justify-content-center"
        style={{
          "font-size": "larger",
          "font-weight": "600",
          margin: "7vh",
        }}
      >
        Pertanyaan yang sering ditanyakan oleh orang-orang mengenai Down
        Syndrome
      </p>

      <div
        className="container"
        style={{
          margin: "7vh",
        }}
      ></div>

      <div class="container-fluid px-4">
        <div class="row justify-content-center">
          <div class="col-md-3 text-center">
            <p class="d-inline-flex gap-1">
              <a
                class={`btn btn-primary m-10 ${style.buttoncolourFAQ}`}
                data-bs-toggle="collapse"
                href="#collapseExample"
                type="button"
                onClick={() => {
                  const temp = !isActive.faq1;
                  setIsActive({ ...isActive, faq1: temp });
                }}
                aria-expanded="false"
                aria-controls="collapseExample"
              >
                Apa yang dimaksud dengan Down Syndrome?
              </a>
            </p>
            <div
              class="collapse"
              id="collapseExample"
              className={`${style.expand} ${isActive.faq1 ? "flex" : "hidden"}`}
            >
              <div class="card cardDesk card-body mx-auto">
                Down syndrome adalah suatu kondisi akibat perkembangan kromosom
                21 yang tidak normal. Istilah Down syndrome merujuk pada nama
                seorang peneliti dari Inggris, yaitu Dr. John Langdon Down, yang
                mempublikasikan tulisannya pada tahun 1866, setelah meneliti
                sejumlah anak yang memiliki ciri fisik yang khas.
              </div>
            </div>
          </div>

          <div class="col-md-3 text-center">
            <p class="d-inline-flex gap-1">
              <a
                class={`btn btn-primary m-10 ${style.buttoncolourFAQ}`}
                data-bs-toggle="collapse"
                href="#collapseExample1"
                type="button"
                onClick={() => {
                  const temp = !isActive.faq2;
                  setIsActive({ ...isActive, faq2: temp });
                }}
                aria-expanded="false"
                aria-controls="collapseExample1"
              >
                Apa penyebab daripada Down Syndrome?
              </a>
            </p>
            <div
              class="collapse"
              id="collapseExample1"
              className={`${style.expand} ${isActive.faq2 ? "flex" : "hidden"}`}
            >
              <div class="card cardDesk card-body mx-auto">
                Down syndrome disebabkan oleh adanya pembelahan sel yang tidak
                normal pada saat fase embrio (nondisjunction embrio). Pada
                kondisi normal, pembelahan sel tersebut akan membuat bayi
                memiliki 46 kromosom. Namun, nondisjunction embrio menghasilkan
                salinan tiga kromosom 21 yang mengakibatkan bayi memiliki 47
                kromosom. Kondisi ini dikenal juga dengan trisomi 21
              </div>
            </div>
          </div>
          <div class="col-md-3  text-center">
            <p class="d-inline-flex gap-1">
              <a
                class={`btn btn-primary m-10 ${style.buttoncolourFAQ}`}
                data-bs-toggle="collapse"
                href="#collapseExample2"
                type="button"
                onClick={() => {
                  const temp = !isActive.faq3;
                  setIsActive({ ...isActive, faq3: temp });
                }}
                aria-expanded="false"
                aria-controls="collapseExample2"
              >
                Apakah kondisi Down Syndrome bisa terdeteksi?
              </a>
            </p>
            <div
              class="collapse"
              id="collapseExample2"
              className={`${style.expand} ${isActive.faq3 ? "flex" : "hidden"}`}
            >
              <div class="card cardDesk card-body mx-auto">
                Tanda-tanda ibu hamil bayi Down syndrome dapat terdeteksi
                melalui pemeriksaan USG pada bulan-bulan awal kehamilan. Bila
                diperlukan, Dokter akan menyarankan untuk melakukan pemeriksaan
                lebih lanjut seperti CVS atau amniosentesis.
              </div>
            </div>
          </div>
          <div class="col-md-3  text-center">
            <p class="d-inline-flex gap-1">
              <a
                class={`btn btn-primary m-10 ${style.buttoncolourFAQ}`}
                data-bs-toggle="collapse"
                href="#collapseExample3"
                type="button"
                onClick={() => {
                  const temp = !isActive.faq4;
                  setIsActive({ ...isActive, faq4: temp });
                }}
                aria-expanded="false"
                aria-controls="collapseExample3"
              >
                Apakah Down Syndrome itu sebuah penyakit?
              </a>
            </p>
            <div
              class="collapse"
              id="collapseExample3"
              className={`${style.expand} ${isActive.faq4 ? "flex" : "hidden"}`}
            >
              <div class="card cardDesk card-body mx-auto">
                Down syndrome BUKAN penyakit, maka Down syndrome TIDAK bisa
                diobati dan TIDAK bisa menular. Bayi yang terlahir Down syndrome
                akan membawa kondisi ini sepanjang hidupnya, oleh karena itu
                mereka disebut penyandang Down syndrome. Pemeriksaan genetik
                disarankan bagi orang yang memiliki keluarga dengan Down
                syndrome sebelum merencanakan kehamilan.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="container-fluid px-4">
        <div class="row  justify-content-center">
          <div class="col-md-3  text-center">
            <p class="d-inline-flex gap-1">
              <a
                class={`btn btn-primary m-10 ${style.buttoncolourFAQ}`}
                data-bs-toggle="collapse"
                href="#collapseExample4"
                type="button"
                onClick={() => {
                  const temp = !isActive.faq5;
                  setIsActive({ ...isActive, faq5: temp });
                }}
                aria-expanded="false"
                aria-controls="collapseExample4"
              >
                Apa yang harus dilakukan oleh orang tua?
              </a>
            </p>
            <div
              class="collapse"
              id="collapseExample4"
              className={`${style.expand} ${isActive.faq5 ? "flex" : "hidden"}`}
            >
              <div class="card cardDesk card-body mx-auto">
                Anak Down syndrome memiliki kemungkinan lahir dengan masalah
                fisik dan mengalami keterlambatan pada pertumbuhan fisik. Segera
                lakukan konsultasi dengan Dokter atau Dokter Spesialis Anak,
                untuk kemudian dilakukan pemeriksaan medis untuk mengetahui
                fungsi jantung, pernafasan, tiroid, pencernaan, pendengaran, dan
                penglihatan
              </div>
            </div>
          </div>
          <div class="col-md-3  text-center">
            <p class="d-inline-flex gap-1">
              <a
                class={`btn btn-primary m-10 ${style.buttoncolourFAQ}`}
                data-bs-toggle="collapse"
                href="#collapseExample5"
                type="button"
                onClick={() => {
                  const temp = !isActive.faq6;
                  setIsActive({ ...isActive, faq6: temp });
                }}
                aria-expanded="false"
                aria-controls="collapseExample5"
              >
                Apakah anak Down syndrome dapat berbicara?
              </a>
            </p>
            <div
              class="collapse"
              id="collapseExample5"
              className={`${style.expand} ${isActive.faq6 ? "flex" : "hidden"}`}
            >
              <div class="card cardDesk card-body mx-auto">
                Kemampuan berbicara anak Down syndrome umumnya mengalami
                hambatan karena kemampuan saraf dan motoriknya tidak berkembang
                dengan sempurna. Oleh karena itu, selain diperlukan stimulasi
                dan terapi yang tepat, dibutuhkan pula kemampuan lain agar anak
                Down syndrome mampu melakukan komunikasi, bukan hanya sekedar
                berbicara.
              </div>
            </div>
          </div>
          <div class="col-md-3  text-center">
            <p class="d-inline-flex gap-1">
              <a
                class={`btn btn-primary m-10 ${style.buttoncolourFAQ}`}
                data-bs-toggle="collapse"
                href="#collapseExample6"
                type="button"
                onClick={() => {
                  const temp = !isActive.faq7;
                  setIsActive({ ...isActive, faq7: temp });
                }}
                aria-expanded="false"
                aria-controls="collapseExample6"
              >
                Apakah anak Down syndrome bisa sekolah?
              </a>
            </p>
            <div
              class="collapse"
              id="collapseExample6"
              className={`${style.expand} ${isActive.faq7 ? "flex" : "hidden"}`}
            >
              <div class="card cardDesk card-body mx-auto">
                Pada umumnya, anak Down syndrome dapat mengikuti pendidikan
                seperti anak lainnya. Pada perkembangannya, anak Down syndrome
                dapat diikutkan di kelas tambahan selain mata pelajaran inti,
                seperti kelas bina diri, olahraga, pengembangan diri,
                pengembangan sosial, dll
              </div>
            </div>
          </div>
          <div class="col-md-3  text-center">
            <p class="d-inline-flex gap-1">
              <a
                class={`btn btn-primary m-10 ${style.buttoncolourFAQ}`}
                data-bs-toggle="collapse"
                href="#collapseExample7"
                type="button"
                onClick={() => {
                  const temp = !isActive.faq8;
                  setIsActive({ ...isActive, faq8: temp });
                }}
                aria-expanded="false"
                aria-controls="collapseExample7"
              >
                Apakah penyandang Down syndrome dewasa bisa bekerja?
              </a>
            </p>
            <div
              class="collapse"
              id="collapseExample7"
              className={`${style.expand} ${isActive.faq8 ? "flex" : "hidden"}`}
            >
              <div class="card cardDesk card-body mx-auto">
                Dengan penanganan yang tepat dan juga dukungan dari lingkungan
                sekitar, penyandang Down syndrome dapat hidup mandiri baik
                sebagai individu maupun sebagai bagian dari masyarakat. Mereka
                juga dapat memiliki suatu profesi dan mempetypeh penghasilan
                sendiri.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="container-fluid px-4">
        <div class="row ">
          <div class="col-md-3  text-center">
            <p class="d-inline-flex gap-1">
              <a
                class={`btn btn-primary m-10 ${style.buttoncolourFAQ}`}
                data-bs-toggle="collapse"
                href="#collapseExample8"
                type="button"
                onClick={() => {
                  const temp = !isActive.faq9;
                  setIsActive({ ...isActive, faq9: temp });
                }}
                aria-expanded="false"
                aria-controls="collapseExample8"
              >
                Apa ciri fisik anak Down Syndrome?
              </a>
            </p>
            <div
              class="collapse"
              id="collapseExample8"
              className={`${style.expand} ${isActive.faq9 ? "flex" : "hidden"}`}
            >
              <div class="card cardDesk card-body mx-auto">
                <ul class="list-group mx-2" style={{ "text-align": "left" }}>
                  <li style={{ margin: "1vh" }}>1. Tampilan wajah yang khas</li>
                  <li style={{ margin: "1vh" }}>2. Tulang hidung rata</li>
                  <li style={{ margin: "1vh" }}>
                    3. Ukuran mulut kecil dengan lidah tebal dan menjulur
                  </li>
                  <li style={{ margin: "1vh" }}>
                    4. Telinga yang kecil dan letaknya agak ke bawah
                  </li>
                  <li style={{ margin: "1vh" }}>
                    5. Ukuran kepala lebih kecil
                  </li>
                  <li style={{ margin: "1vh" }}>
                    6. Tinggi badan lebih pendek
                  </li>
                  <li style={{ margin: "1vh" }}>
                    7. Otot-otot lemas dan kurang terbentuk
                  </li>
                  <li style={{ margin: "1vh" }}>
                    8. Tinggi badan lebih pendek
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-md-3  text-center">
            <p class="d-inline-flex gap-1">
              <a
                class={`btn btn-primary m-10 ${style.buttoncolourFAQ}`}
                data-bs-toggle="collapse"
                href="#collapseExample10"
                type="button"
                onClick={() => {
                  const temp = !isActive.faq10;
                  setIsActive({ ...isActive, faq10: temp });
                }}
                aria-expanded="false"
                aria-controls="collapseExample10"
              >
                Apa saja jenis Down Syndrome?
              </a>
            </p>
            <div
              class="collapse"
              id="collapseExample10"
              className={`${style.expand} ${
                isActive.faq10 ? "flex" : "hidden"
              }`}
            >
              <div class="card cardDesk card-body mx-auto">
                <ul class="list-group mx-2" style={{ "text-align": "left" }}>
                  <li style={{ "font-weight": "660" }}>Trisomi 21</li>
                  <p>
                    Trisomi 21 merupakan jenis Down syndrome yang paling sering
                    terjadi. Pada jenis ini, setiap sel tubuh memiliki salinan
                    ekstra kromosom 21.
                  </p>
                  <li style={{ "font-weight": "660" }}>Mosaik</li>
                  <p>
                    Pada jenis ini, salinan ekstra dari kromosom 21 hanya
                    menempel di beberapa sel sehingga ciri-ciri Down syndrome
                    jenis mosaik tidak terlalu terlihat jelas seperti pada jenis
                    trisomi 21.
                  </p>
                  <li style={{ "font-weight": "660" }}>Translokasi</li>
                  <p>
                    Pada jenis ini, salinan ekstra dari kromosom 21 menempel di
                    kromosom lain. Down syndome jenis translokasi dapat
                    diturunkan dari orang tua ke anak.
                  </p>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-md-3  text-center">
            <p class="d-inline-flex gap-1">
              <a
                class={`btn btn-primary m-10 ${style.buttoncolourFAQ}`}
                data-bs-toggle="collapse"
                href="#collapseExample11"
                type="button"
                onClick={() => {
                  const temp = !isActive.faq11;
                  setIsActive({ ...isActive, faq11: temp });
                }}
                aria-expanded="false"
                aria-controls="collapseExample11"
              >
                Apa saja faktor peningkat risiko ibu hamil mengandung bayi
                dengan Down Syndrome?
              </a>
            </p>
            <div
              class="collapse"
              id="collapseExample11"
              className={`${style.expand} ${
                isActive.faq11 ? "flex" : "hidden"
              }`}
            >
              <div class="card cardDesk card-body mx-auto">
                <ul class="list-group mx-2" style={{ "text-align": "left" }}>
                  <li style={{ "font-weight": "660" }}>Usia</li>
                  <p>
                    semakin tua usia ibu saat hamil, semakin tinggi pula risiko
                    memiliki bayi Down Syndrome.
                  </p>
                  <li style={{ "font-weight": "660" }}>Genetik</li>
                  <p>
                    Jika pihak ibu yang menjadi carrier, maka resiko bayi
                    mengalami Down syndrome sekitar 10-15%. Jika dari pihak ayah
                    maka kemungkinan sekitar 3%.
                  </p>
                  <li style={{ "font-weight": "660" }}>Riwayat Kehamilan</li>
                  <p>
                    ibu hamil yang sebelumnya pernah mengandung bayi Down
                    syndrome memiliki peluang lebih besar mengandung kembali
                    bayi Down syndrome.
                  </p>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-md-3  text-center">
            <p class="d-inline-flex gap-1">
              <a
                class={`btn btn-primary m-10 ${style.buttoncolourFAQ}`}
                data-bs-toggle="collapse"
                href="#collapseExample12"
                type="button"
                onClick={() => {
                  const temp = !isActive.faq12;
                  setIsActive({ ...isActive, faq12: temp });
                }}
                aria-expanded="false"
                aria-controls="collapseExample12"
              >
                Bagaimana perkembangan anak Down Syndrome?
              </a>
            </p>
            <div
              class="collapse"
              id="collapseExample12"
              className={`${style.expand} ${
                isActive.faq12 ? "flex" : "hidden"
              }`}
            >
              <div class="card cardDesk card-body mx-auto">
                <ul class="list-group mx-2" style={{ "text-align": "left" }}>
                  <li>
                    Perkembangan fungsi fisik anak Down syndrome umumnya lebih
                    lambat daripada anak seusianya, diantaranya lebih lambat
                    untuk belajar tengkurap, duduk, berdiri, dan berjalan. Salah
                    satu penyebabnya karena ototnya kurang terbentuk dengan
                    sempurna
                  </li>
                  <li>
                    Anak Down syndrome juga diketahui memiliki kesulitan dalam
                    memusatkan perhatian, berpikir, belajar, serta dalam
                    mengelola emosi dan perilaku.
                  </li>
                  <li>
                    Beberapa anak Down syndrome ada yang dapat lebih cepat
                    menyerap informasi baru dibanding yang lainnya, bahkan ada
                    yang memiliki kemampuan lebih, yang belum tentu bisa
                    dilakukan oleh anak lain seusianya.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
