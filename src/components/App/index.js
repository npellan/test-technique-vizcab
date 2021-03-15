// == Import npm
import React, { useEffect, useState } from 'react';

// == Import
import './styles.css';
import axiosInstance from 'src/api';

// == Composant
const App = () => {
  const [employees, setEmployees] = useState([]);

  const fetchEmployeesData = async () => {
    const response = await axiosInstance.get('/');
    setEmployees(response.data);
  };

  useEffect(() => {
    fetchEmployeesData();
  }, []);

  return (
    <div className="app">
      {employees.map((employee) => (
        <p
          key={employee.id}
        >
          {employee.name}
        </p>
      ))}
    </div>
  );
};

// == Export
export default App;
