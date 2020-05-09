import React from 'react';
import {Link} from 'react-router-dom'

class GNB extends React.Component{
    render(){
        return(
            <nav>
                네비바
                <Link to="/login">로그인</Link>
                <Link to="/register">사용자 등록</Link>
            </nav>
        );
    }
}

export default GNB;