##                             Приемочное тестирование.
1.	**Работа модального окна авторизации пользователя**
*    Стартовый экран — экран «Вход». 
Пользователю предлагается ввести почту и пароль, если он уже зарегистрирован, и нажать «Войти». 
Если пользователь еще не зарегистрирован, ему необходимо нажать «Регистрируйтесь здесь».
При вводе неверных данных вылезает сообщение об ошибке 
После заполнения данных и нажатия на кнопку «Войти» пользователь попадает на главный экран канбан-доски. 
Канбан состоит из карточек с задачами, которые расположены под теми колонками, в каком статусе выполнения они находятся.
Карточка задачи содержит в себе категорию, название задачи и срок ее исполнения. Также на карточке в правом верхнем углу присутствуют три точки, при нажатии на которые раскрывается подробный просмотр задачи.*
2.	 **Работа модального окна регистрации пользователя**
На экране регистрации пользователь придумывает имя, почту и пароль. После этого он нажимает «Зарегистрироваться». 
Если пользователь понял, что у него уже есть аккаунт, он может нажать «Войдите здесь» и вернуться на экран «Вход».
После регистрации пользователь снова попадает на стартовый экран «Вход», где вводит логин и пароль заново.

3.	**Переход между окнами регистрации и авторизации**
  При нажатии в окне авторизации на надпись "Регистрируйтесь здесь" вас перекидывает на окно регистрации,а при нажатии в окне регистрации на надпись "Войдите здесь" вас перекинет на окно авторизации 

4.	**Работа модального окна выхода  из приложения**
При нажатии на «Выйти» пользователю раскрывается окно с подтверждением выхода из аккаунта. При нажатии «Да, выйти» происходит выход. При нажатии «Нет, остаться» на экране остается канбан, а окно «Выйти из аккаунта» закрывается. 
5.	**Визуальное соответствие проекта по макету**
Соответствие дизайна проекта по образцу в Figma 
6.	**Реализация эффекта наведения на кнопки**
При наведении и нажатии на кнопку с обводкой она заливается цветом. 
7.	**Отображение имени, название почтового ящика пользователя**
При нажатии на «Окошко пользователя» пользователю раскрывается окно, где отображаются его имя и почта, а также есть возможность выхода из аккаунта. 
8.	**Реализация добавления карточек**
   При нажатии на кнопку «Создать новую задачу» пользователю раскрывается окно с созданием задачи. 
Задний фон с канбаном при открытии окна затемняется. 
Окно создание задачи содержит в себе поля для заполнения: «Название задачи», «Описание задачи». Также есть возможность выбора категории и постановки срока исполнения.
После заполнения информации необходимо нажать на кнопку «Создать задачу» — тогда карточка с задачей падает на доску канбана. 
При нажатии на кнопку «Закрыть» окно с просмотром задачи закрывается, и пользователь снова видит канбан. 
9.	**Реализация удаления карточек**
Если пользователь нажимает «Удалить задачу» в окне создания задачи, задача исчезает с канбан-доски. 
10. **Реализация редактирования карточек**
При нажатии на кнопку «Редактировать задачу» у пользователя появляется возможность взаимодействия с полями «Статус», «Описание задачи» и «Даты».
Объекты, которые выбраны, отображаются цветом 94A6BE.
При редактировании, в поле «Статус» появляются дополнительные статусы. При нажатии на иной (не выбранный) статус задача на канбан-доске перемещается в выбранную колонку.
Чтобы применить все изменения, необходимо нажать на кнопку «Сохранить».
Чтобы отменить изменения, необходимо нажать на кнопку «Отменить».
Чтобы закрыть окно, необходимо нажать на кнопку «Закрыть». 
11.	**Обработка ошибок API запросов**
В случае ошибки со стороны сервера пользователь получает соответствуещее сообщение   

