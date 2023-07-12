# CLI додаток - CONTACTS

 Отримуємо і виводимо весь список контактів у вигляді таблиці (console.table)
 
node index.js --action="list"
![list](https://i.ibb.co/bWdRLGj/list.jpg)
[https://ibb.co/4mNgM0w]

***********************************************************************************************************

 Отримуємо контакт по id і виводимо у консоль об'єкт контакту або null, якщо контакту з таким id не існує.
 
node index.js --action="get" --id 05olLMgyVQdWRwgKfg5J6
![get](https://i.ibb.co/7tRs4DR/get.jpg)
[https://ibb.co/YByHZSy]

***********************************************************************************************************

 Додаємо контакт та виводимо в консоль об'єкт новоствореного контакту
 
node index.js --action="add" --name Mango --email mango@gmail.com --phone 322-22-22
![add](https://i.ibb.co/m9XyGtC/add.jpg)
[https://ibb.co/3pMF7Wy]

***********************************************************************************************************

 Видаляємо контакт та виводимо в консоль об'єкт видаленого контакту або null, якщо контакту з таким id не існує.
 
node index.js --action="remove" --id qdggE76Jtbfd9eWJHrssH
![remove](https://i.ibb.co/7nSFqn9/remove.jpg)
[https://ibb.co/QPJG4P5]

***********************************************************************************************************

 Фінальна версія
 
![final-list](https://i.ibb.co/YtqCgsR/final-list2.jpg)
[https://ibb.co/Q61g0wb]
