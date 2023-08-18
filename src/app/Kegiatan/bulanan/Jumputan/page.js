/* eslint-disable @next/next/no-img-element */
import style from "@/app/Kegiatan/kegiatan.module.css";
export default function jumputan() {
  return (
    <>
      {/* Banner */}
      <div class={style.katafotokiri}>KEGIATAN</div>
      {/* End of Banner */}

      <div class="container py-5">
        <h1 class="text-center" style={{ color: "#C01358" }}>
          JUMPUTAN
        </h1>

        <div class="row row-cols-1 row-cols-md-3 g-4 py-5">
        <div class="col">
            <div class="card">
              <img
                src="/Kegiatan/kbulanan/Jumputan Batch 1/Proses/Prosesb1 (2).jpg"
                class="card-img-top"
                alt="..."
                style={{ padding: "20px" }}
              />
              <div class="card-body">
                <h5 class="card-title" style={{ color: "blue", margin: "2vh" }}>
                  Pelatihan : Jumputan Batch 1
                </h5>
              </div>
              <div class="mb-5 d-flex justify-content-around">
                <button
                  class="btn btn-secondary"
                  style={{ "background-color": "blue" }}
                >
                  <a
                    href="/Kegiatan/bulanan/Jumputan/JumputanB1"
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
                src="/Kegiatan/kbulanan/Jumputan Batch 2/Proses/ls (2) 1.jpg"
                class="card-img-top"
                alt="..."
                style={{ padding: "20px" }}
              />
              <div class="card-body">
                <h5 class="card-title" style={{ color: "blue", margin: "2vh" }}>
                  Pelatihan : Jumputan Batch 2
                </h5>
              </div>
              <div class="mb-5 d-flex justify-content-around">
                <button
                  class="btn btn-secondary"
                  style={{ "background-color": "blue" }}
                >
                  <a
                    href="/Kegiatan/bulanan/Jumputan/JumputanB2"
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
