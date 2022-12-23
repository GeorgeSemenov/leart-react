import {useState} from 'react';

function BlockPage({setSearchParams}) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;//записываем данные всей формы в переменную

    const query = form.search.value; //т.к. мы в форме указали input с name search, то теперь мы можем оттуда доставать данные
    const isLatest = form.latest.checked;//Также проверяем форму на предмет нажатия чекбокса и записываем эти данные в переменную.

    const params = {};

    if(query.length) params.post = query; //Если запрос существует (его длина больше нуля символов) то записываем в params
    if(isLatest) params.latest = true;

    setSearchParams(params)//Изменяем адресную строку - теперь она будет хранить запрос внутри адресной строки.
    //Т.к. мы изменили адресную строку, то значит и изменили переменную postQuery
  }
  return(
    <form 
      autoComplete="off"
      onSubmit = {handleSubmit}
    >
      <input type="search" name="search"/>
      <label>
        <input type="checkbox" name="latest"></input>
        New only
      </label>
      <input type="submit" value="search"/>
    </form>
  )
}

export default BlockPage;