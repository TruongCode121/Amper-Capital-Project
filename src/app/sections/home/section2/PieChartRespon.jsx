"use client";
import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart, ArcElement, Tooltip, Legend } from "chart.js";
import { useMediaQuery } from "react-responsive";
// Đăng ký các component cần thiết của Chart.js
Chart.register(ArcElement, Tooltip, Legend);
const PieChartRespon = () => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1536px)" });
  const isMediumScreen = useMediaQuery({
    query: "(min-width: 768px) and (max-width: 1020px)",
  });
  const data = {
    labels: [
      "Ngân hàng TMCP Ngoại Thương Viêt Nam",
      "Ngân hàng TMCP Á Châu",
      "Ngân hang TMCP Đầu tư và Phát Triển Việt Nam",
      "Công ty tài chính CP Điện lực",
      "Ngân hàng TMCP Công Thương Việt Nam",
      "Ngân hàng TMCP Việt Nam Thịnh Vượng",
      "Ngân hàng TMCP Kỹ Thương Việt Nam",
      "Công ty CP Tài Chính VP Bank",
    ],
    datasets: [
      {
        label: "# of Votes",
        data: [60, 19, 10, 7, 13, 16, 16, 15],
        backgroundColor: [
          "#1F2251",
          "#46688F",
          "#607EA3",
          "#7994B7",
          "#9BB2D2",
          "#BBD2ED",
          "#E0ECFF",
          "#385B7F",
        ],
        borderColor: [
          "#1F2251",
          "#46688F",
          "#607EA3",
          "#7994B7",
          "#9BB2D2",
          "#BBD2ED",
          "#E0ECFF",
          "#385B7F",
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: isTabletOrMobile
          ? isMediumScreen
            ? "right"
            : "bottom"
          : "right",
        align: "center", // Canh đều các nhãn từ đầu
        labels: {
          boxWidth: 13, // Độ rộng của điểm
          padding: 10, // Khoảng cách giữa các nhãn
        },
      },
      tooltip: {
        enabled: true,
        callbacks: {
          label: function (context) {
            const label = context.label || "";
            const value = context.raw;
            const total = context.chart._metasets[0].total;
            const percentage = ((value / total) * 100).toFixed(2) + "%";
            return ` ${percentage}`;
          },
        },
      },
    },
  };

  return (
    <section className="px-[0.62rem]">
      {" "}
      <div
        style={{ position: "relative" }}
        className="mx-auto w-[100%] md:w-[80%] lg:w-full h-[30rem] sm:h-[25rem] md:h-[16rem] lg:h-[45rem] xl:h-[25rem] pt-[1rem] lg:pt-[2rem]"
      >
        <h3 className="uppercase font-svn_gilory_semibold text-[1rem] text-Loan-Afm-444 2xl:ml-[3rem] text-center lg:text-center 2xl:text-left">
          cơ cấu danh mục đầu tư quỹ asbf
        </h3>
        <Pie data={data} options={options} className="sm:mt-[1rem]" />
      </div>
      {/* <p className="font-svn_gilory_regular text-[0.75rem] text-Loan-Afm-444 italic">
        (*) Biểu đồ cơ cấu lợi nhuận.
      </p> */}
    </section>
  );
};

export default PieChartRespon;
