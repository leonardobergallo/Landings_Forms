import React from "react";
import DatePicker, {registerLocale} from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import es from 'date-fns/locale/es';

registerLocale('es', es)

const InputDatePicker = ({
    id,
    placeholder = "",
    selected,
    callback,
    formato = "dd/MM/yyyy",
    value,
    maxdate,
    mindate
}) => {

    return (
        
        <DatePicker 
            locale="es"
            selected={selected}
            onChange={(e) => callback(e)} 
            placeholderText={placeholder}
            dateFormat = {formato}
            value = {value}
            isClearable
            closeOnScroll={false}
            maxDate={maxdate}
            minDate={mindate}
            showMonthDropdown
            showYearDropdown
            dropdownMode="select"

        />

    );
};

export default InputDatePicker;