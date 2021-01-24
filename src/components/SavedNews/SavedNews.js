import React from 'react';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader'
import SavedNewsBlock from '../SavedNewsBlock/SavedNewsBlock'

const SavedNews = (props) => {
    return (
<>
<SavedNewsHeader {...props} />
<SavedNewsBlock {...props} />
</>
    );
}

export default SavedNews;