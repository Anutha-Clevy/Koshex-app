import React from 'react'
import { BEHAVIOR, Cell, Grid } from 'baseui/layout-grid'

import { Navbar, Dashboard, Insights } from '../components'

const App = () => {
  return (
    <Grid
      behavior={BEHAVIOR.fluid}
      gridGutters={[16]}
      gridGaps={8}
      gridMargins={0}>
      <Cell
        span={[4, 2, 2]}>
        <Navbar />
      </Cell>
      <Cell
        span={[4, 4, 10]}>
        <Dashboard />
      </Cell>
    </Grid>
  )
}
export default App
