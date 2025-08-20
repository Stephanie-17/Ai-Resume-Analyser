
import React from 'react'
import { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
const FileUploader = () => {
  const onDrop= useCallback(acceptedFiles => {

  },[])

  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})
  return (
    <div className='w-full gradient-border'>
      <div {...getRootProps}>
        <input {...getInputProps} />
        {
          isDragActive ? 
          <p>Drop the files here ...</p> :
          <p>Drag 'n' drop some files here, or click to select the files</p>
        }

      </div>
    </div>
  )
}

export default FileUploader