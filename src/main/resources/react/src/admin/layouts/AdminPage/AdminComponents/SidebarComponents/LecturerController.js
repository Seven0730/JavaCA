// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { Modal } from "reactstrap";
// import { SaveAndCancelButton } from "../SaveAndCancelButton";

// export const LecturerController = () => {
//   const initialFormState = {
//     surname: "",
//     surnameError: "",
//     firstName: "",
//     firstnameError: "",
//     secondName: "",
//     age: "",
//     ageError: "",
//     nationality: "",
//     email: "",
//     emailError: "",
//     gpa: "",
//     lecturerId: "",
//     originCountry: "",
//   };
//   const [lecturers, setLecturers] = useState([]);
//   const [lecturer, setLecturer] = useState({});
//   const [isLoading, setIsLoading] = useState(true);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [showMessage, setShowMessage] = useState("");
//   const [errorMessage, setErrorMessage] = useState("");

//   useEffect(() => {
//     fetchLecturers();

//     if (errorMessage || showMessage) {
//       const timeout = setTimeout(() => {
//         setErrorMessage("");
//         setShowMessage("");
//       }, 3000);
//       return () => {
//         clearTimeout(timeout);
//       };
//     }
//   }, [errorMessage, showMessage]);

//   const openModal = () => {
//     setIsModalOpen(true);
//   };
//   const closeModal = () => {
//     setLecturer(initialFormState);
//     setIsModalOpen(false);
//   };
//   const clearModel = () => {
//     setLecturer(initialFormState);
//   };

//   const fetchLecturers = async () => {
//     try {
//       const response = await axios.get("/lecturer");
//       setLecturers(response.data);
//       setIsLoading(false);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const addLecturer = async (newLecturer) => {
//     try {
//       const response = await axios.post("/lecturer", newLecturer);
//       setLecturers([...lecturers, response.data]);
//       setLecturer({});
//       showNotice(
//         "Great! You have added this lecturer to the list successfully!"
//       );
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const deleteLecturer = async (id) => {
//     try {
//       await axios.delete(`/lecturer/${id}`);
//       setLecturers(lecturers.filter((lecturer) => lecturer.lecturerId !== id));
//       showNotice("You have deleted this lecturer successfully!");
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const updateLecturer = async (updatedLecturer) => {
//     try {
//       const response = await axios.put("/lecturer", updatedLecturer);
//       setLecturers(
//         lecturers.map((lecturer) =>
//           lecturer.lecturerId === response.data.lecturerId
//             ? response.data
//             : lecturer
//         )
//       );
//       setLecturer({});
//       showNotice("Great! You have updated the list successfully!");
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     let error = "";

//     if (name === "age") {
//       const parsedValue = parseInt(value, 10);

//       if (Number.isNaN(parsedValue) || parsedValue.toString() !== value) {
//         error = "Age must be an integer!";
//       }
//       if (value < 0 || value > 120) {
//         error = "Invalid Range of Age Input! ";
//       }
//     }
//     if (name === "surname") {
//       if (value.length > 0 && !/^[a-zA-Z]+$/.test(value)) {
//         error = "Please note that only characters are allowed for last name!";
//       }
//     }
//     if (name === "firstName") {
//       if (!/^[a-zA-Z]+$/.test(value)) {
//         error = "Please note that only characters are allowed for first name!";
//       }
//     }
//     if (name === "email") {
//       let trimValue = value.trim();
//       if (!trimValue.endsWith(".edu")) {
//         error = "Please input a valid academic email!";
//       }
//     }

//     const updatedLecturer = {
//       ...lecturer,
//       [name]: value,
//       ageError: name === "age" ? error : lecturer.ageError,
//       surnameError: name === "surname" ? error : lecturer.surnameError,
//       firstnameError: name === "firstName" ? error : lecturer.firstnameError,
//       emailError: name === "email" ? error : lecturer.emailError,
//     };

//     setErrorMessage(error);
//     setLecturer(updatedLecturer);
//   };

//   const showNotice = (msg) => {
//     setShowMessage(msg);
//     setTimeout(() => {
//       setShowMessage("");
//     }, 3000);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (lecturer.lecturerId) {
//       updateLecturer(lecturer);
//     } else {
//       addLecturer(lecturer);
//     }
//   };

//   const editLecturer = (selectedLecturer) => {
//     setLecturer(selectedLecturer);
//     openModal();
//   };

//   return (
//     <div>
//       <h1>Lecturer List</h1>
//       <button
//         type="button"
//         className="btn btn-secondary mb-3"
//         onClick={openModal}
//       >
//         Add Lecturer
//       </button>
//       {showMessage && <p>{showMessage}</p>}

//       <Modal
//         isOpen={isModalOpen}
//         onRequestClose={closeModal}
//         contentLabel="Add Lecturer"
//         className="modal-dialog modal-lg"
//       >
//         <h2>Add Lecturer</h2>
//         {showMessage && <p>{showMessage}</p>}
//         <form onSubmit={handleSubmit}>
//           <div className="form-group mt-2">
//             <label>Last Name:</label>
//             <input
//               type="text"
//               name="surname"
//               value={lecturer.surname || ""}
//               onChange={handleInputChange}
//               className="form-control"
//             />
//             {lecturer.surnameError && (
//               <div className="error-message">{lecturer.surnameError}</div>
//             )}
//           </div>
//           <div className="form-group mt-1">
//             <label>First Name:</label>
//             <input
//               type="text"
//               name="firstName"
//               value={lecturer.firstName || ""}
//               onChange={handleInputChange}
//               className="form-control"
//             />
//             {lecturer.firstnameError && (
//               <div className="error-message">{lecturer.firstnameError}</div>
//             )}
//           </div>
//           <div className="form-group mt-2">
//             <label>Second Name:</label>
//             <input
//               type="text"
//               name="secondName"
//               value={lecturer.secondName || ""}
//               onChange={handleInputChange}
//               className="form-control"
//             />
//           </div>
//           <div className="form-group mt-1">
//             <label>Age:</label>
//             <input
//               type="text"
//               name="age"
//               value={lecturer.age}
//               onChange={handleInputChange}
//               className="form-control"
//             />
//             {lecturer.ageError && (
//               <div className="error-message">{lecturer.ageError}</div>
//             )}
//           </div>
//           <div className="form-group mt-2">
//             <label>Nationality:</label>
//             <input
//               type="text"
//               name="nationality"
//               value={lecturer.nationality || ""}
//               onChange={handleInputChange}
//               className="form-control"
//             />
//           </div>
//           <div className="form-group mt-2">
//             <label>Email:</label>
//             <input
//               type="text"
//               name="email"
//               value={lecturer.email || ""}
//               onChange={handleInputChange}
//               className="form-control"
//             />
//             {lecturer.emailError && (
//               <div className="error-message">{lecturer.emailError}</div>
//             )}
//           </div>
//           <SaveAndCancelButton
//             closeModal={closeModal}
//             clearModel={clearModel}
//           />
//         </form>
//       </Modal>

//       {isLoading ? (
//         <p>Loading...</p>
//       ) : (
//         <table className="table">
//           <thead>
//             <tr>
//               <th>Surname</th>
//               <th>First Name</th>
//               <th>Second Name</th>
//               <th>Age</th>
//               <th>Nationality</th>
//               <th>Email</th>
//               <th>Phone Number</th>
//               <th>Role Designation</th>
//               <th>Edit</th>
//               <th>Delete</th>
//             </tr>
//           </thead>
//           <tbody>
//             {lecturers.map((lecturer) => (
//               <tr key={lecturer.lecturerId}>
//                 <td>{lecturer.surname}</td>
//                 <td>{lecturer.firstName}</td>
//                 <td>{lecturer.secondName}</td>
//                 <td>{lecturer.age}</td>
//                 <td>{lecturer.nationality}</td>
//                 <td>{lecturer.email}</td>
//                 <td>{lecturer.phonenumber}</td>
//                 <td>{lecturer.role_designation}</td>
//                 <td>
//                   <button onClick={() => editLecturer(lecturer)}>Edit</button>
//                 </td>
//                 <td>
//                   <button onClick={() => deleteLecturer(lecturer.lecturerId)}>
//                     Delete
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}
//     </div>
//   );
// };

import React, { useState, useEffect } from "react";
import axios from "axios";
import { Modal } from "reactstrap";
import { SaveAndCancelButton } from "../SaveAndCancelButton";

export const LecturerController = () => {
  const [students, setStudents] = useState([]);
  const [student, setStudent] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showMessage, setShowMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    fetchStudents();

    if (errorMessage || showMessage) {
      const timeout = setTimeout(() => {
        setErrorMessage("");
        setShowMessage("");
      }, 3000);
      return () => {
        clearTimeout(timeout);
      };
    }
  }, [errorMessage, showMessage]);

  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setStudent(initialFormState);
    setIsModalOpen(false);
  };
  const clearModel = () => {
    setStudent(initialFormState);
  };

  const initialFormState = {
    id: "",
    name: "",
    nameError: "",
    email: "",
    emailError: "",
    studentId: "",
    college_name: "",
    password: "",
    role: { id: "" },
    collage: {
      id: "",
    },
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (student.id) {
      updateStudent(student);
    } else {
      addStudent(student);
    }
    setStudent(initialFormState); // Reset the input fields
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    let error = "";

    if (name === "name") {
      if (value.length > 0 && !/^[a-zA-Z ]+$/.test(value)) {
        error = "Please input a valid name!";
      }
    }

    if (name === "email") {
      let trimValue = value.trim();
      if (!trimValue.endsWith(".edu")) {
        error = "Please input a valid academic email!";
      }
    }

    const updatedStudent = {
      ...student,
      [name]: value,
      nameError: name === "name" ? error : student.nameError,
      emailError: name === "email" ? error : student.emailError,
    };

    setErrorMessage(error);
    setStudent(updatedStudent);

    if (name === "collage") {
      setStudent((prevStudent) => ({
        ...prevStudent,
        collage: {
          ...(prevStudent.collage || {}),
          id: value,
        },
      }));
    } else {
      setStudent((prevStudent) => ({
        ...prevStudent,
        [name]: value,
      }));
    }
  };

  const showNotice = (msg) => {
    setShowMessage(msg);
    setTimeout(() => {
      setShowMessage("");
    }, 3000);
  };

  const addStudent = async (newStudent) => {
    try {
      newStudent.role = { id: 2 };
      const response = await axios.post("/admin/lecturer", newStudent);
      setStudents([...students, response.data]);
      setStudent({});
      showNotice(
        "Great! You have added this student to the list successfully!"
      );
    } catch (error) {
      console.error(error);
    }
  };

  const fetchStudents = async () => {
    try {
      const response = await axios.get("/admin/lecturer");
      setStudents(response.data);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  const updateStudent = async (updatedStudent) => {
    try {
      updatedStudent.role = { id: 2 };
      const response = await axios.put("/admin/lecturer", updatedStudent);
      setStudents(
        students.map((student) =>
          student.id === response.data.id ? response.data : student
        )
      );
      setStudent({});
      showNotice("Great! You have updated the list successfully!");
    } catch (error) {
      console.error(error);
    }
  };

  const deleteStudent = async (id) => {
    try {
      await axios.delete(`/admin/lecturer/${id}`);
      setStudents(students.filter((student) => student.id !== id));
      showNotice("You have deleted this student successfully!");
    } catch (error) {
      console.error(error);
    }
  };

  const editStudent = (selectedStudent) => {
    setStudent(selectedStudent);
    openModal();
  };

  return (
    <div>
      <h1>Lecturer List</h1>
      <button
        type="button"
        className="btn btn-secondary mb-3"
        onClick={openModal}
      >
        Add Lecturer
      </button>
      {showMessage && <p>{showMessage}</p>}

      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Add Lecturer"
        className="modal-dialog modal-lg"
      >
        <h2>Add Lecturer</h2>
        {showMessage && <p>{showMessage}</p>}
        <form onSubmit={handleSubmit}>
          <div className="form-group mt-2">
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={student.name}
              onChange={handleInputChange}
              className="form-control"
            />
            {student.nameError && (
              <div className="error-message">{student.nameError}</div>
            )}
          </div>
          <div className="form-group mt-1">
            <label>Password</label>
            <input
              type="text"
              name="password"
              value={student.password}
              onChange={handleInputChange}
              className="form-control"
            />
          </div>
          <div className="form-group mt-1">
            <label>College_Id</label>
            <input
              type="text"
              name="collage"
              value={student.collage?.id || ""}
              onChange={handleInputChange}
              className="form-control"
            />
          </div>
          <div className="form-group mt-1">
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={student.email}
              onChange={handleInputChange}
              className="form-control"
            />
            {student.emailError && (
              <div className="error-message">{student.emailError}</div>
            )}
          </div>

          {/* Save and Cancel buttons */}
          <SaveAndCancelButton
            closeModal={closeModal}
            clearModel={clearModel}
          />
        </form>
      </Modal>

      {/* Display the table in the modal */}
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <table className="table mt-4">
          <thead>
            <tr>
              <th>Name</th>
              <th>LecturerId</th>
              <th>Email</th>
              <th>College</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student.id}>
                <td>{student.name}</td>
                <td>{student.studentId}</td>
                <td>{student.email}</td>
                <td>{student.college_name}</td>
                <td>
                  <button onClick={() => editStudent(student)}>Edit</button>
                </td>
                <td>
                  <button onClick={() => deleteStudent(student.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};
