import React from 'react'
import './PaginationStyle.css'
export default function Pagination() {
    return (
        <ul className='pagination'>
            <li><a href="">1</a></li>
            <li><a className='is_active' href="">2</a></li>
            <li><a href="">3</a></li>
            <li><a href="">4</a></li>
            <li><a href="">&gt;&gt;</a></li>

        </ul>
    )
}
