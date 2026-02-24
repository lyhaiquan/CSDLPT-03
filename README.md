##  Cấu trúc thư mục Backend (src)
- **constants/**  
  Nơi chứa các biến cố định dùng chung (mã lỗi HTTP, cấu hình phân quyền).
- **controllers/**  
  Tầng xử lý logic yêu cầu, nhận dữ liệu từ Client và gọi Service.
- **middleware/**  
  Chứa các hàm kiểm tra trung gian (Auth, log dữ liệu).
- **models/**  
  Định nghĩa Schema cho MongoDB Replica Set (3 nodes).
- **routers/**  
  Định nghĩa các đường dẫn API (Endpoints).
- **service/**  
  Tầng xử lý logic nghiệp vụ chính và thao tác với Database.
- **utils/**  
  Chứa các hàm tiện ích (băm mật khẩu, format ngày tháng,...).
- **index.ts**  
  File chạy chính, khởi tạo server và kết nối cụm 3 node MongoDB.
##  Cấu trúc thư mục Frontend (src)
- **apis/**  
  Nơi quản lý các hàm gọi API sang Backend.
- **assets/**  
  Chứa các tài nguyên tĩnh như hình ảnh, biểu tượng (icons).
- **components/**  
  Các thành phần giao diện nhỏ, có thể tái sử dụng (Button, Input, Navbar).
- **constants/**  
  Chứa các biến cố định dùng cho giao diện (route, thông báo tĩnh).
- **contexts/**  
  Quản lý trạng thái toàn cục của ứng dụng (User, Cart Context).
- **layouts/**  
  Chứa các khung giao diện chung (Header/Footer cho khách, Admin Layout).
- **pages/**  
  Nơi chứa các Component đại diện cho một trang hoàn chỉnh (Home, Login, Register).
- **types/**  
  Định nghĩa các kiểu dữ liệu (Interfaces/Types) của TypeScript.
- **utils/**  
  Chứa các hàm hỗ trợ xử lý dữ liệu ở giao diện (format tiền, validate form).
- **App.tsx**  
  Component gốc bao bọc toàn bộ ứng dụng và thiết lập Routing.
- **main.tsx**  
  Điểm khởi đầu của Frontend, nơi render ứng dụng React vào DOM.