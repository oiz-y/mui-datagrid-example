import { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import MouseOverPopover from './Popover';
import { DataGrid } from '@mui/x-data-grid';

const rows = [
  { id: 1, col1: 'A', col2: { popTitle: 'B', popMessage: 'This cell is B.' } },
  { id: 2, col1: 'C', col2: { popTitle: 'D', popMessage: 'This cell is D.' } },
  { id: 3, col1: 'E', col2: { popTitle: 'F', popMessage: 'This cell is F.' } },
];

const getPopOver = props => {
  const { popTitle, popMessage } = props.value;
  return (
    <MouseOverPopover popTitle={popTitle} popMessage={popMessage} />
  );
}

const columns = [
  { field: 'col1', headerName: 'Column Name 1', width: 150 },
  {
    field: 'col2', headerName: 'Column Name 2', width: 150,
    renderCell: props => getPopOver(props),
  },
];

const style = { margin: 10 };

const OriginalTable = props => {
  const {
    selectedRows,
    setSelectedRows,
    setSelectionModel
  } = props;

  const cellClickHandler = event => {
    if (event.field === '__check__') {
      const rows = JSON.parse(JSON.stringify(selectedRows));
      const ids = rows.map(row => row.id);
      if (!ids.includes(event.row.id)) {
        rows.push(event.row);
        setSelectedRows(rows);
      }
    }
  }

  return (
    <div style={{ height: 300, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        checkboxSelection={true}
        disableSelectionOnClick={true}
        onCellClick={(event) => cellClickHandler(event)}
        onSelectionModelChange={(id) => setSelectionModel(id)}
      />
    </div>
  );
}

const SelectedTable = props => {
  const { selectedRows } = props;
  return (
    <div style={{ height: 300, width: '100%' }}>
      <DataGrid
        rows={selectedRows}
        columns={columns}
      />
    </div>
  );
}

const App = () => {
  const [selectedRows, setSelectedRows] = useState([]);
  const [selectionModel, setSelectionModel] = useState([]);

  useEffect(() => {
    setSelectedRows(
      selectedRows.filter((obj) =>
        selectionModel.includes(obj.id)
      )
    );
  }, [selectionModel]);

  return (
    <div style={style}>
      <Grid container>
        <Grid item xs={5} style={style}>
          <Typography>Original Table</Typography>
          <OriginalTable
            selectedRows={selectedRows}
            setSelectedRows={setSelectedRows}
            selectionModel={selectionModel}
            setSelectionModel={setSelectionModel}
          />
        </Grid>
        <Divider orientation="vertical" flexItem />
        <Grid item xs={5} style={style}>
          <Typography>Selected Table</Typography>
          <SelectedTable
            selectedRows={selectedRows}
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
