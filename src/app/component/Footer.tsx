export default function Footer() {
  return (
    <footer className="md-auto bg-[#01274B] text-white p-12 text-justify">
       <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-sm">
          <div>
            <h3 className="font-bold">QUỸ TÍN DỤNG NHÂN DÂN TRUNG SƠN</h3>
            <p>Đồng hành phát triển cùng thành viên</p>
            <p>Hotline: 02293.864.329</p>
            <p>Website: qtdndtrungson.com.vn</p>
            <p> Giờ làm việc: Từ Thứ 2 đến Thứ 7</p>
            <ul className="list-disc ml-4">
              <li>Mùa hè: 7h00-11h00</li>
              <li>Mùa đông: 7h00-11h00</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold">SẢN PHẨM & DỊCH VỤ</h4>
            <ul className="list-disc ml-4">
              <li>Gửi tiết kiệm</li>
              <li>Cho vay</li>
              <li>Mở tài khoản</li>
              <li>Chuyển tiền trong nước</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold">HỖ TRỢ KHÁCH HÀNG</h4>
            <ul className="list-disc ml-4">
              <li>Câu hỏi thường gặp</li>
              <li>Hướng dẫn sử dụng</li>
              <li>Biểu phí</li>
              <li>Liên hệ hỗ trợ</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold">KẾT NỐI</h4>
            <ul className="list-disc ml-4">
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
        </div>
        <div className="flex justify-center mt-5 text-sm text-center">© 2025 Quỹ TDND Trung Sơn. Bảo lưu mọi quyền.</div>
    </footer>
  );
}
