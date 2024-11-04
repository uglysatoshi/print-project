import {Chart} from "@/components/Chart"
import React from 'react';

const ResultsPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Quiz Results</h1>
      <Chart/>
    </div>
  );
};

export default ResultsPage;
