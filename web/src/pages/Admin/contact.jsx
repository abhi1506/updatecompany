import React, { useEffect } from 'react';
import { Box, useTheme, IconButton } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid'; 
import DeleteIcon from '@mui/icons-material/Delete';
import DownloadIcon from '@mui/icons-material/Download'; // Add this import for download icon
import Header from './header';
import { tokens } from '../../theme';
import { fetchContactMessages, deleteContactMessage } from "../../redux/slices/contactSlice";
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

const ContactInformation = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const dispatch = useDispatch();
    const { loading, contacts, error } = useSelector((state) => state.contact);
    
    useEffect(() => {
        dispatch(fetchContactMessages());
    }, [dispatch]);

    const handleDelete = (id) => {
        dispatch(deleteContactMessage(id))
        .then(() => {
            toast.success("User Information deleted successfully!");
        })
        .catch(() => {
            toast.error("Failed to delete contact message.");
        });
    };

    const handleDownloadResume = (resumeUrl) => {
        const link = document.createElement('a');
        link.href = resumeUrl;
        link.download = 'resume.pdf'; // Specify default file name
        link.click();
    };

    const columns = [
        { field: "_id", headerName: "ID", flex: 0.5 },
        { field: "name", headerName: "Name", flex: 1, cellClassName: "name-column-cell" },
        { field: "email_or_phone", headerName: "Email/Phone", flex: 1 },
        { field: "company", headerName: "Company", flex: 1 },
        { field: "position", headerName: "Position", flex: 1 },
        { field: "message", headerName: "Message", flex: 2 },
        { field: "createdAt", headerName: "Created At", flex: 1 },
        {
            field: "action",
            headerName: "Action",
            flex: 0.5,
            renderCell: (params) => (
                <Box display="flex" alignItems="center">
                    <IconButton 
                        onClick={() => handleDelete(params.row._id)} 
                        color="error"
                    >
                        <DeleteIcon />
                    </IconButton>
                    {params.row.resumeUrl && (
                        <IconButton 
                            onClick={() => handleDownloadResume(params.row.resumeUrl)} 
                            color="primary"
                        >
                            <DownloadIcon />
                        </IconButton>
                    )}
                </Box>
            ),
        },
    ];

    if (loading) return <Box>Loading...</Box>;
    if (error) return <Box>Error: {error}</Box>;

    return (
        <Box m="20px">
            <Box display="flex" justifyContent="flex-start">
                <Header title="Job Seeker Information" subtitle="View and Manage Job Seeker Profiles" />
            </Box>

            <Box m="40px 0 0 0" height="75vh">
                <DataGrid 
                    rows={contacts} 
                    columns={columns}
                    pageSize={20}
                    rowsPerPageOptions={[10]}
                    checkboxSelection
                    getRowId={(row) => row._id} 
                    sx={{
                        "& .MuiDataGrid-root": {
                            border: "none",
                        },
                        "& .MuiDataGrid-cell": {
                            borderBottom: "none",
                        },
                        "& .name-column-cell": {
                            color: colors.greenAccent[300],
                        },
                        "& .MuiDataGrid-columnHeaders": {
                            backgroundColor: colors.blueAccent[700],
                            borderBottom: "none",
                        },
                        "& .MuiDataGrid-virtualScroller": {
                            backgroundColor: colors.primary[400],
                        },
                        "& .MuiDataGrid-footerContainer": {
                            borderTop: "none",
                            backgroundColor: colors.blueAccent[700],
                        },
                        "& .MuiCheckbox-root": {
                            color: `${colors.greenAccent[200]} !important`,
                        },
                    }}
                />
            </Box>
        </Box>
    );
};

export default ContactInformation;
