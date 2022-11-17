import Header from "../components/dash/Header";
import Aside from "../components/dash/Aside";

const Dashboard = (props: any) => {
  return (
    <div className="dash">
      <Aside />
      <Header />

      {props.children}
    </div>
  );
}

export default Dashboard;
