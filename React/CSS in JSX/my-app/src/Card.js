const date = new Date();
const dateName = date.getDate();
const monthName = date.getMonth();
const yearName = date.getFullYear();
const todoTitle = "ToDo App"
const todoDesc = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum aut consectetur esse illum similique temporibus fugiat eveniet optio quam amet";

function Card(){
  return <div className='card'>
          <h3 className='cardTitle'>{todoTitle}</h3>
          <p className='cardDesc'>{todoDesc}</p>
          <p className='cardFooter'>{dateName+"/"+monthName+"/"+yearName}</p>
          </div>
}

export default Card;