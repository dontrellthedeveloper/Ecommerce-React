import React from "react";

const FileUpload = () => {
    const fileUploadAndResize = (e) => {
        // console.log(e.target.files);
        // resize
        // send back to server to upload to cloudinary
        // set url to images[] in the parent component state - ProductCreate
    };

    return (
        <div className="row">
            <label className="btn btn-primary">
                Choose File
                <input
                    type="file"
                    multiple
                    hidden
                    accept="images/*"
                    onChange={fileUploadAndResize}
                />
            </label>
        </div>
    );
};

export default FileUpload;
