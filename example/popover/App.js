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

const MyDataGrid = () => {

  return (
    <div style={{ height: 300, width: '100%' }}>
      <DataGrid rows={rows} columns={columns} />
    </div>
  );
}

const style = { margin: 10 };

const App = () => {
  return (
    <div style={style}>
      <Grid container>
        <Grid item xs={3} style={style}>
          <Typography>column xs=4</Typography>
        </Grid>
        <Divider orientation="vertical" flexItem />
        <Grid item xs={8} style={style}>
          <MyDataGrid />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
