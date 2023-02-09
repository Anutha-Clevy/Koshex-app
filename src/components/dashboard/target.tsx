/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react'
import { BEHAVIOR, Cell, Grid } from 'baseui/layout-grid'
import { Block } from 'baseui/block'
import { ParagraphMedium, ParagraphXSmall, LabelLarge } from 'baseui/typography'
import { Card } from 'baseui/card'
import { OverflowMenuVertical } from '@carbon/icons-react'
import { ProgressBar, SIZE } from 'baseui/progress-bar'
import { StatefulMenu } from 'baseui/menu'
import { StatefulPopover, PLACEMENT } from 'baseui/popover'
import { useStyletron } from 'baseui'

export const Target = () => {

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
            span={[4, 2, 9]}>
            <Value />
          </Cell>
          <Cell
            span={[4, 2, 3]}>
            <Chart />
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
        Your Targets
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
                    borderBottomStyle: 'none',
                    borderLeftStyle: 'none',
                    borderRightStyle: 'none',
                    borderTopStyle: 'none'
                  })
                }
              }}>
              <Block
                display={'flex'}
                flexDirection={'row'}
                justifyContent={'space-between'}>
                <Block
                  display={'flex'}>
                  <img
                    alt='headphones'
                    height='30px'
                    className={css({
                      cursor: 'pointer'
                    })}
                    src={'/icons/mutual-fund.svg'}
                    width='30px'/>
                    <LabelLarge
                      marginLeft={'8px'}>
                      Mutual funds
                    </LabelLarge>
                </Block>
                <StatefulPopover
                  placement={PLACEMENT.bottomRight}
                  content={({ close }) => (
                  <StatefulMenu
                    items={[
                      {label: 'Edit'},
                      {label: 'Delete'}
                    ]}
                    overrides={{ List: { style: { height: '72px', width: '80px' } } }} />
                  )}>
                  <OverflowMenuVertical />
                  </StatefulPopover>
              </Block>
              <Block
                marginLeft={'-12px'}
                display={'flex'}>
                <ProgressBar 
                  overrides={{
                    Bar: {
                      style: () => ({
                        borderRadius: '56px'
                      })
                    }
                  }}
                  size={SIZE.large}
                  value={value} />
                  <Block>
                    <LabelLarge>
                      23.1K
                    </LabelLarge>
                    <ParagraphXSmall>
                      of 50k
                    </ParagraphXSmall>
                  </Block>
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
                    borderBottomStyle: 'none',
                    borderLeftStyle: 'none',
                    borderRightStyle: 'none',
                    borderTopStyle: 'none'
                  })
                }
              }}>
              <Block
                display={'flex'}
                flexDirection={'row'}
                justifyContent={'space-between'}>
                <Block
                  display={'flex'}>
                  <img
                    alt='digital-gold'
                    height='30px'
                    className={css({
                      cursor: 'pointer'
                    })}
                    src={'/icons/digital-gold.svg'}
                    width='30px'/>
                    <LabelLarge
                      marginLeft={'8px'}>
                      Digital gold
                    </LabelLarge>
                </Block>
                <StatefulPopover
                  placement={PLACEMENT.bottomRight}
                  content={({ close }) => (
                  <StatefulMenu
                    items={[
                      {label: 'Edit'},
                      {label: 'Delete'}
                    ]}
                    overrides={{ List: { style: { height: '72px', width: '80px' } } }} />
                  )}>
                  <OverflowMenuVertical />
                  </StatefulPopover>
              </Block>
              <Block
                marginLeft={'-12px'}
                display={'flex'}>
                <ProgressBar 
                  overrides={{
                    Bar: {
                      style: () => ({
                        borderRadius: '56px'
                      })
                    }
                  }}
                  size={SIZE.large}
                  value={value} />
                  <Block>
                    <LabelLarge>
                      23.1K
                    </LabelLarge>
                    <ParagraphXSmall>
                      of 50k
                    </ParagraphXSmall>
                  </Block>
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
                    borderBottomStyle: 'none',
                    borderLeftStyle: 'none',
                    borderRightStyle: 'none',
                    borderTopStyle: 'none'
                  })
                }
              }}>
              <Block
                display={'flex'}
                flexDirection={'row'}
                justifyContent={'space-between'}>
                <Block
                  display={'flex'}>
                  <img
                    alt='insurance'
                    height='30px'
                    className={css({
                      cursor: 'pointer'
                    })}
                    src={'/icons/insurance.svg'}
                    width='30px'/>
                    <LabelLarge
                      marginLeft={'8px'}>
                      Insurance
                    </LabelLarge>
                </Block>
                <StatefulPopover
                  placement={PLACEMENT.bottomRight}
                  content={({ close }) => (
                  <StatefulMenu
                    items={[
                      {label: 'Edit'},
                      {label: 'Delete'}
                    ]}
                    overrides={{ List: { style: { height: '72px', width: '80px' } } }} />
                  )}>
                  <OverflowMenuVertical />
                  </StatefulPopover>
              </Block>
              <Block
                marginLeft={'-12px'}
                display={'flex'}>
                <ProgressBar 
                  overrides={{
                    Bar: {
                      style: () => ({
                        borderRadius: '56px'
                      })
                    }
                  }}
                  size={SIZE.large}
                  value={value} />
                  <Block>
                    <LabelLarge>
                      23.1K
                    </LabelLarge>
                    <ParagraphXSmall>
                      of 50k
                    </ParagraphXSmall>
                  </Block>
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
                    borderBottomStyle: 'none',
                    borderLeftStyle: 'none',
                    borderRightStyle: 'none',
                    borderTopStyle: 'none'
                  })
                }
              }}>
              <Block
                display={'flex'}
                flexDirection={'row'}
                justifyContent={'space-between'}>
                <Block
                  display={'flex'}>
                  <img
                    alt='bonds'
                    height='30px'
                    className={css({
                      cursor: 'pointer'
                    })}
                    src={'/icons/bonds.svg'}
                    width='30px'/>
                    <LabelLarge
                      marginLeft={'8px'}>
                      Bonds
                    </LabelLarge>
                </Block>
                <StatefulPopover
                  placement={PLACEMENT.bottomRight}
                  content={({ close }) => (
                  <StatefulMenu
                    items={[
                      {label: 'Edit'},
                      {label: 'Delete'}
                    ]}
                    overrides={{ List: { style: { height: '72px', width: '80px' } } }} />
                  )}>
                  <OverflowMenuVertical />
                  </StatefulPopover>
              </Block>
              <Block
                marginLeft={'-12px'}
                display={'flex'}>
                <ProgressBar 
                  overrides={{
                    Bar: {
                      style: () => ({
                        borderRadius: '56px'
                      })
                    }
                  }}
                  size={SIZE.large}
                  value={value} />
                  <Block>
                    <LabelLarge>
                      23.1K
                    </LabelLarge>
                    <ParagraphXSmall>
                      of 50k
                    </ParagraphXSmall>
                  </Block>
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
    <Block
      className={css({
        borderLeftColor: '#E5E6E9',
        borderLeftStyle: 'dashed',
        borderLeftWidth: '1px',
        paddingTop: '16px',
        height: '100%'
        })}>
        <Block
        marginTop={'40px'}
        paddingLeft={'16px'}>
        <img
          alt='pie-chart'
          height='160px'
          className={css({
            cursor: 'pointer'
          })}
          src={'/images/pie-chart.svg'}
          width='160px'/>
      </Block>
    </Block>
  )
}
