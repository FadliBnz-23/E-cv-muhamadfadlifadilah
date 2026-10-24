// DATA BERDASARKAN FILE CV MUHAMAD FADLI FADILAH
const profileData = {
  personalInfo: {
    name: "Muhamad Fadli Fadilah",
    role: "Mahasiswa Sistem Informasi",
    subRole: "Universitas Bina Sarana Informatika Sukabumi",
    tagline:
      "Terbiasa bekerja secara rapi, teliti, dan bertanggung jawab dalam pengelolaan data dan administrasi.",
    email: "benzo2880@gmail.com",
    phone: "+62 838 1057 343",
    bio: "Mahasiswa aktif semester 5 program studi sistem informasi universitas bina sarana informatika kampus sukabumi. Memiliki pengalaman organisasi di himpunan mahasiswa sistem informasi (HIMASI), termasuk sebagai kepala departemen komunikasi dan informasi. Terbiasa bekerja secara rapi, teliti, dan bertanggung jawab dalam pengelolaan data dan administrasi.",
  },
  skills: [
    {
      category: "Administrasi & Pengelolaan Data",
      items: ["Microsoft Word", "Microsoft Excel", "Microsoft PowerPoint"],
    },
    {
      category: "Organisasi & Manajemen",
      items: [
        "Komunikasi & Informasi",
        "Koordinasi Tim",
        "Manajemen Acara / Kepanitiaan",
      ],
    },
  ],
  experiences: [
    {
      period: "2024 - 2025",
      title: "Kepala Departemen Komunikasi dan Informasi",
      organization: "Himpunan Mahasiswa Sistem Informasi (HIMASI)",
      description:
        "Mengelola informasi dan dokumentasi kegiatan organisasi, bertanggung jawab atas penyampaian informasi internal dan eksternal, serta mengkoordinasikan anggota departemen dalam menjalankan program kerja.",
    },
    {
      period: "2023 - 2024",
      title: "Anggota Divisi Pendidikan",
      organization: "Himpunan Mahasiswa Sistem Informasi (HIMASI)",
      description:
        "Mendukung pelaksanaan kegiatan akademik dan edukatif mahasiswa serta berpartisipasi dalam perencanaan dan pelaksanaan program divisi.",
    },
    {
      period: "Kepanitiaan",
      title: "Panitia Wisuda ke-16",
      organization: "Universitas Bina Sarana Informatika Sukabumi",
      description:
        "Membantu kelancaran administrasi dan pelaksanaan kegiatan wisuda serta bekerja sama dengan tim dalam mendukung operasional acara.",
    },
  ],
  education: [
    {
      degree: "S1 Sistem Informasi",
      institution: "Universitas Bina Sarana Informatika Sukabumi",
      period: "September 2023 - Aktif",
      detail: "IPK: 3.90",
    },
  ],
  certifications: [
    { name: "Sertifikasi Uji Kompetensi Analis Program", issuer: "Tahun 2026" },
    {
      name: "Sertifikasi Uji Kompetensi Keahlian Teknik Komputer dan Jaringan",
      issuer: "Tahun 2023",
    },
  ],
};

// RENDER DATA KE DOM (HTML)
document.addEventListener("DOMContentLoaded", () => {
  // Render Hero & About
  document.getElementById("hero-name").textContent =
    profileData.personalInfo.name;
  document.getElementById("hero-role").textContent =
    profileData.personalInfo.role;
  document.getElementById("hero-tagline").textContent =
    `"${profileData.personalInfo.tagline}"`;
  document.getElementById("about-bio").textContent =
    profileData.personalInfo.bio;

  // Render Skills
  const skillsContainer = document.getElementById("skills-container");
  skillsContainer.innerHTML = profileData.skills
    .map(
      (skillGroup) => `
        <div class="skill-card">
            <h3>${skillGroup.category}</h3>
            <ul>
                ${skillGroup.items.map((item) => `<li>${item}</li>`).join("")}
            </ul>
        </div>
    `,
    )
    .join("");

  // Render Experience
  const expContainer = document.getElementById("experience-container");
  expContainer.innerHTML = profileData.experiences
    .map(
      (exp) => `
        <div class="timeline-item">
            <span class="date">${exp.period}</span>
            <h3>${exp.title}</h3>
            <p><strong>${exp.organization}</strong></p>
            <p class="subtitle">${exp.description}</p>
        </div>
    `,
    )
    .join("");

  // Render Education & Certifications
  document.getElementById("education-container").innerHTML =
    profileData.education
      .map(
        (edu) => `
        <div class="edu-item">
            <span class="date">${edu.period}</span>
            <h4>${edu.degree}</h4>
            <p>${edu.institution}</p>
            <p class="subtitle">${edu.detail}</p>
        </div>
    `,
      )
      .join("");

  document.getElementById("certifications-container").innerHTML =
    profileData.certifications
      .map(
        (cert) => `
        <div class="edu-item">
            <h4>${cert.name}</h4>
            <p class="subtitle">${cert.issuer}</p>
        </div>
    `,
      )
      .join("");

  // Render Contact
  document.getElementById("contact-container").innerHTML = `
        <a href="mailto:${profileData.personalInfo.email}" class="contact-item">📧 ${profileData.personalInfo.email}</a>
        <a href="tel:${profileData.personalInfo.phone}" class="contact-item">📞 ${profileData.personalInfo.phone}</a>
    `;

  // Setup Mobile Navigation Toggle
  setupMobileNav();
});

// FITUR TOGGLE MOBILE NAVBAR
function setupMobileNav() {
  const navToggle = document.getElementById("navToggle");
  const navMenu = document.getElementById("navMenu");

  navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
  });

  document.querySelectorAll(".nav-menu a").forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("active");
    });
  });
}
