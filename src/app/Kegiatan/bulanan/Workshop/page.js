/* eslint-disable @next/next/no-img-element */
import style from "@/app/Kegiatan/kegiatan.module.css";
export default function workshop() {
  return (
    <>
      {/* Banner */}
      <div class={style.katafotokiri}>KEGIATAN</div>
      {/* End of Banner */}

      <div class="container py-5">
        <h1 class="text-center" style={{ color: "#C01358" }}>
          WORKSHOPS
        </h1>

        <div class="row row-cols-1 row-cols-md-3 g-4 py-5">
          <div class="card">
            <div class="col">
              <img
                src="/Kegiatan/Ipen/RTHDSD23/BBT/BBT (8).jpg"
                class="card-img-top"
                alt="..."
                style={{ padding: "20px" }}
              />
              <div class="card-body">
                <h5 class="card-title" style={{ color: "blue" }}>
                  Workshop : Fisiotherapy
                </h5>
              </div>
              <div class="mb-5 d-flex justify-content-around">
                <button
                  class="btn btn-secondary"
                  style={{ "background-color": "blue" }}
                >
                  <a
                    href="/Kegiatan/bulanan/Workshop/Fisiotherapy"
                    style={{ textDecoration: "none", color: "white" }}
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
                src="/Kegiatan/Ipen/RTHDSD23/GM/gigimulut (1).jpg"
                class="card-img-top"
                alt="..."
                style={{ padding: "20px" }}
              />
              <div class="card-body">
                <h5 class="card-title" style={{ color: "blue", margin: "2vh" }}>
                  Workshop : Keterampilan (Menempelkan Kancing)
                </h5>
              </div>
              <div class="mb-5 d-flex justify-content-around">
                <button
                  class="btn btn-secondary"
                  style={{ "background-color": "blue" }}
                >
                  <a
                    href="/Kegiatan/bulanan/Workshop/Kancing"
                    style={{ textDecoration: "none", color: "white" }}
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
                src="/Kegiatan/Ipen/DSAM2022/DSAM 2022.jpg"
                class="card-img-top"
                alt="..."
                style={{ padding: "20px" }}
              />
              <div class="card-body">
                <h5 class="card-title" style={{ color: "blue", margin: "3vh" }}>
                  Workshop : Stimulasi Sensori
                </h5>
              </div>
              <div class="mb-5 d-flex justify-content-around">
                <button
                  class="btn btn-secondary"
                  style={{ "background-color": "blue" }}
                >
                  <a
                    href="/Kegiatan/bulanan/Workshop/Sensori"
                    style={{ textDecoration: "none", color: "white" }}
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
                src="/Kegiatan/Ipen/DSAM2023/ls pj (1) 1.png"
                class="card-img-top"
                alt="..."
                style={{ padding: "20px" }}
              />
              <div class="card-body">
                <h5 class="card-title" style={{ color: "blue", margin: "3vh" }}>
                  Workshop : Terapi Wicara
                </h5>
              </div>
              <div class="mb-5 d-flex justify-content-around">
                <button
                  class="btn btn-secondary"
                  style={{ "background-color": "blue" }}
                >
                  <a
                    href="/Kegiatan/bulanan/Workshop/Wicara"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    Info Lebih Lanjut
                  </a>
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
