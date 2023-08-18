/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */

import style from "@/app/Edukasi/edukasi.module.css";

export default function edukasi() {
  return (
    <>
      {/* Banner */}
      <div class={style.katafotokiri}>EDUKASI DOWN SYNDROME</div>
      {/* End of Banner */}
      <div
        class="judul"
        style={{
          "text-align": "center",
          margin: "4%",
          fontFamily: "Montserrat",
          fontWeight: "700",
        }}
      >
        PENGERTIAN DOWN SYNDROME
      </div>
      <div class="container-fluid text-center">
        <div class="row align-items-center">
          <div class="col-md-8">
            <p
              class={`text-start ${style.penjelasan}`}
              style={{ fontFamily: "Montserrat", fontWeight: "500" }}
            >
              Sindrom Down adalah suatu kondisi di mana seseorang memiliki
              kromosom ekstra. Kromosom adalah "paket" kecil gen dalam tubuh.
              Mereka menentukan bagaimana tubuh bayi terbentuk dan berfungsi
              saat tumbuh selama kehamilan dan setelah lahir. Biasanya, bayi
              lahir dengan 46 kromosom. Bayi dengan sindrom Down memiliki
              salinan ekstra dari salah satu kromosom ini, kromosom 21. Istilah
              medis untuk memiliki salinan ekstra kromosom adalah 'trisomi.'
              Sindrom Down juga disebut sebagai Trisomi 21. Salinan ekstra ini
              mengubah cara tubuh dan otak bayi berkembang, yang dapat
              menyebabkan tantangan mental dan fisik bagi bayi. Meskipun orang
              dengan sindrom Down mungkin bertindak dan terlihat mirip, setiap
              orang memiliki kemampuan yang berbeda. Orang dengan sindrom Down
              biasanya memiliki IQ (ukuran kecerdasan) dalam kisaran rendah
              hingga sedang dan lebih lambat berbicara daripada anak-anak lain.
            </p>
          </div>
          <div class="col-md-3 img-container">
            <img src="/efoto1.png" class="rounded mx-auto d-block" alt="foto" />
          </div>
        </div>
      </div>

      <div
        class="judul"
        style={{
          "text-align": "center",
          fontWeight: "700",
          margin: "4%",
          fontFamily: "Montserrat",
        }}
      >
        Ciri-ciri Fisik Umum
      </div>
      <div class="container-fluid text-center">
        <div class="row align-items-center">
          <div class="col-md-6 img-container">
            <img src="/ciri.png" class="rounded mx-auto d-block" alt="foto" />
          </div>
          <div class="col-md-6">
            <ul class={style.highlightlist}>
              <li class={style.list_style}>
                Wajah rata, terutama pangkal hidung
              </li>
              <li class={style.list_style}>
                Mata berbentuk almond yang miring ke atas
              </li>
              <li class={style.list_style}>Leher pendek</li>
              <li class={style.list_style}>Telinga kecil</li>
              <li class={style.list_style}>
                Lidah yang cenderung keluar dari mulut
              </li>
              <li class={style.list_style}>
                Bintik-bintik putih kecil pada iris (bagian berwarna) mata
              </li>
              <li class={style.list_style}>Tangan dan kaki kecil</li>
              <li class={style.list_style}>
                Satu garis melintang di telapak tangan (lipatan telapak tangan)
              </li>
              <li class={style.list_style}>
                Jari kelingking kecil yang terkadang melengkung ke arah ibu jari
              </li>
              <li class={style.list_style}>
                Tonus otot yang buruk atau persendian yang longgar
              </li>
              <li class={style.list_style}>
                Lebih pendek tingginya sebagai anak-anak dan orang dewasa
              </li>
            </ul>
          </div>
        </div>
      </div>
      <br></br>
      <br></br>

      <div class={style.general_content}>
        <div class={style.edukasi}>
          <div class={style.content}>
            <p
              style={{
                "font-size": "2vw",
                "font-weight": "800",
                color: "white",
                margin: "3%",
              }}
            >
              Berapa Banyak Bayi yang Lahir dengan Keadaan Down Syndrome?
            </p>
            <p class={style.prg1} style={{ fontWeight: "600" }}>
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
            <p style={{ "text-align": "left", color: "#204ae1" }}>
              Referensi : Mai CT, Isenburg JL, Canfield MA, Meyer RE, Correa A,
              Alverson CJ, Lupo PJ, Riehle-Colarusso T, Cho SJ, Aggarwal D,
              Kirby RS. Perkiraan berbasis populasi nasional untuk cacat lahir
              utama, 2010-2014. Penelitian Cacat Lahir. 2019; 111(18):
              1420-1435.
            </p>
          </div>
        </div>
      </div>

      <div class={style.judul} style={{ margin: "3%" }}>
        Jenis-Jenis Down Syndrome
      </div>
      <div class="container-fluid">
        <div class="row align-items-center">
          <div class="col-md-8">
            <p
              class={`text-start ${style.penjelasan}`}
              style={{ "font-weight": "400" }}
            >
              Ada tiga jenis sindrom Down. Orang sering tidak dapat membedakan
              antara setiap jenis tanpa melihat kromosom karena ciri fisik dan
              perilakunya serupa.
            </p>
            <ul style={{ "margin-left": "9%", color: "#204ae1" }}>
              <li style={{ "font-weight": "660" }}>Trisomi 21</li>
              <p>
                Trisomi 21 merupakan jenis Down syndrome yang paling sering
                terjadi. Pada jenis ini, setiap sel tubuh memiliki salinan
                ekstra kromosom 21.
              </p>
              <li style={{ "font-weight": "660" }}>Mosaik</li>
              <p>
                Pada jenis ini, salinan ekstra dari kromosom 21 hanya menempel
                di beberapa sel sehingga ciri-ciri Down syndrome jenis mosaik
                tidak terlalu terlihat jelas seperti pada jenis trisomi 21.
              </p>
              <li style={{ "font-weight": "660" }}>Translokasi</li>
              <p>
                Pada jenis ini, salinan ekstra dari kromosom 21 menempel di
                kromosom lain. Down syndome jenis translokasi dapat diturunkan
                dari orang tua ke anak.
              </p>
            </ul>
          </div>
          <div class="col-md-3 img-container">
            <img
              src="/DS Edukasi 2.jpg"
              class="rounded mx-auto d-block"
              alt="foto"
            />
          </div>
        </div>
      </div>
    </>
  );
}
