import Link from 'next/link'
import React from 'react'
import 'styles/homeStyle.css'

const FreeBoardButton = () => {
    return (
        <div className="container">
            <div className="grid">
                <Link href="#" className="button">
                    <img src="img/chat.png" alt="자유게시판" />
                    자유게시판
                </Link>
                <Link href="#" className="button">
                    <img src="img/book-club.png" alt="동아리게시판" />
                    동아리게시판
                </Link>
                <Link href="#" className="button">
                    <img src="img/stack-of-books.png" alt="강의평" />
                    강의평
                </Link>
            </div>
        </div>
    )
}
  
export default FreeBoardButton