import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Tag from '../primitives/Tag';
import { hueVars } from '../layout/Section';
import { STATUS } from '../../content/stages';
import styles from './MegaMenu.module.css';

export default function MegaMenu({ label, items, footer }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false);
    };
    const onClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    document.addEventListener('mousedown', onClick);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('mousedown', onClick);
    };
  }, [open]);

  // Hover only where a real pointer exists; touch devices use click.
  const hoverable = typeof window !== 'undefined' && window.matchMedia('(hover: hover)').matches;

  return (
    <div
      className={`${styles.item} ${open ? styles.open : ''}`}
      ref={ref}
      onMouseEnter={hoverable ? () => setOpen(true) : undefined}
      onMouseLeave={hoverable ? () => setOpen(false) : undefined}
    >
      <button
        type="button"
        className={styles.trigger}
        aria-expanded={open}
        onClick={() => setOpen((v) => (hoverable ? true : !v))}
      >
        {label}
        <svg className={styles.caret} width="12" height="12" viewBox="0 0 14 14" aria-hidden="true">
          <path
            d="M3.5 5.5L7 9l3.5-3.5"
            stroke="currentColor"
            strokeWidth="1.6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      <div className={styles.panel} hidden={!open}>
        <div className={styles.grid}>
          {items.map((it) => (
            <Link
              key={it.id}
              to={it.path}
              className={styles.entry}
              style={hueVars(it.hue)}
              onClick={() => setOpen(false)}
            >
              <span className={styles.plate} aria-hidden="true" />
              <span className={styles.text}>
                <span className={styles.name}>
                  {it.name}
                  {it.statusLabel ? (
                    <Tag
                      status={it.status}
                      label={
                        it.status === STATUS.SOON ? `Coming ${it.statusLabel}` : it.statusLabel
                      }
                    />
                  ) : null}
                </span>
                <span className={styles.blurb}>{it.blurb}</span>
              </span>
            </Link>
          ))}
        </div>
        {footer ? <div className={styles.footer}>{footer}</div> : null}
      </div>
    </div>
  );
}
