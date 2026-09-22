// =========================================================
// MENU HAMBURGER (MOBILE)
// =========================================================
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('is-open');
  navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
});

// Tutup menu saat salah satu link diklik (khusus tampilan mobile)
navLinks.querySelectorAll('.nav-link').forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('is-open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

// =========================================================
// TAHUN OTOMATIS DI FOOTER
// =========================================================
document.getElementById('year').textContent = new Date().getFullYear();

// =========================================================
// FORM KONTAK — gabungkan Nama, Email, Pesan jadi satu teks,
// lalu buka WhatsApp otomatis berisi pesan lengkap tersebut.
// Ganti nomor di NOMOR_WHATSAPP dengan nomormu sendiri,
// format 62xxxxxxxxxx (tanpa tanda + atau angka 0 di depan).
// =========================================================
const NOMOR_WHATSAPP = '6281261188967';

const contactForm = document.getElementById('contactForm');
const formNote = document.getElementById('formNote');

contactForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  // Susun pesan lengkap dari ketiga kolom
  const fullMessage =
    `Halo Janna, perkenalkan saya ${name} (${email}).\n\n${message}`;

  // Encode supaya aman dipakai di URL (spasi, tanda baca, dll)
  const encodedMessage = encodeURIComponent(fullMessage);
  const waUrl = `https://wa.me/${NOMOR_WHATSAPP}?text=${encodedMessage}`;

  formNote.textContent = `Terima kasih, ${name}! Membuka WhatsApp...`;

  // Buka tab baru berisi chat WhatsApp dengan pesan yang sudah terisi
  window.open(waUrl, '_blank');

  contactForm.reset();
});