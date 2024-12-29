import React, { memo } from 'react'
import useMobileMode from '../hook/useMobileMode'

function Container({ children, paddingTop = 50, paddingBottom = 50 }) {
  const isMobile = useMobileMode(); // Mobil mod kontrolü
  
  const padding = isMobile ? 30 : paddingTop;

  return (
    <div style={{ paddingTop: padding, paddingBottom: isMobile ? 30 : paddingBottom }}>
      {children}
    </div>
  )
}

export default memo(Container)
