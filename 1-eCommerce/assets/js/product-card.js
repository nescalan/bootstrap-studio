document.addEventListener("DOMContentLoaded", function () {
  // DOM: Product Card Manipulation
  let domProductCard = document.getElementById("product-card");
  const productCard = `
    <div
    class="card"
    style="
      width: 21rem;
      border-top-left-radius: 20px;
      border-top-right-radius: 20px;
      border-bottom-right-radius: 20px;
      border-bottom-left-radius: 20px;
      box-shadow: 2px 2px 16px 8px rgba(0, 0, 0, 0.1);
      min-width: 300px;
      border-style: none;
      max-width: 100%;
      margin: 16px;
    "
  >
    <div
      style="
        width: 100%;
        height: 230px;
        background: url('assets/img/Mariana%20Souza%20Reis.jpeg') center /
          cover;
        border-top-left-radius: 20px;
        border-top-right-radius: 20px;
        position: relative;
      "
    >
      <!-- Start: Modal with Carosel Image -->
      <div
        class="d-flex flex-row justify-content-center align-items-center"
        style="
          border-radius: 39px;
          width: 60px;
          height: 60px;
          position: absolute;
          bottom: -31px;
          right: 20px;
        "
      >
        <button
          class="btn btn-primary"
          data-bss-hover-animate="pulse"
          type="button"
          style="
            border-style: none;
            background: #b86868;
            width: 60px;
            height: 60px;
            border-radius: 39px;
            box-shadow: 2px 2px 20px -1px #757575;
          "
          data-bs-toggle="modal"
          data-bs-target="#modal_image"
        >
          <i
            class="fas fa-photo-video"
            style="color: rgb(255, 255, 255); font-size: 20px"
          ></i>
        </button>
        <div
          class="modal fade"
          role="dialog"
          tabindex="-1"
          id="modal_image"
          aria-labelledby="exampleModalLabel"
          style="margin-top: 16vh"
        >
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h4
                  style="
                    font-family: 'Source Sans Pro', sans-serif;
                    font-weight: 700;
                    color: #ffa000;
                    letter-spacing: 1px;
                  "
                >
                  Maquiagem Artística
                </h4>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                <div
                  class="carousel slide"
                  data-bs-ride="carousel"
                  id="carousel-1"
                >
                  <div class="carousel-inner">
                    <div class="carousel-item active">
                      <img
                        class="w-100 d-block"
                        src="assets/img/Mariana%20Souza%20Reis.jpeg"
                        alt="Slide Image"
                      />
                    </div>
                    <div class="carousel-item">
                      <img
                        class="w-100 d-block"
                        src="assets/img/pexels-karolina-grabowska-4219614.jpg"
                        alt="Slide Image"
                      />
                    </div>
                    <div class="carousel-item">
                      <img
                        class="w-100 d-block"
                        src="assets/img/Tia%20lê.jpg"
                        alt="Slide Image"
                      />
                    </div>
                  </div>
                  <div>
                    <!-- Start: Previous --><a
                      class="carousel-control-prev"
                      href="#carousel-1"
                      role="button"
                      data-bs-slide="prev"
                      ><span class="carousel-control-prev-icon"></span
                      ><span class="visually-hidden">Previous</span></a
                    ><!-- End: Previous -->
                    <!-- Start: Next --><a
                      class="carousel-control-next"
                      href="#carousel-1"
                      role="button"
                      data-bs-slide="next"
                      ><span class="carousel-control-next-icon"></span
                      ><span class="visually-hidden">Next</span></a
                    ><!-- End: Next -->
                  </div>
                  <ol class="carousel-indicators">
                    <li
                      data-bs-target="#carousel-1"
                      data-bs-slide-to="0"
                      class="active"
                    ></li>
                    <li
                      data-bs-target="#carousel-1"
                      data-bs-slide-to="1"
                    ></li>
                    <li
                      data-bs-target="#carousel-1"
                      data-bs-slide-to="2"
                    ></li>
                  </ol>
                </div>
              </div>
              <div class="modal-footer">
                <button
                  class="btn btn-light"
                  data-bss-hover-animate="pulse"
                  type="button"
                  style="
                    font-family: 'Source Sans Pro', sans-serif;
                    background: #b86868;
                    color: rgb(255, 255, 255);
                    border-radius: 25px;
                    margin-bottom: 4px;
                    padding-right: 16px;
                    padding-left: 16px;
                    box-shadow: 2px 2px 12px rgba(117, 117, 117, 0.77);
                    border-style: none;
                  "
                  data-bs-dismiss="modal"
                >
                  Fechar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- End: Modal with Carosel Image -->
    </div>
    <div
      class="card-body d-flex flex-column justify-content-between"
      style="padding-bottom: 20px; height: 290px"
    >
      <div>
        <h6
          class="text-muted d-inline mb-2"
          style="
            color: #757575;
            font-size: 20px;
            font-family: 'Source Sans Pro', sans-serif;
            font-weight: 600;
            border-bottom-right-radius: 10px;
            border-top-right-radius: 10px;
            margin-left: -20px;
            padding-left: 20px;
            padding-right: 8px;
            padding-bottom: 2px;
            background: #cdcf66;
            padding-top: 2px;
          "
        >
          R$80,00 a R$300,00
        </h6>
        <h4
          style="
            font-family: 'Source Sans Pro', sans-serif;
            font-weight: 700;
            color: rgb(255, 160, 0);
            margin-bottom: 8px;
            margin-top: 22px;
          "
        >
          Maquiagem Artística
        </h4>
        <p
          style="
            font-family: 'Source Sans Pro', sans-serif;
            color: #212121;
          "
        >
          A maquiagem artística é uma técnica diferente da make social, e
          da que usamos no nosso dia a dia.<br />
        </p>
      </div>
      <a
        class="btn btn-primary d-flex d-xl-flex justify-content-center align-items-center justify-content-xl-center align-items-xl-center"
        role="button"
        data-bss-hover-animate="pulse"
        style="
          margin-top: 20px;
          background: #128c7e;
          border-style: none;
          padding-top: 8px;
          padding-bottom: 8px;
          box-shadow: 2px 2px 8px rgba(117, 117, 117, 0.71);
        "
        target="_blank"
        ><i
          class="fab fa-whatsapp"
          style="
            color: rgb(255, 255, 255);
            font-size: 25px;
            margin-right: 16px;
          "
        ></i
        >Comprar no WhatsApp</a
      >
    </div>
  </div>
    `;
  domProductCard.appendChild(productCard);
});
