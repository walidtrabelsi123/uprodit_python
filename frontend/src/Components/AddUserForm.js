import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Card.css';
import {  Container, Stack, Link, Text, Image} from '@chakra-ui/react';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import uprodit from '../assets/uprodit.png';
import { useNavigate } from "react-router-dom";


const SocialButton = ({
    children,
    label,
    href,
}) => {
    return (
        <button
            className="social-button"
            onClick={() => window.open(href, '_blank')}
        >
            {children}
            <span>{label}</span>
        </button>
    );
};

const AddUserForm = () => {
  const [newFirstName, setNewFirstName] = useState('');
  const [newLastName, setNewLastName] = useState('');
  const [newEmailAddress, setNewEmailAddress] = useState('');
  const [newPhoneNumber, setNewPhoneNumber] = useState('');
  const [newUserSpecialities, setNewUserSpecialities] = useState('');
  const [data, setData] = useState([]);
  const navigate = useNavigate();


 

  useEffect(() => {
    axios.post('http://127.0.0.1:5000/add_user')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const handleAddUser = () => {
    const newUser = {
      first_name: newFirstName,
      last_name: newLastName,
      email_address: newEmailAddress,
      phone_number: newPhoneNumber,
      specialities: newUserSpecialities.split(', ')
    };
      axios.post('http://127.0.0.1:5000/add_user', newUser)
      .then(response => {
        console.log('User added:', response.data);
        setNewFirstName('');
        setNewLastName('');
        setNewEmailAddress('');
        setNewPhoneNumber('');
        setNewUserSpecialities('');
      })
      .catch(error => {
        console.error('Error adding user:', error);
      });
  };

  return (
    <div>
        <a href="https://www.uprodit.com/" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Image src={uprodit} alt={'Uprodit'} h={100} /></a>
        <div className="home-button-container"> 
        <button 
        onClick={() => navigate('/')}
        className="home-button">
             Back to Home
             </button>
             </div>
        <input
        type="text"
        placeholder="Prénom"    
        value={newFirstName}
        onChange={e => setNewFirstName(e.target.value)}
        className="input-field"
      />
      <input
        type="text"
        placeholder="Nom de famille"
        value={newLastName}
        onChange={e => setNewLastName(e.target.value)}
        className="input-field"
      />
      <input
        type="email"
        placeholder="Adresse e-mail"
        value={newEmailAddress}
        onChange={e => setNewEmailAddress(e.target.value)}
        className="input-field"
      />
      <input
        type="tel"
        placeholder="Numéro de téléphone"
        value={newPhoneNumber}
        onChange={e => setNewPhoneNumber(e.target.value)}
        className="input-field"
      />
      <input
        type="text"
        placeholder="Spécialités"
        value={newUserSpecialities}
        onChange={e => setNewUserSpecialities(e.target.value)}
        className="input-field"
      />
        <button className="add-user-button" onClick={handleAddUser}>
          Add User
        </button>

        <div className='footer'>
            <div style={{ backgroundColor: '#9ddecf', color: 'gray.700', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                maxWidth: '6xl', padding: '4', margin: '0 auto', borderTopWidth: '1px',borderStyle: 'solid',borderColor: 'gray', }}>
            <Container as={Stack} maxW={'6xl'} py={4} spacing={4} justify={'center'} align={'center'}>
                <Image src={uprodit} alt={'Uprodit'} h={40} />
                <Stack direction={['column', 'row']} spacing={[10]}>
                        <Link as="a" href={'https://doc.uprodit.com/'} className="footer-link">
                           Documentation </Link>
                        <Link as="a" href={'https://www.uprodit.com/about'} className="footer-link">
                           About</Link>
                        <Link as="a" href={'https://status.uprodit.com/'} className="footer-link">
                           Status</Link>
                        <Link as="a" href={'https://www.uprodit.com/#contactez'} className="footer-link">
                           Contact</Link>
                </Stack>

            </Container>
                <Container as={Stack} maxW={'6xl'} py={4} direction={{ base: 'column', md: 'row' }} spacing={4} justify={{ base: 'center', md: 'space-between' }} align={{ base: 'center', md: 'center' }}>
                    <Text>
                        © {new Date().getFullYear()} Uprodit Challenge. All rights reserved
                    </Text>
                    <Stack direction={'row'} spacing={6}>
                        <SocialButton label={'Linkedin'} href={'https://www.linkedin.com/in/trabelsi-walid-861565201/'}>
                            <FaLinkedinIn className="twitter-link" />
                        </SocialButton>
                        <SocialButton label={'Github'} href={'https://github.com/walidtrabelsi123'}>
                            <FaGithub className="github-link" />
                        </SocialButton>
                    </Stack>
                </Container>
            </div>
        </div>
      </div>
   
  );
};

export default AddUserForm;
