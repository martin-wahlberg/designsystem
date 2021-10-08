import { InputGroup } from '@sb1/ffe-form-react';
import SearchableDropdown from '@sb1/ffe-searchable-dropdown-react';
import { useState } from 'react';

() => {
    const companies = [{
        organizationName: 'Bedriften',
        organizationNumber: '912602370',
        quantityUnprocessedMessages: 5,
    },
    {
        organizationName: 'Sønn & co',
        organizationNumber: '812602372',
        quantityUnprocessedMessages: 3,
    },
    {
        organizationName: 'Beslag skytter',
        organizationNumber: '812602552',
        quantityUnprocessedMessages: 1,
    }]
    const labelId = 'labelId1';
    const [selectedOption, setSelectedOption] = useState(null);
    return (
        <InputGroup label="Velg bedrift" labelId={labelId}>
            <SearchableDropdown
                labelId={labelId}
                inputProps={{ placeholder: 'Velg' }}
                dropdownAttributes={['organizationName', 'organizationNumber']}
                dropdownList={companies}
                noMatch={{ text: 'Søket ga ingen treff' }}
                onChange={item => setSelectedOption(item)}
                searchAttributes={['organizationName', 'organizationNumber']}
                locale="nb"
            />
        </InputGroup>
    );
}