import React, { Component } from 'react';
import styles from './styles.module.css';

//COMPONENTS
import Navigation from '../../general/navigation';
import Footer from '../../general/footer';


export class Terms extends Component {
    render () {
        return (
            <div>
                <Navigation history = {this.props.history}/>
                <div className={styles.bookContainer}>
                <div id={styles.aboutUs}>
                    <h2>Terms of Use</h2>
                    <p>
                    This Agreement was last revised on Dec 6, 2017.
                    Recent updates to this Agreement.
                    Welcome to Goodreads.com, the website and online service of Goodreads LLC (together with its affiliates, "Goodreads" "we," or "us"). This page explains the terms by which you may use our service. By accessing or using the Goodreads services, website and software provided through or in connection with the service ("Service"), you signify that you have read, understood, and agree to be bound by this Terms of Use Agreement, the Goodreads Privacy Policy, the Amazon.com Conditions of Use, and the other applicable rules, policies and terms posted on the Goodreads.com website or provided with the Service (collectively, this "Agreement"), whether or not you are a registered user of our Service.
                    We reserve the right to amend this Agreement at any time in our sole discretion by posting the revised Agreement on the Goodreads.com website. Your continued use of the Service after any such changes constitutes your acceptance of the revised Agreement. This Agreement applies to all visitors, users, and others who access the Service ("Users").
                    </p>
                    <h3>1. Use of our service</h3>
                    <p>Goodreads provides a place for you to discover, track, and talk about books with friends and our community.
                    You do not have to register in order to visit Goodreads. To access certain features of the Service, though, including creating "bookshelves" to organize what you've read, posting book reviews, and commenting on other members' reviews, you will need to register with Goodreads and create a "Member" account. Your account gives you access to the services and functionality that we may establish and maintain from time to time and in our sole discretion.
                    You may never use another Member’s account without permission. You are responsible for maintaining the confidentiality of your account and password and for restricting access to your account, and you agree to accept responsibility for all activities that occur under your account or password. You agree to notify Goodreads immediately of any breach of security or unauthorized use of your account.
                    You may change the settings on your My Account page to control your profile and how other members communicate with you. By providing Goodreads your email address you consent to our using the email address in accordance with our Privacy Policy.
                    Subject to your compliance with this Agreement and your payment of any applicable fees, we grant you a limited, non-exclusive, non-transferable, non-sublicensable license to access and make personal and non-commercial use of the Service. This license does not include any resale or commercial use of any part of the Service, or its contents; any collection and use of any book listings, descriptions, reviews or other material included in the Service; any derivative use of any part of the Service or its contents; any downloading, copying, or other use of account information for the benefit of any third party; or any use of data mining, robots, or similar data gathering and extraction tools. All rights not expressly granted to you in this Agreement are reserved and retained by us or our licensors, suppliers, publishers, rightsholders, or other content providers. No part of the Service may be reproduced, duplicated, copied, sold, resold, visited, or otherwise exploited for any commercial purpose without our express written consent. You may not frame or utilize framing techniques to enclose any trademark, logo, or other proprietary information (including images, text, page layout, or form) of Goodreads without our express written consent. You may not use any meta tags or any other "hidden text" utilizing our name or trademarks without our express written consent. You may not misuse the Service. You may use the Service only as permitted by law. The licenses granted by us terminate if you do not comply with this Agreement.
                    In order to protect our Members from unsolicited advertising or solicitation, Goodreads reserves the right to restrict the number of communications that a Member may send to other Members in any 24-hour period to a number that Goodreads deems appropriate in its sole discretion.
                    Goodreads may permanently or temporarily terminate, suspend, or otherwise refuse to permit your access to the Service without notice and liability for any reason, including if in Goodreads' sole determination you violate any provision of this Agreement, or for no reason. Upon termination for any reason or no reason, you continue to be bound by this Agreement.
                    The Service is subject to scheduled and unscheduled service interruptions. All aspects of the Service are subject to change or elimination at Goodreads‘s sole discretion. You agree that Goodreads will not be liable to you for any interruption of the Service, delay or failure to perform.
                    You are solely responsible for your interactions with other Goodreads Users. We reserve the right, but have no obligation, to monitor disputes between you and other Users. Goodreads shall have no liability for your interactions with other Users, or for any User’s action or inaction.</p>
                    <h3>User Content</h3>
                    <p>
                    Some areas of the Service may allow Users to upload, publish, display, link to or otherwise make available (hereinafter, "post") reviews, comments, questions, highlights, and other information including Users’ names, voices and likenesses ("User Content"). You are solely responsible for your User Content. You agree not to post User Content that is illegal, obscene, threatening, defamatory, invasive of privacy, infringing of intellectual property rights (including publicity rights), or otherwise injurious to third parties or objectionable, and does not consist of or contain software viruses, political campaigning, commercial solicitation, chain letters, mass mailings, or any form of "spam" or unsolicited commercial electronic messages. You may not use a false e-mail address, impersonate any person or entity, or otherwise mislead as to the origin of content. You hereby represent that you are the owner of all the copyright rights with respect to, or that you have the legal right to post, your User Content, and that you have the power to grant the license granted below. Goodreads reserves the right to monitor, reject and/or remove any User Content at any time. For example, Goodreads may, but is not obligated to, reject and/or remove any User Content that Goodreads believes, in its sole discretion, violates these provisions.
                    Goodreads takes no responsibility and assumes no liability for any User Content that you or any other Users or third parties post or send over the Service. You understand and agree that any loss or damage of any kind that occurs as a result of the use of any User Content that you post is solely your responsibility. Goodreads is not responsible for any public display or misuse of your User Content. You understand and acknowledge that you may be exposed to User Content that is inaccurate, offensive, indecent, or objectionable, and you agree that Goodreads shall not be liable for any damages you allege to incur as a result of such User Content. Goodreads may provide tools for you to remove some User Content, but does not guarantee that all or any User Content will be removable.
                    </p>
                    <h3>License grant</h3>
                    <p>
                    By posting any User Content on the Service, you expressly grant to Goodreads a nonexclusive, royalty-free, perpetual, irrevocable, and fully sublicensable right to use, reproduce, modify, adapt, publish, perform, translate, create derivative works from, distribute, and display such content throughout the world in any media. You represent and warrant that you own or otherwise control all of the rights to the content that you post; that the content is accurate; that use of the content you supply does not violate this policy and will not cause injury to any person or entity; and that you will indemnify Goodreads for all claims resulting from content you supply. If you submit User Content via the “My Writing” or “Ebook” features, our Terms of Use for Writers apply to that User Content.
                    </p>
                    <h3>Our proprietary rights</h3>
                    <p>
                    Except for your User Content, the Service and all materials therein or transferred thereby, including, without limitation, software, images, text, graphics, illustrations, logos, patents, trademarks, service marks, copyrights, photographs, audio, videos, music, and User Content (the "Goodreads Content"), and all intellectual property Rights related thereto, are the exclusive property of Goodreads and its licensors. Except as explicitly provided herein, nothing in this Agreement shall be deemed to create a license in or under any such intellectual property Rights, and you agree not to sell, license, rent, modify, distribute, copy, reproduce, transmit, publicly display, publicly perform, publish, adapt, edit or create derivative works from any materials or content accessible on the Service. Use of the Goodreads Content or materials on the Service for any purpose not expressly permitted by this Agreement is strictly prohibited.
                    You may choose to or we may invite you to submit comments or ideas about the Service, including without limitation about how to improve the Service or our products ("Ideas"). By submitting any Idea, you agree that your disclosure is gratuitous, unsolicited and without restriction and will not place Goodreads under any fiduciary or other obligation, and that we are free to use the Idea without any additional compensation to you, and/or to disclose the Idea on a non-confidential basis or otherwise to anyone. You further acknowledge that, by acceptance of your submission, Goodreads does not waive any rights to use similar or related ideas previously known to Goodreads, or developed by its employees, or obtained from sources other than you.
                    </p>
                    <h3>Eligibility</h3>
                    <p>
                    This Service is intended solely for Users who are thirteen (13) years of age or older, and any registration, use or access to the Service by anyone under 13 is unauthorized, unlicensed, and in violation of this Agreement. If you are under 18 years of age you may use the Service only if you either are an emancipated minor or possess legal parental or guardian consent, and are fully able and competent to enter into the terms, conditions, obligations, affirmations, representations, and warranties set forth in this Agreement, and to abide by and comply with this Agreement.
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

export default Terms