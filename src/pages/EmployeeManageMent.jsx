import AddDepartment from "../components/AddDepartment";
import AddEmployee from "../components/AddEmployee";
import EmployeesTable from "../components/EmployeesTable";

const EmployeeManagement = () => {
  return (
    <>
      <div className="bg-red-300 h-screen p-10 flex flex-col gap-10">
        <div className="flex flex-row w-full h-1/2" >
          <AddDepartment />
          <AddEmployee />
        </div>

        <div className="h-1/2 border border-black w-5/6" >
          <EmployeesTable />
        </div>
      </div>
    </>
  );
};

export default EmployeeManagement;
