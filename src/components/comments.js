import React from 'react'
import { Helmet } from 'react-helmet'

export default function Comments() {
  return (
    <>
      <Helmet>
        <script defer src="https://cdn.commento.io/js/commento.js"></script>
      </Helmet>
      <div id="commento"></div>
    </>
  )
}
