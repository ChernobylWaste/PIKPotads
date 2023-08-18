/* eslint-disable @next/next/no-img-element */
import style from "@/app/Kegiatan/kegiatan.module.css";

export default function playclass() {
  return (
    <>
      {/* Banner */}
      <div class={style.katafotokiri}>KEGIATAN</div>
      {/* End of Banner */}

      <div class={`container py-5 ${style.font}`}>
        <h1 class="text-center text-5xl" style={{ color: "#C01358" }}>
          PLAY CLASS USIA 5-12 TAHUN
        </h1>

        <div class="row row-cols-1 row-cols-md-3 g-4 py-5">
          <div class="col">
            <div class="card">
              <img
                src="/Kegiatan/krutin/playclass/ls (1).png"
                class="card-img-top"
                style={{ padding: "20px", "border-radius": "20" }}
                alt="..."
              />
            </div>
          </div>

          <div class="col">
            <div class="card">
              <img
                src="/Kegiatan/krutin/playclass/ls (2).png"
                style={{ padding: "20px", "border-radius": "20" }}
                class="card-img-top"
                alt="..."
              />
            </div>
          </div>

          <div class="col">
            <div class="card">
              <img
                src="/Kegiatan/krutin/playclass/ls (3).png"
                style={{ padding: "20px", "border-radius": "20" }}
                class="card-img-top"
                alt="..."
              />
            </div>
          </div>

          <div class="col">
            <div class="card">
              <img
                src="/Kegiatan/krutin/playclass/ls (4).png"
                style={{ padding: "20px", "border-radius": "20" }}
                class="card-img-top"
                alt="..."
              />
            </div>
          </div>

          <div class="col">
            <div class="card">
              <img
                src="/Kegiatan/krutin/playclass/ls (5).png"
                style={{ padding: "20px", "border-radius": "20" }}
                class="card-img-top"
                alt="..."
              />
            </div>
          </div>

          <div class="col">
            <div class="card">
              <img
                src="/Kegiatan/krutin/playclass/ls (6).png"
                style={{ padding: "20px", "border-radius": "20" }}
                class="card-img-top"
                alt="..."
              />
            </div>
          </div>

          <div class="col">
            <div class="card">
              <img
                src="/Kegiatan/krutin/playclass/ls (7).png"
                style={{ padding: "20px", "border-radius": "20" }}
                class="card-img-top"
                alt="..."
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
