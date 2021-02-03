import React from 'react';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader'
import SavedNewsBlock from '../SavedNewsBlock/SavedNewsBlock'

import {CurrentSavedNewsContext} from '../../contexts/CurrentSavedNewsContext'

const SavedNews = (props) => {

  const currentSavedNewsContext = React.useContext(CurrentSavedNewsContext);

    const items = currentSavedNewsContext.map(item => ({
        keyword: item.keyword,
      }))



    return (
<>
<SavedNewsHeader array={items} {...props} />
<SavedNewsBlock {...props} />
</>
    );
}

export default SavedNews;