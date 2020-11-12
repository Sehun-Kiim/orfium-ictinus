/** @jsx jsx */
import { jsx } from '@emotion/core';
import * as React from 'react';
import { notificationsContainer } from './Notification.style';

export type NotificationTypes = 'success' | 'error' | 'info' | 'warning';

export type NotificationVariants = 'inline' | 'banner' | 'toast' | 'modal';

export type Props = {
  /** The (message) informative message of the Notification */
  message: string[];
  /** The variant of the Notification */
  variant: NotificationVariants;
  /** The type of the Notification */
  type: NotificationTypes;
  /** The primary action of the Notification */
  primaryAction: () => void;
  /** The title (message heading) of the Notification */
  title?: string[];
  /** The description of the Notification */
  description?: string[];
  /** The scondary action of the Notification */
  secondaryAction?: () => void;
};

const Notification: React.FC<Props> = ({
  message,
  variant,
  type,
  primaryAction,
  title,
  description,
  secondaryAction,
}) => {
  return (
    <div css={notificationsContainer(type)}>
      <p>{message} </p>
    </div>
  );
};

export default Notification;