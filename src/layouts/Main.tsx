import Header from "../components/Header"

const Main = (props: any) => {
  return (
    <div className="mai">
      <Header />
      {props.children}
    </div>
  )
}

export default Main;
