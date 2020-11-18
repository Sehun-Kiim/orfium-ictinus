/** @jsx jsx */
import { jsx } from '@emotion/core';
import * as React from 'react';
import {
  actionsContainer,
  infoContainer,
  notificationsContainer,
  IconContainer,
  primaryActionContainer,
  closeActionContainer,
} from './CompactNotification.style';
import Icon from '../../../Icon';
import { AcceptedColorComponentTypes } from 'utils/themeFunctions';
import { NotificationTypes } from '../../Notification';

export type CompactNotificationVariants = 'inline';

export type Props = {
  /** Show notification icon based on the type */
  withIcon: boolean;
  /** Use color filling */
  withFilling: boolean;
  /** The informative message of the Notification */
  message: string;
  /** The variant of the Notification */
  variant: CompactNotificationVariants;
  /** The type of the Notification */
  type: NotificationTypes;
  /** The primary call-to-action label of the Notification */
  primaryCTALabel: string;
  /** The primary call-to-action of the Notification */
  primaryCTA: () => void;
  /** The closing call-to-action of the Notification */
  onCloseCTA: () => void;
};

const typeToColor = (type: string): AcceptedColorComponentTypes =>
  type === 'alert' ? 'warning' : (type as AcceptedColorComponentTypes);

const CompactNotification: React.FC<Props> = ({
  withIcon,
  withFilling,
  message,
  variant,
  type,
  primaryCTALabel,
  primaryCTA,
  onCloseCTA,
}) => {
  return (
    <div css={notificationsContainer(withFilling, variant, type)}>
      <div css={infoContainer()}>
        {withIcon && (
          <div css={IconContainer()}>
            <Icon name={type} color={typeToColor(type)} />
          </div>
        )}
        <div>{message}</div>
      </div>
      <div css={actionsContainer()}>
        <span
          css={primaryActionContainer()}
          onClick={() => {
            primaryCTA();
          }}
        >
          {primaryCTALabel}
        </span>
        <div
          css={closeActionContainer()}
          onClick={() => {
            onCloseCTA();
          }}
        >
          <Icon name="close" color="lightGray500" />
          {/* <IconButton type='lightGray500' size='sm'  name='close'   /> */}
        </div>
      </div>
    </div>
  );
};

export default CompactNotification;