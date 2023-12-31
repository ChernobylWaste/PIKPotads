/* eslint-disable @next/next/no-img-element */
import style from "@/app/Kegiatan/kegiatan.module.css";
export default function potadspusat() {
  return (
    <>
      {/* Banner */}
      <div class={style.katafotokiri}>KEGIATAN</div>
      {/* End of Banner */}

      <div class={`container py-5 ${style.font}`}>
        <h1 class="text-center text-5xl" style={{ color: "#C01358" }}>
          KEGIATAN BERSAMA POTADS PUSAT
        </h1>

        <div class="row row-cols-1 row-cols-md-3 g-4 py-5">
          <div class="col">
            <div class="card">
              <img
                src="/Kegiatan/Ipen/POTADS/Baksos/Baksos22 (2).jpg"
                class="card-img-top"
                alt="..."
                style={{ padding: "20px" }}
              />
              <div class="card-body">
                <h5
                  class="card-title"
                  style={{ color: "blue", margin: "4.8vh" }}
                >
                  Bakti Sosial Perdosri 2022
                </h5>
              </div>
              <div class="mb-5 d-flex justify-content-around">
                <button
                  class="btn btn-secondary"
                  style={{ "background-color": "blue" }}
                >
                  <a
                    href="/Kegiatan/ipen/POTADS/Baksos/Perdosri22"
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
                src="/Kegiatan/Ipen/POTADS/Khitan/Khitan (1).jpg"
                class="card-img-top"
                alt="..."
                style={{ padding: "20px" }}
              />
              <div class="card-body">
                <h5
                  class="card-title"
                  style={{ color: "blue", margin: "4.8vh" }}
                >
                  Khitan Massal 2021
                </h5>
              </div>
              <div class="mb-5 d-flex justify-content-around">
                <button
                  class="btn btn-secondary"
                  style={{ "background-color": "blue" }}
                >
                  <a
                    href="/Kegiatan/ipen/POTADS/Khitan/2021"
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
                src="/Kegiatan/Ipen/RTHDSD23/BBT/BBT (8).jpg"
                class="card-img-top"
                alt="..."
                style={{ padding: "20px" }}
              />
              <div class="card-body">
                <h5
                  class="card-title"
                  style={{ color: "blue", margin: "3vh" }}
                >
                  Road to HDSD 2023 : Bersih - Bersih Telinga
                </h5>
              </div>
              <div class="mb-5 d-flex justify-content-around">
                <button
                  class="btn btn-secondary"
                  style={{ "background-color": "blue" }}
                >
                  <a
                    href="/Kegiatan/ipen/RTHDSD23/BBT"
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
