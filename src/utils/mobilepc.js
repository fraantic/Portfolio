import React, { useEffect, useState } from 'react'
import MediaQuery from 'react-responsive'

export const Desktop = ({ children }) => {
  const [hasMounted, setHasMounted] = useState(false)

  useEffect(() => {
    setHasMounted(true)
  }, [])

  if (!hasMounted) return null

  return <MediaQuery minDeviceWidth={1000}>{children}</MediaQuery>
}

export const Mobile = ({ children }) => {
  const [hasMounted, setHasMounted] = useState(false)

  useEffect(() => {
    setHasMounted(true)
  }, [])

  if (!hasMounted) return null

  return <MediaQuery maxDeviceWidth={999}>{children}</MediaQuery>
}
