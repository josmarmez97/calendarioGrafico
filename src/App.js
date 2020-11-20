import React, { useState } from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import DatePicker, {registerLocale, startDate, endDate} from 'react-datepicker';
import { Dropdown , DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import 'react-datepicker/dist/react-datepicker.css';
import es from 'date-fns/locale/es';

registerLocale("es",es);



function App() {
  
  //const [selectedDate, setSelectedDate]= useState(null);
 const [startDate, setStartDate] = useState(new Date());
 const [endDate, setEndDate] = useState(new Date());
 const [date, setDate] = useState(new Date());

 

  const [dropdown,setDropdown]= useState(false);

  const openCloseDropdown=()=>{setDropdown(!dropdown);}


  return (
    <div className="App">
                    <br></br>
                    <h1>Calendario de facturas</h1>
                    <br></br>
                    <label>Fecha de inicio</label>
                      <br></br>                    
                    <DatePicker
                                selected={startDate}
                                selectsStart
                                startDate={startDate}
                                endDate={endDate}
                                onChange={date => setStartDate(date)}
                                dateFormat='dd/MM/yyyy'
                                maxDate={new Date()}
                                disabledKeyboardNavigation
                                locale="es"                                
                            />
                    <br></br>
                    <label>Fecha de fin</label>
                    <br></br>
                    <DatePicker
                                selected={endDate}
                                selectsEnd
                                startDate={startDate}
                                endDate={endDate}
                                minDate={startDate}
                                onChange={date => setEndDate(date)}
                                dateFormat='dd/MM/yyyy'
                                maxDate={new Date()}
                                disabledKeyboardNavigation
                                locale="es"
                              />

                       <br></br>
                    <br></br>
                    <label>Periódo</label>
                    <br></br>
                        <Dropdown isOpen={dropdown} toggle={openCloseDropdown} direction="right"> 

                                <DropdownToggle caret>Seleccionar</DropdownToggle>
                                <DropdownMenu>
                                          <DropdownItem header></DropdownItem>
                                          <DropdownItem divider/>
                                          <DropdownItem>Mensual</DropdownItem>
                                          <DropdownItem divider/>
                                          <DropdownItem>Bimestral</DropdownItem>
                                          <DropdownItem divider/>
                                          <DropdownItem>Semestral</DropdownItem>
                                          <DropdownItem divider/>
                                          <DropdownItem>Anual</DropdownItem>
                                          <DropdownItem divider/>
                                    </DropdownMenu>         
                        </Dropdown>

                        <br></br>
                    <br></br>
                    <label>Día de corte</label>
                    <br></br>
                    <DatePicker
                                selected={date} 
                                onChange={date => setDate(date)}
                                maxDate={new Date()}
                                disabledKeyboardNavigation
                                locale="es"
                              />
                    <br></br>
                    <label>Dia de impresión</label>
                    <br></br>
                    <DatePicker
                                selected={date} 
                                onChange={date => setDate(date)}
                                maxDate={new Date()}
                                disabledKeyboardNavigation
                                locale="es"
                              />

           <br></br>
           <br></br>
           <br></br>
          <table className="table">
              <thead className="thead-dark">
                <tr>
                  <th>
                    Numero
                  </th>
                  <th>
                    Fecha Incio
                  </th>
                  <th>
                    Fecha Final
                  </th>
                  <th>
                    Fecha de impresión
                  </th>
                </tr>
              </thead>
              <tbody>
                <th scope="row">1</th>
                <td>01/01/2020</td>
                <td>31/01/2020</td>
                <td>25/01/2020</td>
              </tbody>
            </table>          

    </div>
  );
}

export default App;
