/* eslint-disable @next/next/no-img-element */
import style from "@/app/Kegiatan/kegiatan.module.css";
export default function tarikreasi() {
  return (
    <>
      {/* Banner */}
      <div class={style.katafotokiri}>KEGIATAN</div>
      {/* End of Banner */}

      <div class={`container py-5 ${style.font}`}>
        <h1 class="text-center" style={{ color: "#C01358" }}>
          PELATIHAN SENI : TARI KREASI NASIONAL
        </h1>

        <div class="row row-cols-1 row-cols-md-3 g-4 py-5">
          <div class="col">
            <div class="card">
              <img
                src="/Kegiatan/krutin/TariKreasi/ls (1).png"
                class="card-img-top"
                style={{ padding: "20px", "border-radius": "20" }}
                alt="..."
              />
            </div>
          </div>

          <div class="col">
            <div class="card">
              <img
                src="/Kegiatan/krutin/TariKreasi/ls (2).png"
                class="card-img-top"
                style={{ padding: "20px", "border-radius": "20" }}
                alt="..."
              />
            </div>
          </div>

          <div class="col">
            <div class="card">
              <img
                src="/Kegiatan/krutin/TariKreasi/ls (3).png"
                class="card-img-top"
                style={{ padding: "20px", "border-radius": "20" }}
                alt="..."
              />
            </div>
          </div>

          <div class="col">
            <div class="card">
              <img
                src="/Kegiatan/krutin/TariKreasi/ls (4).png"
                class="card-img-top"
                style={{ padding: "20px", "border-radius": "20" }}
                alt="..."
              />
            </div>
          </div>

          <div class="col">
            <div class="card">
              <img
                src="/Kegiatan/krutin/TariKreasi/ls (5).png"
                class="card-img-top"
                style={{ padding: "20px", "border-radius": "20" }}
                alt="..."
              />
            </div>
          </div>

          <div class="col">
            <div class="card">
              <img
                src="/Kegiatan/krutin/TariKreasi/ls (6).png"
                class="card-img-top"
                style={{ padding: "20px", "border-radius": "20" }}
                alt="..."
              />
            </div>
          </div>
        </div>
      </div>

      <div class={`container py-5 ${style.font}`}>
        <h1 class="text-center" style={{ color: "#C01358" }}>
          VIDEO TARI KREASI NASIONAL
        </h1>

        <div class="row row-cols-1 row-cols-md-3 g-4 py-5">
          <div class="col">
            <div class="card">
              <div class="embed-responsive embed-responsive-16by9 mx-auto">
                <iframe
                  style={{ padding: "20px", "border-radius": "20" }}
                  width="250"
                  height="300"
                  src="https://www.youtube.com/embed/FQKNKsXJd5M"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
          </div>

          <div class="col">
            <div class="card">
              <div class="embed-responsive embed-responsive-16by9 mx-auto">
                <iframe
                  style={{ padding: "20px", "border-radius": "20" }}
                  width="250"
                  height="300"
                  src="https://www.youtube.com/embed/Hd_1WNMlKBI"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
          </div>

          <div class="col">
            <div class="card">
              <div class="embed-responsive embed-responsive-16by9 mx-auto">
                <iframe
                  style={{ padding: "20px", "border-radius": "20" }}
                  width="250"
                  height="300"
                  src="https://www.youtube.com/embed/q42P4vDrrrM"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
