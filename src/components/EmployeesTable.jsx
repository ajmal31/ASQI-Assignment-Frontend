import { useEffect, useState } from "react";

const EmployeesTable = ({ allEmployeeDetails }) => {
  const [copyAllEmployeeDetails, setCopyAllEmployeeDetails] = useState([]);

  const [searchText, setSearchText] = useState("");

  const handleSearch = (e) => {
    setSearchText(e.target.value);

    if (e.target.value.length === 0) {
      setCopyAllEmployeeDetails([...allEmployeeDetails]);
    } else {
      const filteredData = allEmployeeDetails.filter((val) => {
        if (
          val.name.toLowerCase().includes(searchText.toLowerCase()) ||
          val.department.name.toLowerCase().includes(searchText.toLowerCase())
        ) {
          return val;
        }
      });
      setCopyAllEmployeeDetails(filteredData);
    }
  };

  useEffect(() => {
    if (allEmployeeDetails.length > 0)
      setCopyAllEmployeeDetails(allEmployeeDetails);
  }, [allEmployeeDetails]);

  if (allEmployeeDetails.length === 0) return <h1>Loading</h1>;

  console.log("listeing data", copyAllEmployeeDetails);
  return (
    <>
      <div className="m-5 flex gap-2">
        <input type="text" onChange={handleSearch} value={searchText} />
        <button
          className="border px-2 rounded-sm bg-blue-500 text-white"
          onClick={handleSearch}
        >
          search
        </button>
      </div>
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
          {copyAllEmployeeDetails.map((val) => (
            <tr key={val?._id}>
              <td className="border border-black">{val?.name}</td>
              <td className="border border-black">{val?.address}</td>
              <td className="border border-black">{val?.department?.name}</td>
              <td className="border border-black">
                {val?.department?.description}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default EmployeesTable;
