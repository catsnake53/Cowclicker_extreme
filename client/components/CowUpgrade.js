import React, { useEffect, useState } from 'react';
import { ShopButton } from './ShopButton.js';

export function CowUpgrade(props) {
  const { totalCowCost } = props;
  const [cowCost, setCowCost] = useState(0);

  useEffect(() => {
    if (totalCowCost !== cowCost) setCowCost(totalCowCost)
  }, [props])

  return (
    <>
      <ShopButton cost={cowCost} stage={0} type={'cow'} itemName={'Cow'} />
      {(props.stage > 0) ? <ShopButton cost={Math.ceil(cowCost * 1.25)} stage={1} type={'cow'} itemName={'Relaxed Cow'} /> : null}
      {(props.stage > 1) ? <ShopButton cost={Math.ceil(cowCost * 1.5)} stage={2} type={'cow'} itemName={'Enlightened Cow'} /> : null}
      {(props.stage > 2) ? <ShopButton cost={Math.ceil(cowCost * 2)} stage={3} type={'cow'} itemName={'Cow 2.0'} /> : null}
    </>
  )
}