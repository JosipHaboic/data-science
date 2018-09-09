/**
 * Represents an single labaled value
 * @constructor ({string} label, {number | string | boolean} value)
 * @property {string} label
 * @property {number | string | boolean} value
 */
export class LabeledData {
  public label: string;
  public value: number | string | boolean;

  constructor(
    label: string,
    value: number | string | boolean
  ) {
    this.label = label;
    this.value = value;
  }
}
