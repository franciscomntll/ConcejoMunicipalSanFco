import { DownloadIcon } from '@chakra-ui/icons'
import { IconButton } from '@chakra-ui/react'
import React from 'react'

const PDFCell = () => {
    return (
        <IconButton m={"auto"} inset={"0"}>
            <DownloadIcon />
        </IconButton>
    )
}

export default PDFCell
