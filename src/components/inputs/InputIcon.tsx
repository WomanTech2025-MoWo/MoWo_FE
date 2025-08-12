import React from 'react';

// Icon SVG
import IconEmail from '../icons/inputs/IconEmail';
import IconLock from '../icons/inputs/IconLock';
import IconMy from '../icons/common/IconMy';
import IconCalendar from '../icons/inputs/IconCalendar';

export type InputIconType = 'email' | 'password' | 'my' | 'date';

const InputIcon = ({ type }: { type?: InputIconType }) => {
  switch (type) {
    case 'email':
      return <IconEmail />;
    case 'password':
      return <IconLock />;
    case 'my':
      return <IconMy />;
    case 'date':
      return <IconCalendar />;
    default:
      return null;
  }
};

export default InputIcon;
