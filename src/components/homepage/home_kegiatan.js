/* eslint-disable @next/next/no-img-element */
import style from "@/app/home.module.css";
import style_res from "@/components/homepage/home_kegiatan.module.css";

export default function HomeKegiatan() {
  return (
    <>
      <div class={`${style_res.kegiatan}`}>
        <h1>Kegiatan</h1>

        <div className={style.scroll_able}>
          <div class={`${style_res.kategori} ${style_res.kategori}`}>
            <div class={style_res.musik}>
              <img src="/musik.svg" alt="musik" />
              <h2>Musik</h2>
            </div>
            <div class={style_res.belajar}>
              <img src="/belajar.svg" alt="belajar" />
              <h2>Belajar</h2>
            </div>
            <div class={style_res.bermain}>
              <img src="/bermain.svg" alt="bermain" />
              <h2>Bermain</h2>
            </div>
            <div class={style_res.berteman}>
              <img src="/berteman.svg" alt="berteman" />
              <h2>Berteman</h2>
            </div>
          </div>
        </div>

        <div class={style_res.detail}>
          <div class={style_res.text}>
            <h1>Musik</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>

          <div class={style_res.image}>
            <img
              src="https://images.unsplash.com/photo-1505876104692-2f34b9d54303?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80"
              alt="placeholder"
            />
          </div>
        </div>
        <a href="Kegiatan/" className={style.hyperlink}>
          Info Lebih Lanjut
        </a>
      </div>
    </>
  );
}
