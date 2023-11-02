import React from 'react';
function ErrorMsg ({msg}) {
  return(
    <div className='error-control'>
      <div className= 'msg'>{msg}</div>
    </div>
  )
}
export default ErrorMsg
