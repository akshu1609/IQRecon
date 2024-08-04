import React, { useState } from 'react';
import { FaTachometerAlt, FaUserGraduate, FaChalkboardTeacher, FaSchool, FaUsers, FaCog, FaFileAlt } from 'react-icons/fa';
import { IoIosArrowDown, IoIosArrowForward } from 'react-icons/io';
import Link from 'next/link';

type Section = 'dashboard' | 'students' | 'teachers' | 'classes' | 'parents' | 'administration' | 'settings';

const Sidebar: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState<Record<Section, boolean>>({
    dashboard: false,
    students: false,
    teachers: false,
    classes: false,
    parents: false,
    administration: false,
    settings: false,
  });

  const toggleExpand = (section: Section) => {
    setIsExpanded((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <div className="bg-[#121E31] w-64 h-screen shadow-lg flex flex-col overflow-hidden transition-transform duration-300 ease-in-out">
      <div className="p-4 bg-[#121E31] flex items-center justify-center border-b border-gray-700">
        <h1 className="text-2xl font-bold text-white">Pinnexa E</h1>
      </div>
      <ul className="flex flex-col p-4 space-y-2 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-400">
        {/* Dashboard */}
        <li className="relative">
          <div className="flex items-center justify-between cursor-pointer text-gray-300 hover:text-white transition-colors duration-300" onClick={() => toggleExpand('dashboard')}>
            <div className="flex items-center space-x-3">
              <FaTachometerAlt className="text-2xl" />
              <span className="text-lg font-medium">Dashboard</span>
            </div>
            {isExpanded.dashboard ? <IoIosArrowDown className="text-gray-300 transition-transform duration-300" /> : <IoIosArrowForward className="text-gray-300 transition-transform duration-300" />}
          </div>
          <ul className={`ml-6 mt-2 space-y-2 text-gray-300 border-l border-gray-600 pl-4 transition-max-height duration-500 ease-in-out ${isExpanded.dashboard ? 'max-h-32' : 'max-h-0 overflow-hidden'}`}>
            <li className="hover:text-white"><Link href="/admin/dashboard/overview">Overview</Link></li>
            <li className="hover:text-white"><Link href="/admin/dashboard/statistics">Statistics</Link></li>
            <li className="hover:text-white"><Link href="/admin/dashboard/notifications">Notifications</Link></li>
          </ul>
        </li>
        {/* Students */}
        <li className="relative">
          <div className="flex items-center justify-between cursor-pointer text-gray-300 hover:text-white transition-colors duration-300" onClick={() => toggleExpand('students')}>
            <div className="flex items-center space-x-3">
              <FaUserGraduate className="text-2xl" />
              <span className="text-lg font-medium">Students</span>
            </div>
            {isExpanded.students ? <IoIosArrowDown className="text-gray-300 transition-transform duration-300" /> : <IoIosArrowForward className="text-gray-300 transition-transform duration-300" />}
          </div>
          <ul className={`ml-6 mt-2 space-y-2 text-gray-300 border-l border-gray-600 pl-4 transition-max-height duration-500 ease-in-out ${isExpanded.students ? 'max-h-48' : 'max-h-0 overflow-hidden'}`}>
            <li className="hover:text-white"><Link href="/admin/students">Student Info</Link></li>
            <li className="hover:text-white"><Link href="/admin/students/attendance">Attendance</Link></li>
            <li className="hover:text-white"><Link href="/admin/students/grades">Grades</Link></li>
            <li className="hover:text-white"><Link href="/admin/students/activities">Activities</Link></li>
          </ul>
        </li>
        {/* Teachers */}
        <li className="relative">
          <div className="flex items-center justify-between cursor-pointer text-gray-300 hover:text-white transition-colors duration-300" onClick={() => toggleExpand('teachers')}>
            <div className="flex items-center space-x-3">
              <FaChalkboardTeacher className="text-2xl" />
              <span className="text-lg font-medium">Teachers</span>
            </div>
            {isExpanded.teachers ? <IoIosArrowDown className="text-gray-300 transition-transform duration-300" /> : <IoIosArrowForward className="text-gray-300 transition-transform duration-300" />}
          </div>
          <ul className={`ml-6 mt-2 space-y-2 text-gray-300 border-l border-gray-600 pl-4 transition-max-height duration-500 ease-in-out ${isExpanded.teachers ? 'max-h-48' : 'max-h-0 overflow-hidden'}`}>
            <li className="hover:text-white"><Link href="/admin/teacher">Teachers Info</Link></li>
            <li className="hover:text-white"><Link href="/admin/teachers/attendance">Attendance</Link></li>
            <li className="hover:text-white"><Link href="/admin/teachers/schedules">Schedules</Link></li>
            <li className="hover:text-white"><Link href="/admin/teachers/performance">Performance</Link></li>
          </ul>
        </li>
        {/* Classes */}
        <li className="relative">
          <div className="flex items-center justify-between cursor-pointer text-gray-300 hover:text-white transition-colors duration-300" onClick={() => toggleExpand('classes')}>
            <div className="flex items-center space-x-3">
              <FaSchool className="text-2xl" />
              <span className="text-lg font-medium">Classes</span>
            </div>
            {isExpanded.classes ? <IoIosArrowDown className="text-gray-300 transition-transform duration-300" /> : <IoIosArrowForward className="text-gray-300 transition-transform duration-300" />}
          </div>
          <ul className={`ml-6 mt-2 space-y-2 text-gray-300 border-l border-gray-600 pl-4 transition-max-height duration-500 ease-in-out ${isExpanded.classes ? 'max-h-32' : 'max-h-0 overflow-hidden'}`}>
            <li className="hover:text-white"><Link href="/admin/classes/info">Class Info</Link></li>
            <li className="hover:text-white"><Link href="/admin/classes/timetable">Timetable</Link></li>
            <li className="hover:text-white"><Link href="/admin/classes/assignments">Assignments</Link></li>
            <li className="hover:text-white"><Link href="/admin/classes/resources">Resources</Link></li>
          </ul>
        </li>
        {/* Parents */}
        <li className="relative">
          <div className="flex items-center justify-between cursor-pointer text-gray-300 hover:text-white transition-colors duration-300" onClick={() => toggleExpand('parents')}>
            <div className="flex items-center space-x-3">
              <FaUsers className="text-2xl" />
              <span className="text-lg font-medium">Parents</span>
            </div>
            {isExpanded.parents ? <IoIosArrowDown className="text-gray-300 transition-transform duration-300" /> : <IoIosArrowForward className="text-gray-300 transition-transform duration-300" />}
          </div>
          <ul className={`ml-6 mt-2 space-y-2 text-gray-300 border-l border-gray-600 pl-4 transition-max-height duration-500 ease-in-out ${isExpanded.parents ? 'max-h-32' : 'max-h-0 overflow-hidden'}`}>
            <li className="hover:text-white"><Link href="/admin/parents/info">Parent Info</Link></li>
            <li className="hover:text-white"><Link href="/admin/parents/meetings">Meetings</Link></li>
            <li className="hover:text-white"><Link href="/admin/parents/messages">Messages</Link></li>
          </ul>
        </li>
        {/* Administration */}
        <li className="relative">
          <div className="flex items-center justify-between cursor-pointer text-gray-300 hover:text-white transition-colors duration-300" onClick={() => toggleExpand('administration')}>
            <div className="flex items-center space-x-3">
              <FaFileAlt className="text-2xl" />
              <span className="text-lg font-medium">Administration</span>
            </div>
            {isExpanded.administration ? <IoIosArrowDown className="text-gray-300 transition-transform duration-300" /> : <IoIosArrowForward className="text-gray-300 transition-transform duration-300" />}
          </div>
          <ul className={`ml-6 mt-2 space-y-2 text-gray-300 border-l border-gray-600 pl-4 transition-max-height duration-500 ease-in-out ${isExpanded.administration ? 'max-h-48' : 'max-h-0 overflow-hidden'}`}>
            <li className="hover:text-white"><Link href="/admin/administration/school-info">School Info</Link></li>
            <li className="hover:text-white"><Link href="/admin/administration/staff-management">Staff Management</Link></li>
            <li className="hover:text-white"><Link href="/admin/administration/finances">Finances</Link></li>
            <li className="hover:text-white"><Link href="/admin/administration/reports">Reports</Link></li>
          </ul>
        </li>
        {/* Settings */}
        <li className="relative">
          <div className="flex items-center justify-between cursor-pointer text-gray-300 hover:text-white transition-colors duration-300" onClick={() => toggleExpand('settings')}>
            <div className="flex items-center space-x-3">
              <FaCog className="text-2xl" />
              <span className="text-lg font-medium">Settings</span>
            </div>
            {isExpanded.settings ? <IoIosArrowDown className="text-gray-300 transition-transform duration-300" /> : <IoIosArrowForward className="text-gray-300 transition-transform duration-300" />}
          </div>
          <ul className={`ml-6 mt-2 space-y-2 text-gray-300 border-l border-gray-600 pl-4 transition-max-height duration-500 ease-in-out ${isExpanded.settings ? 'max-h-32' : 'max-h-0 overflow-hidden'}`}>
            <li className="hover:text-white"><Link href="/admin/settings/profile">Profile</Link></li>
            <li className="hover:text-white"><Link href="/admin/settings/account-settings">Account Settings</Link></li>
            <li className="hover:text-white"><Link href="/admin/settings/privacy">Privacy</Link></li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
