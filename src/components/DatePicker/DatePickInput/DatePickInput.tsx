import dayjs from 'dayjs';
import * as React from 'react';
import { DayPickerInputProps } from 'react-day-picker';
import useTheme from '../../../hooks/useTheme';
import { flex } from '../../../theme/functions';
import Icon from '../../Icon';
import TextField from '../../TextField';
import { wrapperStyle } from '../../TextField/TextField.style';
import { DateFormatType, DateRange } from '../DatePicker';
import { formFieldStyles } from '../../../theme/palette';

type Props = {
  isRangePicker: boolean;
  selectedDay: DateRange;
  inputLabel: string;
  /** Style of input field */
  styleType: formFieldStyles;
  dateFormat: DateFormatType
} & DayPickerInputProps;

const DatePickInput: React.FC<Props> = ({
  isRangePicker,
  styleType,
  selectedDay,
  inputLabel,
  dateFormat ,
  ...props
}) => {
  const theme = useTheme();
  const getDateFormatted = React.useCallback(
    (date: Date | undefined) => (date ? dayjs(date).format(dateFormat) : ''),
    []
  );

  console.log(getDateFormatted(selectedDay.from), dateFormat);

  return isRangePicker ? (
    <div
      css={[
        wrapperStyle({ styleType })(theme),
        flex,
        {
          width: 275,
        },
      ]}
    >
      <TextField
        label={`${inputLabel} (Start)`}
        lean={true}
        {...props}
        value={getDateFormatted(selectedDay.from)}
      />
      <TextField
        rightIcon={<Icon name={'calendarEmpty'} color={'secondary'} />}
        label={`${inputLabel} (End)`}
        {...props}
        lean={true}
        value={getDateFormatted(selectedDay.to)}
      />
    </div>
  ) : (
    <TextField
      label={inputLabel}
      {...props}
      styleType={styleType}
      value={getDateFormatted(selectedDay.from)}
      rightIcon={<Icon name={'calendarEmpty'} color={'secondary'} />}
    />
  );
};

export default DatePickInput;
