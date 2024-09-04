import classNames from 'classnames'
import React from 'react'

export default function PresentationCard({date,}) {
  return (
     <>
      <div className={classNames(" absolute inset-0 w-full h-full rounded-2xl", gradiant)}>
        <p>{title}</p>
      </div>
     
     </>
  )
}

