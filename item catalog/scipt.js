// Ganti URL pada daftar ini dengan URL gambar produk Anda.
    const productImages = [
      "https://via.placeholder.com/640x640?text=Lorem+Ipsum",
      "https://via.placeholder.com/640x640?text=Dolor+Sit",
      "https://via.placeholder.com/640x640?text=Amet+Consectetur"
    ];

    // Ganti dengan nomor WhatsApp tujuan, termasuk kode negara dan tanpa tanda + atau spasi.
    const whatsappNumber = "6281237576366";

    const productImage = document.querySelector("#product-image");
    const galleryDots = document.querySelector("#gallery-dots");
    const quantityOutput = document.querySelector("#quantity");
    const decreaseButton = document.querySelector("#decrease-quantity");
    const increaseButton = document.querySelector("#increase-quantity");
    let activeImageIndex = 0;
    let quantity = 1;

    function showImage(index) {
      activeImageIndex = (index + productImages.length) % productImages.length;
      productImage.src = productImages[activeImageIndex];

      galleryDots.querySelectorAll(".gallery-dot").forEach((dot, dotIndex) => {
        const isActive = dotIndex === activeImageIndex;
        dot.classList.toggle("is-active", isActive);
        dot.setAttribute("aria-current", isActive ? "true" : "false");
      });
    }

    productImages.forEach((imageUrl, index) => {
      const dot = document.createElement("button");
      dot.type = "button";
      dot.className = "gallery-dot";
      dot.setAttribute("aria-label", `Tampilkan gambar ${index + 1}`);
      dot.addEventListener("click", () => showImage(index));
      galleryDots.append(dot);
    });

    document.querySelector("#previous-image").addEventListener("click", () => {
      showImage(activeImageIndex - 1);
    });

    document.querySelector("#next-image").addEventListener("click", () => {
      showImage(activeImageIndex + 1);
    });

    function updateQuantity(nextQuantity) {
      quantity = Math.max(1, nextQuantity);
      quantityOutput.textContent = String(quantity);
      decreaseButton.disabled = quantity === 1;
    }

    decreaseButton.addEventListener("click", () => updateQuantity(quantity - 1));
    increaseButton.addEventListener("click", () => updateQuantity(quantity + 1));

    // Pesan dirakit dari judul, harga, dan jumlah yang tampil di halaman.
    document.querySelector("#whatsapp-order").addEventListener("click", () => {
      const title = document.querySelector("#product-title").textContent.trim();
      const price = document.querySelector("#product-price").textContent.trim();
      const message = [
        "Halo, saya ingin memesan produk ini:",
        `Produk: ${title}`,
        `Harga: ${price}`,
        `Jumlah: ${quantity} pcs`
      ].join("\n");
      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    });
