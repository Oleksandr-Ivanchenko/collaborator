import BasicModal from "../BasicModal/BasicModal";
import ChipsArray from "../ChipsArray/ChipsArray";
import SelectLabels from "../Select/SelectLabels";
import { Switcher } from "../Switcher";
import './style.scss';

export const SiteNotifications = ({
  state,
  setState
}) => {
  return (
    <section className="siteNotifications">
      <h4 className="siteNotifications__title">Уведомление по сайтам</h4>

      <div className="siteNotifications__row">
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

      <h5>Поисковые агенты</h5>
      <div className="siteNotifications__row">
        <div className="siteNotifications__subtitle">
          Бизнес
          <BasicModal />
          <ChipsArray />
        </div>
        <Switcher 
          isChecked={state.business}
          onCheck={() => {
            setState({
              ...state,
              business: !state.business
            })
          }}
        />
        <div className="siteNotification__text">Поисковый агент присылает 1 письмо в неделю и только 
          при условии, что найдены новые площадки
        </div>
      </div>

      <div className="siteNotifications__row">    
        <div className="siteNotifications__subtitle">
          123
          <ChipsArray />
          <BasicModal />
        </div>
        <Switcher 
          isChecked={state.one}
          onCheck={() => {
            setState({
              ...state,
              one: !state.one
            })
          }}
        />
      </div>

      <div className="siteNotifications__row">  
        <div className="siteNotifications__subtitle">
          SEO
          <ChipsArray />
          <BasicModal />
        </div>
        <Switcher 
          isChecked={state.seo}
          onCheck={() => {
            setState({
              ...state,
              seo: !state.seo
            })
          }}
        />
      </div>  
      
      <div className="siteNotifications__row">
        <div className="siteNotifications__subtitle">
          Бурж ссылки
          <ChipsArray />
          <BasicModal />
        </div>
        <Switcher 
          isChecked={state.links}
          onCheck={() => {
            setState({
              ...state,
              links: !state.links
            })
          }}
        />
      </div>
    
      <div className="siteNotifications__row">
        <div className="siteNotifications__busines">
          <h5>Рекламные кампании</h5>
          <div>Строительство домов в Украине</div>
        </div>
        <Switcher 
          isChecked={state.housesInUkraine}
          onCheck={() => {
            setState({
              ...state,
              housesInUkraine: !state.housesInUkraine
            })
          }} 
        />
        <SelectLabels />
      </div>

      <div className="siteNotifications__row">
        <div>Строительство домов в Украине</div>
        <Switcher 
          isChecked={state.housesInUkrain}
          onCheck={() => {
            setState({
              ...state,
              housesInUkrain: !state.housesInUkrain
            })
          }} 
        />
        <SelectLabels />
      </div>
    </section>
  );
};