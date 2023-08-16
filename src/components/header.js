/* eslint-disable @next/next/no-img-element */
import style from "@/components/navbar.module.css";

export default function Navbar() {
  return (
    <>
      <div className={style.donasi}>
        <h1>Donasi Klik Disini</h1>
      </div>
    </>
  );

  // return (
  //   <>
  //     <div class="donasi_container">
  //       <h1>
  //         <a class="donasi" href="#">
  //           Donasi Klik Disini
  //         </a>
  //       </h1>
  //     </div>

  //     <nav class="navbar navbar-expand-lg bg-body-tertiary">
  //       <div class="container-fluid">
  //         <a class="logo" href="/">
  //           <img src="/Logo Potads.png" alt="logo" />
  //         </a>
  //         <button
  //           class="navbar-toggler"
  //           type="button"
  //           data-bs-toggle="collapse"
  //           data-bs-target="#navbarSupportedContent"
  //           aria-controls="navbarSupportedContent"
  //           aria-expanded="false"
  //           aria-label="Toggle navigation"
  //         >
  //           <span class="navbar-toggler-icon"></span>
  //         </button>
  //         <div class="collapse navbar-collapse" id="navbarSupportedContent">
  //           <ul class="navbar-nav me-auto mb-2 mb-lg-0 mx-auto">
  //             <li class="nav-item">
  //               <a
  //                 class="nav-link active"
  //                 aria-current="page"
  //                 href="index.html"
  //               >
  //                 Beranda
  //               </a>
  //             </li>
  //             <li class="nav-item">
  //               <a class="nav-link" href="/Edukasi/">
  //                 Edukasi
  //               </a>
  //             </li>
  //             <li class="nav-item">
  //               <a class="nav-link" href="/TentangKami/">
  //                 Tentang Kami
  //               </a>
  //             </li>
  //             <li class="nav-item">
  //               <a class="nav-link" href="/FAQ/">
  //                 FAQ
  //               </a>
  //             </li>
  //             <li class="nav-item">
  //               <a class="nav-link" href="/Kegiatan/">
  //                 Kegiatan
  //               </a>
  //             </li>
  //             <li class="nav-item">
  //               <a class="nav-link" href="/Tim/">
  //                 Tim
  //               </a>
  //             </li>
  //             <li class="nav-item">
  //               <a class="nav-link" href="/Kontak/">
  //                 Kontak
  //               </a>
  //             </li>
  //           </ul>
  //         </div>
  //       </div>
  //     </nav>
  //   </>
  // );
}
