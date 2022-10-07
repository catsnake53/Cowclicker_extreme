import React, { useEffect, useState } from 'react';
import { ShopButton } from './ShopButton.js';

export function FieldUpgrade(props) {
  const { totalfieldCost } = props;
  const [fieldCost, setFieldCost] = useState(0);

  useEffect(() => {
    if (totalfieldCost !== fieldCost) setFieldCost(totalfieldCost)
  }, [props])

  return (
    <>
      <ShopButton cost={fieldCost} stage={0} type={'field'} itemName={'Field'} />
      {(props.stage > 0) ? <ShopButton cost={fieldCost * 2} stage={1} type={'field'} itemName={'Resort'} /> : null}
      {(props.stage > 1) ? <ShopButton cost={fieldCost * 3} stage={2} type={'field'} itemName={'School'} /> : null}
      {(props.stage > 2) ? <ShopButton cost={fieldCost * 4} stage={3} type={'field'} itemName={'Spaceship'} /> : null}
    </>
  )
}
