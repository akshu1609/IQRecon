"use client";

import React, { useState } from 'react';
import { Chart, CategoryScale, LinearScale, BarElement, PointElement, LineElement, Title, Tooltip, Legend, RadialLinearScale, ArcElement } from 'chart.js';
import { Bar, Line, Radar, Doughnut } from 'react-chartjs-2';
import { FiHome, FiBarChart2, FiBell, FiPieChart, FiAlertCircle, FiUsers, FiCalendar, FiDollarSign } from 'react-icons/fi';

// Register necessary chart elements
Chart.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  RadialLinearScale,
  ArcElement // Make sure to include ArcElement for Doughnut charts
);

const Dashboard: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  const toggleDarkMode = () => {
    document.body.classList.toggle('dark');
    setIsDarkMode(document.body.classList.contains('dark'));
  };

  // Enrollment Chart Data
  const enrollmentData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Enrollment',
        data: [65, 59, 80, 81, 56, 55],
        backgroundColor: ['#6d7ae7', '#899cf0', '#6d7ae7', '#899cf0', '#6d7ae7', '#899cf0'],
        borderColor: ['#5a68c7', '#7182c7', '#5a68c7', '#7182c7', '#5a68c7', '#7182c7'],
        borderWidth: 1,
        borderRadius: 10,
        barPercentage: 0.5,
      },
    ],
  };

  const enrollmentOptions = {
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          color: '#333',
          font: {
            size: 14,
          },
        },
        grid: {
          color: '#e5e5e5',
        },
      },
      x: {
        ticks: {
          color: '#333',
          font: {
            size: 14,
          },
        },
        grid: {
          color: '#e5e5e5',
        },
      },
    },
    plugins: {
      legend: {
        display: true,
        labels: {
          color: '#333',
          font: {
            size: 16,
          },
        },
      },
      title: {
        display: true,
        text: 'Monthly Enrollment',
        color: '#333',
        font: {
          size: 20,
        },
      },
    },
    responsive: true,
    maintainAspectRatio: false,
  };

  // Attendance Chart Data
  const attendanceData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Attendance',
        data: [80, 75, 90, 85, 80, 70],
        borderColor: '#6d7ae7',
        backgroundColor: 'rgba(109, 122, 231, 0.2)',
        borderWidth: 2,
        pointBorderColor: '#6d7ae7',
        pointBackgroundColor: '#fff',
        pointRadius: 5,
      },
    ],
  };

  const attendanceOptions = {
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          color: '#333',
          font: {
            size: 14,
          },
        },
        grid: {
          color: '#e5e5e5',
        },
      },
      x: {
        ticks: {
          color: '#333',
          font: {
            size: 14,
          },
        },
        grid: {
          color: '#e5e5e5',
        },
      },
    },
    plugins: {
      legend: {
        display: true,
        labels: {
          color: '#333',
          font: {
            size: 16,
          },
        },
      },
      title: {
        display: true,
        text: 'Monthly Attendance',
        color: '#333',
        font: {
          size: 20,
        },
      },
    },
    responsive: true,
    maintainAspectRatio: false,
  };

  // Academic Performance Radar Data
  const academicPerformanceRadarData = {
    labels: ['Math', 'Science', 'English', 'History', 'Art'],
    datasets: [
      {
        label: 'Average Scores',
        data: [85, 90, 78, 88, 82],
        backgroundColor: 'rgba(109, 122, 231, 0.2)',
        borderColor: '#6d7ae7',
        borderWidth: 2,
      },
    ],
  };

  const academicPerformanceRadarOptions = {
    scales: {
      r: {
        ticks: {
          color: '#333',
        },
        grid: {
          color: '#e5e5e5',
        },
      },
    },
    plugins: {
      legend: {
        display: true,
        labels: {
          color: '#333',
        },
      },
      title: {
        display: true,
        text: 'Academic Performance Radar Chart',
        color: '#333',
      },
    },
    responsive: true,
    maintainAspectRatio: false,
  };

  // Teacher Utilization Bar Data
  const teacherUtilizationData = {
    labels: ['Math', 'Science', 'English', 'History', 'Art'],
    datasets: [
      {
        label: 'Classes Taught',
        data: [10, 12, 8, 9, 7],
        backgroundColor: '#6d7ae7',
        borderColor: '#5a68c7',
        borderWidth: 1,
      },
    ],
  };

  const teacherUtilizationOptions = {
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          color: '#333',
          font: {
            size: 14,
          },
        },
        grid: {
          color: '#e5e5e5',
        },
      },
      x: {
        ticks: {
          color: '#333',
          font: {
            size: 14,
          },
        },
        grid: {
          color: '#e5e5e5',
        },
      },
    },
    plugins: {
      legend: {
        display: true,
        labels: {
          color: '#333',
          font: {
            size: 16,
          },
        },
      },
      title: {
        display: true,
        text: 'Teacher Utilization',
        color: '#333',
        font: {
          size: 20,
        },
      },
    },
    responsive: true,
    maintainAspectRatio: false,
  };

  // Doughnut Chart Data
  const resourceUsageData = {
    labels: ['Used', 'Available'],
    datasets: [
      {
        data: [70, 30],
        backgroundColor: ['#6d7ae7', '#e5e5e5'],
        borderWidth: 1,
      },
    ],
  };

  const resourceUsageOptions = {
    plugins: {
      legend: {
        display: true,
        labels: {
          color: '#333',
        },
      },
      title: {
        display: true,
        text: 'Resource Usage Doughnut Chart',
        color: '#333',
      },
    },
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <main className="p-4 bg-gray-100 min-h-screen">
      <div className="container mx-auto">

        {/* Existing content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: "Total Students", count: "2,300", icon: FiHome },
            { title: "Total Teachers", count: "50", icon: FiBarChart2 },
            { title: "Total Classes", count: "12", icon: FiBell },
            { title: "Total Sections", count: "24", icon: FiPieChart }
          ].map((card, index) => (
            <div key={index} className="relative flex flex-col break-words rounded-2xl border border-gray-200 bg-white shadow-lg overflow-hidden transform transition-transform hover:scale-105 hover:shadow-xl">
              <div className="flex-auto p-6 flex flex-col justify-between">
                <div className="flex items-center">
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-gray-600 capitalize mb-1">
                      {card.title}
                    </p>
                    <h5 className="text-2xl font-bold">
                      {card.count}
                      <span className="text-green-500 text-lg font-semibold"> +3%</span>
                    </h5>
                  </div>
                  <div className="flex-shrink-0 ml-4">
                    <div className="flex items-center justify-center w-16 h-16 bg-gray-200 text-gray-600 rounded-full">
                      <card.icon className="w-8 h-8" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Charts */}
        <div className="my-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="relative flex flex-col break-words rounded-2xl border border-gray-200 bg-white shadow-lg overflow-hidden transform transition-transform hover:scale-105 hover:shadow-xl">
            <div className="flex-auto p-6">
              <h5 className="text-xl font-semibold mb-4">Monthly Enrollment</h5>
              <div className="h-80">
                <Bar data={enrollmentData} options={enrollmentOptions} />
              </div>
            </div>
          </div>
          <div className="relative flex flex-col break-words rounded-2xl border border-gray-200 bg-white shadow-lg overflow-hidden transform transition-transform hover:scale-105 hover:shadow-xl">
            <div className="flex-auto p-6">
              <h5 className="text-xl font-semibold mb-4">Monthly Attendance</h5>
              <div className="h-80">
                <Line data={attendanceData} options={attendanceOptions} />
              </div>
            </div>
          </div>
        </div>

        {/* Radar and Doughnut Charts */}
        <div className="my-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="relative flex flex-col break-words rounded-2xl border border-gray-200 bg-white shadow-lg overflow-hidden transform transition-transform hover:scale-105 hover:shadow-xl">
            <div className="flex-auto p-6">
              <h5 className="text-xl font-semibold mb-4">Academic Performance Radar</h5>
              <div className="h-80">
                <Radar data={academicPerformanceRadarData} options={academicPerformanceRadarOptions} />
              </div>
            </div>
          </div>
          <div className="relative flex flex-col break-words rounded-2xl border border-gray-200 bg-white shadow-lg overflow-hidden transform transition-transform hover:scale-105 hover:shadow-xl">
            <div className="flex-auto p-6">
              <h5 className="text-xl font-semibold mb-4">Resource Usage</h5>
              <div className="h-80">
                <Doughnut data={resourceUsageData} options={resourceUsageOptions} />
              </div>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
};

export default Dashboard;
