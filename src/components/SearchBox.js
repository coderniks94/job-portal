import React, { useEffect, useState } from "react";
import {
    Form,
    FormControl,
    Button,
    Row,
    Col,
    InputGroup,
} from "react-bootstrap";

const SearchBox = (props) => {
    const {handleSearchTermSet, searchTerm, handleSearchSubmit} = props;

    const handleSubmit = (event) => {
        event.preventDefault();
        handleSearchSubmit();
    };

    return (
        <Form inline="true" onSubmit={handleSubmit} className="d-flex mt-5">
            <InputGroup className="mb-3" size="lg">
                <Form.Control
                    placeholder="Search for position"
                    aria-label="Search for position"
                    aria-describedby="search-btn"
                    onChange={(e)=>{handleSearchTermSet(e.target.value)}}
                    value={searchTerm}
                />
                <Button
                    variant="outline-secondary"
                    id="search-btn"
                    type="submit"
                    onClick={handleSubmit}
                >
                    Search
                </Button>
            </InputGroup>
        </Form>
    );
};

export default SearchBox;
