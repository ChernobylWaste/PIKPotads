import style from "@/app/Kontak/kontak.module.css";
export default function contact() {
  return (
    <>
      {/* Banner */}
      <div class={style.katafotokiri}>KONTAK</div>
      {/* End of Banner */}
      <div
        class="judul"
        style={{
          "text-align": "center",
          margin: "4%",
          fontFamily: "Montserrat",
          fontWeight: "700",
        }}
      >
        KONTAK DAN INFORMASI
      </div>

      <div class={style.contact}>
        <div class={style.info}>
          <h1>Kontak Kami</h1>
          <div class={style.email}>
            <a href="mailto:pikpotadsjabar@gmail.com">
              <img src="/gmail.svg" alt="gmail" />
              pikpotadsjabar@gmail.com
            </a>
          </div>
          <div class={style.phone}>
            <a href="tel:+62">
              <img src="/phone.svg" alt="phone" />
              08132182114
            </a>
          </div>
        </div>

        <div class={style.maps} style={{ alignContent: "center" }}>
          <h1
            style={{
              color: "white",
              fontFamily: "Montserrat",
            }}
          >
            Lokasi
          </h1>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.820567864424!2d107.6312203!3d-6.9120460999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e7cf32c12cb9%3A0x1bbf9d25986e0a7a!2sJl.%20Nanas%20No.42%2C%20Cihapit%2C%20Kec.%20Bandung%20Wetan%2C%20Kota%20Bandung%2C%20Jawa%20Barat%2040114!5e0!3m2!1sen!2sid!4v1693303874246!5m2!1sen!2sid"
            width="800"
            height="385"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </>
  );
}
