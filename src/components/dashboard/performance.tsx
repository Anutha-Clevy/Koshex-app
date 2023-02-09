/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react'
import { BEHAVIOR, Cell, Grid } from 'baseui/layout-grid'
import { Block } from 'baseui/block'
import { ParagraphMedium, ParagraphXSmall, LabelLarge, ParagraphSmall, DisplayXSmall } from 'baseui/typography'
import { useStyletron } from 'baseui'
import { Card } from 'baseui/card'

export const Performance = () => {

  return (
    <>
      <Card
        overrides={{
          Root: {
            style: () => ({
              boxShadow: '4px 4px 20px rgba(151,151,151,0.25)',
              borderBottomLeftRadius: '12px',
              borderBottomRightRadius: '12px',
              borderTopLeftRadius: '12px',
              borderTopRightRadius: '12px',
              paddingLeft: '8px',
              paddingRight: '8px',
              borderBottomStyle: 'none',
              borderLeftStyle: 'none',
              borderRightStyle: 'none',
              borderTopStyle: 'none'
            })
          }
        }}>
        <Grid
          behavior={BEHAVIOR.fluid}
          gridGutters={[16]}
          gridGaps={8}
          gridMargins={0}>
          <Cell
            span={[4, 2, 7]}>
            <Chart />
          </Cell>
          <Cell
            span={[4, 2, 5]}>
            <Value />
          </Cell>
        </Grid>
      </Card>
    </>
  )
}

const Value = () => {
  const [css] = useStyletron()
  const [value, setValue] = useState(10)

  return (
    <>
      <ParagraphMedium
        marginBottom={'-8px'}>
        Your Performance
      </ParagraphMedium>
      <Block
        className={css({
          borderTopColor: '#E5E6E9',
          borderTopStyle: 'dashed',
          borderTopWidth: '1px',
          marginTop: '16px',
          padding: '16px'
          })}>
        <Grid
          behavior={BEHAVIOR.fluid}
          gridGutters={[16]}
          gridGaps={8}
          gridMargins={0}>
          <Cell
            span={[4, 4, 6]}>
            <Card
              overrides={{
                Root: {
                  style: () => ({
                    boxShadow: '4px 4px 20px rgba(151,151,151,0.25)',
                    borderBottomLeftRadius: '12px',
                    borderBottomRightRadius: '12px',
                    borderTopLeftRadius: '12px',
                    borderTopRightRadius: '12px',
                    backgroundColor: '#F4F7FF',
                  })
                }
              }}>
              <Block
                alignItems={'center'}>
                <ParagraphSmall
                  color={'#343756'}>
                  Mutual funds
                </ParagraphSmall>
                <LabelLarge
                  color={'#557AFF'}>
                  23.1K
                </LabelLarge>
              </Block>
              </Card>
            </Cell>
            <Cell
            span={[4, 4, 6]}>
            <Card
              overrides={{
                Root: {
                  style: () => ({
                    boxShadow: '4px 4px 20px rgba(151,151,151,0.25)',
                    borderBottomLeftRadius: '12px',
                    borderBottomRightRadius: '12px',
                    borderTopLeftRadius: '12px',
                    borderTopRightRadius: '12px',
                    backgroundColor: '#F4F7FF',
                  })
                }
              }}>
              <Block
                alignItems={'center'}>
                <ParagraphSmall
                  color={'#343756'}>
                  Digital Gold
                </ParagraphSmall>
                <LabelLarge
                  color={'#ED9C3A'}>
                  2.33K
                </LabelLarge>
              </Block>
              </Card>
            </Cell>
            <Cell
            span={[4, 4, 6]}>
            <Card
              overrides={{
                Root: {
                  style: () => ({
                    boxShadow: '4px 4px 20px rgba(151,151,151,0.25)',
                    borderBottomLeftRadius: '12px',
                    borderBottomRightRadius: '12px',
                    borderTopLeftRadius: '12px',
                    borderTopRightRadius: '12px',
                    backgroundColor: '#F4F7FF',
                  })
                }
              }}>
              <Block
                alignItems={'center'}>
                <ParagraphSmall
                  color={'#343756'}>
                  Insurance
                </ParagraphSmall>
                <LabelLarge
                  color={'#8B55FF'}>
                  23.1K
                </LabelLarge>
              </Block>
              </Card>
            </Cell>
            <Cell
            span={[4, 4, 6]}>
            <Card
              overrides={{
                Root: {
                  style: () => ({
                    boxShadow: '4px 4px 20px rgba(151,151,151,0.25)',
                    borderBottomLeftRadius: '12px',
                    borderBottomRightRadius: '12px',
                    borderTopLeftRadius: '12px',
                    borderTopRightRadius: '12px',
                    backgroundColor: '#F4F7FF',
                  })
                }
              }}>
              <Block
                alignItems={'center'}>
                <ParagraphSmall
                  color={'#343756'}>
                  Bonds
                </ParagraphSmall>
                <LabelLarge
                  color={'#55ADFF'}>
                  23.1K
                </LabelLarge>
              </Block>
              </Card>
            </Cell>
        </Grid>
      </Block>
    </>
  )
}

const Chart = () => {
  const [css] = useStyletron()

  return (
    <>
      <Block
        padding={'16px'}>
        <img
          alt='bar-chart'
          height='194px'
          className={css({
            cursor: 'pointer'
          })}
          src={'/images/bar-chart.svg'}
          width='348px'/>
      </Block>
    </>
  )
}
