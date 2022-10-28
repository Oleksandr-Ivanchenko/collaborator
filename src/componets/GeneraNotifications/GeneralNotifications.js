import React from 'react';
import { Switcher } from '../Switcher';
import './style.scss';
import SelectLabels from '../Select/SelectLabels';
import { CustomizedTooltip } from '../CustomizedTooltips/CustomizedTooltips';

export const GeneralNotifications = ({
  state,
  setState
}) => {
  return (
    <section className="generalNotifications">
      <h4 className="generalNotifications__title">Общие уведомления</h4>
      <div className="generalNotifications__row">
        <div>Приветсвенная серия</div>
        <Switcher 
          isChecked={state.series}
          onCheck={() => setState({
            ...state,
            series: !state.series,
          })}
        />
        <div className="generalNotifications__text">4 полезных и емких письма в течение месяца</div>
      </div>

      <div className="generalNotifications__row">
        <div>Образовательные выбинары</div>
        <Switcher 
          isChecked={state.webinars}
          onCheck={() => setState({
            ...state,
            webinars: !state.webinars,
          })}
        />
        <div className="generalNotifications__text">
          Бесплатные вебинары проходят 1 раз в 2 недели.
          Вы будете получать 2 письма с напоминанием
          о предстоящем вебинаре
        </div>
      </div>

      <div className="generalNotifications__row">
        <div className="generalNotifications__messages">
          Личные сообщения
          <CustomizedTooltip />
        </div>
        <Switcher 
          isChecked={state.privateMessages}
          onCheck={() => setState({
            ...state,
            privateMessages: !state.privateMessages,
          })}
        />
        <SelectLabels />
      </div>
    </section>
  );
};