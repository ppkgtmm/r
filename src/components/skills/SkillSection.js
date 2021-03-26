import React from "react";
import { FlexBox } from '../utils'
import { skillsData } from '../../constants/constant'
import Skills from './Skills'

export default function SkillSection(params) {
    return (
        <FlexBox wrap="flex-wrap">
      {(skillsData || []).map((skillData, index) => (
          <Skills key={index} info={skillData} />
        ))}
        </FlexBox>
    )
}