import utilStyles from '../../styles/utils.module.css';
import Head from 'next/head'
import Header  from '../../components/header/header';

export default function Blog() {
    return (
        <>
            <Head>
                <title>My experiences about Web development and tips.</title>
                <meta name="description" content="Providing helpful web development content" />
                <meta name="viewport" content="width=device-width,minimum-scale=1,initial-scale=1,user-scalable=no"></meta>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className={utilStyles.topSection}>
                <div className="container">
                    <Header/>
                </div>
            </div>
        </>
    )
}