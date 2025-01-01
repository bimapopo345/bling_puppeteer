// bling2_from_a2z.mjs
import puppeteer from "puppeteer";
import clipboardy from "clipboardy"; // Menggunakan import karena ES Module
import { exec } from "child_process"; // Modul bawaan Node.js

(async () => {
  console.log("[INFO] Meluncurkan Puppeteer dengan user-agent ala Android...");

  // 1. Launch browser
  const browser = await puppeteer.launch({
    headless: false, // false agar terlihat
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
    defaultViewport: null, // Membuka browser dalam ukuran penuh
  });

  const page = await browser.newPage();

  // 2. Set user-agent ala Android
  const userAgent =
    "Mozilla/5.0 (Linux; Android 12; Infinix X6827) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Mobile Safari/537.36";
  await page.setUserAgent(userAgent);
  console.log(`[INFO] User-Agent disetel ke: ${userAgent}`);

  // 3. Setup listener untuk menangkap URL .m3u8
  const m3u8Links = new Set(); // Menggunakan Set untuk mencegah duplikasi

  page.on("response", async (response) => {
    const url = response.url();
    if (url.includes(".m3u8")) {
      try {
        const status = response.status();
        if (status === 200 && !m3u8Links.has(url)) {
          // Cek status dan duplikasi
          console.log(`[CATCH] .m3u8 terdeteksi: ${url} (status=${status})`);
          m3u8Links.add(url);
          clipboardy.writeSync(url); // Salin ke clipboard
          console.log(`[INFO] URL disalin ke clipboard: ${url}`);

          // 4. Jalankan VLC dengan URL .m3u8 dan atur ukuran jendela
          // Pastikan VLC ada di PATH atau ganti dengan path lengkap ke executable VLC
          const vlcPath = "vlc"; // Ganti jika VLC tidak ada di PATH
          const vlcWidth = 800; // Lebar jendela VLC dalam piksel
          const vlcHeight = 600; // Tinggi jendela VLC dalam piksel

          const vlcCommand = `"${vlcPath}" --width ${vlcWidth} --height ${vlcHeight} "${url}"`;

          exec(vlcCommand, (error, stdout, stderr) => {
            if (error) {
              console.error(`[ERROR] Gagal membuka VLC: ${error.message}`);
              return;
            }
            if (stderr) {
              console.error(`[VLC STDERR] ${stderr}`);
              return;
            }
            console.log(`[INFO] VLC dibuka dengan URL: ${url}`);
          });
        }
      } catch (err) {
        console.error(`[ERROR] Gagal memproses respons: ${err.message}`);
      }
    }
  });

  // 4. Buka bling2.tv
  console.log("[INFO] Navigasi ke https://bling2.tv ...");
  await page.goto("https://bling2.tv/LiveCenter", {
    waitUntil: "networkidle2",
  });

  console.log("[INFO] Browser tetap terbuka dan skrip berjalan terus.");
  console.log("[INFO] Tekan Ctrl+C di terminal untuk menghentikan skrip.");

  // 5. Skrip akan terus berjalan tanpa menutup browser
})();
