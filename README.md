# addcontent

Учебный проект по созданию контента на вебстранице

На страницу размещается форма, которая позволяет формировать блок контента:
- заголовок
- изображение
- текст

После сохранения новый блок контента добавляется под предыдущими.

Информация по блоку сохраняется в таблице SQLite.

**Таблицы**

1. Блок
- id
- дата создания
- текущая версия - id контента
- порядковый номер

2. Контент
- id
- id блока 
- дата сохранения
- название
- путь к изображению
- текст

Загрузка картинки: изменение названия перед сохранением
