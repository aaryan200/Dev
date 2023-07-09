import { Box, Fab, Modal, Tooltip, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Add as AddIcon } from '@mui/icons-material';

export default function Add() {
    const [open, setOpen] = useState(false);
    return (
        <>
            <Tooltip onClick={e => setOpen(true)} title="Delete" sx={{
                position: "fixed",
                bottom: 20,
                left: {
                    xs: "calc(50% - 25px)",
                    md: 30
                }
            }}>
                <Fab color="primary" aria-label="add">
                    <AddIcon />
                </Fab>
                <Modal
                    open={open}
                    onClose={e => setOpen(false)}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>Hello</Box>
                </Modal>
            </Tooltip>

        </>
    )
}
