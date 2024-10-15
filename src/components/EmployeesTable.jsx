const EmployeesTable = () => {
  return (
    <>
    <table className="table-auto border border-black w-full">
      <thead>
        <tr className="">
          <th className="border border-black" >Employee Name</th>
          <th  className="border border-black">Address</th>
          <th  className="border border-black">Department</th>
          <th  className="border border-black" >Department Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td  className="border border-black" >Muhamed Ajmal</td>
          <td  className="border border-black">Mannarkkad, Kerala</td>
          <td  className="border border-black">Police</td>
          <td  className="border border-black">Police department</td>
        </tr>
      </tbody>
    </table>
  </>
  
  );
};

export default EmployeesTable
