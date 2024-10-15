import { useState } from "react";

const AddDepartment = ({postDepartmentData}) => {

  const [departmentDetails,setAllDepartmentDetails]=useState({
    name:'',
    description:""
  })

  const handleDepartmentDetails=(e)=>{
    setAllDepartmentDetails({...departmentDetails,[e.target.name]:e.target.value})
  }
  const handleOnclick=()=>{    
    postDepartmentData(departmentDetails)
    setAllDepartmentDetails({name:"",description:""})
  }
  return (
    <>
      <div className="w-1/3 h-full mr-10 border border-black p-10">
        <div className="flex flex-col w-full ">
          <label htmlFor="">Name</label>
          <input type="text" className="rounded-sm py-1" name="name" onChange={handleDepartmentDetails} value={departmentDetails?.name} />
          <label htmlFor="">Description</label>
          <input type="text" className="rounded-sm py-1"  name="description" onChange={handleDepartmentDetails} value={departmentDetails?.description} />
        </div>
        <div className=" flex justify-end mt-5 text-white" >
          <button className="bg-blue-500 px-2 py-1 rounded-sm" onClick={handleOnclick}
          >Add Department</button>
        </div>
      </div>
    </>
  );
};

export default AddDepartment;
