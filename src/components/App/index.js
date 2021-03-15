// == Import npm
import React, { useEffect, useState } from 'react';

// == Import
import './styles.scss';
import axiosInstance from 'src/api';

// == Composant
const App = () => {
  const [employeesData, setEmployeesData] = useState([]);
  const [page, setPage] = useState(1);

  const fetchEmployeesDataFromAPI = async () => {
    const response = await axiosInstance.get('/');
    setEmployeesData(response.data);
  };

  const fetchMoreEmployeesOnClick = () => {
    // fetch a new array of employees from API
    fetchEmployeesDataFromAPI();
    // update the pagination
    setPage(page + 1);
  };

  useEffect(() => {
    fetchEmployeesDataFromAPI();
  }, []);

  return (
    <div className="app">
      <h1 className="app__title">My Employees</h1>
      <div className="employees">
        {employeesData.map((employee) => (
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
      <button type="button" className="more-employees" onClick={fetchMoreEmployeesOnClick}>Afficher plus d'employés</button>
      <p className="pagination">Page {page}</p>
    </div>
  );
};

// == Export
export default App;
