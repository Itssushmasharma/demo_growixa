import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Section from './Section';

describe('Section', () => {
  it('renders children inside a section landmark', () => {
    render(
      <Section id="engine">
        <h2>The Engine</h2>
      </Section>
    );
    expect(screen.getByRole('heading', { name: 'The Engine' })).toBeInTheDocument();
    expect(document.getElementById('engine')).not.toBeNull();
  });

  it('sets hue custom properties when given a hue', () => {
    const { container } = render(<Section hue="send">x</Section>);
    const el = container.firstChild;
    expect(el.style.getPropertyValue('--hue')).toBe('var(--send)');
    expect(el.style.getPropertyValue('--hue-l')).toBe('var(--send-l)');
    expect(el.style.getPropertyValue('--hue-d')).toBe('var(--send-d)');
  });

  it('does not set hue properties when no hue is given', () => {
    const { container } = render(<Section>x</Section>);
    expect(container.firstChild.style.getPropertyValue('--hue')).toBe('');
  });

  it('applies the tint modifier class', () => {
    const { container } = render(<Section tint>x</Section>);
    expect(container.firstChild.className).toMatch(/tint/);
  });
});
