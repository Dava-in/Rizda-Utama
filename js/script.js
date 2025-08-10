// File: js/script.js

// Data produk dengan harga dan label best seller
const produkData = [
    {
        id: 1,
        nama: "Tenda Regu Pleton",
        gambar: "images/produk/tenda-regu-pleton.jpg",
        harga: "Rp 6.500.000",
        deskripsi: "Tenda regu pleton untuk kebutuhan militer dan pramuka",
        kategori: "tenda",
        bestSeller: true
    },
    {
        id: 2,
        nama: "Tenda Pleton BNPB",
        gambar: "images/produk/tenda-pleton-bnpb.jpg",
        harga: "Rp 8.800.000",
        deskripsi: "Tenda pleton standar BNPB untuk penanggulangan bencana",
        kategori: "tenda",
        bestSeller: true
    },
    {
        id: 3,
        nama: "Tenda terop datar + variasi",
        gambar: "images/produk/tenda-terop-variasi.jpg",
        harga: "Rp 8.700.000",
        deskripsi: "Tenda terop datar dengan berbagai variasi desain",
        kategori: "tenda",
        bestSeller: true
    },
    {
        id: 4,
        nama: "Tenda Kerucut",
        gambar: "images/produk/tenda-kerucut.jpg",
        harga: "Rp 2.300.000",
        deskripsi: "Tenda kerucut untuk kebutuhan pramuka dan outdoor",
        kategori: "tenda",
        bestSeller: true
    },
    {
        id: 5,
        nama: "Tenda Linmas / Gazebo",
        gambar: "images/produk/tenda-linmas.jpg",
        harga: "Rp 2.200.000",
        deskripsi: "Tenda linmas atau gazebo untuk kebutuhan posko dan acara outdoor",
        kategori: "tenda",
        bestSeller: true
    },
    {
        id: 6,
        nama: "Tenda Terop Lengkung",
        gambar: "images/produk/tenda-terop-lengkung.jpg",
        harga: "Rp 6.000.000",
        deskripsi: "Tenda terop dengan desain lengkung untuk kebutuhan usaha",
        kategori: "tenda",
        bestSeller: true
    },
    {
        id: 7,
        nama: "Tenda Terop Oval",
        gambar: "images/produk/tenda-terop-oval.jpg",
        harga: "Rp 6.700.000",
        deskripsi: "Tenda terop oval untuk kebutuhan cafe dan tempat usaha",
        kategori: "tenda",
        bestSeller: true
    },
    {
        id: 8,
        nama: "Tenda Terop Datar 4x6",
        gambar: "images/produk/tenda-terop-datar.jpg",
        harga: "Rp 6.000.000",
        deskripsi: "Tenda terop datar ukuran 4x6 meter untuk berbagai keperluan",
        kategori: "tenda",
        bestSeller: true
    },
    {
        id: 9,
        nama: "Tenda Posko",
        gambar: "images/produk/tenda-posko.jpg",
        harga: "Rp 4.500.000",
        deskripsi: "Tenda posko untuk kebutuhan darurat dan acara",
        kategori: "tenda",
        bestSeller: true
    },
    {
        id: 10,
        nama: "Terpal atap terop kapjeep",
        gambar: "images/produk/terpal-atap-terop.jpg",
        harga: "Rp 1.200.000",
        deskripsi: "Terpal atap tenda terop berkualitas tinggi",
        kategori: "aksesoris",
        bestSeller: true
    },
    {
        id: 11,
        nama: "Terpal canvas Hotmix 87.000m²",
        gambar: "images/produk/terpal-canvas.jpg",
        harga: "Rp 2.200.000",
        deskripsi: "Terpal canvas untuk kebutuhan konstruksi dan proyek",
        kategori: "aksesoris",
        bestSeller: true
    },
    {
        id: 12,
        nama: "Gerobak Sampah 150x80x100",
        gambar: "images/produk/gerobak-sampah.jpg",
        harga: "Rp 1.950.000",
        deskripsi: "Gerobak sampah dengan ukuran 150x80x100 cm",
        kategori: "gerobak",
        bestSeller: true
    },
    {
        id: 13,
        nama: "Gerobak Sorong",
        gambar: "images/produk/gerobak-sorong.jpg",
        harga: "Rp 850.000",
        deskripsi: "Gerobak sorong untuk kebutuhan usaha dan industri",
        kategori: "gerobak",
        bestSeller: true
    },
    {
        id: 14,
        nama: "Gerobak Troli Kapasitas 300KG",
        gambar: "images/produk/gerobak-troli.jpg",
        harga: "Rp 365.000",
        deskripsi: "Gerobak troli dengan kapasitas angkut hingga 300 kg",
        kategori: "gerobak",
        bestSeller: true
    },
    {
        id: 15,
        nama: "Hand Truck Kapastitas 500KG",
        gambar: "images/produk/hand-truck.jpg",
        harga: "Rp 750.000",
        deskripsi: "Hand truck dengan kapasitas angkut hingga 500 kg",
        kategori: "gerobak",
        bestSeller: true
    }
];

// Fungsi untuk menampilkan produk
function tampilkanProduk() {
    const produkContainer = document.getElementById('produkContainer');
    
    produkContainer.innerHTML = ''; // Kosongkan container sebelum mengisi
    
    produkData.forEach(produk => {
        const produkElement = document.createElement('div');
        produkElement.className = 'produk__item';
        
        // Tambahkan badge best seller jika produk adalah best seller
        const bestSellerBadge = produk.bestSeller ? '<div class="best-seller">Best Seller</div>' : '';
        
        produkElement.innerHTML = `
            <div class="produk__image">
                ${bestSellerBadge}
                <img src="${produk.gambar}" alt="${produk.nama}" loading="lazy">
                <div class="produk__overlay">
                    <a href="${produk.gambar}" class="produk__zoom" data-lightbox="produk" data-title="${produk.nama}">
                        <i class="fas fa-search-plus"></i>
                    </a>
                </div>
            </div>
            <div class="produk__info">
                <h3>${produk.nama}</h3>
                <div class="harga">${produk.harga}</div>
                <p>${produk.deskripsi}</p>
                <a href="#" class="produk__button pesan-sekarang" data-produk="${produk.nama}">Pesan Sekarang</a>
            </div>
        `;
        produkContainer.appendChild(produkElement);
    });

    // Tambahkan event listener untuk tombol pesan sekarang
    document.querySelectorAll('.pesan-sekarang').forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const produkNama = this.getAttribute('data-produk');
            bukaWhatsApp(produkNama);
        });
    });
}

// Fungsi universal untuk membuka WhatsApp
function bukaWhatsApp(produkNama) {
    const nomorWhatsApp = '6285213302218';
    const pesan = `Halo Rizda Utama, saya tertarik dengan produk *${produkNama}*. Bisa minta informasi lebih lanjut?`;
    
    // Deteksi perangkat
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    // Format URL berdasarkan perangkat
    let urlWhatsApp;
    if (isMobile) {
        // Untuk mobile, gunakan API WhatsApp langsung
        urlWhatsApp = `whatsapp://send?phone=${nomorWhatsApp}&text=${encodeURIComponent(pesan)}`;
    } else {
        // Untuk desktop, gunakan web.whatsapp.com
        urlWhatsApp = `https://web.whatsapp.com/send?phone=${nomorWhatsApp}&text=${encodeURIComponent(pesan)}`;
    }
    
    // Buka WhatsApp
    window.open(urlWhatsApp, '_blank');
    
    // Fallback untuk desktop jika web.whatsapp.com tidak terbuka
    if (!isMobile) {
        setTimeout(() => {
            if (!window.open(urlWhatsApp, '_blank')) {
                window.location.href = `https://wa.me/${nomorWhatsApp}?text=${encodeURIComponent(pesan)}`;
            }
        }, 500);
    }
}

// Panggil fungsi saat DOM siap
document.addEventListener('DOMContentLoaded', function() {
    tampilkanProduk();
    
    // Update tahun di footer
    document.getElementById('tahun').textContent = new Date().getFullYear();
    
    // Mobile menu toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const nav = document.querySelector('.nav');
    
    mobileMenuBtn.addEventListener('click', function() {
        nav.classList.toggle('active');
        this.classList.toggle('active');
    });

    // Fungsi untuk form kontak
    document.getElementById('formKontak').addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Ambil nilai form
        const elements = this.elements;
        const nama = elements[0].value;
        const telepon = elements[1].value;
        const produk = elements[2].value;
        const pesan = elements[3].value;
        
        // Format pesan
        const text = `Halo Rizda Utama,\nNama: ${nama}\nNo. HP: ${telepon}\nProduk: ${produk}\nPesan: ${pesan}`;
        
        // Buka WhatsApp
        bukaWhatsAppCustom(text);
    });
});

// Fungsi khusus untuk form kontak
function bukaWhatsAppCustom(pesan) {
    const nomorWhatsApp = '6285213302218';
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    let urlWhatsApp;
    if (isMobile) {
        urlWhatsApp = `whatsapp://send?phone=${nomorWhatsApp}&text=${encodeURIComponent(pesan)}`;
    } else {
        urlWhatsApp = `https://web.whatsapp.com/send?phone=${nomorWhatsApp}&text=${encodeURIComponent(pesan)}`;
    }
    
    window.open(urlWhatsApp, '_blank');
    
    if (!isMobile) {
        setTimeout(() => {
            if (!window.open(urlWhatsApp, '_blank')) {
                window.location.href = `https://wa.me/${nomorWhatsApp}?text=${encodeURIComponent(pesan)}`;
            }
        }, 500);
    }
}
