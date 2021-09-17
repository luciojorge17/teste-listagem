import { useState } from 'react';
import { ButtonDropdown} from 'reactstrap';

type Props = {
    children: JSX.Element
}

export function CustomDropdown({children}:Props) {

    const [dropdownOpen, setOpen] = useState(false);

    const toggle = () => setOpen(!dropdownOpen);

    return (
        <ButtonDropdown direction="left" isOpen={dropdownOpen} toggle={toggle} className="btn-custom">
            {children}
        </ButtonDropdown>
    )
}