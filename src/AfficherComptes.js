import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import * as React from 'react';
import { useHistory } from 'react-router-dom';
import SideBar from "./SideBar";
import "./css/AfficherCmpt.css";

const AfficherComptes = () => {
  const history = useHistory();

  const columns = [
    
    {
      field: 'nom',
      headerName: 'nom',
      headerClassName: 'hdr',
      flex: 1,
    },
    {
      field: 'prenom',
      headerName: 'prenom',
      headerClassName: 'hdr',
      flex: 1,
    },
    {
      field: 'email',
      headerName: 'email',
      headerClassName: 'hdr',
      type: '',
      flex: 1,
    },
    {
      field: 'role',
      headerName: ' role',
      headerClassName: 'hdr',
      flex: 1,
    },
   
    {
      field: "gérer",
      headerName: 'gérer',
      headerClassName: 'hdr',
      flex: 1,
      renderCell: (cellValues) => {
        return (
          <>
         <div className="change">
          <DeleteIcon className='dlt' sx={{ fontSize: 35 }}/>
          <EditIcon className='icon' sx={{ fontSize: 35 }} />
          </div>
          </>
        );
          }
    },
  ];
  const rows = [
    { id: 1, nom: 'Snow', prenom: 'Jon', email: "souha@esi-sba.dz" , role:"directeur",  access: "admin"},
    { id: 2, nom: 'Snow', prenom: 'Jon', email: "souha@esi-sba.dz" , role:"directeur", access: "admin",},
    { id: 3, nom: 'Snow', prenom: 'Jon', email: "souha@esi-sba.dz" , role:"directeur", access: "admin",},
    { id: 4, nom: 'Snow', prenom: 'Jon', email: "souha@esi-sba.dz" , role:"directeur", access: "admin",},
    { id: 5, nom: 'Snow', prenom: 'Jon', email: "souha@esi-sba.dz" , role:"directeur", access: "admin",},
    { id: 6, nom: 'Snow', prenom: 'Jon', email: "souha@esi-sba.dz" , role:"directeur", access: "admin",},
    { id: 7, nom: 'Snow', prenom: 'Jon', email: "souha@esi-sba.dz" , role:"directeur", access: "admin",},
    { id: 8, nom: 'Snsouhaow', prenom: 'Jon', email: "souha@esi-sba.dz" , role:"directeur", access: "admin",},
  ];

    return (  
        
      <div className="comptes">    
      <SideBar />
    <div className="cmpt">     
    <div className="fx1">   
    <span>Liste des comptes</span>
        <button onClick={()=> history.push("/AddCmpt")}>+ ajouter</button> 
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
      style={{height: "66vh"}}
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
 
export default AfficherComptes;