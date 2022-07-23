import MouseOverPopover from './Popover';

export const rows = [
  { id: 1, firstname: 'Dannie', secondname: { popTitle: 'Miller', popMessage: 'friendly' } },
  { id: 2, firstname: 'Harvey', secondname: { popTitle: 'Stride', popMessage: 'kindness' } },
  { id: 3, firstname: 'Martin', secondname: { popTitle: 'Dearnaley', popMessage: 'sincerity' } },
];

export const columns = [
  {
    field: 'firstname', headerName: 'First Name', width: 150,
  },
  {
    field: 'secondname', headerName: 'Second Name', width: 150,
    renderCell: props => getPopOver(props),
  },
];

const getPopOver = props => {
  const { popTitle, popMessage } = props.value;

  return (
    <MouseOverPopover popTitle={popTitle} popMessage={popMessage} />
  );
}
