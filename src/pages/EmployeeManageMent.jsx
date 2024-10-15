import { useEffect, useState } from "react";
import AddDepartment from "../components/AddDepartment";
import AddEmployee from "../components/AddEmployee";
import EmployeesTable from "../components/EmployeesTable";
import { BASE_URL } from "../utils/const";
import axios from "axios";

const EmployeeManagement = () => {
  const [allEmployeeDetails, setAllEmployeeDetails] = useState([]);
  const [allDepartments, setAllDepartments] = useState([]);

  //Fetch all employee detaila along with department
  const fetchEmployeeDetails = async () => {
    const response = await axios.get(`${BASE_URL}employee`);
    setAllEmployeeDetails(response?.data);
  };
  // Get all departments
  const fetchAllDepartments = async () => {
    const response = await axios.get(`${BASE_URL}department`);
    setAllDepartments(response.data);
  };

  //add new employee
  const postEmployeeData = async (data) => {
    const response = await axios.post(`${BASE_URL}employee`, data);
    // setAllEmployeeDetails([...allEmployeeDetails, response?.data]);
    fetchEmployeeDetails()
  };

  const postDepartmentData = async (data) => {
    const response = await axios.post(`${BASE_URL}department`, data);
    // setAllDepartments([...allEmployeeDetails, response?.data]);
    fetchAllDepartments();
  };

  useEffect(() => {
    fetchEmployeeDetails();
    fetchAllDepartments();
  }, []);

  return (
    <>
      <div className="bg-red-300 h-screen p-10 flex flex-col gap-10">
        <div className="flex flex-row w-full h-1/2">
          <AddDepartment postDepartmentData={postDepartmentData} />
          <AddEmployee
            postData={postEmployeeData}
            allDepartments={allDepartments}
          />
        </div>

        <div className="h-1/2 border border-black w-5/6">
          <EmployeesTable allEmployeeDetails={allEmployeeDetails} />
        </div>
      </div>
    </>
  );
};

export default EmployeeManagement;
