import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import * as React from 'react';
import { useHistory } from 'react-router-dom';
import SideBar from "./SideBar";
import "./css/AfficherCmpt.css";

import { v4 as uuidv4 } from 'uuid';

const Structure = () => {
  const history = useHistory();
  const [rows, setRows] = React.useState([]);
  const handleDelete = (id) => {
    // Make API call to delete the structure
    fetch(`http://localhost:3001/structures/${id}`, {
      method: 'DELETE',
    })
      .then(response => {
        if (response.ok) {
          // If deletion is successful, update the rows state to reflect changes
          const updatedRows = rows.filter(row => row.id !== id);
          setRows(updatedRows);
        } else {
          throw new Error('Failed to delete structure.');
        }
      })
      .catch(error => console.error('Error deleting structure:', error));
  };


  React.useEffect(() => {
    // Call the backend endpoint to retrieve data for structures
    fetch('http://localhost:3001/structures')
      .then(response => response.json())
      .then(data => {
        // Update the rows state with the retrieved data
        const rowsWithIds = data.map(item => ({ ...item, id: uuidv4() }));
        setRows(rowsWithIds);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const columns = [
    
    {
      field: 'name',
      headerName: 'nom',
      headerClassName: 'hdr',
      flex: 1,
    },
    {
      field: 'responsable',
      headerName: 'le responsable',
      headerClassName: 'hdr',
      flex: 1,
    },
    {
      field: "gérer",
      headerName: 'gérer',
      headerClassName: 'hdr',
      flex: 1,
      renderCell: (params) => {
        return (
          <div className="change">
            <DeleteIcon className='dlt' sx={{ fontSize: 35 }} onClick={() => handleDelete(params.row.id)} />
            <EditIcon className='icon' sx={{ fontSize: 35 }} />
          </div>
        );
      }
    },
  ];

  return (
    <div className="comptes">
      <SideBar />
      <div className="cmpt">
        <div className="fx1">
          <span>Liste des structures</span>
          <button onClick={() => history.push("/AddStructure")}>+ ajouter</button>
        </div>
        <div style={{ height: 300, width: '100%' }}>
          <DataGrid
            sx={{
              '.MuiDataGrid-columnSeparator': {
                display: 'none',
              },
              '&.MuiDataGrid-root': {
                border: 'none',
              },
            }}
            slots={{ toolbar: GridToolbar }}
            className='grid'
            style={{ height: "66vh" }}
            rows={rows}
            columns={columns}
            rowHeight={70}
            autoPageSize
            disableRowSelectionOnClick
            getRowClassName={(params) =>
              params.indexRelativeToCurrentPage % 2 === 0 ? 'Mui-even' : 'Mui-odd'
            }
          />
        </div>
      </div>
    </div>
  );
}

export default Structure;
