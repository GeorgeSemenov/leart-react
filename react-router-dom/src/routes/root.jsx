import {
  Outlet, 
  Link, 
  Form,//Импортируем компонент для работы с формами
  useLoaderData//функция для получения доступа к подгружаемым данным с сервера
} from 'react-router-dom';
import {
  getContacts,
  createContact //самодельная фукнция создания контакта, возвращает массив с новым контактом
} from '../contacts.js';

export async function action() {//Создаём функцию action которая и будет работать при нажатии на кнопку(потому что так формы и работают, при нажатии на кнопку submit они запускают событие action)
  const contact = await createContact();//Получаем новый массив кектактов (новый контакт будет в самом начале)
  return { contact };
}

export async function loader(){//Получаем контакты с сервера
  const contacts = await getContacts();
  return {contacts};
}
export default function Root() {
  const {contacts} = useLoaderData();//сохраняем данные о контактах в переменную
  return (
    <>
      <div id="sidebar">
        <h1>React Router Contacts</h1>
        <div>
          <form id="search-form" role="search">
            <input
              id="q"
              aria-label="Search contacts"
              placeholder="Search"
              type="search"
              name="q"
            />
            <div
              id="search-spinner"
              aria-hidden
              hidden={true}
            />
            <div
              className="sr-only"
              aria-live="polite"
            ></div>
          </form>
          {/*
          <form method="post">
            <button type="submit">New</button>
          </form>*/}
          <Form method="post">
            <button type="submit">New</button>
          </Form>
        </div>
        <nav>
          {contacts.length
            ?(
              <ul>
                {contacts.map((contact) => (
                  <li key={contact.id}>
                    <Link to={`contacts/${contact.id}`}>
                      {contact.first || contact.last ? (
                        <>
                          {contact.first} {contact.last}
                        </>
                      ) : (
                        <i>No Name</i>
                      )}{" "}
                      {contact.favorite && <span>★</span>}
                    </Link>
                  </li>
                ))}
              </ul>
            ) : (
              <p> 
                <i> Нет контактусов</i>
              </p>
            )
          }
        </nav>
      </div>
      <div id="detail">
        <Outlet/>
      </div>
    </>
  );
}