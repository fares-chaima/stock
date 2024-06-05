import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import * as React from 'react';
import { useHistory } from 'react-router-dom';
import SideBar from "./SideBar";
import "./css/AfficherCmpt.css";

const AfficherComptes = () => {
    const history = useHistory();
    const [rows, setRows] = React.useState([]);
    const [rolesData, setRolesData] = React.useState([]);

    React.useEffect(() => {
        const fetchData = async () => {
            try {
                // Fetch data from users table
                const usersResponse = await fetch('http://localhost:3001/users');
                const usersData = await usersResponse.json();

                // Fetch data from user_role table
                const userRoleResponse = await fetch('http://localhost:3001/user_role');
                const userRoleData = await userRoleResponse.json();

                // Fetch data from roles table
                const rolesResponse = await fetch('http://localhost:3001/roles');
                const rolesData = await rolesResponse.json();

                // Map over users data to find corresponding roles
                const updatedRows = usersData.map(user => {
                    const userRoles = userRoleData.filter(ur => ur.user_id === user.id);
                    const roleNames = userRoles.map(ur => {
                        const roleName = rolesData.find(role => role.id === ur.role_id);
                        return roleName ? roleName.name : '';
                    }).join(', ');
                    return { ...user, name: roleNames };
                });

                setRows(updatedRows);
                setRolesData(rolesData);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const handleDeleteUser = async (userId) => {
        try {
            const response = await fetch(`http://localhost:3001/ussers/${userId}`, {
                method: 'DELETE'
            });
            if (response.ok) {
                const updatedRows = rows.filter(user => user.id !== userId);
                setRows(updatedRows);
                console.log('Utilisateur supprimé avec succès');
            } else {
                console.error('Erreur lors de la suppression de l\'utilisateur');
            }
        } catch (error) {
            console.error('Erreur:', error);
        }
    };

    const handleEditUser = (userId) => {
        history.push(`/Moduser/${userId}`);
    };

    const columns = [
        {
            field: 'firstname',
            headerName: 'nom',
            headerClassName: 'hdr',
            flex: 1,
        },
        {
            field: 'lastname',
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
            field: 'name',
            headerName: 'Roles',
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
                            <DeleteIcon
                                className='dlt'
                                sx={{ fontSize: 35 }}
                                onClick={() => handleDeleteUser(cellValues.row.id)}
                            />
                            <EditIcon
                                className='icon'
                                sx={{ fontSize: 35 }}
                                onClick={() => handleEditUser(cellValues.row.id)}
                            />
                        </div>
                    </>
                );
            }
        },
    ];

    return (
        <div className="comptes">
            <SideBar />
            <div className="cmpt">
                <div className="fx1">
                    <span>Liste des comptes</span>
                    <button onClick={() => history.push("/AddCmpt")}>+ ajouter</button>
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

export default AfficherComptes;
