# CSV Sorter

![GG](https://i.imgur.com/yourImageID.jpg)

**CSV Sorter** is an intuitive and interactive web application designed to help users sort and organize data from CSV files with ease. Built with modern technologies like React, PapaParse, and Framer Motion, the app provides a sleek, responsive, and user-friendly interface for handling CSV files.

---

## Features

- 📂 **File Upload**: Upload CSV files effortlessly.
- 🔍 **Data Visualization**: Display CSV data in a clean, tabular format.
- 📊 **Column Sorting**: Select and sort data by any column in ascending order.
- 🎨 **Modern UI**: An aesthetically pleasing interface with animations powered by Framer Motion.
- 💾 **Download CSV**: Save the sorted data as a new CSV file.
- 🧹 **Data Cleaning**: Automatically filters out empty rows for cleaner results.
- 🚀 **Python Backend Server**: Optionally run a Python server to serve the app or process additional backend logic.

---

## Tech Stack

- **Frontend**: React, Tailwind CSS, Framer Motion
- **File Parsing**: [PapaParse](https://www.papaparse.com/)
- **State Management**: React useState Hook
- **Backend**: Python (Optional)

---

## Installation

Follow these steps to run the app locally:

### Prerequisites
Ensure you have the following installed:
- Node.js (v14+ recommended)
- npm or yarn
- Python (v3.7+)

### Steps

#### Frontend Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/TRUMPiler/Csv-Sorter.git
   cd Csv-Sorter
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm start
   ```

4. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

#### Backend Setup (Python Server)

1. Navigate to the backend directory:
   ```bash
   cd python-server
   ```

2. Install required Python packages:
   ```bash
   pip install -r requirements.txt
   ```

3. Start the Python server:
   ```bash
   python server.py
   ```

4. The server will run on `http://127.0.0.1:5000`.

---

## Usage

1. **Upload a CSV File**:
   Click on the **"Upload"** button and select your CSV file.

2. **View Data**:
   The uploaded data will be displayed in a responsive table.

3. **Sort by Column**:
   Select a column from the dropdown menu to sort the data in ascending order.

4. **Download Sorted Data**:
   Click the **"Download"** button to save the sorted data as a new CSV file.

---

## Python Server File: `server.py`

The `server.py` file provides an optional backend server to serve the app or handle additional backend operations.

### Features:
- Simple Python Flask server for additional processing.
- Handles routes for data processing or extensions.

#### Example `server.py` Code:
```python
from flask import Flask, jsonify, request

app = Flask(__name__)

@app.route('/')
def home():
    return jsonify({"message": "CSV Sorter Python Server is running!"})

@app.route('/process', methods=['POST'])
def process_data():
    data = request.json
    # Add your data processing logic here
    return jsonify({"processed_data": data})

if __name__ == '__main__':
    app.run(debug=True)
```

---

## Demo

Check out the live demo: [CSV Sorter Live](#) (Add your deployment link here)

---

## Screenshots

### Upload CSV
![Upload CSV](https://via.placeholder.com/600x400.png?text=Upload+CSV)

### View Data
![View Data](https://via.placeholder.com/600x400.png?text=View+Data)

### Sort by Column
![Sort Data](https://via.placeholder.com/600x400.png?text=Sort+Data)

### Download Sorted Data
![Download Data](https://via.placeholder.com/600x400.png?text=Download+Data)

---

## Contributing

Contributions are welcome!

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Make your changes and commit them:
   ```bash
   git commit -m "Add your feature"
   ```
4. Push the changes:
   ```bash
   git push origin feature/your-feature-name
   ```
5. Submit a pull request.

---

## License

This project is licensed under the [MIT License](LICENSE).

---

## Acknowledgments

- [React](https://reactjs.org/)
- [PapaParse](https://www.papaparse.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Flask](https://flask.palletsprojects.com/)

---

Feel free to suggest edits or add new features by opening an issue! 🎉
