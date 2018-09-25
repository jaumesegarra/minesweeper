import React from 'react'; 

export default (data, classes, click) => (
      <td onClick={click} className={classes}>
            {
                  data.isDiscovered && data.value !== 0 && data.value !== 9 &&
                  (
                        <font>{data.value}</font>
                  )
            }
      </td>
);