import Vue from 'vue'
import {
  Cell,
  CellGroup,
  Tab,
  Tabs,
  Button,
  Step,
  Steps
} from 'vant';

export default function vant() {
  Vue.use(Cell)
    .use(CellGroup)
    .use(Tab)
    .use(Tabs)
    .use(Button)
    .use(Step)
    .use(Steps)
}