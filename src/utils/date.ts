import dayjs from 'dayjs';

interface FormatDate {
  (date?: number | Date | string, format?: string): string;
}

/**
 * 日期转化
 *
 * @param {(number | Date)} date new Date()
 * @param {string} format `YYYY-MM-DD HH:mm:ss`
 * @returns {string}
 */
export const _FormatDate: FormatDate = (date, format) => {
  return dayjs(date || new Date()).format(format || 'YYYY-MM-DD HH:mm:ss');
};

/**
 * 获取两个时间段的时间差
 *
 * @param {number} endDate 结束时间
 * @param {number} [startDate] 开始时间(默认当前时间)
 * @param {UnitType} [unit] 返回单位类型(默认分钟)
 * @template
 * ```js
 * _FormatIntervalDate(1574254800000,1574251200000) => 60
 * ```
 * @returns `number` 分钟
 */
export const _FormatIntervalDate = (
  endDate: number | string,
  startDate?: number | string,
  unit?: dayjs.UnitType,
): number => dayjs(endDate).diff(dayjs(startDate || new Date()), unit || 'minute');

/**
 * 秒 => 时分秒
 *
 * @param {number} period
 * @returns
 */
export const _TimeRange = (period: number) => {
  const hour = Math.floor(period / 3600);
  const minute = Math.floor((period - hour * 3600) / 60);
  const second = period - hour * 3600 - minute * 60;
  const formatTime = (val: number) => (val < 10 ? `0${val}` : val);
  return `${hour} 时 ${formatTime(minute)} 分 ${formatTime(second)} 秒 `;
};

/**
 * 日期转化
 *
 * 参考 https://github.com/iamkun/dayjs
 */
export const _Dayjs = dayjs;
