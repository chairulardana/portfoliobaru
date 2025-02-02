import {
  mobile,
  backend,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  git,
  zeribowl,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },

];

const experiences = [
  {
    title: "Barista/Kasir",
    company_name: "Zeribowl ",
    icon: zeribowl,
    iconBg: "#383E56",
    date: "Maret 2023 - Juli 2024",
    points: [
      "Melayani transaksi pelanggan, baik pembayaran tunai maupun non-tunai.",
      "Mengoperasikan mesin kasir dan memberikan struk pembayaran kepada pelanggan.",
      "Memastikan jumlah uang tunai di kas sesuai dengan laporan transaksi harian.",
      "Memberikan pelayanan yang ramah dan cepat kepada pelanggan.",
      "Mengelola pesanan pelanggan dengan akurat dan meneruskannya ke bagian barista.",
      "Participating in code reviews and providing constructive feedback to other developers.",
      " Mempersiapkan dan menyajikan berbagai minuman kopi, teh, dan lainnya sesuai standar resep.",
      "Mengoperasikan mesin espresso dan alat pendukung lainnya, seperti grinder dan milk frother.",
      "Menjaga kebersihan area kerja, termasuk mesin kopi dan peralatan.",
      "Memastikan kualitas bahan baku(biji kopi, susu, sirup, dll) tetap baik.",
    ],
  },
  {
    title: "Helper Gudang",
    company_name: "PT Panca Pilar Tangguh",
    iconBg: "#E6DEDD",
    date: "Juli 2024 - Agustus 2024",
    points: [

      'Membantu memeriksa dan mencatat barang yang masuk ke gudang.',
      'Memastikan jumlah dan kondisi barang sesuai dengan surat jalan atau dokumen pengiriman.',

      'Menata barang di rak atau tempat penyimpanan sesuai dengan kategori atau label.',
      'Memastikan barang disusun dengan rapi dan aman untuk menghindari kerusakan.',

    ],
  },
  {
    title: "Admin",
    company_name: "ZayaShop25",
    iconBg: "#383E56",
    date: "Agustus 2024- November 2024",
    points: [
      "Mengelola dan menjaga catatan serta dokumentasi yang akurat di dalam sistem.",
      "Menangani korespondensi seperti email, panggilan telepon, dan komunikasi lainnya.",
      "Berkoordinasi dengan berbagai departemen untuk memastikan kelancaran operasional dan penyelesaian tugas.",
      "Memantau dan memesan perlengkapan kantor agar selalu tersedia saat dibutuhkan.",
      "Menyusun laporan, presentasi, dan dokumen lain sesuai permintaan manajemen.",
      "Mengatur dan menjadwalkan pertemuan, janji, serta acara lainnya.",
      "Memastikan keakuratan entri data dan menjaga kerahasiaan informasi yang sensitif.",
      "Membantu menyelesaikan masalah administratif dan memberikan dukungan kepada anggota tim."

    ],
  },
];

const testimonials = [

];

const projects = [
];

export { services, technologies, experiences, testimonials, projects };
