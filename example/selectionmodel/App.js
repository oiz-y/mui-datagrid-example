import { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { rows, columns } from './DBData';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const BasicModal = props => {
  const { selectionModel, setSelectionModel } = props;
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen} style={{marginTop: '100px', marginLeft: '100px'}}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <MyDataGrid selectionModel={selectionModel} setSelectionModel={setSelectionModel} />
          <Typography id="modal-modal-title" variant="h6" component="h2">
            MUI modal
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}

const MyDataGrid = props => {
  const { selectionModel, setSelectionModel } = props;

  return (
    <div style={{ height: 300 }}>
      <DataGrid
        rows={rows}
        columns={columns}
        checkboxSelection
        onSelectionModelChange={(newSelectionModel) => {
          console.log(newSelectionModel)
          setSelectionModel(newSelectionModel);
        }}
        selectionModel={selectionModel}
        />
    </div>
  );
}

const datagridStyle = { margin: 10 };

const App = () => {
  const [selectionModel, setSelectionModel] = useState([]);

  return (
    <div style={datagridStyle}>
      <BasicModal selectionModel={selectionModel} setSelectionModel={setSelectionModel} />
    </div>
  );
}

export default App;
