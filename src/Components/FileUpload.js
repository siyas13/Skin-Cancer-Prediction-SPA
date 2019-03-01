import React from 'react';
export default (props) =>(
<div className="file-div">
<div className="UploadMain">
    <label className="btn btn-default file-input">
     Browse <input type="file" hidden onChange={props.load}/>
    </label>
    <input className="choose-file" type="text" value={props.name || 'Choose File'} />
    <button className="uploadButton" onClick={props.upload}>Upload</button>
    </div>
</div>);
