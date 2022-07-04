export const ContactsItem = ({ id, name, number, onDelite }) => {
  return (
    <li>
      <p>
        {name}: {number}
      </p>
      <button onClick={() => onDelite(id)}>Удалить</button>
    </li>
  );
};
