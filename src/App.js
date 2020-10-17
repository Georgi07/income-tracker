import React, {useState, useEffect} from 'react';
import './App.css';
import Header from './Components/Header/Header';
import IncomeForm from './Components/IncomeForm/IncomeForm';
import IncomeList from "./Components/IncomeList/IncomeList";
function App() {
  const [income, setIncome] = useState([]);
  const [totalIncome, setTotalIncom] = useState(0);

  useEffect(() => {
   let temp = 0;
   for (let i=0;i<income.length;i++){
       temp += parseInt(income[i].price);
   }
   setTotalIncom(temp)
  }, [income]);

  return (
    <div className="App">
       <Header totalIncome={totalIncome}/>
       <IncomeForm income={income} setIncome={setIncome}/>
       <IncomeList income={income} setIncome={setIncome}/>
        {/*{(income.length > 0) ? income[0].desc : ''}*/}
    </div>
  );
}

export default App;
