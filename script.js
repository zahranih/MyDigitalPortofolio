// Mengambil elemen form
const form = document.getElementById("contact-form");

const nama = document.getElementById("nama");
const email = document.getElementById("email");
const pesan = document.getElementById("pesan");

const formMessage = document.getElementById("form-message");

// Validasi form ketika tombol diklik
form.addEventListener("submit", function (event) {
  // Mencegah halaman dimuat ulang
  event.preventDefault();

  // Mengambil nilai input
  const namaValue = nama.value.trim();
  const emailValue = email.value.trim();
  const pesanValue = pesan.value.trim();

  // Memeriksa kolom kosong
  if (namaValue === "" || emailValue === "" || pesanValue === "") {
    formMessage.textContent = "Semua kolom wajib diisi!";
    formMessage.className = "error";

    return;
  }

  // Memeriksa format email
  const polaEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!polaEmail.test(emailValue)) {
    formMessage.textContent = "Format email tidak valid!";
    formMessage.className = "error";

    return;
  }

  // Menampilkan pesan jika validasi berhasil
  formMessage.textContent =
    "Pesan berhasil divalidasi! Terima kasih, " + namaValue + ".";

  formMessage.className = "success";

  // Mengosongkan form
  form.reset();
});

// Mengambil tombol ganti tema
const themeButton = document.getElementById("theme-toggle");

// Mengganti tema ketika tombol diklik
themeButton.addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");
});
