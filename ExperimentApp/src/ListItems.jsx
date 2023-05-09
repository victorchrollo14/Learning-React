// Rendering a list of items
const Books = [
  { id: crypto.randomUUID(), title: "Rudest Book Ever", status: "Read" },
  { id: crypto.randomUUID(), title: "Dopamine Nation", status: "Read" },
  { id: crypto.randomUUID(), title: "Behave", status: "Unread" },
];

const singleBook = Books.map(({id, title, status}) => {
  return (
    <ul key={id} className="book">
      <Item itemValue = {title}/>
      <Item itemValue = {status}/>
    </ul>
  )
})

function Item( {itemValue} ) {
    return (
      <li>{itemValue}</li>
    )
}

export function ListItems() {
  return (
    <>
      <ul className="book-list">{singleBook}</ul>
    </>
  );
}
