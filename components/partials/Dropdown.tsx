import React from 'react';
import styles from '@/styles/Dropdown.module.scss';
import cx from 'classnames';

interface Props {
  name: string;
  items: any;
  status: boolean;
  open: any;
}

const Dropdown: React.FunctionComponent<Props> = ({ name, items, status, open }) => {

  return (
    <div className={styles.wrapper} >
      <div className={styles.upper} onClick={open}>
        <p className={styles.topic}>{name}</p>
        <img className={status ? cx(styles.arrow, styles.active) : styles.arrow} src="/icons/other/arrow.svg" alt="arrow" />
      </div>
      <div className={status ? cx(styles.lower, styles.active) : styles.lower}>
        {items.map((item, index) => {
          return (
            <div className={styles.itemWrapper} key={index}>
              <a href={item.link} className={styles.item}>{item.name}</a>
              <p className={styles.item} key={index}>{item.date}</p>
            </div>
          )
        })}
      </div>
    </div >
  );

}

export default Dropdown;