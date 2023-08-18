/* eslint-disable @next/next/no-img-element */

import style from "@/components/homepage/home_tim.module.css";
import style_home from "@/app/home.module.css";

export default function Tim_home() {
  return (
    <>
      <div class={style.tim_comp}>
        <h1>TIM</h1>
        <div className={style.tim_grid_scroll}>
          <div class={style.tim_grid}>
            <div class={style.tim_grid_total}>
              <h1>Jumlah Team</h1>
              <h2>POTADS JABAR</h2>

              <div class={style.total_number}>
                <div class={style.volunteer}>
                  <h1>XXX</h1>
                  <p>Volunteer</p>
                </div>

                <div class={style.pengurus}>
                  <h1>XXX</h1>
                  <p>Pengurus</p>
                </div>
              </div>

              <a href="" className={style_home.hyperlink}>
                Info Lebih Lanjut
              </a>
            </div>

            <div class={style.tim_grid_image}>
              <img
                src="https://images.unsplash.com/photo-1471922694854-ff1b63b20054?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80"
                alt="placeholder"
              />
              <img
                src="https://images.unsplash.com/photo-1520454974749-611b7248ffdb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
                alt="placeholder"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
