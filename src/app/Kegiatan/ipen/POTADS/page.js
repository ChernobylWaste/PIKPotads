/* eslint-disable @next/next/no-img-element */
import style from "@/app/Kegiatan/kegiatan.module.css";
export default function potadspusat() {
  return (
    <>
      {/* Banner */}
      <div class={style.katafotokiri}>KEGIATAN</div>
      {/* End of Banner */}

      <div class="container py-5">
        <h1 class="text-center" style={{ color: "#C01358" }}>
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
                <h5 class="card-title" style={{ color: "blue", margin: "4.8vh" }}>
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
                <h5 class="card-title" style={{ color: "blue", margin: "4.8vh" }}>
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
                src="/Kegiatan/Ipen/POTADS/Zoo/Zoo (2).jpg"
                class="card-img-top"
                alt="..."
                style={{ padding: "20px" }}
              />
              <div class="card-body">
                <h5 class="card-title" style={{ color: "blue", margin: "1.3vh" }}>
                Gathering PIK Potads Jabar bersama PT. Lautan Luas : Lembang Park & Zoo
                </h5>
              </div>
              <div class="mb-5 d-flex justify-content-around">
                <button
                  class="btn btn-secondary"
                  style={{ "background-color": "blue" }}
                >
                  <a
                    href="/Kegiatan/ipen/POTADS/Zoo/LembangPark"
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
