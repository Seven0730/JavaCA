// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { Modal } from "reactstrap";
// import { SaveAndCancelButton } from "../SaveAndCancelButton";

// export const StudentController = () => {
//   const [students, setStudents] = useState([]);
//   const [student, setStudent] = useState({});
//   const [isLoading, setIsLoading] = useState(true);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [showMessage, setShowMessage] = useState("");
//   //mark
//   const [errorMessage, setErrorMessage] = useState("");
//   //mark
//   useEffect(() => {
//     fetchStudents();

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
//     setStudent(initialFormState);
//     setIsModalOpen(false);
//   };
//   const clearModel = () => {
//     setStudent(initialFormState);
//   };

//   // const initialFormState = {
//   //   surname: "",
//   //   surnameError: "",
//   //   firstName: "",
//   //   firstnameError: "",
//   //   secondName: "",
//   //   age: "",
//   //   ageError: "",
//   //   nationality: "",
//   //   email: "",
//   //   emailError: "",
//   //   gpa: "",
//   //   studentID: "",
//   //   originCountry: "",
//   // };
//   const initialFormState = {
//     id: "",
//     name: "",
//     email: "",
//     studentId: "",
//     college_name: "",
//     password: "",
//     role: { id: "" },
//     collage: {
//       id: "",
//     },
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (
//       !student.surname ||
//       student.surname.trim() === "" ||
//       !student.firstName ||
//       student.firstName.trim() === ""
//     ) {
//       setShowMessage("Sorry, last name and first name cannot be empty!");
//       return;
//     }
//     if (!student.email || student.email.trim() === "") {
//       setShowMessage("Sorry, please enter your email!");
//     }
//     if (student.studentID) {
//       updateStudent(student);
//     } else {
//       addStudent(student);
//     }
//     setStudent(initialFormState); // Reset the input fields
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

//     const updatedStudent = {
//       ...student,
//       [name]: value,
//       ageError: name === "age" ? error : student.ageError,
//       surnameError: name === "surname" ? error : student.surnameError,
//       firstnameError: name === "firstName" ? error : student.firstnameError,
//       emailError: name === "email" ? error : student.emailError,
//     };

//     setErrorMessage(error);
//     setStudent(updatedStudent);
//   };

//   const showNotice = (msg) => {
//     setShowMessage(msg);
//     setTimeout(() => {
//       setShowMessage("");
//     }, 3000);
//   };

//   const addStudent = async (newStudent) => {
//     try {
//       const response = await axios.post("/student", newStudent);
//       setStudents([...students, response.data]);
//       setStudent({});
//       showNotice(
//         "Great! You have added this student to the list successfully!"
//       );
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const fetchStudents = async () => {
//     try {
//       const response = await axios.get("/student");
//       setStudents(response.data);
//       setIsLoading(false);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const updateStudent = async (updatedStudent) => {
//     try {
//       const response = await axios.put("/student", updatedStudent);
//       setStudents(
//         students.map((student) =>
//           student.studentID === response.data.studentID
//             ? response.data
//             : student
//         )
//       );
//       setStudent({});
//       showNotice("Great! You have updated the list successfully!");
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const deleteStudent = async (id) => {
//     try {
//       await axios.delete(`/student/${id}`);
//       setStudents(students.filter((student) => student.studentID !== id));
//       showNotice("You have deleted this student successfully!");
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const editStudent = (selectedStudent) => {
//     setStudent(selectedStudent);
//     openModal();
//   };

//   return (
//     <div>
//       <h1>Student List</h1>
//       <button
//         type="button"
//         className="btn btn-secondary mb-3"
//         onClick={openModal}
//       >
//         Add Student
//       </button>
//       {showMessage && <p>{showMessage}</p>}

//       <Modal
//         isOpen={isModalOpen}
//         onRequestClose={closeModal}
//         contentLabel="Add Student"
//         className="modal-dialog modal-lg"
//       >
//         <h2>Add Student</h2>
//         {showMessage && <p>{showMessage}</p>}
//         <form onSubmit={handleSubmit}>
//           <div className="form-group mt-2">
//             <label>Last Name:</label>
//             <input
//               type="text"
//               name="surname"
//               value={student.surname}
//               onChange={handleInputChange}
//               className="form-control"
//             />
//             {student.surnameError && (
//               <div className="error-message">{student.surnameError}</div>
//             )}
//           </div>
//           <div className="form-group mt-1">
//             <label>First Name:</label>
//             <input
//               type="text"
//               name="firstName"
//               value={student.firstName}
//               onChange={handleInputChange}
//               className="form-control"
//             />
//             {student.firstnameError && (
//               <div className="error-message">{student.firstnameError}</div>
//             )}
//           </div>
//           <div className="form-group mt-1">
//             <label>Age:</label>
//             <input
//               type="text"
//               name="age"
//               value={student.age}
//               onChange={handleInputChange}
//               className="form-control"
//             />
//             {student.ageError && (
//               <div className="error-message">{student.ageError}</div>
//             )}
//           </div>
//           <div className="form-group mt-1">
//             <label>Nationality:</label>
//             <input
//               type="text"
//               name="nationality"
//               value={student.nationality}
//               onChange={handleInputChange}
//               className="form-control"
//             />
//           </div>
//           <div className="form-group mt-1">
//             <label>Email:</label>
//             <input
//               type="email"
//               name="email"
//               value={student.email}
//               onChange={handleInputChange}
//               className="form-control"
//             />
//             {student.emailError && (
//               <div className="error-message">{student.emailError}</div>
//             )}
//           </div>

//           {/* Save and Cancel buttons */}
//           <SaveAndCancelButton
//             closeModal={closeModal}
//             clearModel={clearModel}
//           />
//         </form>
//       </Modal>

//       {/* Display the table in the modal */}
//       {isLoading ? (
//         <p>Loading...</p>
//       ) : (
//         <table className="table mt-4">
//           <thead>
//             <tr>
//               <th>Surname</th>
//               <th>First Name</th>
//               <th>Age</th>
//               <th>Nationality</th>
//               <th>Email</th>
//               <th>Edit</th>
//               <th>Delete</th>
//             </tr>
//           </thead>
//           <tbody>
//             {students.map((student) => (
//               <tr key={student.studentID}>
//                 <td>{student.surname}</td>
//                 <td>{student.firstName}</td>
//                 <td>{student.age}</td>
//                 <td>{student.nationality}</td>
//                 <td>{student.email}</td>
//                 <td>
//                   <button onClick={() => editStudent(student)}>Edit</button>
//                 </td>
//                 <td>
//                   <button onClick={() => deleteStudent(student.studentID)}>
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

export const StudentController = () => {
  const [students, setStudents] = useState([]);
  const [student, setStudent] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showMessage, setShowMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // useEffect(() => {
  //   fetchStudents();
  // }, []);
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
    collage: {id: ""}
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!student.name || student.name.trim() === "") {
      setShowMessage("Sorry, name cannot be empty!");
      return;
    }
    if (!student.email || student.email.trim() === "") {
      setShowMessage("Sorry, please enter your email!");
    }

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
        error,
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
      newStudent.role = { id: 1 };
      const response = await axios.post("/admin/student", newStudent);
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
      const response = await axios.get("/admin/student");
      setStudents(response.data);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  const updateStudent = async (updatedStudent) => {
    try {
      updatedStudent.role = { id: 1 };
      const response = await axios.put("/admin/student", updatedStudent);
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
      await axios.delete(`/admin/student/${id}`);
      setStudents(students.filter((student) => student.id !== id));
      showNotice("You have deleted this student successfully!");
    } catch (error) {
      console.error(error);
    }
  };

  const editStudent = (selectedStudent) => {
      openModal();
      setStudent(selectedStudent);
  };

  return (
    <div>
      <h1>Student List</h1>
      <button
        type="button"
        className="btn btn-secondary mb-3"
        onClick={openModal}
      >
        Add Student
      </button>
      {showMessage && <p>{showMessage}</p>}

      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Add Student"
        className="modal-dialog modal-lg"
      >
        <h2>Add Student</h2>
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
              type="password"
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
              <th>studentId</th>
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
