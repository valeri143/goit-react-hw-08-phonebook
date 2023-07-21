import { ContactList } from 'components/ContactList/ContactList';
import { Form } from 'components/Form/Form';
import { BackGroundImage, StyledDiv } from './Contacts.styled';

export const Contacts = () => {
  return (
    <main>
      <BackGroundImage>
        <StyledDiv>
          <section>
            <Form />
          </section>
          <section>
            <ContactList />
          </section>
        </StyledDiv>
      </BackGroundImage>
    </main>
  );
};

export default Contacts;
