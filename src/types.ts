import { ActionConfig, LovelaceCard, LovelaceCardConfig, LovelaceCardEditor } from 'custom-card-helpers';

declare global {
  interface HTMLElementTagNameMap {
    'ecowatt-card-editor': LovelaceCardEditor;
    'hui-error-card': LovelaceCard;
  }
}

// TODO Add your configuration elements here for type-checking
export interface EcoWattCardConfig extends LovelaceCardConfig {
  type: string;
  name?: string;
  show_warning?: boolean;
  show_error?: boolean;
  test_gui?: boolean;
  entity?: string;
  tap_action?: ActionConfig;
  hold_action?: ActionConfig;
  double_tap_action?: ActionConfig;
  data: IEWData;
}

interface IEWHour {
// données par heure
  step: number;
  level: number;
}
interface IEWDay {
// données par jour
  day: Date;
  strDay: string;
  level: number;
  message: string;
  hours: IEWHour[];
}

 interface IEWData {
// tableau des prévisions
  generation?: Date;
  days: IEWDay[];
}