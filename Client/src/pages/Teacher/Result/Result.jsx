// import  { useEffect, useState } from "react";
import {  Routes,Route } from "react-router-dom";
import ExamCardList from "./result-teacher";
import ExamCardDisplayPage from "./result-parent";

function Result() {
  return (
    
      <Routes>
        <Route exact path="/" element={ExamCardList} />
        <Route exact path="/parentss"  element={ExamCardDisplayPage} />
      </Routes>
    
  );
}

export default Result;
