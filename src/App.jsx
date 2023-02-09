import { useState } from "react";
import MyForm from "./components/myForm";
import MyTable from "./components/myTable";

function App() {
  const [tableData, setTableData] = useState([]);
  return (
    <div className="App">
      <MyForm
        setTableData={setTableData}
        tableData={tableData}
      />
      <MyTable tableData={tableData} />
    </div>
  );
}

export default App;
