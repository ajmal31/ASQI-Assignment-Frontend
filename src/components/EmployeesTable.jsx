const EmployeesTable = ({allEmployeeDetails}) => {

  if(allEmployeeDetails.length===0)return <h1>Loading</h1>
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
          {allEmployeeDetails.map((val) => (
            <tr key={val?._id} >
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
