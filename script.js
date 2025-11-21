// --- 1. MEMANGGIL PEMAIN ---
        // Kita panggil semua section (Home, About, Skill, Contact)
        const sections = document.querySelectorAll('section');
        // Kita panggil semua link yang ada di dalam class .menu
        const navLinks = document.querySelectorAll('.menu a');

        // --- 2. PASANG "CCTV" PADA SCROLL ---
        window.onscroll = () => {
            let current = "";

            // Looping: Cek setiap section satu per satu
            sections.forEach(section => {
                // Jarak section dari atap langit-langit website
                const sectionTop = section.offsetTop;
                // Tinggi section itu sendiri
                const sectionHeight = section.clientHeight;
                
                // --- 3. LOGIKA MATEMATIKA ---
                // scrollY = Posisi scroll kita saat ini
                // "- 150" = Adalah toleransi (offset) karena ada navbar fixed di atas. 
                // Jadi warna berubah SEBELUM section benar-benar mentok atas.
                if (window.scrollY >= (sectionTop - 150)) {
                    current = section.getAttribute('id'); // Ambil nama ID-nya (misal: "about")
                }
            });

            // --- 4. GANTI BAJU ---
            navLinks.forEach(li => {
                // Hapus kelas 'active' dari SEMUA link dulu (Reset)
                li.classList.remove('active');
                
                // Jika link ini href-nya mengandung ID section yang sedang dilihat...
                if (li.getAttribute('href').includes(current)) {
                    // ...Tambahkan kelas 'active' ke link ini
                    li.classList.add('active');
                }
            });
        };