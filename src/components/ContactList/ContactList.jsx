import { Text, TextList, Button, Box } from './ContactList-styled';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { useDispatch } from 'react-redux';
import {
  selectError,
  selectIsLoading,
  selectFilteredContacts,
} from 'redux/contactListSlice/selectors';
import { setFilter } from 'redux/filterSlice';
import { deleteContact } from 'redux/contactListSlice/operations';
import { useEffect, useState } from 'react';
import { fetchContacts } from 'redux/contactListSlice/operations';
import { RotatingLines, ThreeDots } from 'react-loader-spinner';
import { FaTrashAlt } from 'react-icons/fa';

export const ContactList = () => {
  const [deletingContactId, setDeletingContactId] = useState(null);
  const [onDeleting, setOnDeleting] = useState(false);
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const contacts = useSelector(selectFilteredContacts);

  const handleDelete = id => {
    setDeletingContactId(id);
    setOnDeleting(true);
    dispatch(deleteContact(id))
      .then(() => {
        setDeletingContactId(null);
        setOnDeleting(false);
      })
      .catch(() => {
        setDeletingContactId(null);
        setOnDeleting(false);
      });
  };

  return (
    <Box>
      <h2>Contacts</h2>
      <Text>Find contacts by name</Text>
      <input
        onChange={e => dispatch(setFilter(e.target.value))}
        type="text"
        name="filter"
      />
      <TextList>
        {isLoading && !error && !onDeleting && (
          <ThreeDots
            height="40"
            width="40"
            radius="9"
            color="white"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClassName=""
            visible={true}
          />
        )}
        {contacts.map(contact => (
          <li key={contact.id} style={{ marginBottom: 10 }}>
            {contact.name} : {contact.number}
            <Button onClick={() => handleDelete(contact.id)}>
              {deletingContactId === contact.id ? (
                <RotatingLines
                  strokeColor="white"
                  strokeWidth="5"
                  animationDuration="0.75"
                  width="15"
                  visible={true}
                />
              ) : (
                <FaTrashAlt />
              )}
            </Button>
          </li>
        ))}
      </TextList>
    </Box>
  );
};
