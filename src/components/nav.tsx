/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { BEHAVIOR, Cell, Grid } from 'baseui/layout-grid'
import { Block } from 'baseui/block'
import { Button } from 'baseui/button'
import { HeadingLarge, ParagraphMedium } from 'baseui/typography'
import { Navigation } from 'baseui/side-navigation'
import { useStyletron } from 'baseui'

export const Navbar = () => {
  const [css] = useStyletron()

  return (
    <Block
      position={'sticky'}
      top={0}
      height={'100vh'}
      backgroundColor={'#F4F7FF'}>
      <Block
        display={'flex'}
        flexDirection={'column'}
        height={'100%'}
        justifyContent={'space-between'}>
        <Block>
          <Block
            marginBottom={'8px'}
            paddingLeft={['8px', '16px', '32px']}
            paddingTop={['12px', '20px', '66px']}>
            <HeadingLarge>
              LOGO
            </HeadingLarge>
          </Block>
          <Grid
            behavior={BEHAVIOR.fluid}
            gridGutters={0}
            gridMargins={0}>
            <Cell>
              <div>
                <Navigation
                  overrides={{
                    NavItem: {
                      style: ({ $active }) => {
                        if (!$active) {
                          return {
                            paddingLeft: '12px',
                            ':hover': {
                              color: '#FF0356'
                            }
                          }
                        }
                        return {
                          paddingLeft: '16px',
                          backgroundColor: '#ec8c69',
                          borderRadius: '8px',
                          borderLeftColor: '#FF0356',
                          borderLeftWidth: 0,
                          color: '#b6003c',
                          ':hover': {
                            color: '#ff0356'
                          }
                        }
                      }
                    },
                    Root: {
                      style: () => ({
                        marginLeft: '16px',
                        fontFamily: 'Manrope',
                        maxWidth: '208px',
                        fontWeight: 500
                      })
                    }
                  }}
                  items={[
                    {
                      title:
                        <Block
                          display={'flex'}
                          alignItems={'center'}>
                          <Block
                            marginRight={'12px'}
                            height={'24px'}
                            width={'24px'}>
                          </Block>
                          <img
                            alt='dashboard'
                            height='16px'
                            className={css({
                              cursor: 'pointer'
                            })}
                            src={'/icons/investor.svg'}
                            width='16px'/>
                          <ParagraphMedium
                            marginLeft={'8px'}>
                            Dashboard
                          </ParagraphMedium>
                        </Block>,
                      itemId: 'Dashboard'
                    },
                    {
                      title:
                        <Block
                          display={'flex'}
                          alignItems={'center'}>
                          <Block
                            marginRight={'12px'}
                            height={'24px'}
                            width={'24px'}>
                          </Block>
                          <img
                            alt='investor'
                            height='16px'
                            className={css({
                              cursor: 'pointer'
                            })}
                            src={'/icons/investor.svg'}
                            width='16px'/>
                          <ParagraphMedium
                            marginLeft={'8px'}>
                            Investor
                          </ParagraphMedium>
                        </Block>,
                      itemId: 'Investor'
                    },
                    {
                      title:
                        <Block
                          display={'flex'}
                          alignItems={'center'}>
                          <Block
                            marginRight={'12px'}
                            height={'24px'}
                            width={'24px'}>
                          </Block>
                          <img
                            alt='offerings'
                            height='16px'
                            className={css({
                              cursor: 'pointer'
                            })}
                            src={'/icons/offerings.svg'}
                            width='16px'/>
                          <ParagraphMedium
                            marginLeft={'8px'}>
                            Offerings
                          </ParagraphMedium>
                        </Block>,
                      itemId: 'Offerings'
                    },
                    {
                      title:
                        <Block
                          display={'flex'}
                          alignItems={'center'}>
                          <Block
                            marginRight={'12px'}
                            height={'24px'}
                            width={'24px'}>
                          </Block>
                          <img
                            alt='reporting'
                            height='16px'
                            className={css({
                              cursor: 'pointer'
                            })}
                            src={'/icons/reporting.svg'}
                            width='16px'/>
                          <ParagraphMedium
                            marginLeft={'8px'}>
                            Reporting
                          </ParagraphMedium>
                        </Block>,
                      itemId: 'Reporting'
                    },
                    {
                      title:
                        <Block
                          display={'flex'}
                          alignItems={'center'}>
                          <Block
                            marginRight={'12px'}
                            height={'24px'}
                            width={'24px'}>
                          </Block>
                          <img
                            alt='transaction'
                            height='16px'
                            className={css({
                              cursor: 'pointer'
                            })}
                            src={'/icons/transaction.svg'}
                            width='16px'/>
                          <ParagraphMedium
                            marginLeft={'8px'}>
                            Transactions
                          </ParagraphMedium>
                        </Block>,
                      itemId: 'Transactions'
                    }
                  ]}
                />
              </div>
            </Cell>
          </Grid>
        </Block>
        <Button
          overrides={{
            BaseButton: {
              style: () => ({
                backgroundColor: 'rgba(85, 122, 255, 0.1)',
                margin: '16px',
                color: '#557AFF'
              })
            }
          }}>
          <img
            alt='headphones'
            height='16px'
            className={css({
              cursor: 'pointer'
            })}
            src={'/icons/headphones.svg'}
            width='16px'/>
            <Block width={'4px'} />
              24/7 Support
        </Button>
      </Block>
    </Block>
  )
}
