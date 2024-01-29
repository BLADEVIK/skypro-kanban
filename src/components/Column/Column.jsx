import Card from "../Card/Card";
import { Cards, ColumnTitle, MainColumn } from "./Column.styled";
function Column({ title, cardList }) {
  return (
    <MainColumn>
      <ColumnTitle>
        <p>{title}</p>
      </ColumnTitle>
      <Cards>
        {cardList.map((card) => (
          <Card
            id={card._id}
            name={card.title}
            theme={card.topic}
            date={card.date}
            key={card._id}
          />
        ))}
      </Cards>
    </MainColumn>
  );
}
export default Column;
