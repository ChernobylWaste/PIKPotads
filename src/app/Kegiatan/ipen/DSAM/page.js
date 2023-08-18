/* eslint-disable @next/next/no-img-element */
import style from "@/app/Kegiatan/kegiatan.module.css";
export default function DSAM() {
  return (
    <>
      {/* Banner */}
      <div class={style.katafotokiri}>KEGIATAN</div>
      {/* End of Banner */}

      <div class={`container py-5 ${style.font}`}>
        <h1 class="text-center text-5xl" style={{ color: "#C01358" }}>
          DSAM
        </h1>

        <div class="row row-cols-1 row-cols-md-3 g-4 py-5">

          <div class="col">
            <div class="card">
              <img
                src="/Kegiatan/Ipen/DSAM2022/1 (21).jpg"
                class="card-img-top"
                alt="..."
                style={{ padding: "20px" }}
              />
              <div class="card-body">
                <h5 class="card-title" style={{ color: "blue", margin: "4.8vh" }}>
                DSAM 2022
                </h5>
              </div>
              <div class="mb-5 d-flex justify-content-around">
                <button
                  class="btn btn-secondary"
                  style={{ "background-color": "blue" }}
                >
                  <a
                    href="/Kegiatan/ipen/DSAM/2022"
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
                src="/Kegiatan/Ipen/DSAM2023/ls pj (2).jpg"
                class="card-img-top"
                alt="..."
                style={{ padding: "20px" }}
              />
              <div class="card-body">
                <h5 class="card-title" style={{ color: "blue", margin: "4.8vh" }}>
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
