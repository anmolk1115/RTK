import React, { useEffect } from 'react'

const WithHOC = (wrapperComponent) => {
    //  ${wrapperComponent.name}
    const ReturnWithHOC = (props) => {
        useEffect(() => {
            console.log(`component is mounted`);
    
            return () => {
                console.log(`component is unmounted`);
            }
        }, []);
      return (
        <wrapperComponent {...props} />
      )
    }
    return ReturnWithHOC;
}

export default WithHOC;