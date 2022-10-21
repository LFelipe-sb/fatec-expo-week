import React, { useState, useEffect } from 'react';
import api from '../../Service/api'
import Check from '../../Images/icon-check.png';
import { Link } from 'react-router-dom';
import './style.css';

import { toast } from 'react-toastify';
import { formatDate } from '../../Utils/formatDate';

function Index(props) {

    const [selectedEvents, setSelectedEvents] = useState([]);
    const [allEvents, setAllEvents] = useState([]);
    const [filterItem, setFilterItem] = useState('');
    let tempUser;

    useEffect(() => {
        async function getEvents() {

            if(props.check == 1) {
                const { data } = await api.get(`/checkout/${sessionStorage.getItem("eventId")}`);
                setAllEvents(data);
            } else {
                const { data } = await api.get('/events');
                setAllEvents(data);
            }

        }
        getEvents();
    }, []);

    async function handleScheduling(e) {
        const uniqueSelectedEvents = selectedEvents.filter((item, i) => selectedEvents.indexOf(item) === i);

        e.preventDefault();

        if (!uniqueSelectedEvents.length) {
            toast.warning('Escolha algum evento para salvar!', {
                position: "top-center",
                autoClose: 3500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            return;
        }

        try {
            const data = {
                eventId: uniqueSelectedEvents,
                userId: sessionStorage.getItem('userId')
            }

            await api.post('/schedule', data);

            tempUser = allEvents.map((event) => {
                setSelectedEvents([]);
                return { ...event, isChecked: false }
            });
            setAllEvents(tempUser);

            toast.success('Pronto! Agora você poderá ir aos eventos selecionados.', {
                position: "top-center",
                autoClose: 3500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });

        } catch (err) {
            toast.error(`Houve um erro: ${err}`, {
                position: "top-center",
                autoClose: 3500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
    }

    function handleChange(e) {
        const { name, checked } = e.target;
        if (name === 'allSelected') {
            if (checked) {
                tempUser = allEvents.map((event) => {
                    selectedEvents.push(event.id_evento.toString());
                    return { ...event, isChecked: checked }
                });
            } else {
                tempUser = allEvents.map((event) => {
                    setSelectedEvents([]);
                    return { ...event, isChecked: checked }
                });
            }
            setAllEvents(tempUser)
        } else {
            let tempUser = allEvents.map((event) => event.id_evento == name ? { ...event, isChecked: checked } : event);
            setAllEvents(tempUser);
            if (checked && name !== 'allSelected') {
                selectedEvents.push(name);
            } else {
                selectedEvents.splice(selectedEvents.indexOf(name), 1);
            }
        };
    };

    async function handleCheckout(e) {
        e.preventDefault();

        if (!selectedEvents.length) {
            toast.warning('Escolha algum participante para salvar!', {
                position: "top-center",
                autoClose: 3500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            return;
        }

        try {
            const data = {
                code: allEvents[0].id_evento,
                person: selectedEvents
            }

            await api.put('/checkout', data);

            tempUser = allEvents.map((event) => {
                setSelectedEvents([]);
                return { ...event, isChecked: false }
            });
            setAllEvents(tempUser);

            window.location.reload(true);

        } catch (err) {
            toast.error(`Houve um erro: ${err}`, {
                position: "top-center",
                autoClose: 3500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
    }

    return (
        <div className='cointaner-table'>
            {props.check == 1 ?
                <div>
                    <h3 className='title-table'>Estande: "{allEvents.length > 0 ? allEvents[0].descricao : 'Não há exibições' }"</h3>
                    <h3 className='title-table'>Baixas a considerar</h3>
                </div>
                :
                <></>
            }
            <section className='section-input-buscar'>
                <input className='input-buscar' type='text' placeholder='Buscar...' onChange={(e) => setFilterItem(e.target.value)} />
            </section>
            <table className='table'>
                <thead>
                    <th><img src={Check} /></th>
                    <th>{props.colum2}</th>
                    <th>{props.colum3}</th>
                    {
                        props.check == 1 ? '' : 
                        <>
                            <th>{props.colum4}</th>
                            <th>{props.colum5}</th>
                        </>
                    }                    
                </thead>
                <tbody>
                    <tr>
                        <td style={{backgroundColor: '#AAA'}}>
                            <input
                                type='checkbox'
                                className='checkbox-table'
                                name='allSelected'
                                checked={allEvents.length > 0 ? allEvents.filter((event) => event.isChecked !== true).length < 1 : false}
                                onChange={handleChange}
                                disabled={filterItem ? true : false}
                            />
                        </td>
                        <td style={{backgroundColor: '#AAA'}}>-</td>
                        <td 
                            colSpan={3} 
                            style={{backgroundColor: '#AAA'}}
                        >Selecionar Todos</td>
                    </tr>
                    {
                        allEvents.length === 0 ? '' : 
                        allEvents.filter((val) => {
                            if(props.check == 1) {
                                if(filterItem === '') {
                                    return val;
                                } else if(val.nome.toUpperCase().includes(filterItem.toUpperCase())) {
                                    return val;
                                }
                            } else {
                                if(filterItem === '') {
                                    return val;
                                } else if(val.descricao.toUpperCase().includes(filterItem.toUpperCase())) {
                                    return val;
                                }                                
                            }                            
                        }).map((event) =>
                            <tr key={event.id_evento}>
                                <td>
                                    <input
                                        type='checkbox'
                                        className='checkbox-table'
                                        name={props.check == 1 ? event.id_pessoa : event.id_evento}
                                        checked={event.isChecked}
                                        onChange={handleChange}
                                    />
                                </td>
                                <td>{props.check == 1 ? event.nome :  event.id_evento}</td>
                                <td>{props.check == 1 ? event.email : event.descricao}</td>
                                {
                                    props.check == 1 ? '' : 
                                    <>
                                        <td>{props.check == 1 ? event.email : formatDate(event.data_evento)}</td>
                                        <td>{props.check == 1 ? event.email : event.tipo}</td>
                                    </>
                                }
                            </tr>
                        )
                    } 
                </tbody>
            </table>
            <button className='buttons-table' onClick={props.check == 1 ? handleCheckout : handleScheduling}>Salvar</button>
            {props.check != 1 ?
            <Link to='/'><button className='buttons-table'>Cancelar</button></Link>
            : ''}
        </div>
    )
}

export default Index