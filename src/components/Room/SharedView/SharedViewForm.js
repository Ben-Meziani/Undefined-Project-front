import React from 'react';

const SharedViewForm = () => (
  <div className="shared-view-form">
    {masterRole ? <input type="file" name="iconFile" className="avatar-choice-input" onChange={handleChange} /> : '' }
  </div>
);

export default SharedViewForm;
