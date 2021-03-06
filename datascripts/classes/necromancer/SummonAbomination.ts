import { std } from 'tswow-stdlib';
import { TSWOW_TESTMODULE } from '../../tswow-testmodule';
import { NECROMANCY_SKILL } from './Necromancer';

export const SUMMON_ABOMINATION = std.Spells
    .create(TSWOW_TESTMODULE,'summon-abomination', 688)
SUMMON_ABOMINATION.Name.enGB.set('Summon Abomination');
SUMMON_ABOMINATION.Effects.get(0).MiscValueA.set(8543);
SUMMON_ABOMINATION.SkillLines.add(NECROMANCY_SKILL.ID)
SUMMON_ABOMINATION.Icon.set('Interface\\Icons\\Achievement_Boss_patchwerk.blp')
SUMMON_ABOMINATION.CastTime.set(0,0,0)