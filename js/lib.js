const productlist = [
  // --- HỆ FULLFRAME (ID: 1 -> 8) ---
  {
    id: 1,
    name: "Panasonic Lumix S5 MARK I",
    price: "20.000.000 VNĐ",
    oldPrice: "26.000.000 VNĐ",
    image: "../Assets/Images/lumixs5.jpg",
    productLink: "product-detail.html",
    cat: "camera", system: "fullframe",
    desc: "Lựa chọn hoàn hảo trong phân khúc máy ảnh không gương lật tầm trung. Với cảm biến CMOS 24.2MP, máy mang lại chất lượng hình ảnh sắc nét và dải tương phản động rộng. Đây là công cụ đắc lực cho những người sáng tạo nội dung mới bắt đầu, cân bằng tốt giữa khả năng chụp ảnh tĩnh và quay video."
  },
  {
    id: 2,
    name: "Panasonic Lumix S5 MARK II",
    price: "27.000.000 VNĐ",
    oldPrice: "34.000.000 VNĐ",
    image: "../Assets/Images/lumixs52.jpg",
    productLink: "product-detail.html",
    cat: "camera", system: "fullframe",
    desc: "Bước đột phá với công nghệ lấy nét Hybrid tân tiến, khắc phục hoàn toàn nhược điểm về lấy nét của các thế hệ trước. Hệ thống chống rung Active I.S mạnh mẽ giúp bạn dễ dàng ghi lại những thước phim cầm tay mượt mà, biến sản phẩm trở thành một trong những chiếc máy ảnh đa năng nhất hiện nay."
  },
  {
    id: 3,
    name: "Panasonic Lumix S5 Mark II X",
    price: "43.000.000 VNĐ",
    oldPrice: "49.500.000 VNĐ",
    image: "../Assets/Images/lumixs52x.jpg",
    productLink: "product-detail.html",
    cat: "camera", system: "fullframe",
    desc: "Chiếc máy ảnh full-frame chuyên nghiệp sở hữu thiết kế đen nhám sang trọng. Được trang bị hệ thống lấy nét theo pha (PDAF) tiên tiến, máy cung cấp khả năng quay video RAW 6K ấn tượng và tính năng ghi trực tiếp vào ổ cứng SSD qua cổng USB-C, phù hợp cho các nhà làm phim chuyên nghiệp."
  },
  {
    id: 4,
    name: "Panasonic Lumix S1",
    price: "49.990.000 VNĐ",
    oldPrice: "58.000.000 VNĐ",
    image: "../Assets/Images/S1.jpg", 
    productLink: "product-detail.html",
    cat: "camera", system: "fullframe",
    desc: "Panasonic Lumix S1 là dòng máy ảnh mirrorless full-frame đa năng lý tưởng dành cho các nhiếp ảnh gia và nhà sáng tạo nội dung chuyên nghiệp..."
  },
  {
    id: 5,
    name: "Panasonic Lumix S1H",
    price: "117.000.000 VNĐ",
    oldPrice: "130.000.000 VNĐ",
    image: "../Assets/Images/S1H.jpg", 
    productLink: "product-detail.html",
    cat: "camera", system: "fullframe",
    desc: "Panasonic Lumix S1H là chiếc máy ảnh full-frame tối tân được thiết kế đặc biệt để phá vỡ mọi giới hạn trong ngành làm phim chuyên nghiệp..."
  },
  {
    id: 6,
    name: "Panasonic Lumix S1R",
    price: "89.990.000 VNĐ",
    oldPrice: "99.000.000 VNĐ",
    image: "../Assets/Images/S1R.jpg", 
    productLink: "product-detail.html",
    cat: "camera", system: "fullframe",
    desc: "Panasonic Lumix S1R là đỉnh cao của dòng máy ảnh mirrorless full-frame chuyên dụng cho nhu cầu chụp ảnh quảng cáo..."
  },
  {
    id: 7,
    name: "Panasonic Lumix S 24-105mm f4 Macro O.I.S",
    price: "23.900.000 VNĐ",
    oldPrice: "28.000.000 VNĐ",
    image: "../Assets/Images/Lumix24105.jpg", 
    productLink: "product-detail.html",
    cat: "lens", system: "fullframe",
    desc: "Ống kính Panasonic Lumix S 24-105mm f4 Macro O.I.S là dòng ống kính zoom tiêu chuẩn ngàm L cao cấp..."
  },
  {
    id: 8,
    name: "Panasonic Lumix S 14-28mm f4-5.6 Macro",
    price: "19.300.000 VNĐ",
    oldPrice: "23.500.000 VNĐ",
    image: "../Assets/Images/lumixs1428.jpg", 
    productLink: "product-detail.html",
    cat: "lens", system: "fullframe",
    desc: "Panasonic Lumix S 14-28mm f4-5.6 Macro là ống kính zoom góc siêu rộng nhỏ gọn, trọng lượng cực nhẹ..."
  },

  // --- HỆ M43 (MICRO FOUR THIRDS) (ID: 9 -> 18) ---
  {
    id: 9,
    name: "Panasonic Lumix DMC-G7",
    price: "7.000.000 VNĐ",
    oldPrice: "11.000.000 VNĐ",
    image: "../Assets/Images/G7.png", 
    productLink: "product-detail.html",
    cat: "camera", system: "m43",
    desc: "Lumix G7 là dòng máy ảnh nhập môn giá rẻ sở hữu cảm biến Live MOS 16MP, hỗ trợ quay video 4K tại 30 hình/giây với hệ thống lấy nét tương phản DFD 49 điểm và tốc độ chụp liên tiếp 8 hình/giây, tuy nhiên máy không tích hợp chống rung thân máy."
  },
  {
    id: 10,
    name: "Panasonic Lumix DMC-G8 ",
    price: "9.000.000 – 12.000.000 VNĐ",
    oldPrice: "15.000.000 VNĐ",
    image: "../Assets/Images/G8.jpg", 
    productLink: "product-detail.html",
    cat: "camera", system: "m43",
    desc: "Lumix G8 sở hữu cảm biến 16MP loại bỏ bộ lọc low-pass, tích hợp chống rung 5 trục hiệu quả 5 stop, khả năng quay video 4K tại 30 hình/giây, lấy nét 49 điểm DFD, chụp liên tiếp 9 hình/giây và có vỏ kháng thời tiết."
  },
  {
    id: 11,
    name: "Panasonic Lumix DMC-G9",
    price: "14.500.000 – 16.500.000 VNĐ",
    oldPrice: "21.000.000 VNĐ",
    image: "../Assets/Images/G9.jpg", 
    productLink: "product-detail.html",
    cat: "camera", system: "m43",
    desc: "Lumix G9 trang bị cảm biến 20.3MP, chống rung 5 trục lên đến 6.5 stop, khả năng quay video 4K tại 60 hình/giây, hệ thống lấy nét 225 điểm DFD khóa nét trong 0.04 giây, chụp liên tiếp 60 hình/giây và hỗ trợ chụp ghép độ phân giải cao 80MP."
  },
  {
    id: 12,
    name: "Panasonic Lumix DMC-GH5",
    price: "10.000.000 – 13.000.000 VNĐ",
    oldPrice: "18.000.000 VNĐ",
    image: "../Assets/Images/Gh5.jpg", 
    productLink: "product-detail.html",
    cat: "camera", system: "m43",
    desc: "Lumix GH5 sử dụng cảm biến 20.3MP, chống rung 5 trục Dual I.S. II hiệu quả 5 stop, hỗ trợ quay video 4K 10-bit 4:2:2 tại 30 hình/giây không giới hạn thời gian ghi hình, lấy nét 225 điểm DFD và trang bị 2 khe cắm thẻ SD UHS-II."
  },
  {
    id: 13,
    name: "Panasonic Lumix DMC-GH6",
    price: "24.500.000 – 26.500.000 VNĐ",
    oldPrice: "35.000.000 VNĐ",
    image: "../Assets/Images/Gh6.jpg", 
    productLink: "product-detail.html",
    cat: "camera", system: "m43",
    desc: "Lumix GH6 sở hữu cảm biến 25.2MP, chống rung siêu mạnh lên đến 7.5 stop, hỗ trợ quay video 5.7K tại 60 hình/giây hoặc 4K 10-bit tại 120 hình/giây định dạng Apple ProRes nhờ tích hợp quạt tản nhiệt chủ động, đi kèm hệ thống lấy nét 315 điểm DFD và 2 khe thẻ CFexpress/SD."
  },
  {
    id: 14,
    name: "Panasonic Lumix DMC-G9 MARK II",
    price: "27.000.000 – 30.000.000 VNĐ",
    oldPrice: "36.000.000 VNĐ",
    image: "../Assets/Images/G92.jpg", 
    productLink: "product-detail.html",
    cat: "camera", system: "m43",
    desc: "Lumix G9 II sở hữu cảm biến 25.2MP thế hệ mới, hệ thống lấy nét theo pha Phase Hybrid AF lên tới 779 điểm kết hợp AI, chống rung mạnh nhất phân khúc lên đến 8.0 stop, khả năng chụp liên tiếp siêu tốc 75 hình/giây và quay video 5.7K tại 60 hình/giây, hỗ trợ ghi hình trực tiếp ra ổ cứng SSD ngoài qua cổng USB-C."
  },
  {
    id: 15,
    name: "Panasonic Leica 12 60 f2.8-4 O.I.S ",
    price: "21.890.000 VNĐ",
    oldPrice: "25.500.000 VNĐ",
    image: "../Assets/Images/1260.jpg", 
    productLink: "product-detail.html",
    cat: "lens", system: "m43",
    desc: "Ống kính zoom đa dụng cao cấp tương đương tiêu cự 24-120mm trên Full-frame, cấu trúc 14 thấu kính chia làm 12 nhóm với 4 thấu kính phi cầu và 2 thấu kính ED, khoảng cách lấy nét gần nhất 20cm, tích hợp chống rung quang học POWER O.I.S và thiết kế kim loại nguyên khối kháng thời tiết."
  },
  {
    id: 16,
    name: "Panasonic Lumix 12 35 f2.8 O.I.S ",
    price: "25.000.000 VNĐ",
    oldPrice: "29.900.000 VNĐ",
    image: "../Assets/Images/1235.jpg", 
    productLink: "product-detail.html",
    cat: "lens", system: "m43",
    desc: "Phiên bản nâng cấp năm 2023 đạt chuẩn chất lượng Leica tương đương dải tiêu cự 24-70mm trên Full-frame với khẩu độ f/2.8 cố định toàn dải, cấu tạo 14 thấu kính trong 9 nhóm có tráng phủ lớp Nano Surface Coating triệt tiêu bóng ma, chống rung quang học mạnh mẽ và lấy nét cận cảnh cực tốt ở khoảng cách chỉ 15cm."
  },
  {
    id: 17,
    name: "Panasonic Leica 25 f1.4",
    price: "14.990.000 VNĐ",
    oldPrice: "18.000.000 VNĐ",
    image: "../Assets/Images/25.jpg", 
    productLink: "product-detail.html",
    cat: "lens", system: "m43",
    desc: "Ống kính prime tiêu chuẩn huyền thoại mang lại góc nhìn tương đương 50mm trên Full-frame giống như mắt người, cấu trúc gồm 9 thấu kính trong 7 nhóm sở hữu khẩu độ siêu lớn f/1.4 giúp xóa phông mịt mù và chụp thiếu sáng xuất sắc, khoảng cách lấy nét gần nhất 30cm, trọng lượng siêu nhẹ 200g và được bổ sung tính năng chống chịu thời tiết ở đời hai."
  },
  {
    id: 18,
    name: "Panasonic Leica 100-400mm f/4.0-6.3",
    price: "35.990.000 VNĐ",
    oldPrice: "42.000.000 VNĐ",
    image: "../Assets/Images/100400.jpg", 
    productLink: "product-detail.html",
    cat: "lens", system: "m43",
    desc: "Siêu ống kính siêu tele chuyên dụng chụp chim cò và thể thao cho dải tiêu cự tương đương 200-800mm trên Full-frame, cấu tạo quang học phức tạp with 20 thấu kính chia làm 13 nhóm, tích hợp hệ thống chống rung Dual I.S tương thích hoàn hảo với thân máy Lumix, động cơ lấy nét tuyến tính 240fps siêu tốc, khoảng cách lấy nét gần nhất 1.3m và trang bị sẵn vòng gắn chân đế tripod xoay linh hoạt."
  }
];

function addproduct(id, name, price, image, hyperlink) {

    const product = productlist.find(item => item.id == id);

    const productItem = document.createElement("div");
    productItem.className = "product-item col";

    const card = document.createElement("div");
    card.className = "card h-100 position-relative shadow-sm";

    // Ảnh
    const productImage = document.createElement("div");
    productImage.className = "ratio ratio-1x1";

    const img = document.createElement("img");
    img.src = image;
    img.alt = name;
    img.className = "img-fluid object-fit-cover";

    productImage.appendChild(img);

    // Body
    const cardBody = document.createElement("div");
    cardBody.className = "card-body d-flex flex-column";

    // Tên
    const productName = document.createElement("p");
    productName.innerHTML = name;
    productName.className = "fw-bold";

    // Giá mới
    const productPrice = document.createElement("p");
    productPrice.innerHTML = price;
    productPrice.className = "text-danger fw-bold mb-1";

    // Giá cũ
    const oldPrice = document.createElement("p");
    oldPrice.innerHTML = product.oldPrice || "";
    oldPrice.className = "text-secondary text-decoration-line-through small";

    // Nút điều hướng nhóm
    const btnGroup = document.createElement("div");
    btnGroup.className = "mt-auto";

    const productLink = document.createElement("a");
    productLink.innerHTML = "Chi tiết";
    productLink.href = hyperlink + "?id=" + id;
    productLink.className = "btn btn-info btn-sm";

    const cartButton = document.createElement("button");
    cartButton.innerHTML = "Thêm";
    cartButton.className = "btn btn-success btn-sm ms-2";
    
    // THAY ĐỔI QUAN TRỌNG: Gán sự kiện trực tiếp bằng chuỗi thuộc tính để loại bỏ lỗi Scope trình duyệt
    cartButton.setAttribute("onclick", `addToCart(${id})`);

    btnGroup.appendChild(productLink);
    btnGroup.appendChild(cartButton);

    // Append các thành phần theo đúng cấu trúc của cô
    cardBody.appendChild(productName);
    cardBody.appendChild(productPrice);
    cardBody.appendChild(oldPrice);
    cardBody.appendChild(btnGroup);

    card.appendChild(productImage);
    card.appendChild(cardBody);

    productItem.appendChild(card);

    document.getElementById("product-list").appendChild(productItem);
}

// HÀM LƯU DỮ LIỆU GIỎ HÀNG
function addToCart(id) {
    const product = productlist.find(item => item.id == id);
    if (product) {
        let cart = JSON.parse(localStorage.getItem("lumix_cart")) || [];
        cart.push(product);
        localStorage.setItem("lumix_cart", JSON.stringify(cart));
        
        // Cập nhật lại giao diện giỏ hàng thời gian thực ở trang chủ
        if (typeof renderCart === "function") {
            renderCart();
        }
    }
}
