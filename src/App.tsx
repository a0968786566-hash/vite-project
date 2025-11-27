import { useState } from "react";
import Layout from "./components/Layout";

function App() {

  const signList = [
    '%','CE','C','Del',
    '1/x','x²','√x','/', // 【優化】將 'x2' 和 'x' 改為更標準的 'x²' 和 '√x'
    '7','8','9','X',
    '4','5','6','+',
    '1','2','3','-',
    '+/-', '0', '.', '=', // 【優化】添加了最後一排按鈕
  ];

  const [count, setCount] = useState(8); 
  // 狀態 count 雖然已修復，但目前在 JSX 中仍未使用，它通常會用來顯示計算結果或輸入。
  
  return (
    <Layout>
      {/* 3. 【修復】 修正錯誤的 Tailwind 類名，並確保 div 標籤閉合 */}
      <div className="grid grid-cols-4 gap-2 bg-gray-100 p-4 rounded-xl shadow-2xl max-w-sm mx-auto">
        {signList.map((sign, index) =>(
          <div 
            key={index} 
            className={
               // 讓 '=' 號按鈕樣式可以特別處理，例如跨兩欄
               sign === '=' ? `${baseClasses} col-span-1 bg-blue-500 text-white hover:bg-blue-600` : baseClasses
            }
            onClick={() => console.log(`按下了: ${sign}`)} // 添加一個點擊事件
          >
            {sign}
          </div>
        ))}
      </div> 
    </Layout>
  ); // 4. 【修復】確保 return 語句完整
}

export default App;