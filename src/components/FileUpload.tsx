import React, { useState } from 'react';
import { uploadCSV } from '../services/api';
import { motion } from 'framer-motion';
import '../tailwind.css';
interface FileUploadProps {
  onFileUpload: (uploadedData: any[]) => void; // Pass uploaded data to parent
}

const FileUpload: React.FC<FileUploadProps> = ({ onFileUpload }) => {
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const selectedFile = e.target.files[0];
      if (selectedFile.type !== 'text/csv') {
        setError('Please upload a valid CSV file.');
        setFile(null);
      } else {
        setError(null);
        setFile(selectedFile);
      }
    }
  };

  const handleUpload = async () => {
    if (!file) {
      setError('No file selected.');
      return;
    }
    setLoading(true);
    setError(null);
    try {
      const response = await uploadCSV(file);
      onFileUpload(response.data.data); // Pass data to parent
    } catch (err) {
      setError('File upload failed. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      className="p-6 bg-white bg-opacity-20 backdrop-blur-lg rounded-xl shadow-lg"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="mb-4">
        <label className="block text-white text-lg font-medium mb-2">
          Upload CSV File:
        </label>
        {/* <input class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="file_input" type="file"> */}
        {/* <input
  type="file"
  onChange={handleFileChange}
  className="block w-full border border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400
    file:bg-gray-50 file:border-0
    file:me-4
    file:py-3 file:px-4
    dark:file:bg-neutral-700 dark:file:text-neutral-400"
/> */}
{/* className="bg-red-500 text-white p-4" */}
  <input
 className="file-input file-input-bordered file-input-primary w-full max-w-xs"
  type="file"
  onChange={handleFileChange}
/>

        {error && <p className="text-red-500 mt-2">{error}</p>}
      </div>
      <motion.button
        onClick={handleUpload}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-blue-700 transition-all duration-300 ${
          loading ? 'opacity-50 cursor-not-allowed' : ''
        }`}
        disabled={loading}
      >
        {loading ? 'Uploading...' : 'Upload'}
      </motion.button>
    </motion.div>
  );
};

export default FileUpload;
