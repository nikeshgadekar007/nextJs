const page = ({ params }) => {
  const { id } = params;
  console.log("params===>", params);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1>Profile</h1>
      <hr />
      <p>Profile page {id}</p>
    </div>
  );
};

export default page;
