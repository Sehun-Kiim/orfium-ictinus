/** @jsx jsx */
import { jsx } from '@emotion/core';
import * as React from 'react';
import { ChangeEvent } from 'react';
import { generateTestDataId, generateUniqueID } from '../../utils/helpers';
import { checkboxStyle, checkboxWrapperStyle, labelStyle, wrapperStyle } from './CheckBox.style';
import { TestId } from '../../utils/types';

export type Props = {
  /** The label of the checkbox. */
  label?: string;
  /** Boolean defining if the checkbox is checked. Defaults to false */
  checked?: boolean;
  /** Callback function for onClick. Returns the new value and the change event. */
  onClick?(val: boolean, e: ChangeEvent): void;
  /** Boolean defining if the checkbox is disabled. Defaults to false */
  disabled?: boolean;
  /** Boolean defining if the checkbox is in intermediate state when checked ( - instead of ✓ ). Defaults to false */
  intermediate?: boolean;
  /** The data test id if needed */
  dataTestId?: TestId;
};

const CheckBox: React.FC<Props> = ({
  label,
  checked = false,
  onClick,
  disabled = false,
  intermediate = false,
  dataTestId,
}) => {
  const [isChecked, setIsChecked] = React.useState(checked);
  const id = generateUniqueID();

  const handleInputChange = (event: ChangeEvent) => {
    const newChecked = !isChecked;

    if (checked === undefined) {
      setIsChecked(newChecked);
    }

    if (!disabled && onClick) {
      onClick(newChecked, event);
    }
  };

  return (
    <span css={wrapperStyle({ disabled })}>
      <span css={checkboxWrapperStyle()}>
        <input
          data-testid={generateTestDataId('checkbox', dataTestId)}
          css={checkboxStyle({ intermediate, checked })}
          id={`styled-checkbox-${id}`}
          type="checkbox"
          onChange={handleInputChange}
          disabled={disabled}
          checked={checked}
        />
        <label htmlFor={`styled-checkbox-${id}`} />
      </span>
      {label && <span css={labelStyle()}>{label}</span>}
    </span>
  );
};

export default CheckBox;
