import { Link } from "react-router-dom";

const RouteTest = () => {
  return (
    <>
      <Link to={"/homeofsetAccount"}>Home</Link>
      <br />
      <Link to={"/AccountofsetAccount"}>Account</Link>
      <br />
      <Link to={"/newofsetAccount"}>New</Link>
      <br />
      <Link to={"/editofsetAccount"}>Edit</Link>
    </>
  );
};

export default RouteTest;
