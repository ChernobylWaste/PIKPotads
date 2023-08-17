/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */

import style from "@/app/Kegiatan/kegiatan.module.css"
export default function Kegiatan() {
  return (
    <>
      {/* Banner */}
      <div class={style.katafotokiri}>KEGIATAN</div>
      {/* End of Banner */}

      {/* Start of Pendaftaran */}
      <div class="container-fluid my-4">
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
      <div class="container py-5">
        <h1 class="text-center" style={{ color: "#C01358" }}>
          EVENTS
        </h1>

        <div class="row row-cols-1 row-cols-md-3 g-4 py-5">
          <div class="col">
            <div class="card">
              <img
                src="/Kegiatan/Ipen/DSAM2023/ls pj (1) 1.png"
                class="card-img-top"
                alt="..."
                style={{ padding: "20px", "border-radius": "20" }}
              />
              <div class="card-body">
                <h5
                  class="card-title"
                  style={{ color: "blue", margin: "3.5vh" }}
                >
                  DSAM 2023
                </h5>
              </div>
              <div class="mb-5 d-flex justify-content-around">
                <button
                  class="btn btn-secondary"
                  style={{ "background-color": "blue" }}
                >
                  <a
                    href="/Kegiatan/ipen/DSAM/2023"
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
                src="/Kegiatan/Ipen/RTHDSD23/BBT/BBT (8).jpg"
                class="card-img-top"
                alt="..."
                style={{ padding: "20px", "border-radius": "20" }}
              />
              <div class="card-body">
                <h5 class="card-title" style={{ color: "blue", margin: "2vh" }}>
                  Road To HDSD 2023 (Bersih - Bersih Telinga)
                </h5>
              </div>
              <div class="mb-5 d-flex justify-content-around">
                <button
                  class="btn btn-secondary"
                  style={{ "background-color": "blue" }}
                >
                  <a
                    href="/Kegiatan/ipen/RTHDSD23"
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
      <div class="container py-5">
        <h1 class="text-center" style={{ color: "#C01358" }}>
          Kegiatan Rutin
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
                    href="/Kegiatan/krutin/MemasakBatch1"
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
                  Pelatihan Seni : Djembe
                </h5>
              </div>
              <div class="mb-5 d-flex justify-content-around">
                <button
                  class="btn btn-secondary"
                  style={{ "background-color": "blue" }}
                >
                  <a
                    href="/Kegiatan/krutin/Djembe"
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
      <div class="container py-5">
        <h1 class="text-center" style={{ color: "#C01358" }}>
          Kegiatan Bulanan
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
                  Jumputan Batch 1
                </h5>
              </div>
              <div class="mb-5 d-flex justify-content-around">
                <button
                  class="btn btn-secondary"
                  style={{ "background-color": "blue" }}
                >
                  <a
                    href="/Kegiatan/bulanan/JumputanB1"
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
                src="/Kegiatan/kbulanan/Jumputan Batch 2/Proses/ls (2) 1.jpg"
                class="card-img-top"
                alt="..."
                style={{ padding: "20px", "border-radius": "20" }}
              />
              <div class="card-body">
                <h5 class="card-title" style={{ color: "blue", margin: "2vh" }}>
                  Workshop
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
      </div>
      {/* End of Kegiatan Bulanan */}
      </>
  );
}
