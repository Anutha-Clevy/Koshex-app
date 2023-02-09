/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react'
import { Modal, ModalBody } from 'baseui/modal'
import { LabelLarge, ParagraphXSmall } from 'baseui/typography'
import { Block } from 'baseui/block'
import { Close } from '@carbon/icons-react'
import { useStyletron } from 'baseui'
import { ProgressBar, SIZE } from 'baseui/progress-bar'
import { Button } from 'baseui/button'

type TYPE_ORG = {
  isModalOpen: boolean,
  setIsModalOpen: Function
}

export const ProfileModal = ({
  isModalOpen,
  setIsModalOpen
}: TYPE_ORG) => {
  const [css] = useStyletron()
  const [value, setValue] = useState(10)

  return (
    <>
      <Modal
        overrides={{
          Close: {
            component: () =>
              <Block
                onClick={() => {
                  setIsModalOpen(false)
                }}
                className={css({
                  ':hover': {
                    color: '#ff0356',
                    cursor: 'pointer'
                  }
                })}
                position={'absolute'}
                top={'24px'}
                right={'16px'}>
                <Close size={'24px'} />
              </Block>
          },
          Dialog: {
            style: () => ({
              marginTop: 0,
              marginBottom: 0,
              marginLeft: 0,
              marginRight: 0,
              backgroundColor: 'white',
              borderTopLeftRadius: '12px',
              borderTopRightRadius: '12px',
              borderBottomLeftRadius: '12px',
              borderBottomRightRadius: '12px'
            })
          }
        }}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}>
        <ModalBody $as='div'>
          <LabelLarge
            marginLeft={'8px'}>
            Account State
          </LabelLarge>
          <ParagraphXSmall
          color={'red'}>
            Incomplete
          </ParagraphXSmall>
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
                  <Block width={'4px'} />
                  complete Now
              </Button>
        </ModalBody>
      </Modal>
    </>
  )
}

