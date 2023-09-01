import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Card.css';
import {  Container, Stack, Link, Text, Image} from '@chakra-ui/react';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import uprodit from '../assets/uprodit.png';
import ProfileCard from './ProfileCard';
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


function Testapi() {
    const [searchSpecialities, setSearchSpecialities] = useState(''); 
    const [data, setData] = useState();
    const [filteredData, setFilteredData] = useState([]);
    const [searchUsername, setSearchUsername] = useState('');
    const navigate = useNavigate();


    const handleDelete = (item) => {
        axios.delete(`http://127.0.0.1:5000/delete_user/${item.id}`)}

    const openAddUserForm = () => {
        navigate('/addUserForm');
        };


    const handleSearchBySpecialities = event => {
        const query = event.target.value.toLowerCase();
        setSearchSpecialities(query);
    
        const filteredItems = data.filter(item => {
            return item.specialities.some(speciality =>
                speciality.toLowerCase().includes(query)
            );
        });
        setFilteredData(filteredItems);
    };
    
    const handleSearch = (event) => {
        const query = event.target.value.toLowerCase();
        setSearchUsername(query);
        const filteredItems = data.filter((item) => {
          return (
            (item.first_name && item.first_name.toLowerCase().includes(query)) || 
            (item.last_name_name && item.last_name.toLowerCase().includes(query)) || 
            (item.mail_address && item.mail_address.toLowerCase().includes(query)) || 
            (item.phone_number && item.phone_number.toString().includes(query)) 
          );
        });
      
        setFilteredData(filteredItems);
      };
      
    
    useEffect(() => {
        
        axios.get('http://127.0.0.1:5000/profiles') // Replace with your API endpoint
          .then(response => {
            setFilteredData(response.data);
            setData(response.data);
          })
          .catch(error => {
            console.error('Error fetching data:', error);
          });
      }, [handleDelete]); 

      
    
    return (
    <div>
             <a href="https://www.uprodit.com/"  style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}><Image src={uprodit} alt={'Uprodit'} h={100} /></a>
        <div className="search-container">
            <input
                type="text"
                placeholder="Rechercher des freelances(spécialités,compétences...)"
                value={searchUsername}
                onChange={handleSearch}
                className="search-input"/>
            <input
                type="text"
                placeholder="Filtrer par spécialités"
                value={searchSpecialities}
                onChange={handleSearchBySpecialities}
                className="search-input"/>

                <button onClick={openAddUserForm} className="add-user-button">Ajouter un utilisateur</button>
              </div>
         <ul className="card-list">
                     {filteredData.map(item => (
                 <ProfileCard handleDelete={handleDelete} item={item} key={item.user_id} />
  ))}
</ul>

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
    </div>);
}
export default Testapi;

