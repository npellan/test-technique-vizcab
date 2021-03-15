// == Import npm
import React, { useEffect, useState } from 'react';

// == Import
import './styles.scss';
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
      <h1 className="app__title">My Employees</h1>
      <div className="employees">
        {employees.map((employee) => (
          <div
            className="employee"
            key={employee.id}
          >
            <h2 className="employee__name">{employee.name}</h2>
            <p className="employee__job">{employee.job_title}</p>
            <p className="employee__department">in {employee.department} department</p>
            <p className="employee__company">@ {employee.company_name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

// == Export
export default App;
