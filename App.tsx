import React from "react";
import Layout from "./Layout";
import quizData from "./quiz.json"; 

function App() {
  
  const handleSubmit = (answers: Record<number, string>) => {
    console.log("User Answers:", answers);
  };
  console.log("quiz data in app",quizData)
  return <Layout questions={quizData} 
  onSubmit={handleSubmit} />;
}
export default App;
