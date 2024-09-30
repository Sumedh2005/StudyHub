import React, { useState } from 'react';
import Modal from './Modal';

function Academics() {
  const subjects = [
    { name: 'Mathematics', percentage: '85%', margin: 'margin-4' },
    { name: 'Physics', percentage: '90%', margin: 'margin-3' },
    { name: 'Chemistry', percentage: '88%', margin: 'margin-2' },
    { name: 'Biology', percentage: '92%', margin: 'margin-5' },
    { name: 'History', percentage: '80%', margin: 'margin-4' },
    { name: 'Geography', percentage: '87%', margin: 'margin-3' },
  ];

  const subjectsmrks = [
    { name: 'Mathematics', marks: '52/60' },
    { name: 'Physics', marks: '58/60' },
    { name: 'Chemistry', marks: '49/60' },
    { name: 'Biology', marks: '54/60' },
    { name: 'History', marks: '50/60' },
    { name: 'Geography', marks: '47/60' },
  ];

  const [openModal, setOpenModal] = useState(null); // Track which modal is open

  const handleOpen = (modalNumber) => {
    setOpenModal(modalNumber);
  };

  const handleClose = () => {
    setOpenModal(null);
  };

  return (
    <>
      <div className="main flex flex-row h-screen">
        <div className="lft h-screen w-3/5 grid grid-cols-2 gap-2 grid-rows-2 p-20">
          <div className="bg-yellow-800 p-4 rounded-lg text-4xl text-white font-bold h-60 w-60 flex justify-center items-center" onClick={() => handleOpen(1)}>
            Attendance
          </div>
          <div className="bg-yellow-800 p-4 text-4xl text-white font-bold rounded-lg h-60 w-60 flex justify-center items-center" onClick={() => handleOpen(2)}>
            Marks
          </div>
          <div className="bg-yellow-800 p-4 text-4xl text-white font-bold rounded-lg h-60 w-60 flex justify-center items-center" onClick={() => handleOpen(3)}>
            Time-Table
          </div>
          <div className="bg-yellow-800 p-4 text-4xl text-white font-bold rounded-lg h-60 w-60 flex justify-center items-center" onClick={() => handleOpen(4)}>
            Calendar
          </div>
        </div>

        <div className="yes border-1 border-yellow-800 h-[70vh] mt-20 text-yellow-900 p-4 rounded-xl shadow-lg max-w-sm">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">Sumedh Shrikant Sawant</h1>
          <p className="text-sm text-yellow-950">RA2311026010691</p>
        </div>
       
      </div>
      <div className="mt-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="font-bold">Year:</p>
            <p>2</p>
          </div>
          <div>
            <p className="font-bold">Semester:</p>
            <p>3</p>
          </div>
          <div>
            <p className="font-bold">Classroom:</p>
            <p>919</p>
          </div>
          <div>
            <p className="font-bold">Section:</p>
            <p>AB2</p>
          </div>
          <div>
            <p className="font-bold">Combo:</p>
            <p>2</p>
          </div>
          <div>
            <p className="font-bold">Batch:</p>
            <p>2</p>
          </div>
          <div>
            <p className="font-bold">Program:</p>
            <p>B.Tech</p>
          </div>
          <div className="col-span-2">
            <p className="font-bold">Department:</p>
            <p>Computer Science and Engineering (AIML)</p>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <button className="w-full bg-yellow-800  text-yellow-100 py-2 rounded-lg font-bold">Logout</button>
      </div>
    </div>

        {/* Attendance Modal */}
        <Modal open={openModal === 1} handleClose={handleClose}>
          <div className="bg-yellow-200 rounded-xl px-10 py-3">
            <h2 className="text-3xl font-bold text-center mb-5">Attendance</h2>
            <div className="h-64 overflow-y-scroll">
              {subjects.map((subject, index) => (
                <div key={index} className="flex justify-between items-center rounded-xl bg-yellow-900 text-white py-2 px-6 mb-4">
                  <div className="flex flex-col">
                    <p className="text-xl font-medium">{subject.name}</p>
                    <p className="text-sm">{subject.margin}</p>
                  </div>
                  <p className="text-xl font-bold">{subject.percentage}</p>
                </div>
              ))}
            </div>
          </div>
        </Modal>

        {/* Marks Modal */}
        <Modal open={openModal === 2} handleClose={handleClose}>
          <div className="bg-yellow-200 rounded-xl px-10 py-3">
            <h2 className="text-3xl font-bold text-center mb-5">Marks</h2>
            <div className="h-64 overflow-y-scroll">
              {subjectsmrks.map((subject, index) => (
                <div key={index} className="flex justify-between items-center rounded-xl bg-yellow-900 text-white py-2 px-6 mb-4">
                  <div className="flex flex-col">
                    <p className="text-xl font-medium">{subject.name}</p>
                  </div>
                  <p className="text-xl font-bold">{subject.marks}</p>
                </div>
              ))}
            </div>
          </div>
        </Modal>

        {/* Time-Table Modal */}
        <Modal open={openModal === 3} handleClose={handleClose}>
        <div className="bg-yellow-200 rounded-xl px-10 py-3">
  <h2 className="text-3xl font-bold text-center mb-5">Time-Table</h2>
  <div className="h-64 overflow-y-auto"> {/* Changed to overflow-y-auto for smoother scrolling */}
    <table className="min-w-full">
      <thead>
        <tr className="bg-yellow-900 text-white">
          <th className="px-4 py-2">Time</th>
          <th className="px-4 py-2">Monday</th>
          <th className="px-4 py-2">Tuesday</th>
          <th className="px-4 py-2">Wednesday</th>
          <th className="px-4 py-2">Thursday</th>
          <th className="px-4 py-2">Friday</th>
        </tr>
      </thead>
      <tbody>
        {[
          ['09:00 - 10:00', 'Maths', 'CSE', 'OS', 'COA', 'DTM'],
          ['10:00 - 11:00', 'Chem', 'PPS', 'BEEE', 'Maths', 'English'],
          ['11:00 - 11:30', 'BREAK', 'BREAK', 'BREAK', 'BREAK', 'BREAK'],
          ['11:30 - 12:30', 'Science', 'Italian', 'Maths', 'Science', 'History'],
          ['12:30 - 13:30', 'Italian', 'English', 'Science', 'English', 'ICT'],
          ['13:00 - 14:00', 'LUNCH', 'LUNCH', 'LUNCH', 'LUNCH', 'LUNCH'],
          ['15:00 - 16:00', 'Music', 'Geography', 'ICT', 'Art', 'PE'],
          ['16:00 - 17:00', 'Guitar', 'Basketball', 'Guitar', 'Basketball', 'Basketball'],
        ].map((row, index) => (
          <tr key={index} className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}>
            {row.map((cell, i) => (
              <td key={i} className={`border px-4 py-2 text-center bg-yellow-200`}>
                {cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>

        </Modal>

        {/* Calendar Modal */}
        <Modal open={openModal === 4} handleClose={handleClose}>
        <div className="bg-yellow-200 rounded-xl px-10 py-3 max-w-full">
  <h2 className="text-3xl font-bold text-center mb-5">Calendar</h2>
  <div className="overflow-auto max-h-80"> {/* Add a max height for scrolling if needed */}
    <table className="min-w-full border-collapse">
      <thead>
        <tr>
          <th className="border px-4 py-2 bg-green-500">Sun</th> {/* Change background color */}
          <th className="border px-4 py-2">Mon</th>
          <th className="border px-4 py-2">Tue</th>
          <th className="border px-4 py-2">Wed</th>
          <th className="border px-4 py-2">Thu</th>
          <th className="border px-4 py-2">Fri</th>
          <th className="border px-4 py-2 bg-green-500">Sat</th> {/* Change background color */}
        </tr>
      </thead>
      <tbody>
        {[
          [' ', ' ', ' ', ' ', '1', '2', '3'],
          ['4', '5', '6', '7', '8', '9', '10'],
          ['11', '12', '13', '14', '15', '16', '17'],
          ['18', '19', '20', '21', '22', '23', '24'],
          ['25', '26', '27', '28', '29', '30', '31'],
        ].map((row, index) => (
          <tr key={index} className="text-center">
            {row.map((cell, i) => (
              <td key={i} className={`border px-4 py-2 `}>
                {cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>


        </Modal>
      </div>
    </>
  );
}

export default Academics;
