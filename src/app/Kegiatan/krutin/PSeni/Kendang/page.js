/* eslint-disable @next/next/no-img-element */
import style from "@/app/Kegiatan/kegiatan.module.css";

export default function Kendang() {
  return (
    <>
      {/* Banner */}
      <div class={style.katafotokiri}>KEGIATAN</div>
      {/* End of Banner */}

      <div class={`container py-5 ${style.font}`}>
        <h1 class="text-center" style={{ color: "#C01358" }}>
          PELATIHAN SENI : KENDANG
        </h1>

        <div class="row row-cols-1 row-cols-md-3 g-4 py-5">
          <div class="col">
            <div class="card">
              <img
                src="/Kegiatan/krutin/Kendang/Kendang (1).jpg"
                class="card-img-top"
                style={{ padding: "20px", "border-radius": "20" }}
                alt="..."
              />
            </div>
          </div>

          <div class="col">
            <div class="card">
              <img
                src="/Kegiatan/krutin/Kendang/Kendang (2).jpg"
                style={{ padding: "20px", "border-radius": "20" }}
                class="card-img-top"
                alt="..."
              />
            </div>
          </div>

          <div class="col">
            <div class="card">
              <img
                src="/Kegiatan/krutin/Kendang/Kendang (3).jpg"
                style={{ padding: "20px", "border-radius": "20" }}
                class="card-img-top"
                alt="..."
              />
            </div>
          </div>

          <div class="col">
            <div class="card">
              <img
                src="/Kegiatan/krutin/Kendang/Kendang (4).jpg"
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
