import { DataGrid } from '@mui/x-data-grid';

const rows = [
  { id: 1, col1: 'A', col2: 'B' },
  { id: 2, col1: 'C', col2: 'D' },
  { id: 3, col1: 'E', col2: 'F' },
];

const columns = [
  { field: 'col1', headerName: 'Column Name 1', width: 150 },
  { field: 'col2', headerName: 'Column Name 2', width: 150 },
];

const MyDataGrid = () => {
  return (
    <div style={{ height: 300, width: '50%' }}>
      <DataGrid rows={rows} columns={columns} />
    </div>
  );
}

const App = () => {
  return (
    <div style={{margin: 10}}>
      <MyDataGrid />
    </div>
  );
}

export default App;
