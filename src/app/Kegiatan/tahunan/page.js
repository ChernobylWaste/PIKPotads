/* eslint-disable @next/next/no-img-element */
export default function ktahunan() {
  return (
    <>
      <div class="container py-5">
        <h1 class="text-center" style={{ color: "#C01358" }}>
          Kegiatan Tahunan
        </h1>

        <div class="row row-cols-1 row-cols-md-3 g-4 py-5">
          <div class="col">
            <div class="card">
              <img
                src="/Kegiatan/ktahunan/IMG_4143.JPG"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title" style={{ color: "blue" }}>
                  Hari Down Syndrome Dunia 2023
                </h5>
                <p class="card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Laboriosam dignissimos accusantium amet similique velit iste.
                </p>
              </div>
              <div class="mb-5 d-flex justify-content-around">
                <button
                  class="btn btn-secondary"
                  style={{ "background-color": "blue" }}
                >
                  <a href="ktahunan/HDSD23.html">Info Lebih Lanjut</a>
                </button>
              </div>
            </div>
          </div>

          <div class="col">
            <div class="card">
              <img
                src="../Assets/Foto_Beranda.jpg"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title" style={{ color: "blue" }}>
                  TIRAMISU CAKE
                </h5>
                <p class="card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Laboriosam dignissimos accusantium amet similique velit iste.
                </p>
              </div>
              <div class="mb-5 d-flex justify-content-around">
                <button
                  class="btn btn-secondary"
                  style={{ "background-color": "blue" }}
                >
                  Info Lebih Lanjut
                </button>
              </div>
            </div>
          </div>

          <div class="col">
            <div class="card">
              <img
                src="../Assets/Foto Beranda2.JPG"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title" style={{ color: "blue" }}>
                  TIRAMISU CAKE
                </h5>
                <p class="card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Laboriosam dignissimos accusantium amet similique velit iste.
                </p>
              </div>
              <div class="mb-5 d-flex justify-content-around">
                <button
                  class="btn btn-secondary"
                  style={{ "background-color": "blue" }}
                >
                  Info Lebih Lanjut
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
