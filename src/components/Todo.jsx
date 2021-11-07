import React from "react";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
export default function Todo({ atodo, doneToggle, deleteHandeler }) {
    
  return (
    <div className="todo">
      <IconButton onClick={()=>doneToggle(atodo.index)} color="secondary" aria-label="delete" size="large">
        {atodo.done?<CheckCircleIcon color="success" />:<CheckCircleOutlineIcon color="action" />}
        
      </IconButton>

      <p>{atodo.name}</p>
      <IconButton onClick={()=>deleteHandeler(atodo.index)} color="secondary" aria-label="delete" size="large">
        <DeleteIcon fontSize="inherit" />
      </IconButton>
    </div>
  );
}
