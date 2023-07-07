import React from 'react'
import { Breadcrumbs.  } from '@mui/material'

export default function Breadcrumb({children}) {
  return (
    <Layout>
    <Breadcrumbs aria-label="breadcrumb">
      <Link to="/guides" color="inherit">
        Guides
      </Link>
      <Typography color="text.primary">{guide.name}</Typography>
    </Breadcrumbs>
    <Guides link={guide.link} />
  </Layout>
  )
}
