import React, { useState } from 'react';
import { motion } from 'framer-motion'; // Import Framer Motion
import './ColumnSelector.css'; // CSS for additional styling
import '../tailwind.css';
interface ColumnSelectorProps {
  columns: string[];
  onSelect: (column: string) => void;
}

const ColumnSelector: React.FC<ColumnSelectorProps> = ({ columns, onSelect }) => {
  const [selectedColumn, setSelectedColumn] = useState<string>('');

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const column = event.target.value;
    setSelectedColumn(column);
    onSelect(column);
  };

  return (
    <motion.div
      className="column-selector"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <label className="selector-label">
        Select a column to sort:
        <motion.select
          className="selector-dropdown"
          value={selectedColumn}
          onChange={handleSelectChange}
          whileFocus={{ scale: 1.05 }}
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.3 }}
        >
          <option value="" disabled>
            Choose a column
          </option>
          {columns.map((column) => (
            <option key={column} value={column}>
              {column}
            </option>
          ))}
        </motion.select>
      </label>
    </motion.div>
  );
};

export default ColumnSelector;
