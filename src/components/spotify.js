import React from 'react'

export default function Spotify({ url }) {
  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        'justify-content': 'center',
        'align-items': 'center',
        'margin-bottom': '30px',
      }}
    >
      <iframe
        style={{ borderRadius: '5px' }}
        src={url}
        width="350"
        height="80"
        frameBorder="0"
        allowTransparency="true"
        allow="encrypted-media"
      ></iframe>
    </div>
  )
}
