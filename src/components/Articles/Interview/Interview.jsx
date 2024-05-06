import React from "react";
import "./interview.scss";
import image1 from "../../../assets/images/interview/image_1.webp";
import image2 from "../../../assets/images/interview/image_2.webp";
import image3 from "../../../assets/images/interview/image_3.webp";
import image4 from "../../../assets/images/interview/image_4.webp";
import image5 from "../../../assets/images/interview/image_5.webp";
import image6 from "../../../assets/images/interview/image_6.webp";

import user1 from "../../../assets/images/interview/user_1.webp";
import user2 from "../../../assets/images/interview/user_2.webp";
import user3 from "../../../assets/images/interview/user_3.webp";
import user4 from "../../../assets/images/interview/user_4.webp";

import views_icon from "../../../assets/icons/views_icon.svg";
import comment_icon from "../../../assets/icons/comment_icon.svg";
import subtract_icon from "../../../assets/icons/subtract_icon.svg";

export default function Interview() {
  return (
    <article className="interview">
      <ul className="interview__list">
        <li>Спортивная Борьба</li>
        <li>•</li>
        <li>12 марта, 2024 в 16:03</li>
      </ul>
      <h2>Илья Бессонов дал интервью для телеканала Россия-1</h2>
      <p className="text">
        Илья Бессонов дал интервью после большого перерыва, где поделился
        секретом своего успеха и рассказал методики своих тренировок. Спортсмен
        сделал заявление, что возвращается в спорт и ...
        <span className="read_more">Читать больше</span>
      </p>
      <div className="interview__photos">
        <img src={image1} />
        <img src={image2} />
        <img src={image3} />
        <img src={image4} />
        <img src={image5} />
        <img src={image6} />
      </div>
      <ul className="interview__social">
        <li>
          <img src={views_icon} />
          <p className="text">4.1 K</p>
        </li>
        <li>
          <img src={comment_icon} />
          <p className="text">4</p>
        </li>
      </ul>
      <hr className="interview__line"></hr>

      <div className="interview__comments">
        <article className="interview__comment">
          <img src={user1} />
          <div className="interview__comment-content">
            <p className="text">Вадим Давыдов</p>
            <b>Наконец-то! Рад, что он вернулся в спорт</b>
            <div className="interview__comment-bottom">
              <p className="text">15 минут назад</p>
              <button>Ответить</button>
            </div>

            <article className="interview__subcomment">
              <img src={user2} />
              <div className="interview__subcomment-content">
                <p className="text">Артем Еременко</p>
                <b>Вадим, согласен! Уже давно ждал интервью!</b>
                <div className="interview__subcomment-bottom">
                  <p className="text">30 секунд назад</p>
                  <button>Ответить</button>
                </div>
              </div>
            </article>
          </div>
        </article>

        <article className="interview__comment">
          <img src={user3} />
          <div className="interview__comment-content">
            <p className="text">
              Константин Романов <img src={subtract_icon} />
            </p>
            <b>
              Похоже на шутку. В его возвращении нет ничего плохого, но лучше
              бои местного масштаба, уверен соперники найдутся, Кудряшов
              например или Романов, на крайняк Тищенко.
            </b>
            <div className="interview__comment-bottom">
              <p className="text">20 минут назад</p>
              <button>Ответить</button>
            </div>
          </div>
        </article>

        <article className="interview__comment">
          <img src={user4} />
          <div className="interview__comment-content">
            <p className="text">Анастасия Осипова</p>
            <b>Наш чемпион! Горжусь! 🩷</b>
            <div className="interview__comment-bottom">
              <p className="text">20 минут назад</p>
              <button>Ответить</button>
            </div>
          </div>
        </article>
      </div>

      <button className="see-more__btn">Смотреть все комментарии</button>
    </article>
  );
}
