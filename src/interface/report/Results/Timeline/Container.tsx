import usePremium from 'interface/usePremium';
import CombatLogParser from 'parser/core/CombatLogParser';
import Abilities from 'parser/core/modules/Abilities';
import Buffs from 'parser/core/modules/Buffs';
import DistanceMoved from 'parser/shared/modules/DistanceMoved';
// import SpellUsable from 'parser/shared/modules/SpellUsable';
// import GlobalCooldown from 'parser/shared/modules/GlobalCooldown';
import React from 'react';

import Component from './Component';

interface Props {
  parser: CombatLogParser;
}

const Container = ({ parser }: Props) => {
  const premium = usePremium();

  return (
    <Component
      parser={parser}
      abilities={parser.getModule(Abilities)}
      buffs={parser.getModule(Buffs)}
      movement={parser.getModule(DistanceMoved).instances}
      premium={premium}
      config={parser.config.timeline}
      // isAbilityCooldownsAccurate={parser.getModule(SpellUsable).isAccurate}
      // isGlobalCooldownAccurate={parser.getModule(GlobalCooldown).isAccurate}
    />
  );
};

export default Container;
