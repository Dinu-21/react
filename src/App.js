import React, { useCallback, useEffect, useMemo, useState } from 'react';
import styled from '@emotion/styled';
import { MdClear } from 'react-icons/md';
import { DATASET } from './names';
import { useLocation, useNavigate } from 'react-router-dom';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const SearchBar = styled.div`
    margin-top: 30vh;
    display: flex;
    align-items: center;
    width: 500px;
`;

const Input = styled.input`
    background-color: rgb(240, 240, 240);
    border: none;
    height: 40px;
    width: 400px;
    border-radius: 10px;
    outline: none;
    padding: 0px 10px;
    font-size: 1.4rem;
    flex-grow: 1;
`;

const CleanUp = styled(MdClear)`
    margin-left: 2.5px;
`;

const List = styled.div`
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Item = styled.p`
    font-size: 1.3rem;
    background-color: rgb(240, 240, 240);
    margin: 5px 0px;
    width: 480px;
    padding: 0px 10px;
    border-radius: 10px;
    text-align: center;
`;

function useQueryParam() {
    const { search } = useLocation();

    const navigate = useNavigate();

    const updateQuery = useCallback(v => navigate(`/?query=${v}`, { replace: true }), []);

    return [React.useMemo(() => new URLSearchParams(search).get('query'), [search]), updateQuery];
}

function App() {
    const [query, updateQuery] = useQueryParam();

    const [input, setInput] = useState(query || '');

    const cleanUp = useCallback(() => setInput(''), []);

    const names = useMemo(() => {
        const middle = [];
        const ending = [];
        const starting = [];

        for (const name of DATASET) {
            if (name.match(new RegExp(`^${input}`, 'i'))) {
                starting.push(name);
                continue;
            }
            if (name.match(new RegExp(`${input}$`, 'i'))) {
                ending.push(name);
                continue;
            }

            if (name.match(new RegExp(`${input}`, 'i'))) {
                middle.push(name);
                continue;
            }
        }

        return [...starting, ...middle, ...ending];
    }, [input]);

    useEffect(() => {
        updateQuery(input);
    }, [input]);

    return (
        <Container>
            <SearchBar>
                <Input value={input} onChange={e => setInput(e.target.value)} />
                {input && <CleanUp size={30} onClick={cleanUp} />}
            </SearchBar>

            <List>
                {names.map((name, k) => (
                    <Item children={name} key={k} />
                ))}
            </List>
        </Container>
    );
}

export default App;
