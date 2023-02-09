/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { BEHAVIOR, Cell, Grid } from 'baseui/layout-grid'
import { Block } from 'baseui/block'
import { HeadingLarge, ParagraphMedium } from 'baseui/typography'
import { Navigation } from 'baseui/side-navigation'
import { Avatar } from 'baseui/avatar'
import { useStyletron } from 'baseui'
import { Button, KIND, SHAPE, SIZE } from 'baseui/button'
import { Card } from 'baseui/card'

export const Insights = () => {
  const [css] = useStyletron()
  return (
    <Card
      overrides={{
        Root: {
          style: () => ({
            boxShadow: '4px 4px 20px rgba(151,151,151,0.25)',
            borderBottomLeftRadius: '12px',
            borderBottomRightRadius: '12px',
            borderTopLeftRadius: '12px',
            borderTopRightRadius: '12px',
            paddingTop: '16px',
            paddingLeft: '16px',
            paddingRight: '16px',
            borderBottomStyle: 'none',
            borderLeftStyle: 'none',
            borderRightStyle: 'none',
            borderTopStyle: 'none'
          })
        }
      }}>
      Insights goes here
    </Card>
  )
}
