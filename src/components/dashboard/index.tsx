/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react'
import { BEHAVIOR, Cell, Grid } from 'baseui/layout-grid'
import { Block } from 'baseui/block'
import { ParagraphMedium, ParagraphXSmall, LabelMedium, ParagraphSmall } from 'baseui/typography'
import { useStyletron } from 'baseui'
import { Card } from 'baseui/card'
import {  User, Email, Phone, ArrowRight } from '@carbon/icons-react'
import { Button, SIZE, KIND, SHAPE } from 'baseui/button'
import { ChevronDown } from 'baseui/icon'

import { Performance } from './performance'
import { Details } from './details'
import { Target } from './target'
import { ProfileModal } from '../../modals/profile-modal'

export const Dashboard = () => {
  const [css] = useStyletron()

  return (
    <>
      <Header />
      <Grid
        behavior={BEHAVIOR.fluid}
        gridGutters={[16]}
        gridGaps={8}
        gridMargins={0}>
        <Cell
          span={[4, 2, 9]}>
          <Target />
          <Block
            height={'16px'} />
          <Performance />
          <Block
            height={'16px'} />
          <Details />
        </Cell>
        <Cell
          span={[4, 2, 3]}>
          <Profile />
          <LabelMedium
            marginBottom={'8px'}
            marginTop={'32px'}>
            Market insights
          </LabelMedium>
          <Block
            height={'16px'} />
            <Insights />
          <Block
            height={'16px'} />
            <Insights />
          <Block
            height={'16px'} />
            <Insights />
          <Block
            height={'16px'} />
            <Insights />
        </Cell>
      </Grid>
    </>
  )
}

const Header = () => {
  const [css] = useStyletron()
  const [viewProfile, setViewProfile] = useState(false)

  const profileModal = () => {
    return (
      <ProfileModal
        isModalOpen={viewProfile}
        setIsModalOpen={setViewProfile} />
    )
  }

  return (
    <>
      { viewProfile && profileModal() }
      <Block
        display={'flex'}
        flexDirection={'row'}
        justifyContent={'space-between'}>
        <ParagraphMedium
          marginTop={'74px'}
          className={css({
            borderBottomColor: '#E5E6E9',
            borderBottomStyle: 'dashed',
            borderBottomWidth: '1px',
            fontWeight: 600,
            marginBottom: '16px',
            paddingBottom: '16px'
          })}>
          Hi user!
        </ParagraphMedium>
        <Block
          marginTop={'74px'}
          marginRight={'24px'}>
          <img
            alt='search'
            height='24px'
            className={css({
              cursor: 'pointer',
              marginRight: '16px'
            })}
            src={'/icons/search.svg'}
            width='24px'/>
          <img
            alt='bell'
            height='24px'
            className={css({
              cursor: 'pointer',
              marginRight: '16px'
            })}
            src={'/icons/bell.svg'}
            width='24px'/>
          <img
            alt='user'
            height='24px'
            className={css({
              cursor: 'pointer',
            })}
            src={'/icons/user-icon.svg'}
            width='24px'/>
            <Button 
              onClick={() => setViewProfile(true)}
              size={SIZE.mini}
              overrides={{
                BaseButton: {
                  style: () => ({
                    backgroundColor: 'transparent',
                    ':hover': {
                      backgroundColor: 'transparent',
                      color: 'blue'
                    },
                    color: 'black',
                  })
                },
              }}
              shape={SHAPE.circle}>
          <ChevronDown />
        </Button>
        </Block>
      </Block>
    </>
  )
}

const Profile = () => {
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
            paddingLeft: '16px',
            paddingRight: '16px',
            borderBottomStyle: 'none',
            borderLeftStyle: 'none',
            borderRightStyle: 'none',
            borderTopStyle: 'none',
          })
        }
      }}>
      <ParagraphSmall
        marginBottom={'4px'}>
        Profile
      </ParagraphSmall>
      <Block
        display={'flex'}
        alignItems={'center'}
        gridGap={'4px'}>
      <User size={16} color={'#636F86'} />
      <ParagraphXSmall
        color={'#636F86'}>
        Alien
      </ParagraphXSmall>
    </Block>
    <Block
        display={'flex'}
        alignItems={'center'}
        gridGap={'4px'}>
      <Email size={16} color={'#636F86'} />
      <ParagraphXSmall
        color={'#636F86'}>
        flying@saucers.find
      </ParagraphXSmall>
    </Block>
    <Block
        display={'flex'}
        alignItems={'center'}
        gridGap={'4px'}>
      <Phone size={16} color={'#636F86'} />
      <ParagraphXSmall
        color={'#636F86'}>
        +91 8787878767
      </ParagraphXSmall>
    </Block>
    </Card>
  )
}

const Insights = () => {
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
              paddingLeft: '16px',
              paddingRight: '16px',
              borderBottomStyle: 'none',
              borderLeftStyle: 'none',
              borderRightStyle: 'none',
              borderTopStyle: 'none',
              backgroundColor: '#F7F9FF'
            })
          }
        }}>
        <ParagraphSmall
          marginBottom={'4px'}>
          Market Data
        </ParagraphSmall>
        <ParagraphXSmall
          color={'#636F86'}>
          Detailed market data for your APIs, focused on helping you build features and provide run-time data with no lag.
        </ParagraphXSmall>
        <Button
          onClick={() => alert("No data available")}
          endEnhancer={() => <ArrowRight color={'#557AFF'}
          size={16} />}
          size={SIZE.default}
          kind={KIND.tertiary}
          shape={SHAPE.pill}
          overrides={{
            BaseButton: {
              style: () => ({
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
          Read More
        </Button>
      </Card>
    </>
  )
}


