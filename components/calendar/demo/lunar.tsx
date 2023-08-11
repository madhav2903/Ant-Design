import type { Dayjs } from 'dayjs';
import dayjs from 'dayjs';
import React from 'react';
import type { CellRenderInfo } from 'rc-picker/lib/interface';
import lunisolar from 'lunisolar';
import zhCn from 'lunisolar/locale/zh-cn';
import { Calendar, theme } from 'antd';
import type { CalendarMode } from 'antd/es/calendar/generateCalendar';

lunisolar.locale(zhCn);

const App: React.FC = () => {
  const { token } = theme.useToken();

  const [selectDate, setSelectDate] = React.useState<Dayjs>(dayjs());

  const onPanelChange = (value: Dayjs, mode: CalendarMode) => {
    console.log(value.format('YYYY-MM-DD'), mode);
    setSelectDate(value);
  };

  const wrapperStyle: React.CSSProperties = {
    width: 500,
    border: `1px solid ${token.colorBorderSecondary}`,
    borderRadius: token.borderRadiusLG,
  };

  const lunarStyle: React.CSSProperties = {
    color: token.colorTextTertiary,
  };
  const monthCurrentStyle: React.CSSProperties = {
    color: token.colorTextLightSolid,
  };
  const monthStyle: React.CSSProperties = {
    color: token.colorTextBase,
  };
  const monthCellStyle: React.CSSProperties = {
    width: 120,
  };

  const cellRender = (date: Dayjs, info: CellRenderInfo<Dayjs>) => {
    const d = lunisolar(date.toDate());
    const lunar = d.lunar.getDayName();
    const solarTerm = d.solarTerm?.name;
    if (info.type === 'date') {
      return (
        <div>
          {info.originNode}
          {info.type === 'date' && <div style={lunarStyle}>{solarTerm || lunar}</div>}
        </div>
      );
    }

    if (info.type === 'month') {
      const month = d.lunar.getMonthName();
      return React.cloneElement(info.originNode, {
        style: monthCellStyle,
        children: [
          ...info.originNode.props.children,
          <span key="m" style={selectDate?.isSame(date, 'month') ? monthCurrentStyle : monthStyle}>
            （{month}）
          </span>,
        ],
      });
    }
  };

  const getYearLabel = (oriLabel: string, year: number) => {
    const d = lunisolar(new Date(year, 0));
    return `${oriLabel}（${d.format('cYcZ年')}）`;
  };

  const getMonthLabel = (oriLabel: string, month: number, value: Dayjs) => {
    const d = lunisolar(new Date(value.year(), month));
    const lunar = d.lunar.getMonthName();
    return `${oriLabel}（${lunar}）`;
  };

  return (
    <div style={wrapperStyle}>
      <Calendar
        getYearLabel={getYearLabel}
        getMonthLabel={getMonthLabel}
        fullCellRender={cellRender}
        fullscreen={false}
        onPanelChange={onPanelChange}
      />
    </div>
  );
};

export default App;
