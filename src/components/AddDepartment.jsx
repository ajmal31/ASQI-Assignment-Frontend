const AddDepartment = () => {
  return (
    <>
      <div className="w-1/3 h-1/2 border border-black p-10">
        <div className="flex flex-col w-full ">
          <label htmlFor="">Name</label>
          <input type="text" className="rounded-sm py-1" />
          <label htmlFor="">Description</label>
          <input type="text" className="rounded-sm py-1" />
        </div>
        <div className=" flex justify-end mt-5 " >
          <button className="bg-blue-500 px-2 py-1 rounded-sm" >Add Department</button>
        </div>
      </div>
    </>
  );
};

export default AddDepartment;
