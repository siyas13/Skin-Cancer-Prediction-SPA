import React from 'react';
export default (props) =>(
<div className="UploadMain">
    <label className="btn btn-default browseBtn">
     Browse <input type="file" hidden onChange={props.load}/>
    </label>
    <input className="input-file" type="text" value={props.name || 'Choose File'} />
    <button className="btn btn-default uploadBtn" onClick={props.upload}>Upload</button>
</div>);
