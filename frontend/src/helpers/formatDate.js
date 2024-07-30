export default function formatDate(mongoDate) {
  // Chuyển đổi chuỗi ngày giờ từ MongoDB thành đối tượng Date
  const date = new Date(mongoDate);

  // Tùy chọn hiển thị ngày tháng năm giờ phút giây theo định dạng mong muốn
  // Ở đây sử dụng "vi-VN" để hiển thị theo định dạng ngày tháng của Việt Nam
  const options = {
    timeZone: 'Asia/Ho_Chi_Minh', // Múi giờ Việt Nam
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  };

  // Chuyển đổi ngày giờ theo định dạng và múi giờ Việt Nam
  return new Intl.DateTimeFormat('vi-VN', options).format(date);
}
