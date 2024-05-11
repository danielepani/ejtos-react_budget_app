import {useCallback, useState} from "react";

const CustomSelect = ({ options, value, onChange }) => {
    const [isOpen, setIsOpen] = useState(false);
    const getCurrencyName = useCallback(() => {
        return options.find(option => option.symbol === value).name;
    }, [options, value]);

    const getDropdownClasses = useCallback(() => {
        return `py-0 dropdown-menu${isOpen ? ' show' : ''}`;
    }, [isOpen]);

    const onSelectCurrency = (currency) => {
        onChange(currency);
        setIsOpen(false);
        return false;
    }

    const getLinkClasses = useCallback((symbol) => {
        if (symbol !== value) {
            return 'dropdown-item bg-success';
        }
        return 'dropdown-item';
    }, [value]);

    return (
        <div className="position-relative">
            <div className="dropdown">
                <button className="btn btn-success dropdown-toggle" type="button" id="dropdownMenuButton"
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" onClick={() => setIsOpen(!isOpen)}>
                    Currency: {value} {getCurrencyName()}
                </button>
                <div className={getDropdownClasses()} aria-labelledby="dropdownMenuButton">
                    {options.map((option, index) => {
                        return (
                            <a key={index} data-value={option.symbol} className={getLinkClasses(option.symbol)} href="#" onClick={() => onSelectCurrency(option.symbol)}>
                                {option.symbol} {option.name}
                            </a>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default CustomSelect;
