import React, { useState } from 'react';
import FileUpload from './components/FileUpload';
import DataTable from './components/DataTable';
import ColumnSelector from './components/ColumnSelector';
import Papa from 'papaparse';
import { motion } from 'framer-motion';

const App: React.FC = () => {
  const [data, setData] = useState<any[]>([]);
  const [sortedData, setSortedData] = useState<any[]>([]);
  const [isSorted, setIsSorted] = useState(false);

  const handleFileUpload = (uploadedData: any[]) => {
    const filteredData = uploadedData.filter((row) =>
      Object.values(row).some((value) => value !== '')
    );
    setData(filteredData);
    setSortedData(filteredData);
    setIsSorted(false); // Reset sorting state
  };

  const handleColumnSelect = (column: string) => {
    const sorted = [...data].sort((a, b) => {
      if (a[column] < b[column]) return -1;
      if (a[column] > b[column]) return 1;
      return 0;
    });
    setSortedData(sorted);
    setIsSorted(true); // Mark as sorted
  };

  const handleDownload = () => {
    const csv = Papa.unparse(sortedData);
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'sorted_data.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const columns = data.length ? Object.keys(data[0]) : [];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600 text-white">
      <motion.h1
        className="text-4xl font-bold mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        CSV Sorter
      </motion.h1>

      {/* Download Button */}
     

      <motion.div
        className="w-11/12 max-w-4xl bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-6 shadow-lg mb-6"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <FileUpload onFileUpload={handleFileUpload} />
      </motion.div>

      {columns.length > 0 && (
        <motion.div
          className="w-11/12 max-w-4xl bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-6 shadow-lg mb-6"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <ColumnSelector columns={columns} onSelect={handleColumnSelect} />
        </motion.div>
      )}
 {isSorted && (
        <motion.button
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg mb-6"
          onClick={handleDownload}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          Download Sorted CSV
        </motion.button>
      )}
      <motion.div
        className="w-11/12 max-w-4xl bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-6 shadow-lg"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <DataTable data={sortedData} />
      </motion.div>
    </div>
  );
};

export default App;
