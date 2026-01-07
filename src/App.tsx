// import { useState } from 'react'
import { useState } from 'react';
import './App.css'
import Layout from './components/Layout'

const baseClasses =
  "h-16 w-full flex items-center justify-center text-xl font-semibold rounded-lg cursor-pointer transition duration-150 ease-in-out";

// const equalsClasses = 
//             "bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800";

// const defaultClasses = 
//             "bg-white text-gray-800 border border-gray-200 hover:bg-gray-50 active:bg-gray-100";            




function App() {
    const [input1, setInput1] = useState("");
    const [op, setOp] = useState("");
    const [eq, setEq] = useState(false);
    const [input2, setInput2] = useState("");
    const [ans, setAns] = useState(0);

  const signList = [
    '%', 'CE', 'C', '⌫', // ⌫ 代表退格/刪除鍵 (Backspace)
    '1/x', 'x²', '²√x', '÷',
    '7', '8', '9', '×',
    '4', '5', '6', '−', // 這裡使用數學上的減號 U+2212 '−'
    '1', '2', '3', '+',
    '±', '0', '.', '=',
  ];

  const isNum = (sign: string) => {
    return !isNaN(parseFloat(sign))
  };

  const handleCalc = (sign:string) => {
   
    if (sign === "C") {
      setInput1("");      
      setInput2("");      
      setOp("");          
      setAns(0);          
      setEq(false);       
      return;             
    }
    if (sign === "⌫") {
    if (op) {
      setInput2(prev => prev.slice(0, -1));
    } else {
      setInput1(prev => prev.slice(0, -1));
    }
    return;
  }
   if (isNum(sign)) {
      if (op) {
        setInput2(input2 + sign);
      }else{
       setInput1(input1 + sign);
      }
   }

   if("+" === sign){
    alert("press +");
    setOp(sign)
    return;
   }
   if ("−" === sign) { 
      alert("press −");
      setOp(sign);
      return;
    }
    if ("×" === sign) { 
      alert("press ×");
      setOp(sign);
      return;
    }
    if ("÷" === sign) { 
      alert("press ÷");
      setOp(sign);
      return;
    }
   if ("=" === sign) {
    if("+" === op){
      setAns(parseFloat(input1) + parseFloat(input2) );
      setEq(true);
      }
    if ("−" === op) {
       setAns(parseFloat(input1) - parseFloat(input2));
      setEq(true);
    }
     if ("×" === op) {
       setAns(parseFloat(input1) * parseFloat(input2));
      setEq(true);
    }
     if ("÷" === op) {
       setAns(parseFloat(input1) / parseFloat(input2));
      setEq(true);
    }
   }

  };

const getDisplayText=()=>{
  if(eq){
    return ans+"";
  }
  
  if(op){
    return input2;
  }
  return input1;
};

  // const [count, setCount] = useState(0)

  return (
    <Layout>

      <input type='text' value={getDisplayText()} className="bg-green-100 p-4 mb-4 rounded-lg shadow-inner" />
      <div className="grid grid-cols-4 gap-2 bg-gray-100 p-4 rounded-xl shadow-2xl max-w-sm mx-auto">
        {
          signList.map(
            (sign, index) => {

              return (
                <button key={index} className={baseClasses}  onClick={()=>{  handleCalc(sign); }}>
                  {sign}
                </button>
              )
            }
          )
        }

      </div>
      <table>
          <tr>
            <th><label>周日</label></th><th>周一</th><th>周二</th><th>周三</th><th>周四</th><th>周五</th><th><label>周六</label></th>
          </tr>
           <tr>
            <th></th><th></th><th></th><th></th><th>1</th><th>2</th><th><label>3</label></th>
          </tr>
          <tr>
            <th><label>4</label></th><th>5</th><th>6</th><th>7</th><th>8</th><th>9</th><th><label>10</label></th>
          </tr>
          <tr>
            <th><label>11</label></th><th>12</th><th>13</th><th>14</th><th>15</th><th>16</th><th><label>17</label></th>
          </tr>
          <tr>
            <th><label>18</label></th><th>19</th><th>20</th><th>21</th><th>22</th><th>23</th><th><label>24</label></th>
          </tr>
          <tr>
            <th><label>25</label></th><th>26</th><th>27</th><th>28</th><th>29</th><th>30</th><th><label>31</label></th>
          </tr>
        </table>
    </Layout>
  )

}

export default App;
