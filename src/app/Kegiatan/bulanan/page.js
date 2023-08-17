/* eslint-disable @next/next/no-img-element */
import style from "@/app/Kegiatan/kegiatan.module.css";
export default function bulanan() {
  return (
    <>
      {/* Banner */}
      <div class={style.katafotokiri}>KEGIATAN</div>
      {/* End of Banner */}

      <div class="container py-5">
        <h1 class="text-center" style={{ color: "#C01358" }}>
          KEGIATAN BULANAN
        </h1>

        <div class="row row-cols-1 row-cols-md-3 g-4 py-5">
          <div class="col">
            <div class="card">
              <img
                src="/Kegiatan/kbulanan/Jumputan Batch 1/Produk/ProdukB1 (9).jpg"
                class="card-img-top"
                alt="..."
                style={{ padding: "20px", "border-radius": "20" }}
              />
              <div class="card-body">
                <h5 class="card-title" style={{ color: "blue" }}>
                  Pelatihan Jumputan Batch 1
                </h5>
              </div>
              <div class="mb-5 d-flex justify-content-around">
                <button
                  class="btn btn-secondary"
                  style={{ "background-color": "blue" }}
                >
                  <a
                    href="/Kegiatan/bulanan/JumputanB1/"
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
                src="/Kegiatan/kbulanan/Jumputan Batch 2/Produk/Produk (2).jpg"
                class="card-img-top"
                alt="..."
                style={{ padding: "20px", "border-radius": "20" }}
              />
              <div class="card-body">
                <h5 class="card-title" style={{ color: "blue" }}>
                  Pelatihan Jumputan Batch 2
                </h5>
              </div>
              <div class="mb-5 d-flex justify-content-around">
                <button
                  class="btn btn-secondary"
                  style={{ "background-color": "blue" }}
                >
                  <a
                    href="/Kegiatan/bulanan/JumputanB2"
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
    </>
  );
}
