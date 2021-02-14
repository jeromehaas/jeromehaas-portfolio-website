import React from 'react';
import styles from '@/styles/InputField.module.scss';

interface Props {
  type: string;
  label: string;
  width: string;
  onChangeAction: any;
  value: string;
}

const InputFileld: React.FunctionComponent<Props> = ({ type, label, width, onChangeAction, value }) => {

  const renderInput = (type, label) => {
    switch (type) {
      case 'text':
        return (
          <div className={styles.inputFieldWrapper} style={{ width: width }}>
            <input className={styles.inputField} type="text" value={value} onChange={onChangeAction} />
            <label className={styles.inputLabel}>{label}</label>
          </div>
        )
        break;
      case 'email':
        return (
          <div className={styles.inputFieldWrapper} style={{ width: width }}>
            <input className={styles.inputField} type="text" value={value} onChange={onChangeAction} />
            <label className={styles.inputLabel}>{label}</label>
          </div>
        )
        break;
      case 'textarea':
        return (
          <div className={styles.textareaWrapper} style={{ width: width }}>
            <textarea className={styles.inputField} type="textarea" value={value} onChange={onChangeAction} />
            <label className={styles.inputLabel}>{label}</label>
          </div>
        )
        break;
      case 'submit':
        return (
          <div className={styles.inputFieldWrapper} style={{ width: width }}>
            <input className={styles.inputField} value={'send'} type="submit" />
          </div>
        )
        break;
      default:
        return (
          <div className={styles.inputFieldWrapper} style={{ width: width }}>
            <input className={styles.inputField} type="text" />
            <label className={styles.inputLabel}>{label}</label>
          </div>
        )
    }
  }

  return renderInput(type, label)



}

export default InputFileld;