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

        // Fungsi untuk menampilkan produk dengan sanitasi output
        function tampilkanProduk() {
            const produkContainer = document.getElementById('produkContainer');
            
            // Clear container safely
            while (produkContainer.firstChild) {
                produkContainer.removeChild(produkContainer.firstChild);
            }
            
            produkData.forEach(produk => {
                const produkElement = document.createElement('div');
                produkElement.className = 'produk__item';
                
                // Sanitize input and create HTML safely
                const nama = document.createTextNode(produk.nama).textContent;
                const gambar = document.createTextNode(produk.gambar).textContent;
                const harga = document.createTextNode(produk.harga).textContent;
                const deskripsi = document.createTextNode(produk.deskripsi).textContent;
                
                // Create best seller badge if needed
                const bestSellerBadge = produk.bestSeller ? 
                    '<div class="best-seller">Best Seller</div>' : '';
                
                produkElement.innerHTML = `
                    <div class="produk__image">
                        ${bestSellerBadge}
                        <img src="${gambar.replace(/"/g, '&quot;')}" alt="${nama.replace(/"/g, '&quot;')}" loading="lazy">
                        <div class="produk__overlay">
                            <a href="${gambar.replace(/"/g, '&quot;')}" class="produk__zoom" data-lightbox="produk" data-title="${nama.replace(/"/g, '&quot;')}">
                                <i class="fas fa-search-plus"></i>
                            </a>
                        </div>
                    </div>
                    <div class="produk__info">
                        <h3>${nama.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</h3>
                        <div class="harga">${harga.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</div>
                        <p>${deskripsi.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</p>
                        <a href="#" class="produk__button pesan-sekarang" data-produk="${nama.replace(/"/g, '&quot;')}">Pesan Sekarang</a>
                    </div>
                `;
                produkContainer.appendChild(produkElement);
            });

            // Add secure event listeners for order buttons
            document.querySelectorAll('.pesan-sekarang').forEach(button => {
                button.addEventListener('click', function(e) {
                    e.preventDefault();
                    const produkNama = this.getAttribute('data-produk');
                    if (produkNama) {
                        bukaWhatsApp(produkNama);
                    }
                });
            });
        }

        // Secure WhatsApp opening function
        function bukaWhatsApp(produkNama) {
            const nomorWhatsApp = '6285213302218';
            const pesan = `Halo Rizda Utama, saya tertarik dengan produk *${produkNama.replace(/[*_~]/g, '')}*. Bisa minta informasi lebih lanjut?`;
            
            // Detect device
            const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
            
            // Create secure URL
            const encodedMessage = encodeURIComponent(pesan);
            let urlWhatsApp;
            
            if (isMobile) {
                urlWhatsApp = `whatsapp://send?phone=${nomorWhatsApp}&text=${encodedMessage}`;
            } else {
                urlWhatsApp = `https://web.whatsapp.com/send?phone=${nomorWhatsApp}&text=${encodedMessage}`;
            }
            
            // Open in new tab with noopener
            const newWindow = window.open(urlWhatsApp, '_blank', 'noopener,noreferrer');
            
            // Fallback for desktop if blocked
            if (!isMobile && !newWindow) {
                setTimeout(() => {
                    window.location.href = `https://wa.me/${nomorWhatsApp}?text=${encodedMessage}`;
                }, 500);
            }
        }

        // Initialize when DOM is ready
        document.addEventListener('DOMContentLoaded', function() {
            tampilkanProduk();
            
            // Update year in footer
            document.getElementById('tahun').textContent = new Date().getFullYear();
            
            // Mobile menu toggle
            const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
            const nav = document.querySelector('.nav');
            
            if (mobileMenuBtn && nav) {
                mobileMenuBtn.addEventListener('click', function() {
                    nav.classList.toggle('active');
                    this.classList.toggle('active');
                });
            }

            // Secure form handling
            const formKontak = document.getElementById('formKontak');
            if (formKontak) {
                formKontak.addEventListener('submit', function(e) {
                    e.preventDefault();
                    
                    // Get form values with validation
                    const elements = this.elements;
                    const nama = elements[0].value.trim();
                    const telepon = elements[1].value.trim();
                    const produk = elements[2].value;
                    const pesan = elements[3].value.trim();
                    
                    // Validate inputs
                    if (!nama || !telepon || !produk || !pesan) {
                        alert('Harap isi semua field yang diperlukan');
                        return;
                    }
                    
                    // Format message securely
                    const text = `Halo Rizda Utama,\nNama: ${nama.replace(/[*_~]/g, '')}\nNo. HP: ${telepon.replace(/[^0-9+]/g, '')}\nProduk: ${produk.replace(/[*_~]/g, '')}\nPesan: ${pesan.replace(/[*_~]/g, '')}`;
                    
                    // Open WhatsApp
                    bukaWhatsAppCustom(text);
                });
            }
        });

        // Secure custom WhatsApp function for contact form
        function bukaWhatsAppCustom(pesan) {
            const nomorWhatsApp = '6285213302218';
            const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
            
            const encodedMessage = encodeURIComponent(pesan);
            let urlWhatsApp;
            
            if (isMobile) {
                urlWhatsApp = `whatsapp://send?phone=${nomorWhatsApp}&text=${encodedMessage}`;
            } else {
                urlWhatsApp = `https://web.whatsapp.com/send?phone=${nomorWhatsApp}&text=${encodedMessage}`;
            }
            
            const newWindow = window.open(urlWhatsApp, '_blank', 'noopener,noreferrer');
            
            if (!isMobile && !newWindow) {
                setTimeout(() => {
                    window.location.href = `https://wa.me/${nomorWhatsApp}?text=${encodedMessage}`;
                }, 500);
            }
        }
