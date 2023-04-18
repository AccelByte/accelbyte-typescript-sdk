/*
 * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { Typography, TypographyProps } from '@od-components/components/Typography/Typography'
import { EDITOR_PREVIEWER_ID, OverrideCSS } from '@od-shared/constants/ShConstants'
import { SSRHelper } from '@od-shared/utils/SSRHelper'
import classNames from 'classnames'
import React from 'react'
import ReactDOM from 'react-dom'
import { X } from 'react-feather'
import { Button, ButtonStyle, ButtonType } from '../Button/Button'
import './Modal.scss'

interface BaseModalComponentProps {
  className?: string
  children: React.ReactNode
  dataQa?: string | null
}

interface IModalProps extends BaseModalComponentProps {
  visible: boolean
  overlayBackground?: React.CSSProperties
  overlayClassName?: string
  isPreviewMode?: boolean
}

function getModalContainer() {
  if (SSRHelper.isSSR()) return null
  return document.createElement('div')
}

function getModalRoot(isPreviewMode?: boolean) {
  if (SSRHelper.isSSR()) return null
  const modalContainerId = !isPreviewMode ? 'modal-root' : 'editorModalWrapper'
  let modalRootElement = document.getElementById(modalContainerId)

  if (!modalRootElement) {
    modalRootElement = document.createElement('div')
    modalRootElement.id = modalContainerId
    modalRootElement.style.zIndex = '50'
    if (!isPreviewMode) {
      document.body.appendChild(modalRootElement)
    } else {
      appendEditorModalElement(modalRootElement)
    }
  }
  return modalRootElement
}

function appendEditorModalElement(modalElement: HTMLElement) {
  const previewElement = document.getElementById(EDITOR_PREVIEWER_ID)
  if (previewElement) {
    previewElement.appendChild(modalElement)
  }
}

export class Modal extends React.Component<IModalProps> {
  private modalRoot: HTMLElement | null
  private containerElement: HTMLElement | null

  constructor(props: IModalProps) {
    super(props)

    this.modalRoot = getModalRoot(this.props.isPreviewMode)
    this.containerElement = getModalContainer()
  }

  componentDidMount() {
    if (!this.modalRoot) {
      this.modalRoot = getModalRoot()
    }

    if (this.modalRoot && this.containerElement) {
      this.modalRoot.appendChild(this.containerElement)
    }
  }

  componentWillUnmount() {
    if (this.modalRoot && this.containerElement) {
      this.modalRoot.removeChild(this.containerElement)
    }
  }

  renderModal() {
    const { overlayBackground, overlayClassName, children, className, dataQa } = this.props
    return (
      <div className={classNames('modalOverlay', overlayClassName)} style={overlayBackground}>
        <section onClick={ev => ev.stopPropagation()} className={classNames('modalContainer', className)} data-qa-id={dataQa}>
          {children}
        </section>
      </div>
    )
  }

  renderModalOverlay() {
    const { visible } = this.props
    if (!visible) return <div />

    return <div className="modalOverlay editorModalOverlay">{this.renderModal()}</div>
  }

  render() {
    const { visible, isPreviewMode } = this.props
    if (isPreviewMode) return this.renderModalOverlay()
    if (!visible || !this.containerElement) return <div />
    // We need to use portal, otherwise the Modal will be wrapped in the component that uses it instead of
    // in the "container" element. Being in the container element is important because we want the modal
    // to be always on top of everything (hence the container having `zIndex = 40`).
    return ReactDOM.createPortal(this.renderModalOverlay(), this.containerElement)
  }
}

// Modal title.
interface ModalHeaderProps extends BaseModalComponentProps {
  onClose?: () => void
  tag: TypographyProps['tag']
}

export const ModalHeader = (props: ModalHeaderProps) => (
  <div className="header">
    <div className="header-wrapper">
      <ModalHeaderTitle {...props} />
    </div>
  </div>
)
export const ModalBody = (props: BaseModalComponentProps) => <div className={classNames('body', props.className)}>{props.children}</div>
export const ModalFooter = (props: BaseModalComponentProps) => <div className={classNames('footer', props.className)}>{props.children}</div>

// Composing functions for ModalHeader.
// In some cases, we only need the header title, e.g. in Launcher Install Modal.
export const ModalHeaderTitle = ({ className, onClose, ...typographyProps }: ModalHeaderProps) => (
  <>
    <Typography
      {...typographyProps}
      className={classNames(className, OverrideCSS.TITLE_FONT)}
      // According to https://www.figma.com/file/lbLhKu1WjZgEtjEaVYJkDt/%5BODIN%5D-Master-Component?node-id=6599%3A5338,
      // when there's close button, then the title size is small. Otherwise it's big.
      fontSize={onClose ? 'md' : '3xl'}
      isCentered
    />

    {onClose && (
      <Button buttonType={ButtonType.TEXT} className="btnClose" onClick={onClose} buttonStyle={ButtonStyle.SECONDARY}>
        <X size={'24'} strokeWidth={1} />
      </Button>
    )}
  </>
)
