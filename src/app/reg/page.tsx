'use client';
import React from "react";
import useSound from 'use-sound';;
import mySound from "eating-with-mouth-lapping_mkqomsn_.mp3";


export default function Home() {
  const [play] = useSound("/eating-with-mouth-lapping_mkqomsn_.mp3");

  React.useEffect(() => {
    play(); // Play sound on component mount]);
  }, []);

  return (
    <div className="container">
      <div className="frame">
        {/* First layout */}
        <section className="section page1">
          <div className="div">
            <div className="text-wrapper">FUKCATHON</div>

            <div className="div-wrapper">
              <button className="text-wrapper-2" onClick={() => alert("Button clicked!")}>
                Кнопка
              </button>
            </div>

            <div className="text-wrapper-3">Нажмите для начала регистрации</div>

            <div className="overlap">
              <p className="p">Создай или найди свой хакатон</p>

              <div className="group">
                <div className="overlap-group">
                  <div className="text-wrapper-4">FUKCATHON</div>

                  <div className="text-wrapper-5">FUKCATHON</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Second layout */}
        <section className="section page2">
          <div className="div">
            <div className="overlap-group-wrapper">
              <div className="overlap-group">
                <div className="text-wrapper-4">FUKCATHON</div>

                <div className="text-wrapper-5">FUKCATHON</div>
              </div>
            </div>

            <div className="text-wrapper-6">FUKCATHON коммеки</div>

            <div className="div-wrapper-2">
              <button className="text-wrapper-2" onClick={() => alert("Button clicked!")}>
                Оставить комментарий
              </button>
            </div>
          </div>
        </section>

        {/* Third layout */}
        <section className="section page3">
          <div className="div">
            <div className="overlap-2">
              <div className="div-wrapper-3">
                <p className="text-wrapper-7">
                  где заказать пиццу дешёво? пиздец голодные сидим щас на
                  хакатоне с командой и жрать хотим
                </p>
              </div>

              <div className="text-wrapper-8">FUKCATHON коммеки</div>
            </div>

            <div className="overlap-3">
              <div className="div-wrapper-4">
                <p className="text-wrapper-9">Да я ебу эту звездочку</p>
              </div>

              <p className="text-wrapper-10">
                пользователь с картой 7402 3340 1238 2239 пароль 112
              </p>
            </div>

            <div className="overlap-4">
              <div className="div-wrapper-4">
                <p className="text-wrapper-11">
                  падскажите как зарегистрировать свой ахуенный хакатон??
                </p>
              </div>

              <div className="div-2">
                <p className="text-wrapper-12">
                  ОТВЕТ пользователь с картой 8433 2093 1145 6640 пароль 904
                </p>

                <p className="text-wrapper-13">
                  Чем докажешь что он ахуенный ?<br />
                  Тока избранные тут свое постят
                </p>
              </div>

              <p className="text-wrapper-14">
                пользователь с картой 2324 5930 5503 1223 пароль 049
              </p>
            </div>

            <div className="div-wrapper-5">
              <div className="text-wrapper-9">za rodinu mat`!</div>
            </div>

            <p className="text-wrapper-15">
              пользователь с картой 4200 3320 4557 1120 пароль 831
            </p>

            <p className="text-wrapper-16">
              пользователь с картой 4200 3320 4557 1120 пароль 831
            </p>
          </div>
        </section>

        {/* Section Fourth */}
        <section className="section page4">
          <div className="div">
            <div className="overlap-wrapper">
              <div className="overlap-group">
                <div className="text-wrapper-17">FUKCATHON</div>

                <div className="text-wrapper-18">FUKCATHON</div>
              </div>
            </div>

            <div className="overlap-5">
              <div className="text-wrapper-19">FUKCATHON регистрация</div>

              <div className="div-wrapper-6">
                <input
                  type="text"
                  className="text-wrapper-20"
                  id="fio"
                  name="fio"
                  placeholder="ФИО"
                ></input>
                {/* <div className="text-wrapper-20">ФИО</div> */}
              </div>
            </div>

            <div className="group-2">
              <div className="overlap-group">
                <div className="text-wrapper-17">FUKCATHON</div>

                <div className="text-wrapper-18">FUKCATHON</div>
              </div>
            </div>

            <div className="div-wrapper-7">
              <input
                type="text"
                className="text-wrapper-20"
                id="email"
                name="email"
                placeholder="Почта"
              ></input>
              {/* <div className="text-wrapper-20">почта</div> */}
            </div>

            <div className="div-wrapper-8">
              <input
                type="text"
                className="text-wrapper-20"
                id="card"
                name="card"
                placeholder="Номер карты"
              ></input>
              {/* <div className="text-wrapper-20">номер карты</div> */}
            </div>

            <div className="div-wrapper-9">
              <input
                type="text"
                className="text-wrapper-20"
                id="cvv"
                name="cvv"
                placeholder="CVV карты"
              ></input>
              {/* <div className="text-wrapper-20">пароль 3 цифры</div> */}
            </div>

            <div className="div-wrapper-10">
              <input
                type="text"
                className="text-wrapper-20"
                id="team_name"
                name="team_name"
                placeholder="Название команды"
              ></input>
              {/* <div className="text-wrapper-20">название команды</div> */}
            </div>

            <div className="div-wrapper-11">
              <input
                type="text"
                className="text-wrapper-20"
                id="link"
                name="link"
                placeholder="Вставьте ссылку"
              ></input>
              {/* <div className="text-wrapper-21">вставьте ссылку</div> */}
            </div>

            <div className="overlap-6">
              <div className="text-wrapper-22">
                я<br />
                звезда
              </div>
            </div>
          </div>
        </section>

        {/* Section Fifth */}
        <section className="section page5">
          <div className="div">
            <div className="text-wrapper-23">FUKCATHON регистрация события</div>

            <div className="div-wrapper-12">
              <button className="text-wrapper-2" onClick={() => alert("Button clicked!")}>
                Кнопка
              </button>
            </div>

            <div className="div-wrapper-13">
              <input
                type="text"
                className="text-wrapper-20"
                id="event_name"
                name="event_name"
                placeholder="Название события"
              ></input>
              {/* <div className="text-wrapper-20">Название события</div> */}
            </div>

            <div className="div-wrapper-14">
              <input
                type="text"
                className="text-wrapper-24"
                id="event_desc"
                name="event_desc"
                placeholder="Описание"
              ></input>
              {/* <div className="text-wrapper-24">Описание</div> */}
            </div>

            <div className="div-wrapper-15">
              <input
                type="text"
                className="text-wrapper-24"
                id="event_place"
                name="event_place"
                placeholder="Место проведения"
              ></input>
              {/* <div className="text-wrapper-24">Место проведения</div> */}
            </div>

            <div className="div-3">
              <div className="text-wrapper-25">Дата</div>
            </div>
          </div>
        </section>

        {/* Section Sixth */}
        <section className="section page6">
          <div className="div">
            <div className="overlap-7">
              <div className="overlap-8">
                <div className="overlap-9">
                  <div className="text-wrapper-26">FUKCATHON тех.поддержка</div>

                  <div className="text-wrapper-27">FUKCATHON</div>

                  <div className="text-wrapper-28">FUKCATHON</div>

                  <div className="text-wrapper-28">FUKCATHON</div>

                  <div className="text-wrapper-29">FUKCATHON</div>

                  <div className="rectangle" />

                  <div className="text-wrapper-30">чем могу помочь?</div>
                </div>

                <div className="div-wrapper-16">
                  <button className="text-wrapper-2" onClick={() => alert("Button clicked!")}>
                    отправить
                  </button>
                </div>
              </div>

              <div className="text-wrapper-31">FUKCATHON</div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
