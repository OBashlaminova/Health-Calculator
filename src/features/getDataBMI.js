import React from 'react';
import { SmileTwoTone, MehTwoTone, FrownTwoTone } from '@ant-design/icons';

function getDataBMI(valueBMI) {
  if (valueBMI <= 18.4) {
    return {
      icon: <MehTwoTone twoToneColor="#580aff" />,
      category: 'underweight'
    };
  }

  if (valueBMI <= 24.9 && valueBMI > 18.4) {
    return {
      icon: <SmileTwoTone twoToneColor="#a1ff0a" />,
      category: 'healthy weight'
    };
  }

  if (valueBMI <= 29.9 && valueBMI > 25) {
    return { icon: <MehTwoTone twoToneColor="#ffd300" />, category: 'overweight' };
  }

  if (valueBMI > 30) {
    return { icon: <FrownTwoTone twoToneColor="#ff0000" />, category: 'obese' };
  }
}

export default getDataBMI;
