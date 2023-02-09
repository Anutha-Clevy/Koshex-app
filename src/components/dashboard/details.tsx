/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react'
import { BEHAVIOR, Cell, Grid } from 'baseui/layout-grid'
import { Block } from 'baseui/block'
import { Button, KIND, SIZE } from 'baseui/button'
import { Card } from 'baseui/card'
import { ParagraphMedium, ParagraphXSmall, HeadingXSmall } from 'baseui/typography'
import { useStyletron } from 'baseui'

export const Details = () => {

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
        <ParagraphMedium
          marginBottom={'16px'}>
          Investor Details
        </ParagraphMedium>
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
              span={[4, 8, 12]}>
              <Table />
            </Cell>
          </Grid>
        </Card>
        <Block height={'16px'}/>
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
        Your SIPs
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
                  marginLeft={'16px'}>
                  <Button
                    onClick={() => alert("No data available")}
                    kind={KIND.primary}
                    overrides={{
                      BaseButton: {
                        style: () => ({
                          backgroundColor: '#F7F9FF',
                          color: '#557AFF',
                          marginLeft: '-16px',
                          ':hover': {
                            backgroundColor: '#F7F9FF',
                            color: '#2444b5'
                          }
                        })
                      },
                      EndEnhancer: {
                        style: () => ({
                          marginLeft: '8px',
                          marginTop: '4px'
                        })
                      }
                    }}>
                    Active SIPs
                  </Button>
                  <Block height={'8px'}/>
                  <Grid
                    behavior={BEHAVIOR.fluid}
                    gridGutters={[16]}
                    gridGaps={8}
                    gridMargins={0}>
                    <Cell
                      span={[4, 4, 6]}>
                      <ParagraphXSmall
                        color={'#636F86'}>
                        total Amount
                      </ParagraphXSmall>
                      <HeadingXSmall
                        color={'#577CFF'}>
                        23.1K
                      </HeadingXSmall>
                    </Cell>
                    <Cell
                      span={[4, 4, 6]}>
                      <ParagraphXSmall
                        color={'#636F86'}>
                        total no of SIPs
                      </ParagraphXSmall>
                      <HeadingXSmall
                        color={'#577CFF'}>
                        10
                      </HeadingXSmall>
                    </Cell>
                  </Grid>
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
                  marginLeft={'16px'}>
                  <Button
                    onClick={() => alert("No data available")}
                    kind={KIND.primary}
                    overrides={{
                      BaseButton: {
                        style: () => ({
                          backgroundColor: '#FFF1DC',
                          color: '#ED9C3A',
                          marginLeft: '-16px',
                          ':hover': {
                            backgroundColor: '#FFF1DC',
                            color: '#ED9C3A'
                          }
                        })
                      },
                      EndEnhancer: {
                        style: () => ({
                          marginLeft: '8px',
                          marginTop: '4px'
                        })
                      }
                    }}>
                    Upcoming SIPs
                  </Button>
                  <Block height={'8px'}/>
                  <Grid
                    behavior={BEHAVIOR.fluid}
                    gridGutters={[16]}
                    gridGaps={8}
                    gridMargins={0}>
                    <Cell
                      span={[4, 4, 6]}>
                      <ParagraphXSmall
                        color={'#636F86'}>
                        total Amount
                      </ParagraphXSmall>
                      <HeadingXSmall
                        color={'#ED9C3A'}>
                        23.1K
                      </HeadingXSmall>
                    </Cell>
                    <Cell
                      span={[4, 4, 6]}>
                      <ParagraphXSmall
                        color={'#636F86'}>
                        total no of SIPs
                      </ParagraphXSmall>
                      <HeadingXSmall
                        color={'#ED9C3A'}>
                        10
                      </HeadingXSmall>
                    </Cell>
                  </Grid>
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
        marginTop={'24px'}
        paddingLeft={'16px'}>
        <img
          alt='pie-chart'
          height='160px'
          className={css({
            cursor: 'pointer'
          })}
          src={'/images/total-sips.svg'}
          width='160px'/>
      </Block>
    </Block>
  )
}

const Table = () => {
  const [css] = useStyletron()
  const [value, setValue] = useState(10)

  return (
    <>
      <Block
        backgroundColor={'white'}
        marginBottom={'16px'}
        marginTop={'16px'}>
      </Block>
      <Block
        marginLeft={'-32px'}>
        <Labels />
        </Block>
        <TableValue />
    </>
  )
}

const Labels = () => {
  return (
    <Grid
      gridGaps={0}
      gridGutters={0}
      gridMargins={32}
      behavior={BEHAVIOR.fluid}>
      <Cell
        span={[2, 2, 3]}>
        <ParagraphXSmall
          marginBottom={'8px'}>
          Investor’s Names
        </ParagraphXSmall>
      </Cell>
      <Cell
        span={[2, 2, 2]}>
        <ParagraphXSmall
          marginBottom={'8px'}>
          Total Investments
        </ParagraphXSmall>
      </Cell>
      <Cell
        span={[2, 1, 2]}>
        <ParagraphXSmall
          marginBottom={'8px'}>
          Active SIPs
        </ParagraphXSmall>
      </Cell>
      <Cell
        span={[2, 1, 2]}>
        <ParagraphXSmall
          marginBottom={'8px'}>
          Last Transactions
        </ParagraphXSmall>
      </Cell>
      <Cell
        span={[2, 2, 3]}>
        <ParagraphXSmall
          marginBottom={'8px'}>
          Profile Status
        </ParagraphXSmall>
      </Cell>
    </Grid>
  )
}

const TableValue = () => {
  const [css] = useStyletron()
  const [value, setValue] = useState(10)

  return (
    <>
      <Block>
        <Block
          padding={'8px 0'}>
          <Grid
            gridGaps={0}
            gridGutters={0}
            gridMargins={0}
            behavior={BEHAVIOR.fluid}>
            <Cell
              span={[2, 2, 3]}>
              <ParagraphXSmall
                color={'#636F86'}
                marginBottom={'4px'}>
                Username 01
              </ParagraphXSmall>
            </Cell>
            <Cell
              span={[2, 2, 2]}>
              <ParagraphXSmall
                color={'#636F86'}
                marginBottom={'4px'}>
                ₹ 20,000.00
              </ParagraphXSmall>
            </Cell>
            <Cell
              span={[2, 1, 2]}>
              <ParagraphXSmall
                color={'#636F86'}
                marginBottom={'4px'}>
                05
              </ParagraphXSmall>
            </Cell>
            <Cell
              span={[2, 1, 2]}>
              <ParagraphXSmall
                color={'#636F86'}
                marginBottom={'4px'}>
                04 Oct 2022
              </ParagraphXSmall>
            </Cell>
            <Cell
              span={[2, 1, 2]}>
              <Button
                overrides={{
                  BaseButton: {
                    style: () => ({
                      backgroundColor: '#E7F3EB',
                      color: '#51AC70'
                    })
                  }
                }}
                size={SIZE.mini}
                kind={KIND.secondary}>
                Active
              </Button>
            </Cell>
          </Grid>
        </Block>
      </Block>
      <Block>
        <Block
          padding={'8px 0'}>
          <Grid
            gridGaps={0}
            gridGutters={0}
            gridMargins={0}
            behavior={BEHAVIOR.fluid}>
            <Cell
              span={[2, 2, 3]}>
              <ParagraphXSmall
                color={'#636F86'}
                marginBottom={'4px'}>
                Username 01
              </ParagraphXSmall>
            </Cell>
            <Cell
              span={[2, 2, 2]}>
              <ParagraphXSmall
                color={'#636F86'}
                marginBottom={'4px'}>
                ₹ 20,000.00
              </ParagraphXSmall>
            </Cell>
            <Cell
              span={[2, 1, 2]}>
              <ParagraphXSmall
                color={'#636F86'}
                marginBottom={'4px'}>
                05
              </ParagraphXSmall>
            </Cell>
            <Cell
              span={[2, 1, 2]}>
              <ParagraphXSmall
                color={'#636F86'}
                marginBottom={'4px'}>
                04 Oct 2022
              </ParagraphXSmall>
            </Cell>
            <Cell
              span={[2, 1, 2]}>
              <Button
                overrides={{
                  BaseButton: {
                    style: () => ({
                      backgroundColor: '#E7F3EB',
                      color: '#51AC70'
                    })
                  }
                }}
                size={SIZE.mini}
                kind={KIND.secondary}>
                Active
              </Button>
            </Cell>
          </Grid>
        </Block>
      </Block>
      <Block>
        <Block
          padding={'8px 0'}>
          <Grid
            gridGaps={0}
            gridGutters={0}
            gridMargins={0}
            behavior={BEHAVIOR.fluid}>
            <Cell
              span={[2, 2, 3]}>
              <ParagraphXSmall
                color={'#636F86'}
                marginBottom={'4px'}>
                Username 01
              </ParagraphXSmall>
            </Cell>
            <Cell
              span={[2, 2, 2]}>
              <ParagraphXSmall
                color={'#636F86'}
                marginBottom={'4px'}>
                ₹ 20,000.00
              </ParagraphXSmall>
            </Cell>
            <Cell
              span={[2, 1, 2]}>
              <ParagraphXSmall
                color={'#636F86'}
                marginBottom={'4px'}>
                05
              </ParagraphXSmall>
            </Cell>
            <Cell
              span={[2, 1, 2]}>
              <ParagraphXSmall
                color={'#636F86'}
                marginBottom={'4px'}>
                04 Oct 2022
              </ParagraphXSmall>
            </Cell>
            <Cell
              span={[2, 1, 2]}>
              <Button
                overrides={{
                  BaseButton: {
                    style: () => ({
                      backgroundColor: '#E7F3EB',
                      color: '#51AC70'
                    })
                  }
                }}
                size={SIZE.mini}
                kind={KIND.secondary}>
                Active
              </Button>
            </Cell>
          </Grid>
        </Block>
      </Block>
      <Block>
        <Block
          padding={'8px 0'}>
          <Grid
            gridGaps={0}
            gridGutters={0}
            gridMargins={0}
            behavior={BEHAVIOR.fluid}>
            <Cell
              span={[2, 2, 3]}>
              <ParagraphXSmall
                color={'#636F86'}
                marginBottom={'4px'}>
                Username 01
              </ParagraphXSmall>
            </Cell>
            <Cell
              span={[2, 2, 2]}>
              <ParagraphXSmall
                color={'#636F86'}
                marginBottom={'4px'}>
                ₹ 20,000.00
              </ParagraphXSmall>
            </Cell>
            <Cell
              span={[2, 1, 2]}>
              <ParagraphXSmall
                color={'#636F86'}
                marginBottom={'4px'}>
                05
              </ParagraphXSmall>
            </Cell>
            <Cell
              span={[2, 1, 2]}>
              <ParagraphXSmall
                color={'#636F86'}
                marginBottom={'4px'}>
                04 Oct 2022
              </ParagraphXSmall>
            </Cell>
            <Cell
              span={[2, 1, 2]}>
              <Button
                overrides={{
                  BaseButton: {
                    style: () => ({
                      backgroundColor: '#E7F3EB',
                      color: '#51AC70'
                    })
                  }
                }}
                size={SIZE.mini}
                kind={KIND.secondary}>
                Active
              </Button>
            </Cell>
          </Grid>
        </Block>
      </Block>
    </>
  )
}
