/* eslint-disable @next/next/no-img-element */
export default function bulanan() {
  return (
    <>
      <div class="container py-5">
        <h1 class="text-center" style={{ color: "#C01358" }}>
          KEGIATAN BULANAN
        </h1>

        <div class="row row-cols-1 row-cols-md-3 g-4 py-5">
          <div class="col">
            <div class="card">
              <img src="" class="card-img-top" alt="..." />
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
                    href="/Kegiatan/kbulan/JumputanB1.html"
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
                src="/Kegiatan/kbulanan/Jumputan Batch 2/Produk/ls (1).png"
                class="card-img-top"
                alt="..."
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
                    href="/Kegiatan/kbulan/JumputanB2.html"
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
