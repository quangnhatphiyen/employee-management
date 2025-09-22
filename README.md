
# 🚀 Real-Time Employee Task Management Tool

## 📖 Giới thiệu

Đây là ứng dụng **Quản lý công việc nhân viên theo thời gian thực**, cho phép quản lý:

* Quản lý tài khoản (Manager/Employee).
* Thêm, sửa, xóa nhân viên.
* Tạo và phân công công việc.
* Cập nhật trạng thái công việc theo thời gian thực.
* Chat trực tiếp giữa Manager và Employee (real-time chat với Socket.IO).
* Xác thực tài khoản thông qua SMS/Email (Firebase + Twilio/Email API).

Ứng dụng được xây dựng với:

* **Frontend**: React (CRA / Vite / Next.js).
* **Backend**: Node.js + Express.
* **Database**: Firebase (Firestore/Auth).
* **Realtime**: Socket.IO.
* **SMS/Email**: Twilio hoặc dịch vụ gửi mail (SendGrid/SMTP).

---

## 🏗 Cấu trúc thư mục

```
project-root/
│── backend/                      # Backend (Express)
│   ├── src/
│   │   ├── routes/               # Định nghĩa API endpoints
│   │   ├── controllers/          # Xử lý request
│   │   ├── services/             # Logic nghiệp vụ
│   │   ├── config/               # Cấu hình (Firebase, Twilio, Email…)
│   │   └── app.js                # Entry point Express
│   └── package.json
│
│── frontend/                     # Frontend (React/Vite)
│   ├── src/
│   │   ├── components/           # UI components
│   │   ├── pages/                # Trang (Login, Dashboard…)
│   │   ├── services/             # Gọi API
│   │   └── App.jsx
│   └── package.json
│
│── README.md                     # Tài liệu hướng dẫn
│── screenshots/                  # Ảnh chụp màn hình ứng dụng
```

---

## ⚙️ Cách cài đặt & chạy

### 1️⃣ Clone repo

```bash
git clone https://github.com/your-username/real-time-task-manager.git
cd real-time-task-manager
```

### 2️⃣ Cài đặt backend

```bash
cd backend
npm install
```

Tạo file `.env` trong thư mục `backend/`:

```env
PORT=5000
FIREBASE_CONFIG=your_firebase_config
TWILIO_SID=your_twilio_sid
TWILIO_AUTH=your_twilio_auth
EMAIL_SERVICE_CONFIG=your_email_config
```

Chạy server:

```bash
npm start
```

### 3️⃣ Cài đặt frontend

```bash
cd ../frontend
npm install
```

Tạo file `.env` trong thư mục `frontend/`:

```env
VITE_API_URL=http://localhost:5000
```

Chạy client:

```bash
npm run dev
```

Ứng dụng sẽ chạy tại:
👉 Frontend: `http://localhost:5173`
👉 Backend API: `http://localhost:5000`

---

## 🔑 Tính năng chính

### 👩‍💼 Role Manager

* Đăng nhập qua số điện thoại (OTP gửi bằng SMS).
* Quản lý nhân viên: thêm, sửa, xóa, xem chi tiết.
* Phân công & cập nhật công việc.
* Chat real-time với từng nhân viên.

### 👨‍💻 Role Employee

* Nhận email xác thực để tạo tài khoản.
* Đăng nhập bằng email/OTP.
* Xem và cập nhật trạng thái công việc.
* Chỉnh sửa thông tin cá nhân.
* Chat real-time với Manager.

---

## 📡 API chính

### Owner (Manager)

* `POST /createAccessCode` → tạo mã OTP và gửi qua SMS.
* `POST /validateAccessCode` → xác thực OTP.
* `POST /createEmployee` → thêm nhân viên.
* `POST /getEmployee` → lấy thông tin nhân viên.
* `POST /deleteEmployee` → xóa nhân viên.

### Employee

* `POST /loginEmail` → gửi OTP qua email.
* `POST /validateAccessCode` → xác thực OTP email.

---

## 🖼 Screenshots

Ảnh chụp giao diện sẽ nằm trong thư mục `screenshots/`.

---

## 📌 Lưu ý

* Bật HTTPS khi triển khai để đảm bảo bảo mật.
* Hash mật khẩu trước khi lưu.
* Dùng JWT cho session và bảo mật API.
* Firebase/Firestore làm cơ sở dữ liệu chính.


