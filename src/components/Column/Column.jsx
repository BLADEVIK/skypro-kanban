import Card from "../Card/Card"

function Column({title}){
    return (
        <div className="main__column">
        <div className="column__title">
          <p>{title}</p>
        </div>
        <div className="cards">
          <Card
          name={"Карточка"}
          theme={"Тема"}
          date={"25.10.2024"}
          />
          <Card
          name={"Карточка2"}
          theme={"Тема2"}
          date={"25.10.2025"}
          />
          <Card
          name={"Карточка3"}
          theme={"Тема3"}
          date={"25.10.2026"}
          />
        </div>
      </div>
    )
}
export default Column