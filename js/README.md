## Зачем 
Для того чтобы унифицировать стиль написания кода, легче замечать ошибки 
и не париться о форматировании ибо для Webstorm и VSCode предусмотрены
возможности автоматического форматирования.

Если хотите дополнить/изменить конфиг, вперед, давайте обсуждать,
ибо на данный момент по сути это просто конфиг airbnb.

## Установка

- В первую очередь инициализируем проект с помощью `npm init`.
- После установим сам ESLint командой `npm install --save-dev eslint`
- Теперь нам нужен конфигурационный файл. Просто возьмите его из данного
  репозитория и закиньте в корень проекта.

## Проверка ошибок и форматирование

Тут дорожки слегка расходятся, ибо у Webstorm и VSCode слегка разные пути.

### Webstorm

В первую очередь надо дать понять, откуда брать конфиг, для этого
зайдем в `Settings -> Languages & Frameworks -> JavaScript -> Code Quality Tools -> ESLint`
и установим переключатели в положение как на скриншоте ниже.

![Webstorm settings 1](./assets/webstorm-eslint1.png)

Перейдем к автоформатированию.
Во все тех же настройках переходим в `Settings -> Keymap `, в строке поиска пишем "Eslint" и
кликаем по пункту Fix ESLint problems. После выбираем сочетание клавиш, по нажатию которого
файлы проекта будут автоматически отформатированы (у меня `Alt+Shift+F`).

![Webstorm settings 2](./assets/webstorm-eslint2.png)

Также после этого советую проверить, нет ли на выбранное Вами сочетание
установленных ранее действий. Для этого кликните на иконку в правом верхнем углу
и нажмите нужное сочетание. Вам выдаст список всех действий, установленных на это сочетание.

![Webstorm settings 3](./assets/webstorm-eslint3.png)


### VSCode

Переходим на вкладку расширений и в поиске пишем "Eslint".
Выбираем первый вариант и устанавливаем.

![VSCode settings 1](./assets/vscode-eslint1.png)

Далее нам надо установить ESLint как форматтер по умолчанию.
Для этого в настройках находим пункт Default Formatter и в выпадающем меню выбираем ESLint.

![VSCode settings 2](./assets/vscode-eslint2.png)

После чего можем отформатировать файл нажав сочетание клавиш `Alt+Shift+F`.