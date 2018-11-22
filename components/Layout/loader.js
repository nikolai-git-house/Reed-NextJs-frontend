import React from 'react'
import {BounceLoader} from 'react-spinners'

export default () => {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      paddingTop: '25vh'
    }}>
      {<BounceLoader color={'#0065FF'}/>}
    </div>
  )
}