import { useState } from "react";
const AddEmployee = ({postData,allDepartments}) => {

  const [employeeDetails, setEmployeeDetails] = useState({
    name: "",
    address: "",
  });
  const [selectedValue, setSelectedValue] = useState("");

  const handleEmployeeDetails = (e) => {
    setEmployeeDetails({ ...employeeDetails, [e.target.name]: e.target.value });
  };


  const handleChange = (e) => {
    setSelectedValue(e.target.value);
  };

  
  const handleAddEmployee = () => {
    if(!employeeDetails.name&&!employeeDetails.address&&!selectedValue) alert("please enter nessory details")
    else if (!selectedValue) alert("please select the department");
    else if (!employeeDetails.name) alert("please enter your name");
    else if (!employeeDetails.address) alert("please enter your address");
    else{
      const updatedDetails = { ...employeeDetails, department: selectedValue };
      setEmployeeDetails(updatedDetails); 
      postData(updatedDetails);
      setEmployeeDetails({name:"",address:""})
    }


  };
  return (
    <>
      <div className="w-1/2 h-full border border-black p-8">
        <div className="flex flex-col w-full">
          <label htmlFor="">Name</label>
          <input
            type="text"
            name="name"
            onChange={handleEmployeeDetails}
            value={employeeDetails?.name}
            defaultValue={"select"}
            className="rounded-sm py-1"
          />
          <label htmlFor="">Department</label>
          <select name="" value={selectedValue} onChange={handleChange}>
            <option value="" disabled>
              Select a department
            </option>
            {allDepartments.map((val) => (
              <option key={val?._id} value={val?._id}>
                {val?.name}
              </option>
            ))}
          </select>

          <label htmlFor="">Address</label>
          <input
            type="text"
            name="address"
            onChange={handleEmployeeDetails}
            value={employeeDetails?.address}
            className="rounded-sm py-1"
          />
        </div>
        <div className=" flex justify-end mt-3 text-white ">
          <button
            className="bg-blue-500 px-2 py-1 rounded-sm"
            onClick={handleAddEmployee}
          >
            Add Employee
          </button>
        </div>
      </div>
    </>
  );
};

export default AddEmployee;
