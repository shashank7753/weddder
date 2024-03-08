// import React, { useState } from 'react';
// import styles from "./User/u";

// const UserComponent = () => {
//   // Define state variables to store user data
//   const [userData, setUserData] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     age: 0,
//   });

//   // Function to handle changes in input fields
//   const handleInputChange = (event) => {
//     const { name, value } = event.target;
//     setUserData({
//       ...userData,
//       [name]: value,
//     });
//   };

//   return (
//     <div>
//       <h2>User Profile</h2>
//       <form>
//         <div>
//           <label htmlFor="firstName">First Name:</label>
//           <input
//             type="text"
//             id="firstName"
//             name="firstName"
//             value={userData.firstName}
//             onChange={handleInputChange}
//           />
//         </div>
//         <div>
//           <label htmlFor="lastName">Last Name:</label>
//           <input
//             type="text"
//             id="lastName"
//             name="lastName"
//             value={userData.lastName}
//             onChange={handleInputChange}
//           />
//         </div>
//         <div>
//           <label htmlFor="email">Email:</label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             value={userData.email}
//             onChange={handleInputChange}
//           />
//         </div>
//         <div>
//           <label htmlFor="age">Age:</label>
//           <input
//             type="number"
//             id="age"
//             name="age"
//             value={userData.age}
//             onChange={handleInputChange}
//           />
//         </div>
//       </form>
//       <div>
//         <h3>User Data:</h3>
//         <p>First Name: {userData.firstName}</p>
//         <p>Last Name: {userData.lastName}</p>
//         <p>Email: {userData.email}</p>
//         <p>Age: {userData.age}</p>
//       </div>
//     </div>
//   );
// };

// export default UserComponent;


import React, { useState } from 'react';
import './user.styles.scss'; // Import SCSS file

const UserComponent = () => {
  // Define state variables to store user data
  const [userData, setUserData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    age: 0,
  });

  // Function to handle changes in input fields
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  return (
    <div className="user-profile">
      <h2>User Profile</h2>
      <form>
        <div>
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={userData.firstName}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={userData.lastName}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={userData.email}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="age">Age:</label>
          <input
            type="number"
            id="age"
            name="age"
            value={userData.age}
            onChange={handleInputChange}
          />
        </div>
      </form>
      <div className="user-data">
        <h3>User Data:</h3>
        <p>First Name: {userData.firstName}</p>
        <p>Last Name: {userData.lastName}</p>
        <p>Email: {userData.email}</p>
        <p>Age: {userData.age}</p>
      </div>
    </div>
  );
};

export default UserComponent;
