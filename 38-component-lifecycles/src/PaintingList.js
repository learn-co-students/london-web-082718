import React from 'react'

import Painting from './Painting'

const PaintingList = props =>
  <div>
    {
      props.paintings.map(painting =>
        <Painting
          key={painting.id}
          selectPainting={props.selectPainting}
          removePainting={props.removePainting}
          painting={painting}
        />
      )
    }
  </div>

export default PaintingList
