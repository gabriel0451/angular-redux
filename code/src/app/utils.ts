import * as enums from './enums';
import { KeyValueItem } from '../app/core/models/common.model';

export class Utils {
  static convertToKeyValueSource(key: string): Array<KeyValueItem> {
    if (key === undefined || key === null) {
      return;
    }
    const result = new Array<KeyValueItem>();
    Object.keys(enums[key]).forEach(pair =>
      result.push({
        key: enums[key][pair],
        value: pair
      }));
    return result;
  }

  static converToValueByKeyValueIitems(keyValueItems, key): string {
    const result = keyValueItems.find(kv => kv.key === key);
    return result ? result.value : key;
  }
}
