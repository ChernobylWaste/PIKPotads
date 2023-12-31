/* eslint-disable @next/next/no-img-element */
import style from "@/app/Tim/tim.module.css";

export default function tim() {
  return (
    <>
      <div class={style.welcome}>
        <h1 class={style.welcomeh1}>Team PIK POTADS Jawa Barat</h1>
      </div>

      <p
        class="text-center fs-1 fw-bolder"
        style={{ color: "rgb(75, 75, 75)", margin: "5%" }}
      >
        Team POTADS Jabar!
      </p>

      <div class={`container ${style.backgroundColor}`}>
        <div class="container-fluid">
          <div
            class="photocard-container"
            // style={{
            //   display: "flex",
            //   flexDirection: "row",
            //   alignItems: "center",
            // }}
          >
            <div class="photocard">
              <img src="/tim/Kegiatan.jpg" alt="Foto 1" />
              <div class="overlay">
                <h3>PROGRAM KEGIATAN</h3>
                <p>Jelly Jayanti</p>
              </div>
            </div>
            <div class="photocard">
              <img src="/tim/Ketua.jpg" alt="Foto 2" />
              <div class="overlay">
                <h3>KETUA</h3>
                <p>Mira Widiastuti</p>
              </div>
            </div>
            <div class="photocard">
              <img src="/tim/Sekretaris.jpg" alt="Foto 3" />
              <div class="overlay">
                <h3>SEKRETARIS</h3>
                <p>Lilis Hartini</p>
              </div>
            </div>
            <div class="photocard">
              <img src="/tim/Bendahara.jpg" alt="Foto 4" />
              <div class="overlay">
                <h3>BENDAHARA</h3>
                <p>Cita Weningtyas</p>
              </div>
            </div>
            <div class="photocard">
              <img src="/tim/Humas.jpg" alt="Foto 5" />
              <div class="overlay">
                <h3>HUMAS</h3>
                <p>Isfana Andriani</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
