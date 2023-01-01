import React, { useState } from "react";
import {
    Form,
    FormControl,
    Button,
    Row,
    Col,
    InputGroup,
} from "react-bootstrap";

const SearchBox = () => {
    const [searchQuery, setSearchQuery] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        // Do something with the search query here, such as making an API call
        console.log(`Searching for: ${searchQuery}`);
    };

    const handleSearchButtonClicked = (event) => {
        setSearchQuery(event.target.value);
    };

    return (
        <Form inline="true" onSubmit={handleSubmit} className="d-flex mt-5">
            {/* <Row> */}
            {/* <Col> */}
            {/* <FormControl
                type="text"
                placeholder="Search for position or company"
                className="mr-sm-2"
                value={searchQuery}
                onChange={handleChange}
            /> */}
            <InputGroup className="mb-3" size="lg">
                <Form.Control
                    placeholder="Search for position or company"
                    aria-label="Search for position or company"
                    aria-describedby="search-btn"
                />
                <Button
                    variant="outline-secondary"
                    id="search-btn"
                    type="submit"
                    onClick={handleSearchButtonClicked}
                >
                    Search
                </Button>
            </InputGroup>
        </Form>
    );
};

export default SearchBox;
