const AddEmployee = () => {
  return (
    <>
      <div className="w-1/2 h-full border border-black p-8">
        <div className="flex flex-col w-full">
          <label htmlFor="">Name</label>
          <input type="text" className="rounded-sm py-1" />
          <label htmlFor="">Department</label>
          <input type="text" className="rounded-sm py-1" />
          <label htmlFor="">Address</label>
          <input type="text"  className="rounded-sm py-1" />
        </div>
        <div className=" flex justify-end mt-3 text-white ">
        <button className="bg-blue-500 px-2 py-1 rounded-sm" >Add Employee</button>
        </div>
      </div>
    </>
  );
};

export default AddEmployee;
