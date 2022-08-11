const scriptURL = "https://script.google.com/macros/s/AKfycbwqNhBwo3brNNwACYlmwg-x_MhkoUxSBBIo7pGN8fufsFywZ2cm4QV1Idc_CoSm8ehXIA/exec";
const form = document.forms["reva-contact-form"];
const btnKirim = document.querySelector(".btn-kirim");
const btnLoading = document.querySelector(".btn-loading");
const myAlert = document.querySelector(".my-alert");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  // Ketika Tombol Kirim di Klik
  // Tampilkan Tombol Loading, Hilangkan Tombol Kirim
  btnLoading.classList.toggle("d-none");
  btnKirim.classList.toggle("d-none");

  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      btnLoading.classList.toggle("d-none");
      btnKirim.classList.toggle("d-none");

      //   Tampilkan Alert
      myAlert.classList.toggle("d-none");

      //   Bersihkan Form
      form.reset();

      console.log("Success!", response);
    })
    .catch((error) => console.error("Error!", error.message));
});
