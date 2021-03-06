import Head from 'next/head'
import Header from '../components/Header'
import Nav from "../components/Nav";
import Results from "../components/Results";
import requests from "../utils/requests";


export default function Home({results}) {
    return (
        <div>
            <Head>
                <title>Hulu 2.0</title>
                <meta name="description" content="Generated by create next app"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            {/* Header */}
            <Header/>

            {/* Nav */}
            <Nav/>

            {/* Result */}
            <Results results={results}/>
        </div>
    )
}


export async function getServerSideProps(context) {
    const genre = context.query.genre;
    const url = `https://rest.apizza.net/mock/57598522613cb62287bf4700fe3d57a4${requests[genre]?.url || requests.fetchTrending.url}`

    const  request = await fetch(url).then(res => res.json())

    return {
        props: {
            results: request.results
        }
    }
}
