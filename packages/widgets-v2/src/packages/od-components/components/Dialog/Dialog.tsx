/*
 * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { EDITOR_PREVIEWER_ID, OverrideCSS } from '@od-shared/constants/ShConstants'
import { SSRHelper } from '@od-shared/utils/SSRHelper'
import classNames from 'classnames'
import React, { Component } from 'react'
import ReactDom from 'react-dom'
import { X } from 'react-feather'
import styles from './Dialog.module.scss'

export function getDialogContainer(isPreviewMode?: boolean) {
  if (SSRHelper.isSSR()) return null
  const modalContainerId = !isPreviewMode ? 'dialogWrapper' : 'editorDialogWrapper'
  let element = document.getElementById(modalContainerId)
  if (!element) {
    element = document.createElement('div')
    element.id = modalContainerId

    if (!isPreviewMode) {
      document.body.appendChild(element)
    } else {
      appendEditorDialogElement(element)
    }
  }
  return element
}

function appendEditorDialogElement(modalElement: HTMLElement) {
  const previewElement = document.getElementById(EDITOR_PREVIEWER_ID)
  if (previewElement) {
    previewElement.appendChild(modalElement)
  }
}

interface DialogProps {
  title?: React.ReactNode
  className?: string
  isOpen: boolean
  onClose?: () => void
  isPreviewMode?: boolean
}

export const DialogBody = (props: { className?: string; children: React.ReactNode }) => (
  <div className={classNames(styles.dialogBody, props.className)}>{props.children}</div>
)

export const DialogFooter = (props: { className?: string; children: React.ReactNode }) => (
  <div className={classNames(styles.dialogFooter, props.className)}>{props.children}</div>
)

export class Dialog extends Component<DialogProps> {
  modalRoot: HTMLElement | null
  modalContainer: HTMLDivElement | null

  constructor(props: DialogProps) {
    super(props)
    this.modalRoot = getDialogContainer(this.props.isPreviewMode)
    this.modalContainer = !SSRHelper.isSSR() ? document.createElement('div') : null
  }

  componentDidMount(): void {
    if (!this.modalRoot || !this.modalContainer) return
    this.modalRoot.appendChild(this.modalContainer)
  }

  componentWillUnmount(): void {
    if (!this.modalRoot || !this.modalContainer) return
    this.modalRoot.removeChild(this.modalContainer)
  }

  renderDialog() {
    const { title = '', className = '', onClose = null } = this.props

    return (
      <section className={classNames('dialog', className, OverrideCSS.BODY_FONT)}>
        {title && (
          <div className="dialogHeader">
            <h2 className={classNames('titleContainer', OverrideCSS.TITLE_FONT)}>{title}</h2>
            {!!onClose && (
              <div className="closeButtonContainer" style={{ color: 'rgb(var(--od-rgba-secondary)' }}>
                <button
                  onClick={() => {
                    if (onClose) onClose()
                  }}>
                  <X />
                </button>
              </div>
            )}
          </div>
        )}
        {this.props.children}
      </section>
    )
  }

  renderDialogOverlay() {
    const { isOpen } = this.props
    if (!isOpen) return null
    return <div className="dialogOverlay editorDialogOverlay">{this.renderDialog()}</div>
  }

  render() {
    // Dev's note: hacky way to handle payment success status dialog in editor
    // Since the usual way is showing nothing cuz #preview return null when rendering payment status dialog
    if (this.props.isPreviewMode && this.props.className?.includes('paymentStatusDialog')) return this.renderDialogOverlay()
    if (!this.modalContainer) return <div />
    return ReactDom.createPortal(this.renderDialogOverlay(), this.modalContainer)
  }
}
