import {
  useParams,//Для работы с параметрами, передаваемыми в адресной строке.
} from 'react-router-dom';

function SinglePage() {
  console.log(`${JSON.stringify(useParams())}`);
  const {category, title} = useParams();
  return(
    <div>
      category = {category} <br/>
      title = {title}
    </div>
  )
}

export default SinglePage;