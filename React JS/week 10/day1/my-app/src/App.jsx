

export default function App() {
  let name = "Priyanshu Pandey";
  let status = "false";
  let hbb = { name: "Priyanshu", id: [1, 2, 3] };
  let add = () => "Hello";
  const styles = { backgroundColor: "teal", color: "red" };
  return (
    <>
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
      </div>
      <h1>{name}</h1>
      <h2>{status ? "yes" : "no"}</h2>
      // <p>{hbb.id[1]}</p>
      <h3>{add()}</h3>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvzTAz0n_p5GyzLkmRP0JZ-r_Cd0dEfUmbjw&s" />
    </>
  );
}
