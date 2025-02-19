import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function EmpDelete(props) {
    const location = useLocation();
    const empId = location.state.empId;
    const navi = useNavigate();

    useEffect(() => {
        axios({
            url: `http://localhost:7777/shinhan/emp/delete/${empId}`,
            method: "DELETE"
        }).then((response) => {
            alert(response.data);
            navi("/emp/list");
        }).catch((err) => {
            console.log(err);
        });
    }, [empId]);

    return (
        <div>
            <h1>{empId}번 직원 삭제</h1>
        </div>
    );
}

export default EmpDelete;