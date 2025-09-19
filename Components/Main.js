import React from "react";
import { MapPin, Search } from "lucide-react";

const issues = [
  {
    id: 1,
    issue: "Tree fall on road near..",
    urgency: "High",
    date: "10-09-2025",
    time: "10:41 AM",
    status: "OPEN",
  },
  {
    id: 2,
    issue: "Pothole on road infra..",
    urgency: "Medium",
    date: "10-09-2025",
    time: "10:21 AM",
    status: "OPEN",
  },
  {
    id: 3,
    issue: "Large Pothole near m..",
    urgency: "Medium",
    date: "10-09-2025",
    time: "09:45 AM",
    status: "OPEN",
  },
  {
    id: 4,
    issue: "Pothole near my hou..",
    urgency: "Medium",
    date: "10-09-2025",
    time: "08:41 AM",
    status: "RESOLVED",
  },
  {
    id: 5,
    issue: "Water pipeline leakag..",
    urgency: "Medium",
    date: "10-09-2025",
    time: "08:40 AM",
    status: "RESOLVED",
  },
];

const Main = () => {
  return (
    <div className="mt-10">
      <div className="text-2xl px-1 font-extrabold text-[#2B2A60] ">
        Public Work Department
      </div>
      <div className="flex gap-2 mt-7">
        {/* <img src='C:\krish\sih\medimitra\public\fluent_filter-20-filled.svg'/> */}
        <div className="p-[2px] rounded-full bg-gradient-to-r from-[#5555C2] to-[#B66AE7] ">
          <input
            className="focus:outline-none w-full rounded-full px-3 placeholder-[#5555C2] py-1 bg-white text-black focus:outline-none"
            type="dropdown"
            placeholder="Today"
          />
        </div>
        <div className="p-[2px] rounded-full bg-gradient-to-r from-[#5555C2] to-[#B66AE7] ">
          <input
            className="w-full rounded-full px-3 placeholder-[#5555C2] py-1 bg-white text-black focus:outline-none"
            type="dropdown"
            placeholder="All"
          />
        </div>
        <div className="p-[2px] rounded-full bg-gradient-to-r from-[#5555C2] to-[#B66AE7] ">
          <input
            className="  w-full placeholder-[#5555C2] rounded-full px-3 py-1 bg-white text-black focus:outline-none"
            type="dropdown"
            placeholder="More Filter"
          />
        </div>
      </div>
      <div className="p-0 overflow-clip border rounded-xl shadow-md bg-white mt-10">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-100 text-gray-700">
              <th className="p-3">Issue</th>
              <th className="p-3">Urgency</th>
              <th className="p-3">Date</th>
              <th className="p-3">Time</th>
              <th className="p-3">Status</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {issues.map((i) => (
              <tr
                key={i.id}
                className={`${
                  i.status === "OPEN" ? "bg-red-50" : "bg-green-50"
                } border-b`}
              >
                <td className="p-3">{i.issue}</td>
                <td className="p-3 text-sm font-semibold">{i.urgency}</td>
                <td className="p-3">{i.date}</td>
                <td className="p-3">{i.time}</td>
                <td
                  className={`p-3 font-bold ${
                    i.status === "OPEN" ? "text-red-600" : "text-green-600"
                  }`}
                >
                  {i.status}
                </td>
                <td className="p-3 flex space-x-3">
                  <button className="text-pink-500 hover:text-pink-700">
                    <MapPin size={18} />
                  </button>
                  <button className="text-green-500 hover:text-green-700">
                    <Search size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Main;
