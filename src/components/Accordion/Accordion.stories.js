import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Accordion from "./Accordion"
import useRadioList from "../../fx/useRadioList"



storiesOf('Accordion', module)
  .add('Default', () => <Accordion>
                          <div>a</div>
                          <div>b</div>
                        </Accordion>
                      )