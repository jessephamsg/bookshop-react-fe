//DEPENDENCIES
import React, { Component } from 'react';
import styles from './styles.module.css';
import layout from '../../general/mainContainer/simplePageContainer.module.css';

//COMPONENTS
import Icons from '../../general/navigation/Icons';
import Footer from '../../general/footer';


export class About extends Component {
    
    render () {
        return (
            <div>
                <Icons />
                <div className={layout.pageContainer}>
                <div id={styles.aboutUs}>
                    <h3>About us</h3>
                    <p>Goodreads is the world’s largest site for readers and book recommendations. Our mission is to help people find and share books they love. Goodreads launched in January 2007.</p>
                    <h3>A few things you can do</h3>
                    <p>
                    See what books your friends are reading.
                    Track the books you're reading, have read, and want to read.
                    Check out your personalized book recommendations. Our recommendation engine analyzes 20 billion data points to give suggestions tailored to your literary tastes.
                    Find out if a book is a good fit for you from our community’s reviews.
                    </p>
                    <h3>A message from our co-founder</h3>
                    <p>
                    When I was in second grade, I discovered the Hardy Boys series. Ever since, I've loved to read — both for fun and to improve my mind. And I'm always looking for the next great book.
                    One afternoon while I was scanning a friend's bookshelf for ideas, it struck me: when I want to know what books to read, I'd rather turn to a friend than any random person or bestseller list.
                    So I decided to build a website – a place where I could see my friends' bookshelves and learn about what they thought of all their books. Elizabeth, my co-founder (and now my wife) wrote the site copy and I wrote the code. We started in my living room, motivated by the belief that there was a better way to discover and discuss good books, and that we could build it.
                    Goodreads is that site. It is a place where you can see what your friends are reading and vice versa. You can create "bookshelves" to organize what you've read (or want to read). You can comment on each other's reviews. You can find your next favorite book. And on this journey with your friends you can explore new territory, gather information, and expand your mind. 
                    Knowledge is power, and power is best shared among readers. 
                    </p>
                </div>
                <div id={styles.aboutUsStats}>
                    <div className={styles.statsDiv}>
                        <h3>90 million</h3>
                        <h5>MEMBERS</h5>
                    </div>
                    <div className={styles.statsDiv}>
                        <h3>2.6 million</h3>
                        <h5>BOOKS ADDED</h5>
                    </div>
                    <div className={styles.statsDiv}>
                        <h3>90 million</h3>
                        <h5>REVIEWS</h5>
                    </div>
                </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default About