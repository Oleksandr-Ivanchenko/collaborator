import { Switcher } from "../Switcher";
import './style.scss';

export const TelegramNotifications = ({
  state,
  setState
}) => {
  return (
    <section className="telegramNotifications">
      <h4 className="telegramNotifications__title">Уведомление по телеграму</h4>
      <div className="telegramNotifications__row">
        <div>Новости</div>
        <Switcher
          isChecked={state.news}
          onCheck={() => {
            setState({
              ...state,
              news: !state.news
            })
          }}
        />
      </div>  
    </section>
  );
};