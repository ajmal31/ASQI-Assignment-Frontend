import axios from "axios";
import { BASE_URL } from "../utils/const";
import { useEffect, useState } from "react";

const EmployeesTable = () => {
  const [employeeDetails, setEmployeeDetails] = useState([]);
  
  const fetchData = async () => {
    const response = await axios.get(`${BASE_URL}employee`);
    setEmployeeDetails(response?.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <table className="table-auto border border-black w-full">
        <thead>
          <tr className="">
            <th className="border border-black">Employee Name</th>
            <th className="border border-black">Address</th>
            <th className="border border-black">Department</th>
            <th className="border border-black">Department Description</th>
          </tr>
        </thead>
        <tbody>
          {employeeDetails.map((val) => (
            <tr>
              <td className="border border-black">{val?.name}</td>
              <td className="border border-black">{val?.address}</td>
              <td className="border border-black">{val?.department?.name}</td>
              <td className="border border-black">{val?.department?.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default EmployeesTable;
