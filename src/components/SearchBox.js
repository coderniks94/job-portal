import React, { useState } from 'react';
import { Form, FormControl, Button, Row, Col } from 'react-bootstrap';

const SearchBox = () => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // Do something with the search query here, such as making an API call
        console.log(`Searching for: ${searchQuery}`);
    };

    const handleChange = (event) => {
        setSearchQuery(event.target.value);
    };

    return (
        <Form inline onSubmit={handleSubmit} className="d-flex mt-5">
            {/* <Row> */}
                {/* <Col> */}
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" value={searchQuery} onChange={handleChange} />
                {/* </Col> */}
                {/* <Col> */}
                    <Button type="submit" variant="primary">Search</Button>
                {/* </Col> */}
            {/* </Row> */}
        </Form>
    );
};

export default SearchBox;
