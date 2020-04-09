/** @jsx jsx */
import { jsx } from '@emotion/core';
import useRadioGroup from 'components/RadioGroup/useRadioGroup';
import PropTypes from 'prop-types';
import React, { ReactEventHandler, Ref, SyntheticEvent, useState } from 'react';
import {
  customRadioStyles,
  customRadioWrapperStyles,
  inputStyles,
  wrapperStyles,
} from './Radio.style';

export type Props = {
  /** Whether the radio input is selected or not */
  checked: boolean;
  /** The value of the radio input */
  value: string | number;
  /** The onChange event handler for the radio input */
  onChange?: ReactEventHandler;
  /** The name of the radio input, in case you want to manually form a radio group */
  name?: string;
  /** Whether the radio input is disabled */
  disabled?: boolean;
  /** ID property of the radio input */
  id?: string;
  /** Whether the radio input is required to be selected in the context of a form */
  required?: boolean;
};

function Radio(props: Props, ref: Ref<HTMLInputElement>) {
  const { checked, onChange, value, name, disabled = false, id, required } = props;
  const [focused, setFocused] = useState(false);
  const radioGroup = useRadioGroup();

  function handleFocus() {
    setFocused(true);
  }

  function handleBlur() {
    setFocused(false);
  }

  function handleChange(e: SyntheticEvent) {
    if (onChange) {
      onChange(e);
    }

    if (radioGroup) {
      radioGroup.onChange(e);
    }
  }

  const checkedValue = checked ?? (radioGroup && radioGroup.value) === value;
  const nameValue = name ?? (radioGroup && radioGroup.name);

  return (
    <span css={wrapperStyles(disabled)}>
      <input
        onFocus={handleFocus}
        onBlur={handleBlur}
        onMouseLeave={handleBlur}
        type={'radio'}
        onChange={handleChange}
        css={inputStyles}
        name={nameValue}
        value={value}
        disabled={disabled}
        id={id}
        required={required}
        checked={checkedValue}
        ref={ref}
      />
      <span css={customRadioWrapperStyles(focused, disabled)}>
        <span
          css={customRadioStyles({
            checked: checkedValue,
            disabled,
          })}
        />
      </span>
    </span>
  );
}

Radio.propTypes = {
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  name: PropTypes.string,
  disabled: PropTypes.bool,
  id: PropTypes.string,
  required: PropTypes.bool,
};

export default React.forwardRef(Radio);
