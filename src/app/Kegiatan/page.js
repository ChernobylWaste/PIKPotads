/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */

import style from "@/app/Kegiatan/kegiatan.module.css";
export default function Kegiatan() {
  return (
    <>
      {/* Banner */}
      <div class={style.katafotokiri}>KEGIATAN</div>
      {/* End of Banner */}

      {/* Start of Pendaftaran */}
      <div class={ `container-fluid my-4 ${style.font}`}>
        <div
          class="card text-center"
          style={{ "background-color": "#24b8e5", color: "white" }}
        >
          <div class="card-body">
            <h5 class="card-title">
              Ingin Menjadi Bagian PIK POTADS JABAR? Klik Link Dibawah Ini
              Sesuai Usia Anak Anda
            </h5>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr 1fr",
                gap: "2vw",
              }}
            >
              <a
                href="https://bit.ly/DataAnggotaPotadsJabar0-6thn"
                class="btn btn-primary"
              >
                0 - 6 Tahun
              </a>
              <a
                href="https://bit.ly/DataAnggotaPotadsJabar6-15thn"
                class="btn btn-primary"
              >
                6 - 15 Tahun
              </a>
              <a
                href="https://bit.ly/DataAnggotaPotadsJabar15thplus"
                class="btn btn-primary"
              >
                Lebih dari 15 Tahun
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* End of Pendaftaran */}

      {/* Start of Events */}
      <div class={`container py-5 ${style.font}`}>
        <h1 class="text-center text-4xl" style={{ color: "#C01358" }}>
          EVENTS
        </h1>

        <div class="row row-cols-1 row-cols-md-3 g-4 py-5">
          <div class="col">
            <div class="card">
              <img
                src="/Kegiatan/Ipen/POTADS/Zoo/Zoo (2).jpg"
                class="card-img-top"
                alt="..."
                style={{ padding: "20px", "border-radius": "20" }}
              />
              <div class="card-body">
                <h5
                  class="card-title"
                  style={{ color: "blue", margin: "3.5vh" }}
                >
                  Bersama POTADS Pusat
                </h5>
              </div>
              <div class="mb-5 d-flex justify-content-around">
                <button
                  class="btn btn-secondary"
                  style={{ "background-color": "blue" }}
                >
                  <a
                    href="/Kegiatan/ipen/POTADS"
                    style={{ color: "white", "text-decoration": "none" }}
                  >
                    Info Lebih Lanjut
                  </a>
                </button>
              </div>
            </div>
          </div>

          <div class="col">
            <div class="card">
              <img
                src="/Kegiatan/Ipen/DSAM2022/1 (20).jpg"
                class="card-img-top"
                alt="..."
                style={{ padding: "20px", "border-radius": "20" }}
              />
              <div class="card-body">
                <h5 class="card-title" style={{ color: "blue", margin: "3.5vh" }}>
                  DSAM
                </h5>
              </div>
              <div class="mb-5 d-flex justify-content-around">
                <button
                  class="btn btn-secondary"
                  style={{ "background-color": "blue" }}
                >
                  <a
                    href="/Kegiatan/ipen/DSAM"
                    style={{ color: "white", "text-decoration": "none" }}
                  >
                    Info Lebih Lanjut
                  </a>
                </button>
              </div>
            </div>
          </div>

          <div class="col">
            <div class="card">
              <img
                src="/Kegiatan/Ipen/HDSD2023/HDSD23 (6).jpg"
                class="card-img-top"
                alt="..."
                style={{ padding: "20px", "border-radius": "20" }}
              />
              <div class="card-body">
                <h5 class="card-title" style={{ color: "blue", margin: "2vh" }}>
                  Hari Down Syndrom Dunia 2023
                </h5>
              </div>
              <div class="mb-5 d-flex justify-content-around">
                <button
                  class="btn btn-secondary"
                  style={{ "background-color": "blue" }}
                >
                  <a
                    href="/Kegiatan/ipen/HDSD/2023"
                    style={{ color: "white", "text-decoration": "none" }}
                  >
                    Info Lebih Lanjut
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="mb-5 d-flex justify-content-around">
          <button
            class="btn btn-secondary"
            style={{ "background-color": "#C0044C" }}
          >
            <a
              href="/Kegiatan/ipen/"
              style={{ "text-decoration": "none", color: "white" }}
            >
              Info Lebih Lanjut
            </a>
          </button>
        </div>
      </div>
      {/* End of Events */}

      {/* Start of Kegiatan Rutin */}
      <div class={`container py-5 ${style.font}`}>
        <h1 class="text-center" style={{ color: "#C01358" }}>
          KEGIATAN RUTIN
        </h1>

        <div class="row row-cols-1 row-cols-md-3 g-4 py-5">
          <div class="col">
            <div class="card">
              <img
                src="/Kegiatan/krutin/cookingB1/Proses/ls (2).jpg"
                class="card-img-top"
                alt="..."
                style={{ padding: "20px", "border-radius": "20" }}
              />
              <div class="card-body">
                <h5 class="card-title" style={{ color: "blue", margin: "2vh" }}>
                  Pelatihan : Kelas Memasak
                </h5>
              </div>
              <div class="mb-5 d-flex justify-content-around">
                <button
                  class="btn btn-secondary"
                  style={{ "background-color": "blue" }}
                >
                  <a
                    href="/Kegiatan/krutin/Memasak/"
                    style={{ color: "white", "text-decoration": "none" }}
                  >
                    Info Lebih Lanjut
                  </a>
                </button>
              </div>
            </div>
          </div>

          <div class="col">
            <div class="card">
              <img
                src="/Kegiatan/krutin/playclass/ls (5).png"
                class="card-img-top"
                alt="..."
                style={{ padding: "20px", "border-radius": "20" }}
              />
              <div class="card-body">
                <h5 class="card-title" style={{ color: "blue", margin: "2vh" }}>
                  Play Class Usia 5 - 12 Tahun
                </h5>
              </div>
              <div class="mb-5 d-flex justify-content-around">
                <button
                  class="btn btn-secondary"
                  style={{ "background-color": "blue" }}
                >
                  <a
                    href="/Kegiatan/krutin/PlayClass"
                    style={{ color: "white", "text-decoration": "none" }}
                  >
                    Info Lebih Lanjut
                  </a>
                </button>
              </div>
            </div>
          </div>

          <div class="col">
            <div class="card">
              <img
                src="/Kegiatan/krutin/djembe/ls (4).png"
                class="card-img-top"
                alt="..."
                style={{ padding: "20px", "border-radius": "20" }}
              />
              <div class="card-body">
                <h5 class="card-title" style={{ color: "blue", margin: "2vh" }}>
                  Pelatihan Seni
                </h5>
              </div>
              <div class="mb-5 d-flex justify-content-around">
                <button
                  class="btn btn-secondary"
                  style={{ "background-color": "blue" }}
                >
                  <a
                    href="/Kegiatan/krutin/PSeni"
                    style={{ color: "white", "text-decoration": "none" }}
                  >
                    Info Lebih Lanjut
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="mb-5 d-flex justify-content-around">
          <button
            class="btn btn-secondary"
            style={{ "background-color": "#C0044C" }}
          >
            <a
              href="/Kegiatan/krutin"
              style={{ "text-decoration": "none", color: "white" }}
            >
              Info Lebih Lanjut
            </a>
          </button>
        </div>
      </div>
      {/* End of krutin*/}

      {/* Start of Kegiatan Bulanan */}
      <div class={`container py-5 ${style.font}`}>
        <h1 class="text-center" style={{ color: "#C01358" }}>
          KEGIATAN BULANAN
        </h1>

        <div class="row row-cols-1 row-cols-md-3 g-4 py-5">
          <div class="col">
            <div class="card">
              <img
                src="/Kegiatan/kbulanan/Jumputan Batch 1/Proses/prosesb1 (13).jpg"
                class="card-img-top"
                alt="..."
                style={{ padding: "20px", "border-radius": "20" }}
              />
              <div class="card-body">
                <h5 class="card-title" style={{ color: "blue", margin: "2vh" }}>
                  Pelatihan : Jumputan
                </h5>
              </div>
              <div class="mb-5 d-flex justify-content-around">
                <button
                  class="btn btn-secondary"
                  style={{ "background-color": "blue" }}
                >
                  <a
                    href="/Kegiatan/bulanan/Jumputan"
                    style={{ color: "white", "text-decoration": "none" }}
                  >
                    Info Lebih Lanjut
                  </a>
                </button>
              </div>
            </div>
          </div>

          <div class="col">
            <div class="card">
              <img
                src="/Kegiatan/kbulanan/Workshop/Fisiotherapy/Fisiotherapy (4).jpg"
                class="card-img-top"
                alt="..."
                style={{ padding: "20px", "border-radius": "20" }}
              />
              <div class="card-body">
                <h5 class="card-title" style={{ color: "blue", margin: "2vh" }}>
                  Workshops
                </h5>
              </div>
              <div class="mb-5 d-flex justify-content-around">
                <button
                  class="btn btn-secondary"
                  style={{ "background-color": "blue" }}
                >
                  <a
                    href="/Kegiatan/bulanan/Workshop"
                    style={{ color: "white", "text-decoration": "none" }}
                  >
                    Info Lebih Lanjut
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div class="mb-5 d-flex justify-content-around">
          <button
            class="btn btn-secondary"
            style={{ "background-color": "#C0044C" }}
          >
            <a
              href="/Kegiatan/bulanan"
              style={{ "text-decoration": "none", color: "white" }}
            >
              Info Lebih Lanjut
            </a>
          </button>
        </div>
      </div>
      {/* End of Kegiatan Bulanan */}
    </>
  );
}
