/* eslint-disable @next/next/no-img-element */
export default function tim() {
  return (
    <>
      <p class="text-center fs-1 fw-bolder" style={{ color: "aqua" }}>
        STRUKTUR ORGANISASI PIK POTADS JABAR
      </p>
      <div class="container-fluid" style={{ width: "70rem" }}>
        <div class="photocard-container">
          <div class="photocard">
            <img src="/tim/Kegiatan.jpg" alt="Foto 1" />
            <div class="overlay">
              <h3>PROGRAM KEGIATAN</h3>
              <p>Jelly JayantI</p>
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
            <img src="/tim/Bendahara.jpg" alt="Foto 1" />
            <div class="overlay">
              <h3>BENDAHARA</h3>
              <p>Cita Weningtyas</p>
            </div>
          </div>
          <div class="photocard">
            <img src="/tim/Humas.jpg" alt="Foto 2" />
            <div class="overlay">
              <h3>HUMAS</h3>
              <p>Isfana Andriani</p>
            </div>
          </div>
        </div>
      </div>

      <div style={{ "text-align": "center" }}>
        <button type="button" class="btn btn-primary">
          <a href="" style={{ "text-decoration": "none", color: "aliceblue;" }}>
            Daftar untuk menjadi volunteer
          </a>
        </button>
      </div>
    </>
  );
}
