import React, { useEffect, useRef, useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";

// Đăng ký các thành phần của Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler // Đăng ký thêm Filler để hỗ trợ màu nền
);

import { useMediaQuery } from "react-responsive";

const today = new Date();

const day = today.getDate();
const month = today.getMonth() + 1; // Tháng trong JavaScript bắt đầu từ 0, nên cần cộng thêm 1
const year = today.getFullYear();

const hours = today.getHours();
const minutes = today.getMinutes();
const seconds = today.getSeconds();
// Định dạng ngày thành chuỗi theo định dạng DD/MM/YYYY
const formattedDate = `${day < 10 ? "0" + day : day}/${
  month < 10 ? "0" + month : month
}/${year}`;
const formattedTime = `${hours < 10 ? "0" + hours : hours}:${
  minutes < 10 ? "0" + minutes : minutes
}:${seconds < 10 ? "0" + seconds : seconds}`;

console.log(formattedTime); // Ví dụ: "09:07:22"
console.log(formattedDate); // Ví dụ: "07/08/2024"

const data = {
  labels: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "ABC",
    "ABF",
  ], // Cập nhật nhãn theo số liệu của bạn
  datasets: [
    {
      label: "Dataset 2",
      data: [15, 23, 10, 15, 6.8, 10, 20, 25, 20, 25, 23],
      fill: true, // Không sử dụng màu nền
      borderColor: "#F4732D",
      tension: 0, // Đường line góc cạnh (không mượt)
      backgroundColor: "rgba(244, 115, 45, 0.2)",
      pointBackgroundColor: "#F4732D", // Màu điểm trên đường line
      pointRadius: 5,
      pointBorderColor: "#fff",
      pointBorderWidth: 2,
      pointHoverRadius: 7,
      pointHoverBorderColor: "#F4732D",
    },
    {
      label: "Dataset 1",
      data: [20, 28, 13, 22, 10, 18, 23, 30, 25, 35, 30],
      fill: true, // Không sử dụng màu nền
      borderColor: "#B8D4FB",
      tension: 0, // Đường line góc cạnh (không mượt)
      pointRadius: 6,
      backgroundColor: "rgba(184, 212, 251, 0.5)",
      pointBackgroundColor: "#B8D4FB", // Màu điểm trên đường line
      pointRadius: 5,
      pointBorderColor: "#fff",
      pointBorderWidth: 2,
      pointHoverRadius: 7,
      pointHoverBorderColor: "#B8D4FB",
    },
  ],
};
// Cấu hình biểu đồ
const options = {
  responsive: true,
  maintainAspectRatio: false, // Đảm bảo biểu đồ sử dụng toàn bộ diện tích chứa
  plugins: {
    legend: {
      position: "top",
      display: false,
    },
    title: {
      display: false,
      text: "TĂNG CHƯỞNG NAV",
      align: "start",
      padding: {
        // 1rem = 16px
        bottom: 26,
        top: 26,
      },
      font: {
        size: 28, // 2rem = 32px
      },
      color: "#1F2251",
    },
    tooltip: {
      backgroundColor: "#fff", // Màu nền của tooltip
      titleColor: "#000", // Màu của tiêu đề tooltip
      bodyColor: "#000", // Màu của nội dung tooltip
      borderColor: "#ccc", // Màu đường viền của tooltip
      borderWidth: 1, // Độ dày đường viền của tooltip
      callbacks: {
        label: function (context) {
          return [
            `${formattedDate}, ${formattedTime}`,
            `Tăng: ${context.parsed.y}%`,
          ];
        },
      },
    },
  },
  scales: {
    x: {
      display: true, // Ẩn nhãn trục x
      grid: {
        display: false, // Ẩn lưới trục x nếu cần
        borderDash: [5, 5],
      },
      title: {
        display: true, // Ẩn tiêu đề trục x
        text: "Quỹ đầu tư ASBF",
        color: "#000",
      },
      ticks: {
        display: false, // Ẩn các ticks (nhãn) trên trục x
      },
    },
    y: {
      ticks: {
        callback: function (value) {
          return `${value}%`; // Hiển thị giá trị dưới dạng số (hoặc phần trăm nếu cần)
        },
      },
      grid: {
        display: true, // Ẩn lưới trục x nếu cần
        borderDash: [5, 5],
      },
    },
  },
};

// Tạo component biểu đồ
const LineChart = () => {
  // const canvasRef = useRef(null);
  // const [gradient, setGradient] = useState(null);

  // useEffect(() => {
  //   if (canvasRef.current) {
  //     const canvas = canvasRef.current;
  //     const ctx = canvas.getContext("2d");

  //     // Tạo gradient
  //     const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
  //     gradient.addColorStop(0, "rgba(244, 115, 45, 0.2)"); // Màu bắt đầu
  //     gradient.addColorStop(1, "rgba(244, 115, 45, 0)"); // Màu kết thúc

  //     setGradient(gradient);
  //   }
  // }, []);
  // Dữ liệu cho biểu đồ

  return (
    <div
      style={{ position: "relative" }}
      className="lg:h-[32rem] sm:h-[16rem] h-[10rem]"
    >
      <h2 className="uppercase p-[0.5rem] pl-[1.5rem] font-svn_gilory_bold text-secondary-30 text-[0.7rem] sm:text-[0.875rem] lg:text-[1.2rem]">
        Tăng chưởng nav
      </h2>
      <Line data={data} options={options} />
    </div>
  );
};

export default LineChart;
